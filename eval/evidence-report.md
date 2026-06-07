# Evidence Report: README Visual Assets

## Summary

Generated component-rendered README marketing art and replaced the previous screenshot-led opening with a dedicated banner plus English and Chinese core-highlight images. Outcome: pass.

## Contract

Parent contract: `eval/visual-contract.md`

Work contract: `eval/work-contract.md`

## Environment

- Workspace: `G:\...\final-fantasy-ui-study`
- Date context: 2026-06-08 Asia/Shanghai
- Node: v24.12.0
- npm: 11.6.2
- Renderer: Vite dev server plus Playwright Chromium through `scripts/generate-readme-art.mjs`

## Inputs

- User request:
  - replace the weak opening image,
  - generate a banner header image,
  - create dedicated English and Chinese core-selling-point images,
  - keep the images visually consistent with the actual component style.

## Implementation

- Added repeatable art generator:
  - `scripts/generate-readme-art.mjs`
- Added local Vite screenshot entry:
  - `readme-art.html`
  - `src/demo/readme-art-main.tsx`
  - `src/demo/ReadmeArt.tsx`
  - `src/demo/readme-art.less`
- Added npm script:
  - `npm run art:readme`
- Generated original PNG assets:
  - `docs/img/banner.png`
  - `docs/img/feature-onepager.png`
  - `docs/img/feature-onepager-zh.png`
- Updated README:
  - top showcase now uses `docs/img/banner.png`
  - Highlights table now uses the English and Chinese one-pagers
- Updated module maps:
  - `CLAUDE.md`
  - `src/demo/CLAUDE.md`
  - `scripts/CLAUDE.md`
  - `docs/CLAUDE.md`
- Updated package files:
  - `package.json` includes `docs/img`

## Visual Review

Opened all generated assets for visual inspection:

- `banner.png`: rendered from `PartyMenuShell`, `MenuPanel`, `MainMenu`, `PartyStatus`, `EquipmentPanel`, and `BattleMenu`, no official elements.
- `feature-onepager.png`: English core highlights are rendered with `MenuPanel`, `GameIcon`, `SaveSlot`, `InventoryList`, and `OrbSocketRail`, readable at README scale.
- `feature-onepager-zh.png`: Chinese core highlights render correctly with the same component set and remain readable.

## Checks Run

- Read `quality-eval-kit/SKILL.md`.
- Read `quality-eval-kit/templates/MANIFEST.md`.
- Read `ce-work` host shim.
- Ran `npm run art:readme`: pass.
- Ran `npm run typecheck`: pass.
- Ran `npm run audit:docs`: pass; 24 exported components documented.
- Checked README image paths:
  - `docs/img/banner.png`: exists, 369272 bytes.
  - `docs/img/feature-onepager.png`: exists, 456669 bytes.
  - `docs/img/feature-onepager-zh.png`: exists, 476946 bytes.
- Ran `npm pack --dry-run --json`: pass.

## Package Evidence

`npm pack --dry-run --json` confirms these public files are included:

- `README.md` 13966 bytes
- `docs/img/banner.png` 369272 bytes
- `docs/img/feature-onepager.png` 456669 bytes
- `docs/img/feature-onepager-zh.png` 476946 bytes
- `package.json` 2235 bytes

## Rights Boundary

The images are generated from local Vite/React component compositions and shared Less tokens. They do not use official screenshots, character art, logos, official fonts, extracted UI cuts, exact source-vector paths, or remote Figma assets.

## Human Review

User should review whether the banner should become the GitHub social preview image.

## Final Status

Pass. README now has a dedicated component-rendered banner and bilingual core-highlight images.
