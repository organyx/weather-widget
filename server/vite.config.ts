/// <reference types="vitest" />

import { resolve } from 'node:path';
import { defineConfig } from 'vite';

export default defineConfig({
  test: {
    globals: true,
    environment: 'node',
    deps: {
      interopDefault: true,
      moduleDirectories: ['node_modules', resolve(__dirname, 'src')]
    }
  }
});
