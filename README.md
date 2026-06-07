<div align="center">

# crystal-menu-ui

[![npm version](https://img.shields.io/npm/v/crystal-menu-ui?color=cb3837&labelColor=222)](https://www.npmjs.com/package/crystal-menu-ui)
[![npm downloads](https://img.shields.io/npm/dm/crystal-menu-ui?color=5fa04e&labelColor=222)](https://www.npmjs.com/package/crystal-menu-ui)
[![GitHub stars](https://img.shields.io/github/stars/zq52xy/crystal-menu-ui?color=ffd700&labelColor=222)](https://github.com/zq52xy/crystal-menu-ui/stargazers)
[![License](https://img.shields.io/badge/license-MIT-81dfff?labelColor=222)](LICENSE)

[![Components](https://img.shields.io/badge/Components-24-4bcdff?labelColor=222)](#components-24--组件)
[![React](https://img.shields.io/badge/React-18+-61DAFB?logo=react&labelColor=222)](https://react.dev)
[![TypeScript](https://img.shields.io/badge/TypeScript-5+-3178C6?logo=typescript&logoColor=fff&labelColor=222)](https://typescriptlang.org)
[![Vite](https://img.shields.io/badge/Vite-7-646CFF?logo=vite&logoColor=fff&labelColor=222)](https://vite.dev)
[![AI Ready](https://img.shields.io/badge/AI-Ready-00f9fb?labelColor=222)](AI_USAGE.md)
[![Figma Source](https://img.shields.io/badge/Figma-Source-9f7dff?labelColor=222)](FIGMA_REFERENCE.md)
[![Bilingual](https://img.shields.io/badge/docs-EN%20%2F%20中文-FF9E64?labelColor=222)](#)

</div>

An original React UI component library for JRPG-style glass HUD interfaces.
24 components with cyan linework, dark glass panels, orb/socket controls, AI-consumable docs, and public design tokens.

一套原创 React UI 组件库，用来构建 JRPG 风格的玻璃 HUD 界面。
24 个组件，包含青色线框、深色玻璃面板、宝石插槽控件、AI 可消费文档和公开设计变量。

> [!IMPORTANT]
> **Unofficial learning project · 非官方学习项目**
>
> This is a free learning and demonstration project. It is **not affiliated with, endorsed by, or sponsored by any game publisher, studio, owner, or rights holder**.
>
> This package does **not** redistribute official screenshots, logos, characters, fonts, music, icons, textures, extracted UI cuts, exact vector paths, or remote Figma assets. The implementation is original React + Less code that studies broad interface patterns from a source Figma component library.
>
> The MIT license covers **this project's code only**. It does not grant any rights to third-party trademarks, game IP, official art, names, or proprietary visual assets. If you reuse this project, especially for commercial work, you are responsible for your own IP and trademark review.
>
> 本项目为免费学习和演示用途，**不隶属于任何游戏发行方、工作室、所有者或权利方，也不代表任何官方授权、背书或赞助**。
>
> 本包**不分发**官方截图、logo、角色、字体、音乐、图标、贴图、切图、精确矢量路径或远程 Figma 资产。代码是原创 React + Less 实现，只从来源 Figma 组件库中研究通用界面语言。
>
> MIT 许可仅覆盖**本项目代码**，不授予任何第三方商标、游戏 IP、官方美术、名称或专有视觉资产的使用权。任何复用，尤其是商业用途，都需要使用者自行完成 IP 和商标风险审查。

![Crystal Menu UI banner](docs/img/banner.png)

### 🔗 Preview

- **Online Preview (PC):** [crystal-menu-ui](https://zq52xy.github.io/crystal-menu-ui/)
- **Online Preview (Mobile):** [crystal-menu-ui-mobile](https://zq52xy.github.io/crystal-menu-ui/?preview=mobile)
- **Component Docs:** [All 24 components](#components-24--组件) — component map, code examples, and props contract
- **Showcase:** [Real-world UI examples](#highlights--核心卖点) — menu screens, HUD panels, archive slots, inventory surfaces, and orb/socket rails
- **Source Figma:** [Figma component library](https://www.figma.com/design/GjQLMKKW4sLALp3auVsSqG/Final-Fantasy-VII-Remake-UI-Kit-and-Prototypes--Community---Copy-?node-id=1-3&t=NbDcbMPlhTXk572y-1)

### 🔗 预览

- **在线预览（PC）：** [crystal-menu-ui](https://zq52xy.github.io/crystal-menu-ui/)
- **在线预览（Mobile）：** [crystal-menu-ui-mobile](https://zq52xy.github.io/crystal-menu-ui/?preview=mobile)
- **组件文档：** [全部 24 个组件](#components-24--组件)——组件地图、代码示例和 Props 契约
- **效果展示：** [真实界面示例](#highlights--核心卖点)——菜单屏、HUD 面板、存档列表、物品界面和宝石插槽轨道
- **来源 Figma：** [Figma 组件库](https://www.figma.com/design/GjQLMKKW4sLALp3auVsSqG/Final-Fantasy-VII-Remake-UI-Kit-and-Prototypes--Community---Copy-?node-id=1-3&t=NbDcbMPlhTXk572y-1)

> The GitHub Pages links become active after the repository is public and `npm run deploy` has published `demo-dist`.
>
> GitHub Pages 链接会在仓库公开并执行 `npm run deploy` 发布 `demo-dist` 后生效。

---

## Highlights / 核心卖点

<table>
<tr>
<td width="50%"><img src="docs/img/feature-onepager.png" alt="Core highlights in English" /></td>
<td width="50%"><img src="docs/img/feature-onepager-zh.png" alt="核心卖点中文图" /></td>
</tr>
</table>

- **24 typed React components** for menu shells, command lists, dialogs, HUD metadata, party status, archive slots, inventory panels, and battle commands.
- **Original CSS-rendered visuals**: dark glass panels, cyan borders, glow states, custom icon vectors, and orb/socket motifs.
- **AI-ready documentation** with component routing, prompt files, hard boundaries, and local skill instructions.
- **Public design tokens** through Less variables and the TypeScript `crystalTokens` export.
- **Demo-driven QA** with desktop, mobile, and mobile-preview visual smoke screenshots.

- **24 个带类型的 React 组件**，覆盖菜单外壳、命令列表、弹窗、HUD 元信息、队伍状态、存档列表、物品面板和战斗命令。
- **原创 CSS 视觉实现**：深色玻璃面板、青色边框、发光状态、自绘图标和宝石插槽结构。
- **面向 AI 的文档体系**：组件路由、提示词文件、硬边界和本地 skill 指令。
- **公开设计变量**：Less 变量和 TypeScript `crystalTokens` 导出。
- **Demo 驱动 QA**：桌面、移动端和移动预览链接的视觉烟测截图。

---

## Installation / 安装

```bash
npm install crystal-menu-ui
```

```tsx
import 'crystal-menu-ui/style'
```

---

## Quick Start / 快速开始

```tsx
import {
  MenuPanel,
  OrbGem,
  OrbSocketRail,
  SaveSlot,
} from 'crystal-menu-ui'
import 'crystal-menu-ui/style'

export default function App() {
  return (
    <div style={{ background: '#17191e', padding: 40, minHeight: '100vh' }}>
      <MenuPanel title="Orb Socket Rail" variant="deep" density="compact">
        <OrbSocketRail
          sockets={[
            { id: 'green', tone: 'green', linkedAfter: 'short' },
            { id: 'violet', tone: 'violet', linkedAfter: 'short' },
            { id: 'gold', tone: 'gold', linkedAfter: 'brace' },
            { id: 'red', tone: 'red' },
          ]}
        />

        <div style={{ display: 'flex', gap: 12, marginTop: 12 }}>
          <OrbGem tone="green" size="md" label="Green orb" />
          <OrbGem tone="violet" size="md" label="Violet orb" />
          <OrbGem tone="gold" size="md" label="Gold orb" />
          <OrbGem tone="red" size="md" label="Red orb" />
        </div>

        <SaveSlot
          slotId="01"
          timestamp="06/07/2026 10:24 p.m."
          title="Archive 04: Glassway Sprint"
          location="Upper Ring - Transit Housing"
          playtime="005:38:46"
          party={['A', 'C', 'L']}
          selected
        />
      </MenuPanel>
    </div>
  )
}
```

---

## For AI Users / AI 用户指南

This package is structured for AI-assisted app generation. Use the existing components first, then use tokens only for wrapper layout. Do not invent official assets, character art, logos, copied screenshots, or exact source-vector paths.

这个包专门整理了面向 AI 的组件契约。生成界面时优先使用现有组件，只在包裹布局时使用 token。不要生成官方素材、角色图、logo、复制截图或精确源矢量路径。

### AI Documentation Files / AI 文档

| File | Purpose |
|------|---------|
| [AI_USAGE.md](AI_USAGE.md) | Canonical AI component contract, props, examples, and anti-hallucination rules |
| [docs/ai-user-guide.md](docs/ai-user-guide.md) | AI routing guide, generation pattern, and hard boundaries |
| [docs/tokens.md](docs/tokens.md) | Public design token guide for colors, spacing, radius, borders, fonts, and shadows |
| [PROMPT.md](PROMPT.md) | App/page generation prompt |
| [DESIGN_PROMPT.md](DESIGN_PROMPT.md) | Visual generation prompt |
| [skill/SKILL.md](skill/SKILL.md) | Local coding-assistant skill draft |

| 文件 | 用途 |
|------|------|
| [AI_USAGE.md](AI_USAGE.md) | AI 组件契约主入口，包含 props、示例和防 hallucination 规则 |
| [docs/ai-user-guide.md](docs/ai-user-guide.md) | AI 路由、生成模式和硬边界 |
| [docs/tokens.md](docs/tokens.md) | 公开设计变量文档，覆盖颜色、间距、圆角、边框、字体和阴影 |
| [PROMPT.md](PROMPT.md) | 页面/应用生成提示词 |
| [DESIGN_PROMPT.md](DESIGN_PROMPT.md) | 视觉生成提示词 |
| [skill/SKILL.md](skill/SKILL.md) | 本地 coding-assistant skill 草案 |

---

## Components (24) / 组件

| Category | Count | Components |
|----------|-------|------------|
| **Shell / Panels** | 3 | `MenuPanel`, `PartyMenuShell`, `ProfileScreen` |
| **Commands / Dialogs** | 5 | `CommandButton`, `MainMenu`, `DialogueBox`, `ConfirmDialog`, `BattleMenu` |
| **Status / HUD** | 4 | `PartyStatus`, `HPMPBar`, `LevelInfo`, `FloatingStatusBar` |
| **Equipment / Orbs** | 3 | `EquipmentPanel`, `OrbGem`, `OrbSocketRail` |
| **Characters** | 3 | `CharacterProfile`, `CharacterPortrait`, `CharacterRoster` |
| **Inventory** | 2 | `InventoryList`, `ItemTooltip` |
| **Archive / System** | 4 | `SaveSlot`, `GameIcon`, `Divider`, `Loading` |

> 📖 Component contract with examples and props: **[AI_USAGE.md](AI_USAGE.md)**
>
> 组件契约、示例和 Props：**[AI_USAGE.md](AI_USAGE.md)**

---

## Design Tokens / 设计变量

Use `variables.less` when editing component styles. Use `crystalTokens` when an app, generator, or AI assistant needs to inspect the design system from TypeScript.

编辑组件样式时以 `variables.less` 为准。应用、生成器或 AI 助手需要从 TypeScript 读取设计系统时使用 `crystalTokens`。

| Token | Value | Usage |
|-------|-------|-------|
| Background | `#17191e` | Page and demo background |
| Crystal Cyan | `#4bcdff` | Active lines, focus states, icons |
| Crystal Border | `#81dfff` | Panel borders and outlines |
| Text Main | `#f8fbff` | Primary readable text |
| Text Muted | `#949492` | Secondary metadata |
| Success Glow | `#00f9fb` | Resource highlights and OK states |
| Violet | `#9f7dff` | Magic/orb accent |
| Panel Radius | `6px` | Main panel radius |
| Space Scale | `4 / 8 / 12 / 16 / 20 / 24` | Layout rhythm |

| 变量 | 值 | 用途 |
|------|-----|------|
| 背景 | `#17191e` | 页面和 demo 背景 |
| 水晶青 | `#4bcdff` | 激活线条、焦点态、图标 |
| 水晶边框 | `#81dfff` | 面板边框和轮廓 |
| 主文字 | `#f8fbff` | 主要可读文字 |
| 次级文字 | `#949492` | 次级元信息 |
| 成功辉光 | `#00f9fb` | 资源高亮和 OK 状态 |
| 紫色 | `#9f7dff` | 魔法/宝石强调色 |
| 面板圆角 | `6px` | 主面板圆角 |
| 间距刻度 | `4 / 8 / 12 / 16 / 20 / 24` | 布局节奏 |

```tsx
import { crystalTokens } from 'crystal-menu-ui'

const shellStyle = {
  background: crystalTokens.color.glassStrong,
  borderColor: crystalTokens.color.border,
  borderRadius: crystalTokens.radius.panel,
  padding: crystalTokens.space[4],
}
```

---

## Tech Stack / 技术栈

| | |
|---|---|
| Framework | React 18 + TypeScript |
| Build | Vite 7, library mode, ESM + CJS dual output |
| Styling | Less Modules with `crystal-[local]-[hash:base64:5]` scoped names |
| Tokens | Less variables + exported `crystalTokens` TypeScript mirror |
| QA | TypeScript, docs coverage audit, Vite demo build, Playwright visual smoke |
| Package | CSS side effects, typed exports, `prepublishOnly` build |

---

## Local Development / 本地开发

```bash
git clone https://github.com/zq52xy/crystal-menu-ui.git
cd crystal-menu-ui
npm install
npm run typecheck
npm run build
npm run build:demo
npm run audit:docs
npm run visual:smoke
```

Run the local demo:

```bash
npm run dev
```

Open:

```text
http://127.0.0.1:5173/
http://127.0.0.1:5173/?preview=mobile
```

Deploy the static demo:

```bash
npm run deploy
```

---

## Contributing / 贡献

Contributions are welcome if they keep the project original, neutral, and component-focused.

欢迎贡献，但必须保持原创、去品牌化，并围绕组件库能力展开。

- Read [CONTRIBUTING.md](CONTRIBUTING.md).
- Keep official assets, copied screenshots, logos, character art, official fonts, and exact source-vector paths out of the package.
- Update `AI_USAGE.md` when component props or behavior change.
- Update `docs/tokens.md` if token values change.
- Run the validation commands before submitting changes.

---

## Credits / 致谢

- Source Figma component library: [Figma component library](https://www.figma.com/design/GjQLMKKW4sLALp3auVsSqG/Final-Fantasy-VII-Remake-UI-Kit-and-Prototypes--Community---Copy-?node-id=1-3&t=NbDcbMPlhTXk572y-1)
- Local study notes: [FIGMA_REFERENCE.md](FIGMA_REFERENCE.md)
- Rights and method boundary: [ATTRIBUTION.md](ATTRIBUTION.md)

This repository converts source-interface ideas into original React components. It does not ship source Figma assets or official game assets.

本仓库把来源界面的设计语言转换为原创 React 组件，不分发来源 Figma 资产或官方游戏素材。

---

## License / 许可证

MIT. See [LICENSE](LICENSE).

MIT。见 [LICENSE](LICENSE)。
