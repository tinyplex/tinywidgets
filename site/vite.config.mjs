import {ViteMinifyPlugin} from 'vite-plugin-minify';
import {defineConfig} from 'vite';
import {join} from 'path';
import license from 'rollup-plugin-license';
import prismjs from 'vite-plugin-prismjs';
import react from '@vitejs/plugin-react';
import {vanillaExtractPlugin} from '@vanilla-extract/vite-plugin';

export default defineConfig({
  optimizeDeps: {exclude: ['tinywidgets']},
  build: {
    outDir: '../docs',
    emptyOutDir: true,
    rollupOptions: {
      input: ['index.html'],
      output: {
        manualChunks: (id) =>
          id.includes('node_modules/react')
            ? 'react'
            : id.includes('node_modules/tinybase')
              ? 'tinybase'
              : id.includes('node_modules/prismjs')
                ? 'prismjs'
                : id.includes('package')
                  ? 'tinywidgets'
                  : null,
      },
    },
  },
  esbuild: {legalComments: 'none'},

  plugins: [
    prismjs({languages: ['css', 'typescript', 'tsx', 'sh']}),
    react(),
    vanillaExtractPlugin(),
    license({
      thirdParty: {output: join(__dirname, '../docs', 'dependencies.txt')},
    }),
    ViteMinifyPlugin({minifyJS: {toplevel: true}}),
  ],
});
