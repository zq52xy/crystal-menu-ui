// [PROTOCOL]: Change this header when README art generation changes, then check CLAUDE.md.
// INPUT: Original README marketing copy and local visual tokens.
// OUTPUT: docs/img/banner.png, feature-onepager.png, and feature-onepager-zh.png.
// POS: Asset generator only; does not use official or remote source assets.
import { mkdir } from 'node:fs/promises';
import { resolve } from 'node:path';
import { chromium } from 'playwright';

const outDir = resolve('docs/img');

const sharedStyles = `
  * { box-sizing: border-box; }
  body {
    margin: 0;
    width: 100vw;
    min-height: 100vh;
    color: #f8fbff;
    font-family: Inter, "Segoe UI", "Microsoft YaHei", Arial, sans-serif;
    background: #151820;
  }
  .artboard {
    position: relative;
    overflow: hidden;
    background:
      linear-gradient(135deg, rgba(75, 205, 255, 0.08) 0 1px, transparent 1px 100%),
      linear-gradient(90deg, rgba(159, 125, 255, 0.12), transparent 34%, rgba(0, 249, 251, 0.1)),
      radial-gradient(circle at 76% 18%, rgba(0, 249, 251, 0.22), transparent 28%),
      linear-gradient(180deg, #202631, #121620 72%, #0a0f16);
  }
  .scanline {
    position: absolute;
    inset: 0;
    background: repeating-linear-gradient(180deg, rgba(255,255,255,0.035) 0 1px, transparent 1px 7px);
    opacity: .34;
    pointer-events: none;
  }
  .diagonal {
    position: absolute;
    width: 980px;
    height: 3px;
    background: linear-gradient(90deg, transparent, rgba(75,205,255,.62), transparent);
    transform: rotate(-48deg);
    transform-origin: center;
    filter: drop-shadow(0 0 14px rgba(75,205,255,.38));
  }
  .panel {
    background: linear-gradient(180deg, rgba(57, 69, 82, .72), rgba(15, 26, 37, .86));
    border: 2px solid #81dfff;
    border-radius: 6px;
    box-shadow:
      0 22px 44px rgba(0,0,0,.34),
      inset 0 1px 0 rgba(255,255,255,.14),
      0 0 0 1px rgba(4,60,111,.9);
  }
  .corner::before,
  .corner::after {
    position: absolute;
    content: "";
    width: 12px;
    height: 12px;
    border-color: #4bcdff;
    border-style: solid;
  }
  .corner::before {
    top: 10px;
    right: 10px;
    border-width: 2px 2px 0 0;
  }
  .corner::after {
    left: 10px;
    bottom: 10px;
    border-width: 0 0 2px 2px;
  }
  .kicker {
    color: #00f9fb;
    font-size: 22px;
    font-weight: 800;
    text-transform: uppercase;
  }
  .title {
    margin: 0;
    color: #f8fbff;
    font-family: Georgia, "Times New Roman", "Microsoft YaHei", serif;
    font-size: 78px;
    line-height: .98;
    letter-spacing: 0;
    text-shadow: 3px 4px 0 #043c6f;
  }
  .subtitle {
    margin: 20px 0 0;
    max-width: 740px;
    color: #d9f6ff;
    font-size: 28px;
    line-height: 1.36;
  }
  .chip-row { display: flex; flex-wrap: wrap; gap: 14px; }
  .chip {
    padding: 10px 16px;
    color: #f8fbff;
    font-size: 18px;
    font-weight: 750;
    background: rgba(2, 11, 19, .62);
    border: 1px solid rgba(129, 223, 255, .55);
    border-radius: 4px;
  }
  .menu-list { display: grid; gap: 13px; }
  .menu-item {
    min-height: 50px;
    padding: 12px 18px;
    color: #f8fbff;
    font-size: 21px;
    font-weight: 820;
    background: linear-gradient(90deg, rgba(3,14,24,.92), rgba(0,151,211,.14));
    border: 1px solid rgba(129, 223, 255, .56);
    box-shadow: inset 0 0 20px rgba(75,205,255,.08);
  }
  .menu-item.active {
    background: linear-gradient(90deg, rgba(75,205,255,.46), rgba(0,249,251,.13));
    box-shadow: inset 0 0 24px rgba(255,255,255,.2), 0 0 22px rgba(75,205,255,.28);
  }
  .bar {
    height: 12px;
    border: 1px solid rgba(129,223,255,.6);
    background: #07131c;
  }
  .bar > span { display: block; height: 100%; background: linear-gradient(90deg, #4bcdff, #00f9fb); }
  .orb-rail {
    position: relative;
    height: 96px;
    margin-top: 24px;
    background: linear-gradient(180deg, #0f5faa, #074686);
    border: 2px solid rgba(129,223,255,.72);
    box-shadow: inset 0 0 30px rgba(0,0,0,.2);
  }
  .orb-rail::before {
    position: absolute;
    top: 47px;
    left: 64px;
    right: 64px;
    height: 4px;
    content: "";
    background: #25d5ff;
    box-shadow: 0 0 12px rgba(37,213,255,.8);
  }
  .orb {
    position: absolute;
    top: 18px;
    width: 62px;
    height: 62px;
    border-radius: 50%;
    border: 5px solid rgba(18,75,104,.95);
    box-shadow: inset -9px -10px 14px rgba(0,0,0,.42), inset 7px 7px 12px rgba(255,255,255,.38), 0 0 0 5px rgba(129,223,255,.42);
  }
  .orb.green { left: 54px; background: radial-gradient(circle at 32% 24%, #d8ffd6, #42d46c 28%, #0d6f35 64%, #063b24); }
  .orb.violet { left: 148px; background: radial-gradient(circle at 32% 24%, #f1d6ff, #a967ff 30%, #542d92 66%, #2b1d58); }
  .orb.gold { left: 242px; background: radial-gradient(circle at 32% 24%, #fff6a8, #e2cc25 32%, #856d04 68%, #3f3200); }
  .orb.red { right: 54px; background: radial-gradient(circle at 32% 24%, #ffe1dd, #df6268 30%, #8a232b 68%, #48111a); }
`;

