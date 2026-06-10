// [PROTOCOL]: Change this header when README art generation changes, then check CLAUDE.md.
// INPUT: Local Vite README art entry rendered from public React components.
// OUTPUT: docs/img/banner.png, feature-onepager.png, and feature-onepager-zh.png.
// POS: Asset generator only; does not use official or remote source assets.
import { mkdir } from 'node:fs/promises';
import { resolve } from 'node:path';
import { chromium } from 'playwright';
import { createServer } from 'vite';

const outDir = resolve('docs/img');

const boards = [
  { board: 'banner', file: 'banner.png', width: 1600, height: 720 },
  { board: 'features-en', file: 'feature-onepager.png', width: 1200, height: 840 },
  { board: 'features-zh', file: 'feature-onepager-zh.png', width: 1200, height: 840 },
];

const getDevBaseUrl = (server) => {
  const localUrl = server.resolvedUrls?.local?.[0];
  if (localUrl) return localUrl;

  const address = server.httpServer?.address();
  if (!address || typeof address === 'string') {
    throw new Error('Unable to resolve Vite dev server address.');
  }

  return `http://127.0.0.1:${address.port}/`;
};

const renderBoard = async (browser, baseUrl, target) => {
  const page = await browser.newPage({
    viewport: { width: target.width, height: target.height },
    deviceScaleFactor: 1,
  });

  const url = new URL(`readme-art.html?board=${target.board}`, baseUrl).href;
  await page.goto(url, { waitUntil: 'networkidle' });
  await page.evaluate(() => document.fonts.ready);
  await page.locator('[data-readme-artboard]').screenshot({
    path: resolve(outDir, target.file),
    animations: 'disabled',
  });
  await page.close();
};

const main = async () => {
  await mkdir(outDir, { recursive: true });

  const server = await createServer({
    configFile: resolve('vite.config.demo.ts'),
    logLevel: 'error',
    server: {
      host: '127.0.0.1',
      port: 0,
    },
  });

  await server.listen();
  const baseUrl = getDevBaseUrl(server);
  const browser = await chromium.launch();

  try {
    for (const target of boards) {
      await renderBoard(browser, baseUrl, target);
      console.log(`generated docs/img/${target.file} from ${target.board}`);
    }
  } finally {
    await browser.close();
    await server.close();
  }
};

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
