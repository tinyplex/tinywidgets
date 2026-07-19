import assert from 'node:assert/strict';
import {execFile, spawn} from 'node:child_process';
import {cp, mkdtemp, readFile, readdir, rm, writeFile} from 'node:fs/promises';
import {tmpdir} from 'node:os';
import {join} from 'node:path';
import {promisify} from 'node:util';

const execFileAsync = promisify(execFile);
const npm = process.platform == 'win32' ? 'npm.cmd' : 'npm';
const packageRoot = new URL('..', import.meta.url);
const packageJson = JSON.parse(
  await readFile(new URL('package.json', packageRoot), 'utf8'),
);
const temporaryRoot = await mkdtemp(join(tmpdir(), 'tinywidgets-package-'));

const run = (command, args, cwd) =>
  new Promise((resolve, reject) => {
    const child = spawn(command, args, {cwd, stdio: 'inherit'});
    child.on('error', reject);
    child.on('exit', (code, signal) => {
      if (code == 0) {
        resolve();
      } else {
        const result = signal == null ? `code ${code}` : `signal ${signal}`;
        reject(new Error(`${command} exited with ${result}`));
      }
    });
  });

const assertBuiltCss = async (fixtureRoot) => {
  const outputRoot = join(fixtureRoot, 'dist');
  const files = await readdir(outputRoot, {recursive: true});
  const cssFiles = files.filter((file) => file.endsWith('.css'));
  assert.ok(cssFiles.length > 0, `No CSS emitted for ${fixtureRoot}`);

  const css = (
    await Promise.all(
      cssFiles.map((file) => readFile(join(outputRoot, file), 'utf8')),
    )
  ).join('\n');
  assert.match(css, /--tinyWidgets-accentHue/);
  assert.match(css, /box-sizing:\s*border-box/);
  assert.match(css, /cursor:\s*pointer/);
};

const assertNoVanillaExtractRuntime = async (fixtureRoot) => {
  const outputRoot = join(fixtureRoot, 'dist');
  const files = await readdir(outputRoot, {recursive: true});
  const jsFiles = files.filter((file) => file.endsWith('.js'));
  const js = (
    await Promise.all(
      jsFiles.map((file) => readFile(join(outputRoot, file), 'utf8')),
    )
  ).join('\n');
  assert.doesNotMatch(js, /@vanilla-extract/);
};

try {
  const {stdout: packJson} = await execFileAsync(
    npm,
    ['pack', '--ignore-scripts', '--json', '--pack-destination', temporaryRoot],
    {cwd: packageRoot},
  );
  const [pack] = JSON.parse(packJson);
  const packedFiles = new Set(pack.files.map(({path}) => path));

  for (const file of [
    'dist/prebuilt/css.js',
    'dist/prebuilt/index.css.d.ts',
    'dist/prebuilt/index.d.ts',
    'dist/prebuilt/index.js',
    'dist/prebuilt/styles.css',
    'dist/prebuilt/styles.css.d.ts',
    'src/index.css.ts',
    'src/index.ts',
  ]) {
    assert.ok(packedFiles.has(file), `Packed package is missing ${file}`);
  }

  for (const {path} of pack.files) {
    assert.ok(
      ['LICENSE', 'README.md', 'package.json'].includes(path) ||
        path.startsWith('dist/') ||
        path.startsWith('src/'),
      `Unexpected packed file: ${path}`,
    );
  }

  const tarball = join(temporaryRoot, pack.filename);
  const consumerRoot = join(temporaryRoot, 'consumer');
  await cp(new URL('../test/fixtures/package', import.meta.url), consumerRoot, {
    recursive: true,
  });
  await writeFile(
    join(consumerRoot, 'package.json'),
    `${JSON.stringify(
      {
        name: 'tinywidgets-package-consumer',
        private: true,
        type: 'module',
        dependencies: {
          react: packageJson.devDependencies.react,
          'react-dom': packageJson.devDependencies['react-dom'],
          tinywidgets: `file:${tarball}`,
        },
        devDependencies: {
          '@types/react': packageJson.devDependencies['@types/react'],
          '@types/react-dom': packageJson.devDependencies['@types/react-dom'],
          '@vanilla-extract/vite-plugin':
            packageJson.devDependencies['@vanilla-extract/vite-plugin'],
          typescript: packageJson.devDependencies.typescript,
          vite: packageJson.devDependencies.vite,
        },
      },
      null,
      2,
    )}\n`,
  );

  await run(
    npm,
    [
      'install',
      '--ignore-scripts',
      '--no-audit',
      '--no-fund',
      '--no-package-lock',
      '--prefer-offline',
    ],
    consumerRoot,
  );

  const bin = (name) =>
    join(
      consumerRoot,
      'node_modules',
      '.bin',
      process.platform == 'win32' ? `${name}.cmd` : name,
    );

  for (const mode of ['prebuilt', 'source']) {
    const fixtureRoot = join(consumerRoot, mode);
    await run(bin('tsc'), ['--project', 'tsconfig.json'], fixtureRoot);
    await run(bin('vite'), ['build'], fixtureRoot);
    await assertBuiltCss(fixtureRoot);
  }
  await assertNoVanillaExtractRuntime(join(consumerRoot, 'prebuilt'));

  await run(process.execPath, ['server.mjs'], join(consumerRoot, 'prebuilt'));
  process.stdout.write(
    `Verified ${pack.id} in source and prebuilt consumers.\n`,
  );
} finally {
  await rm(temporaryRoot, {force: true, recursive: true});
}