const bannerHtml = `
<!doctype html>
<html><head><meta charset="utf-8"><style>${sharedStyles}
  .artboard { width: 1600px; height: 720px; padding: 74px 86px; }
  .diagonal.one { left: -170px; top: 430px; }
  .diagonal.two { right: -230px; top: 130px; opacity: .55; }
  .hero { position: relative; z-index: 2; display: grid; grid-template-columns: 1fr 540px; gap: 64px; height: 100%; align-items: center; }
  .hero-copy { padding-top: 18px; }
  .hero-copy .chip-row { margin-top: 38px; }
  .mockup { position: relative; height: 570px; padding: 22px; }
  .mock-grid { display: grid; grid-template-columns: 190px 1fr; gap: 18px; }
  .status-card { padding: 16px; display: grid; gap: 12px; }
  .status-row { display: grid; grid-template-columns: 46px 1fr 44px; gap: 10px; align-items: center; font-size: 15px; font-weight: 800; }
  .portrait { width: 46px; height: 46px; background: linear-gradient(135deg, #0b3044, #0d8db4); border: 1px solid rgba(129,223,255,.6); clip-path: polygon(50% 0, 100% 78%, 0 78%); }
  .detail { margin-top: 18px; padding: 18px; }
  .detail h3 { margin: 0 0 8px; font-size: 26px; font-family: Georgia, serif; text-shadow: 2px 3px 0 #043c6f; }
  .stats { display: grid; grid-template-columns: repeat(2, 1fr); gap: 9px 18px; margin-top: 14px; font-size: 16px; }
  .stats b { float: right; color: #00f9fb; }
  .small-orbs { display: flex; gap: 9px; margin-top: 18px; }
  .small-orbs span { width: 20px; height: 20px; border-radius: 50%; border: 2px solid #4bcdff; background: #0b1720; }
</style></head>
<body><div class="artboard">
  <div class="scanline"></div>
  <div class="diagonal one"></div>
  <div class="diagonal two"></div>
  <div class="hero">
    <section class="hero-copy">
      <div class="kicker">AI-ready React component library</div>
      <h1 class="title">crystal-menu-ui</h1>
      <p class="subtitle">Original JRPG glass HUD components with dense menu panels, status systems, orb sockets, public tokens, and AI documentation.</p>
      <div class="chip-row">
        <span class="chip">24 Components</span>
        <span class="chip">TypeScript</span>
        <span class="chip">Design Tokens</span>
        <span class="chip">Preview Ready</span>
      </div>
    </section>
    <section class="mockup panel corner">
      <div class="mock-grid">
        <div class="menu-list">
          <div class="menu-item">New Game</div>
          <div class="menu-item active">Continue</div>
          <div class="menu-item">Load Game</div>
          <div class="menu-item">Options</div>
        </div>
        <div class="status-card panel">
          <div class="status-row"><span class="portrait"></span><span><b>Ari</b><div class="bar"><span style="width:78%"></span></div></span><strong>OK</strong></div>
          <div class="status-row"><span class="portrait"></span><span><b>Cairn</b><div class="bar"><span style="width:68%"></span></div></span><strong>OK</strong></div>
          <div class="status-row"><span class="portrait"></span><span><b>Lyra</b><div class="bar"><span style="width:84%"></span></div></span><strong>HST</strong></div>
        </div>
      </div>
      <div class="detail panel">
        <h3>Astra Saber</h3>
        <p style="margin:0;color:#c8eaf3;font-size:17px">A light weapon tuned for pressure and stable casting.</p>
        <div class="stats"><span>ATK <b>118 +12</b></span><span>MAT <b>74 -4</b></span><span>DEF <b>86 +8</b></span><span>SPD <b>42 +3</b></span></div>
        <div class="small-orbs"><span></span><span></span><span></span><span></span></div>
      </div>
      <div class="orb-rail"><span class="orb green"></span><span class="orb violet"></span><span class="orb gold"></span><span class="orb red"></span></div>
    </section>
  </div>
</div></body></html>`;

