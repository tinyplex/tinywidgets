import {vanillaExtractPlugin} from '@vanilla-extract/vite-plugin';
import {defineConfig} from 'vitest/config';

export default defineConfig({
  plugins: [vanillaExtractPlugin()],
  test: {
    environment: 'jsdom',
    restoreMocks: true,
    setupFiles: ['./test/setup.ts'],
    unstubGlobals: true,
  },
});
