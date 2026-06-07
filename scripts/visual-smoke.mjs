// [PROTOCOL]: Change this header when visual smoke behavior changes, then check CLAUDE.md.
// INPUT: Running Vite demo URL from CRYSTAL_MENU_URL or localhost default.
// OUTPUT: Desktop/mobile/mobile-preview screenshots and eval/visual-smoke.json.
// POS: QA helper only; does not mutate source or approve baselines.
import { mkdir, writeFile } from 'node:fs/promises';
import { chromium } from 'playwright';

const baseUrl = process.env.CRYSTAL_MENU_URL ?? 'http://127.0.0.1:5173/';
const outDir = 'eval/screenshots';
const reportPath = 'eval/visual-smoke.json';

const targets = [
  { name: 'desktop', width: 1440, height: 900 },
  { name: 'mobile', width: 390, height: 844 },
  { name: 'mobile-preview-link', width: 1440, height: 900, path: '?preview=mobile' },
];

await mkdir(outDir, { recursive: true });

const browser = await chromium.launch({ headless: true });
const results = [];

for (const target of targets) {
  const page = await browser.newPage({
    viewport: { width: target.width, height: target.height },
  });
  const consoleErrors = [];
  const pageErrors = [];

  page.on('console', (msg) => {
    if (msg.type() === 'error') consoleErrors.push(msg.text());
  });
  page.on('pageerror', (error) => pageErrors.push(error.message));

  const targetUrl = new URL(target.path ?? '', baseUrl).toString();
  await page.goto(targetUrl, { waitUntil: 'networkidle' });

  const screenshotPath = `${outDir}/${target.name}-prototypes.png`;
  const title = await page.title();
  const text = await page.locator('body').innerText();
  await page.screenshot({ path: screenshotPath, fullPage: true });

  results.push({
    ...target,
    url: targetUrl,
    title,
    screenshotPath,
    hasCrystalMenuText: text.includes('Crystal Menu'),
    hasOfficialAssetWarning: text.includes('official game assets'),
    consoleErrors,
    pageErrors,
  });

  await page.close();
}

await browser.close();

const failures = results.filter(
  (result) =>
    !result.hasCrystalMenuText ||
    result.consoleErrors.length > 0 ||
    result.pageErrors.length > 0,
);

const report = {
  baseUrl,
  status: failures.length === 0 ? 'pass' : 'fail',
  results,
};

await writeFile(reportPath, `${JSON.stringify(report, null, 2)}\n`, 'utf8');

if (failures.length > 0) {
  console.error(JSON.stringify(report, null, 2));
  process.exit(1);
}

console.log(JSON.stringify(report, null, 2));