const featureContent = {
  en: {
    file: 'feature-onepager.png',
    title: 'Core Highlights',
    subtitle: 'A compact component system for original JRPG glass HUD interfaces.',
    points: [
      ['24 Typed Components', 'Menu shells, command rows, status panels, archive slots, inventory, battle commands, and orb sockets.'],
      ['AI-ready Docs', 'AI_USAGE, prompt files, local skill rules, component routing, and hard boundaries for safer generation.'],
      ['Public Tokens', 'Less variables plus crystalTokens for colors, spacing, radius, borders, fonts, and shadows.'],
      ['Original Visuals', 'CSS-rendered glass panels, cyan linework, glow states, icon vectors, and gem/socket controls.'],
      ['Live Preview', 'GitHub Pages demo with desktop and mobile preview modes.'],
      ['Rights Boundary', 'No official screenshots, logos, characters, fonts, extracted UI cuts, or remote Figma assets.'],
    ],
  },
  zh: {
    file: 'feature-onepager-zh.png',
    title: '核心卖点',
    subtitle: '面向原创 JRPG 玻璃 HUD 界面的紧凑组件系统。',
    points: [
      ['24 个类型化组件', '覆盖菜单外壳、命令行、状态面板、存档、物品、战斗命令和宝石插槽。'],
      ['AI 友好文档', '包含 AI_USAGE、提示词、本地 skill、组件路由和生成硬边界。'],
      ['公开设计变量', 'Less 变量与 crystalTokens 同步提供颜色、间距、圆角、边框、字体和阴影。'],
      ['原创视觉实现', 'CSS 绘制玻璃面板、青色线框、发光状态、图标矢量和宝石插槽控件。'],
      ['在线预览', 'GitHub Pages demo 支持桌面和移动预览模式。'],
      ['权利边界清晰', '不包含官方截图、logo、角色、字体、切图或远程 Figma 资产。'],
    ],
  },
};

