// [PROTOCOL]: Change this header when package smoke coverage changes, then check CLAUDE.md.
// INPUT: Local npm package metadata, build output, and npm CLI tarball packing.
// OUTPUT: Failing smoke test if ESM, CJS, or CSS export resolution breaks for consumers.
// POS: Release QA helper; validates the packed artifact instead of the source tree.
import { exec as execCallback } from 'node:child_process';
import { mkdtemp, rm, unlink, writeFile } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import { join, resolve } from 'node:path';
import { promisify } from 'node:util';

const exec = promisify(execCallback);

const run = async (command, options = {}) => {
  const { stdout, stderr } = await exec(command, {
    maxBuffer: 1024 * 1024 * 8,
    ...options,
  });
  return { stdout, stderr };
};

const packed = JSON.parse((await run('npm pack --json')).stdout)[0];
const tarballPath = resolve(packed.filename);
const workspace = await mkdtemp(join(tmpdir(), 'crystal-menu-ui-smoke-'));

try {
  await writeFile(
    join(workspace, 'package.json'),
    `${JSON.stringify({ type: 'module', private: true }, null, 2)}\n`,
    'utf8',
  );

  await run(`npm install --silent "${tarballPath}" react react-dom`, { cwd: workspace });

  await writeFile(
    join(workspace, 'smoke.mjs'),
    `
      import { createRequire } from 'node:module';
      import * as esm from 'crystal-menu-ui';

      const require = createRequire(import.meta.url);
      const cjs = require('crystal-menu-ui');
      const stylePath = require.resolve('crystal-menu-ui/style');
      const distStylePath = require.resolve('crystal-menu-ui/dist/index.css');

      if (typeof esm.CommandButton !== 'function') throw new Error('ESM CommandButton export failed');
      if (typeof cjs.CommandButton !== 'function') throw new Error('CJS CommandButton export failed');
      if (!esm.crystalTokens?.color?.border) throw new Error('Token export failed');
      if (!stylePath.endsWith('index.css')) throw new Error('Style export resolution failed');
      if (stylePath !== distStylePath) throw new Error('Style aliases resolve to different files');
    `,
    'utf8',
  );

  await run('node smoke.mjs', { cwd: workspace });
  console.log(`Package smoke ok: ${packed.name}@${packed.version} (${packed.files.length} files)`);
} finally {
  await rm(workspace, { recursive: true, force: true });
  await unlink(tarballPath).catch(() => undefined);
}
