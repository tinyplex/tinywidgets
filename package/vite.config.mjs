import {vanillaExtractPlugin} from '@vanilla-extract/vite-plugin';
import {defineConfig} from 'vite';

const external = (id) =>
  /^(lucide-react|react|react-dom|react-is|tinybase)(\/|$)/.test(id);

const cssDeclarationPlugin = {
  name: 'tinywidgets-css-declaration',
  generateBundle() {
    this.emitFile({
      type: 'asset',
      fileName: 'styles.css.d.ts',
      source: 'export {};\n',
    });
  },
};

export default defineConfig({
  plugins: [vanillaExtractPlugin(), cssDeclarationPlugin],
  build: {
    emptyOutDir: true,
    lib: {
      cssFileName: 'styles',
      entry: {
        css: 'src/index.css.ts',
        index: 'src/index.ts',
      },
      formats: ['es'],
    },
    outDir: 'dist/prebuilt',
    rollupOptions: {external},
  },
});
