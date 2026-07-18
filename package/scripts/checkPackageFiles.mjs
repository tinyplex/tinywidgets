import {readFile} from 'node:fs/promises';

for (const file of ['LICENSE', 'README.md']) {
  const [repositoryFile, packageFile] = await Promise.all([
    readFile(new URL(`../../${file}`, import.meta.url)),
    readFile(new URL(`../${file}`, import.meta.url)),
  ]);

  if (!repositoryFile.equals(packageFile)) {
    throw new Error(
      `${file} differs between the repository root and package directory`,
    );
  }
}
