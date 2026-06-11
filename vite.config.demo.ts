// [PROTOCOL]: Change this header when demo build behavior changes, then check CLAUDE.md.
// INPUT: Vite demo entry and shared Less token setup.
// OUTPUT: Static demo build in demo-dist.
// POS: Demo build config only; package build stays in vite.config.ts.
import react from '@vitejs/plugin-react';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { defineConfig } from 'vite';

const __dirname = dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  plugins: [react()],
  root: '.',
  base: './',
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
    },
  },
  css: {
    modules: {
      generateScopedName: 'crystal-[local]-[hash:base64:5]',
      localsConvention: 'camelCase',
    },
    preprocessorOptions: {
      less: {
        javascriptEnabled: true,
        additionalData: `@import "${resolve(__dirname, 'src/styles/variables.less')}";`,
      },
    },
  },
  build: {
    outDir: 'demo-dist',
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        components: resolve(__dirname, 'components.html'),
      },
    },
  },
});

