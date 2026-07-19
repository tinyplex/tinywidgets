import {vanillaExtractPlugin} from '@vanilla-extract/vite-plugin';
import {defineConfig} from 'vite';

export default defineConfig({
  optimizeDeps: {exclude: ['tinywidgets']},
  plugins: [vanillaExtractPlugin()],
});