const featureHtml = ({ title, subtitle, points }) => `
<!doctype html>
<html><head><meta charset="utf-8"><style>${sharedStyles}
  .artboard { width: 1200px; height: 720px; padding: 58px; }
  .diagonal.one { left: -260px; top: 430px; opacity: .6; }
  .header { position: relative; z-index: 2; display: flex; justify-content: space-between; gap: 28px; align-items: end; margin-bottom: 32px; }
  .header h1 { margin: 0; color: #f8fbff; font-family: Georgia, "Times New Roman", "Microsoft YaHei", serif; font-size: 58px; letter-spacing: 0; text-shadow: 2px 3px 0 #043c6f; }
  .header p { margin: 10px 0 0; max-width: 620px; color: #d8f4ff; font-size: 21px; line-height: 1.34; }
  .badge { padding: 12px 18px; min-width: 178px; color: #00f9fb; text-align: center; font-size: 20px; font-weight: 860; background: rgba(2, 11, 19, .68); border: 1px solid rgba(129,223,255,.62); border-radius: 4px; }
  .cards { position: relative; z-index: 2; display: grid; grid-template-columns: repeat(3, 1fr); gap: 18px; }
  .feature { position: relative; min-height: 176px; padding: 22px; }
  .feature::before { position: absolute; top: 16px; right: 16px; width: 10px; height: 10px; content: ""; border-top: 2px solid #4bcdff; border-right: 2px solid #4bcdff; }
  .feature h2 { margin: 0 0 12px; color: #f8fbff; font-size: 27px; line-height: 1.1; letter-spacing: 0; text-shadow: 2px 2px 0 #043c6f; }
  .feature p { margin: 0; color: #c7e7f1; font-size: 18px; line-height: 1.42; }
  .footer-rail { position: absolute; left: 58px; right: 58px; bottom: 40px; height: 50px; }
  .footer-line { position: absolute; left: 0; right: 0; top: 24px; height: 3px; background: #25d5ff; box-shadow: 0 0 12px rgba(37,213,255,.8); }
  .footer-orb { position: absolute; top: 9px; width: 32px; height: 32px; border-radius: 50%; border: 3px solid rgba(18,75,104,.95); box-shadow: inset -5px -5px 9px rgba(0,0,0,.4), inset 4px 4px 8px rgba(255,255,255,.35), 0 0 0 3px rgba(129,223,255,.38); }
  .footer-orb:nth-child(2) { left: 22%; background: radial-gradient(circle at 32% 24%, #d8ffd6, #42d46c 28%, #0d6f35 64%, #063b24); }
  .footer-orb:nth-child(3) { left: 30%; background: radial-gradient(circle at 32% 24%, #f1d6ff, #a967ff 30%, #542d92 66%, #2b1d58); }
  .footer-orb:nth-child(4) { right: 30%; background: radial-gradient(circle at 32% 24%, #fff6a8, #e2cc25 32%, #856d04 68%, #3f3200); }
  .footer-orb:nth-child(5) { right: 22%; background: radial-gradient(circle at 32% 24%, #ffe1dd, #df6268 30%, #8a232b 68%, #48111a); }
</style></head>
<body><div class="artboard">
  <div class="scanline"></div>
  <div class="diagonal one"></div>
  <section class="header">
    <div><div class="kicker">crystal-menu-ui</div><h1>${title}</h1><p>${subtitle}</p></div>
    <div class="badge">24 Components</div>
  </section>
  <section class="cards">
    ${points.map(([heading, body]) => `<article class="feature panel"><h2>${heading}</h2><p>${body}</p></article>`).join('')}
  </section>
  <div class="footer-rail"><div class="footer-line"></div><span class="footer-orb"></span><span class="footer-orb"></span><span class="footer-orb"></span><span class="footer-orb"></span></div>
</div></body></html>`;

const render = async (browser, html, file, width, height) => {
  const page = await browser.newPage({ viewport: { width, height }, deviceScaleFactor: 1 });
  await page.setContent(html, { waitUntil: 'networkidle' });
  await page.screenshot({ path: resolve(outDir, file), clip: { x: 0, y: 0, width, height } });
  await page.close();
};

await mkdir(outDir, { recursive: true });

const browser = await chromium.launch({ headless: true });
try {
  await render(browser, bannerHtml, 'banner.png', 1600, 720);
  await render(browser, featureHtml(featureContent.en), featureContent.en.file, 1200, 720);
  await render(browser, featureHtml(featureContent.zh), featureContent.zh.file, 1200, 720);
} finally {
  await browser.close();
}

console.log('Generated README art assets in docs/img.');
