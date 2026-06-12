// [PROTOCOL]: Change this header when example build routing changes, then check CLAUDE.md.
// INPUT: Vite, React plugin, local package source, and shared Less tokens.
// OUTPUT: Runnable local Vite app that resolves package-like imports to repository source.
// POS: Example-only tool config; package build config remains at the repository root.
import react from '@vitejs/plugin-react';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { defineConfig } from 'vite';

const __dirname = dirname(fileURLToPath(import.meta.url));
const repoRoot = resolve(__dirname, '../..');
const sharedVariables = resolve(repoRoot, 'src/styles/variables.less').replace(/\\/g, '/');

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [
      {
        find: 'crystal-menu-ui/style',
        replacement: resolve(repoRoot, 'src/styles/index.less'),
      },
      {
        find: 'crystal-menu-ui',
        replacement: resolve(repoRoot, 'src/index.ts'),
      },
    ],
    dedupe: ['react', 'react-dom'],
  },
  css: {
    modules: {
      generateScopedName: 'crystal-[local]-[hash:base64:5]',
      localsConvention: 'camelCase',
    },
    preprocessorOptions: {
      less: {
        javascriptEnabled: true,
        additionalData: `@import "${sharedVariables}";`,
      },
    },
  },
  server: {
    host: '127.0.0.1',
    fs: {
      allow: [repoRoot],
    },
  },
  preview: {
    host: '127.0.0.1',
  },
});
