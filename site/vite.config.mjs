import {ViteMinifyPlugin} from 'vite-plugin-minify';
import {defineConfig} from 'vite';
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
              : id.includes('package')
                ? 'tinywidgets'
                : null,
      },
    },
  },

  plugins: [
    prismjs({languages: ['css', 'typescript', 'tsx']}),
    react({jsxRuntime: 'classic'}),
    vanillaExtractPlugin(),
    license({}),
    ViteMinifyPlugin({minifyJS: {toplevel: true}}),
  ],
});
