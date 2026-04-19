import {vanillaExtractPlugin} from '@vanilla-extract/vite-plugin';
import react from '@vitejs/plugin-react';
import {join} from 'path';
import license from 'rollup-plugin-license';
import {defineConfig} from 'vite';
import {ViteMinifyPlugin} from 'vite-plugin-minify';

export default defineConfig({
  optimizeDeps: {exclude: ['tinywidgets']},
  resolve: {dedupe: ['react', 'react-dom']},
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
    react(),
    vanillaExtractPlugin(),
    license({
      thirdParty: {output: join(__dirname, '../docs', 'dependencies.txt')},
    }),
    ViteMinifyPlugin({minifyJS: {toplevel: true}}),
  ],
});
