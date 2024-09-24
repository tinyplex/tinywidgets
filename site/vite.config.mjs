import {defineConfig} from 'vite';
import {ViteMinifyPlugin} from 'vite-plugin-minify';
import {vanillaExtractPlugin} from '@vanilla-extract/vite-plugin';
import react from '@vitejs/plugin-react';

export default defineConfig({
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
    react({jsxRuntime: 'classic'}),
    vanillaExtractPlugin(),
    ViteMinifyPlugin({minifyJS: {toplevel: true}}),
  ],
});
