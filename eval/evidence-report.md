# Evidence Report: README Format Alignment

## Summary

Rewrote the public README to follow the requested reference-style component-library format while preserving this repository's own facts, source Figma framing, rights boundary, AI docs, component map, tokens, and preview links. Outcome: pass.

## Contract

Parent contract: `eval/visual-contract.md`

Work contract: `eval/work-contract.md`

## Environment

- Workspace: `G:\...\final-fantasy-ui-study`
- Date context: 2026-06-08 Asia/Shanghai
- Node: v24.12.0
- npm: 11.6.2
- Vite: 7.3.5
- Git: not a repository at this path

## Inputs

- User request:
  - README format should fully follow the provided component-library reference.
  - Continue the rewrite.
- Reference inspected:
  - user-provided component-library README format.
  - raw README headings and key sections: centered header, badges, bilingual intro, important boundary, showcase image, Preview / 预览, Highlights / 核心卖点, Installation / 安装, Quick Start / 快速开始, For AI Users / AI 用户指南, Components, Design Tokens, Tech Stack, Local Development, Contributing, Credits, License.

## Implementation

- Rewrote `README.md` into mixed English/Chinese section format.
- Added centered badge header with npm, downloads, stars, license, components, React, TypeScript, Vite, AI, Figma, and bilingual badges.
- Added IMPORTANT rights-boundary block in English and Chinese.
- Added showcase image and two-column Highlights table.
- Added Preview / 预览 bullets:
  - PC online preview
  - mobile online preview
  - component docs
  - showcase
  - source Figma component library
- Added reference-style sections:
  - `Installation / 安装`
  - `Quick Start / 快速开始`
  - `For AI Users / AI 用户指南`
  - `AI Documentation Files / AI 文档`
  - `Components (24) / 组件`
  - `Design Tokens / 设计变量`
  - `Tech Stack / 技术栈`
  - `Local Development / 本地开发`
  - `Contributing / 贡献`
  - `Credits / 致谢`
  - `License / 许可证`
- Neutralized public method-source wording in:
  - `ATTRIBUTION.md`
  - `CLAUDE.md`

## Checks Run

- Read `quality-eval-kit/SKILL.md`.
- Read `quality-eval-kit/templates/MANIFEST.md`.
- Read `ce-work` host shim and authoritative plugin skill.
- Fetched and inspected the requested GitHub README format.
- Checked README image paths:
  - `eval/screenshots/desktop-prototypes.png`: exists.
  - `eval/screenshots/orb-gem-and-rail-panel.png`: exists.
- Checked public docs for old external repository names: no matches.
- Ran `npm run typecheck`: pass.
- Ran `npm run audit:docs`: pass; 24 exported components documented.
- Ran `npm pack --dry-run --json`: pass.

## Package Evidence

`npm pack --dry-run --json` confirms these docs remain included:

- `README.md` 13998 bytes
- `AI_USAGE.md` 14506 bytes
- `docs/ai-user-guide.md` 3970 bytes
- `docs/tokens.md` 2485 bytes

## Outputs

- Public README:
  - `README.md`
- Public method boundary:
  - `ATTRIBUTION.md`
- Project map:
  - `CLAUDE.md`

## Human Review

User should confirm whether the public GitHub repository and npm package will use `crystal-menu-ui`. If not, update the npm badge, GitHub stars badge, GitHub Pages preview links, and local development clone command.

## Baseline Decision

No visual baseline was refreshed. This work changes public documentation format only.

## Final Status

Pass. README now follows the requested reference-style format and keeps the project framed around the source Figma component library.
