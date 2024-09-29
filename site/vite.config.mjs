import {defineConfig} from 'vite';
import {ViteMinifyPlugin} from 'vite-plugin-minify';
import prismjs from 'vite-plugin-prismjs';
import {vanillaExtractPlugin} from '@vanilla-extract/vite-plugin';
import react from '@vitejs/plugin-react';

export default defineConfig({
  optimizeDeps: {exclude: ['tinywidgets'], include: ['tinywidgets > prismjs']},
  build: {
    outDir: '../docs',
    emptyOutDir: true,
    rollupOptions: {
      input: ['index.html'],
      output: {
        manualChunks: {
          'react-dom': ['react-dom'],
          tinywidgets: ['tinywidgets'],
        },
      },
    },
  },

  plugins: [
    prismjs({languages: 'all'}),
    react({jsxRuntime: 'classic'}),
    vanillaExtractPlugin(),
    ViteMinifyPlugin({minifyJS: {toplevel: true}}),
  ],
});
