/// <reference types="vitest"/>
/// <reference types="vite/client"/>

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    cssMinify: 'esbuild',
    cssCodeSplit: true,
    minify: true,
    write: true
  },
  resolve: {
    alias: {
      src: '/src'
    }
  },
  test: {
    globals: true,
    environment: 'jsdom',
    include: ['__tests__/**/*_spec.jsx'],
    setupFiles: '__tests__/setup.js'
  }
});
