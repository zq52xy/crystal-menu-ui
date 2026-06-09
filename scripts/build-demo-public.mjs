// [PROTOCOL]: Change this header when public demo build behavior changes, then check CLAUDE.md.
// INPUT: src/demo/local-assets directory (gitignored, may contain a portrait
//   image and an Optima font binary used for local preview only) and the
//   Vite demo build config.
// OUTPUT: A demo-dist/ tree that NEVER contains anything from local-assets,
//   so `npm run deploy` (gh-pages → GitHub Pages) cannot accidentally
//   redistribute third-party assets.
// POS: Build orchestration only; visual atoms stay in their components.
//
// Why this exists:
//   `import.meta.glob` is statically resolved by Vite at build time. Even
//   when wrapped in `import.meta.env.DEV ? glob() : {}`, Vite walks both
//   branches during the prod build and copies any matching file into the
//   output. The only safe way to keep local-assets out of demo-dist is to
//   make the directory invisible to Vite while the build runs.
import { existsSync, renameSync } from 'node:fs';
import { execFileSync } from 'node:child_process';
import { resolve } from 'node:path';

const ROOT = resolve(process.cwd());
const LOCAL_ASSETS = resolve(ROOT, 'src/demo/local-assets');
const STASH = resolve(ROOT, 'src/demo/.local-assets-stash');

const hadLocalAssets = existsSync(LOCAL_ASSETS);

if (hadLocalAssets) {
  if (existsSync(STASH)) {
    throw new Error(
      `Stash path already exists: ${STASH}. Refuse to overwrite. Remove it manually if you know it is safe.`,
    );
  }
  renameSync(LOCAL_ASSETS, STASH);
  console.log('[build-demo-public] hid local-assets/ during build');
}

let buildError;
try {
  // Resolve Vite's CLI entry through Node directly so we can avoid
  // shell-quoting and the Node 22+ deprecation around `shell: true`
  // with array args (DEP0190).
  const viteBin = resolve(ROOT, 'node_modules/vite/bin/vite.js');
  execFileSync(process.execPath, [viteBin, 'build', '--config', 'vite.config.demo.ts'], {
    stdio: 'inherit',
  });
} catch (error) {
  buildError = error;
}

if (hadLocalAssets) {
  renameSync(STASH, LOCAL_ASSETS);
  console.log('[build-demo-public] restored local-assets/');
}

if (buildError) {
  throw buildError;
}
