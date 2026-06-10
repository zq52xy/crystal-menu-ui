// [PROTOCOL]: Change this header when motion GIF generation changes, then check CLAUDE.md.
// INPUT: Local Vite motion showcase entry rendered from public React components.
// OUTPUT: docs/img/motion-showcase.gif and eval/screenshots/motion-showcase.gif.
// POS: Asset generator only; does not use official or remote source assets.
import { mkdir, rm, writeFile } from 'node:fs/promises';
import { resolve } from 'node:path';
import { chromium } from 'playwright';
import { createServer } from 'vite';
import { PNG } from 'pngjs';
import gifenc from 'gifenc';
const { GIFEncoder, quantize, applyPalette } = gifenc;

const outPath = resolve('docs/img/motion-showcase.gif');
const evidencePath = resolve('eval/screenshots/motion-showcase.gif');
const frameDir = resolve('.tmp/motion-showcase-frames');
const frameCount = 34;
const frameDelayMs = 90;
const width = 960;
const height = 660;

const getDevBaseUrl = (server) => {
  const localUrl = server.resolvedUrls?.local?.[0];
  if (localUrl) return localUrl;

  const address = server.httpServer?.address();
  if (!address || typeof address === 'string') {
    throw new Error('Unable to resolve Vite dev server address.');
  }

  return `http://127.0.0.1:${address.port}/`;
};

const captureFrames = async (browser, baseUrl) => {
  await rm(frameDir, { recursive: true, force: true });
  await mkdir(frameDir, { recursive: true });

  const page = await browser.newPage({ viewport: { width, height }, deviceScaleFactor: 1 });
  await page.goto(new URL('motion-showcase.html', baseUrl).href, { waitUntil: 'networkidle' });
  await page.evaluate(() => document.fonts.ready);
  await page.waitForTimeout(220);

  const board = page.locator('[data-motion-showcase]').first();
  const frames = [];

  for (let index = 0; index < frameCount; index += 1) {
    const buffer = await board.screenshot({ animations: 'allow' });
    const framePath = resolve(frameDir, `${String(index).padStart(3, '0')}.png`);
    await writeFile(framePath, buffer);
    frames.push(PNG.sync.read(buffer));
    await page.waitForTimeout(frameDelayMs);
  }

  await page.close();
  return frames;
};

const encodeGif = async (frames) => {
  const gif = GIFEncoder();

  for (const frame of frames) {
    const palette = quantize(frame.data, 128, { format: 'rgb565' });
    const index = applyPalette(frame.data, palette, 'rgb565');
    gif.writeFrame(index, frame.width, frame.height, {
      palette,
      delay: frameDelayMs,
      repeat: 0,
    });
  }

  gif.finish();
  const bytes = Buffer.from(gif.bytes());
  await mkdir(resolve('docs/img'), { recursive: true });
  await mkdir(resolve('eval/screenshots'), { recursive: true });
  await writeFile(outPath, bytes);
  await writeFile(evidencePath, bytes);
  return bytes.length;
};

const main = async () => {
  const server = await createServer({
    configFile: resolve('vite.config.demo.ts'),
    logLevel: 'error',
    server: { host: '127.0.0.1', port: 0 },
  });

  await server.listen();
  const baseUrl = getDevBaseUrl(server);
  const browser = await chromium.launch();

  try {
    const frames = await captureFrames(browser, baseUrl);
    const size = await encodeGif(frames);
    console.log(`generated docs/img/motion-showcase.gif (${Math.round(size / 1024)} KiB)`);
    console.log('generated eval/screenshots/motion-showcase.gif');
  } finally {
    await browser.close();
    await server.close();
    await rm(frameDir, { recursive: true, force: true });
  }
};

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
