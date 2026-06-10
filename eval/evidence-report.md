# Evidence Report: Final Fantasy Search Keywords

## README Image Bounds Fix - 2026-06-10

Outcome: pass.

### Trigger

- User reported that images in the Core Highlights section overflowed their README table bounds.

### Change

- Added explicit `width="100%"` to Core Highlights images.
- Applied the same bound-safe width to Visual Gallery table images to prevent the same overflow pattern.

### Evidence

- README image tags for `feature-onepager.png`, `feature-onepager-zh.png`, and `gallery-*.png` now use `width="100%"`.

## README Motion Showcase GIF - 2026-06-10

Outcome: pass.

### Trigger

- User asked whether animated components could be shown as motion content.
- Animated components are stronger star-conversion proof than static screenshots because they show the UI is running component code, not just a mockup.

### Change

- Added `motion-showcase.html`, `src/demo/MotionShowcase.tsx`, `src/demo/motion-showcase-main.tsx`, and `src/demo/motion-showcase.less` as a dedicated animated capture surface.
- Added `scripts/generate-motion-showcase.mjs` and `npm run art:motion` to capture Playwright frames and encode a GIF with `gifenc` + `pngjs`.
- Generated `docs/img/motion-showcase.gif` and mirrored it to `eval/screenshots/motion-showcase.gif`.
- Inserted a `Motion Showcase / 动效展示` README section before the static visual gallery.

### Evidence

- `npm run art:motion`: pass; generated `docs/img/motion-showcase.gif` at about 2.6 MiB.
- Manual visual review: GIF shows DamageNumber, LimitGauge, ChapterIntroCard, and Loading motion without official assets.
- Evidence GIF: `eval/screenshots/motion-showcase.gif`.

## README CTA Tone Refinement - 2026-06-10

Outcome: pass.

### Trigger

- User questioned whether the Star / Share conversion block was actually useful.
- Review conclusion: the CTA is useful as a low-friction action path, but it should feel less like asking for stars and more like inviting use, sharing, and showcases.

### Change

- Renamed `Star / Share / 传播` to `Use, Share, or Showcase / 使用、分享或展示作品`.
- Rewrote the intro copy to prioritize usage, visual sharing, feedback, and showcase issues before stars.

### Evidence

- README keeps the same links to GitHub, live demo, npm, social preview asset, launch kit, GitHub settings checklist, llms.txt, and Showcase issue.
- Tone is now more open-source-native and less like direct star begging.

## GitHub Launch Settings Checklist - 2026-06-10

Outcome: pass.

### Trigger

- Active goal: increase popularity and star count after README visual and community-template improvements.
- Several high-impact star-growth actions live outside the repository files: About description, topics, social preview, pinned roadmap issue, first release, labels, and weekly posting rhythm.

### Change

- Added `docs/launch/github-settings-checklist.md` with exact GitHub About metadata, recommended topics, social preview asset, pinned roadmap issue body, v0.1.0 release body, starter issues, labels, and weekly growth ritual.
- Linked the checklist from README and `docs/launch/community-launch-kit.md`.
- Updated `docs/launch/CLAUDE.md` to include the new launch checklist.

### Evidence

- README Star / Share section links to `docs/launch/github-settings-checklist.md`.
- Checklist points to `docs/img/banner.png` as the social preview image and includes repo topics aligned with README badges and package keywords.
- Checklist keeps the same unofficial/original-assets rights boundary while making the external GitHub setup actionable.

## GitHub Community Templates - 2026-06-10

Outcome: pass.

### Trigger

- Active goal: increase project popularity and star count by converting visitors into feedback, showcases, and safe contributors.
- README had Star / Share CTAs but no structured GitHub issue or PR flow for community participation.

### Change

- Added `.github/ISSUE_TEMPLATE/` forms for visual bugs, feature requests, docs improvements, and showcases.
- Added `.github/PULL_REQUEST_TEMPLATE.md` with validation, evidence, rights-boundary, and documentation checks.
- Added `.github/CLAUDE.md` as the community-surface architecture map.
- Linked Showcase issues and contribution safety from README and launch kit.
- Updated root `CLAUDE.md` so the project map includes `.github/`.

### Evidence

- README points builders to `https://github.com/zq52xy/crystal-menu-ui/issues/new?template=showcase.yml`.
- Issue forms require original/project-owned assets and keep official-asset requests out of the contribution flow.
- PR template requires typecheck, docs audit, visual smoke for UI changes, evidence report updates, rights-boundary checks, and CLAUDE map updates.

## README Visual Gallery - 2026-06-10

Outcome: pass.

### Trigger

- Active goal: improve content imagery and star conversion.
- README had a strong hero and share banner, but lacked a scan-friendly component screenshot gallery.

### Change

- Copied verified component screenshots into README-owned assets under `docs/img/gallery-*.png`.
- Added a `Visual Gallery / 视觉画廊` README section covering Equipment Screen, Materia Growth, Weapon Matrix, Damage Numbers, and Chapter Card.
- Updated `docs/CLAUDE.md` and `docs/launch/community-launch-kit.md` so the new gallery assets are discoverable for launch posts.

### Evidence

- Gallery assets: `docs/img/gallery-equipment-screen.png`, `docs/img/gallery-materia-growth.png`, `docs/img/gallery-weapon-matrix.png`, `docs/img/gallery-damage-numbers.png`, `docs/img/gallery-chapter-title.png`.
- README gallery uses local repository assets instead of `eval/` evidence paths.
- Visual source remains original CSS/SVG demo output, not official screenshots or bundled third-party assets.

## Community Growth Kit - 2026-06-10

Outcome: pass.

### Trigger

- Active goal: improve project popularity and star growth beyond visual README polish.
- The repository needed reusable launch copy, community checklists, and an AI-readable citation summary.

### Change

- Added `docs/launch/community-launch-kit.md` with safe positioning, launch checklist, X/Twitter copy, Chinese community copy, Reddit/forum copy, release notes template, and follow-up content ideas.
- Added root `llms.txt` with concise project summary, key URLs, citation points, safe positioning, and search phrases for AI/answer-engine discoverability.
- Linked both from the README Star / Share section.
- Updated `CLAUDE.md` and `docs/CLAUDE.md` so the architecture map reflects the new growth surfaces.

### Evidence

- `README.md` links to `docs/launch/community-launch-kit.md` and `llms.txt`.
- `docs/launch/community-launch-kit.md` includes ready-to-post English and Chinese launch copy plus ethical star-growth guardrails.
- `llms.txt` keeps the unofficial boundary and points AI systems to README, npm, demo, AI usage, tokens, rights boundary, and launch kit.

## README Visual Growth Pass - 2026-06-10

Outcome: pass.

### Trigger

- Active goal: improve content imagery and increase project popularity / star conversion.
- Existing README art still showed `24 components` despite the current public surface documenting 30 components.

### Change

- Updated README art copy in `src/demo/ReadmeArt.tsx` from 24 to 30 components.
- Regenerated `docs/img/banner.png`, `docs/img/feature-onepager.png`, and `docs/img/feature-onepager-zh.png` via `npm run art:readme`.
- Added a bilingual Star / Share README section with the social banner, star link, live demo link, npm link, social preview asset path, and suggested GitHub topics.
- Updated `docs/star-growth-strategy.md` with current conversion surfaces and 30-component proof.

### Evidence

- `npm run art:readme`: pass; regenerated all README marketing images.
- Manual image review: `docs/img/banner.png` now displays `30 components`.
- README conversion links point to GitHub, GitHub Pages, npm, and the local social preview asset.

## README Equipment Hero - 2026-06-10

Outcome: pass.

### Trigger

- User requested a README opening hero image similar to the Equipment Screen screenshot.
- Public README should show the original component-rendered glass HUD before long-form text.

### Change

- Generated `docs/img/readme-hero-equipment.png` from the production demo build, with `src/demo/local-assets/` hidden during build.
- Added the hero image under the README badge block.
- Mirrored the visual evidence to `eval/screenshots/readme-hero-equipment.png`.

### Evidence

- `npm run build:demo`: pass; local assets hidden and restored by `scripts/build-demo-public.mjs`.
- `node scripts/preview-new-components.mjs`: pass against static `demo-dist` server.
- `npm run visual:smoke`: pass against static `demo-dist` server; zero console and page errors.
- Evidence image: `eval/screenshots/readme-hero-equipment.png`.

## README Badge Hotfix - 2026-06-10

Outcome: pass.

### Trigger

- GitHub README first screen showed a red `downloads: package not found or too new` badge.
- `npm view crystal-menu-ui version name --json` confirmed the npm package exists as `crystal-menu-ui@0.1.0`.
- Direct Shields check confirmed the version badge resolves, while the `npm/dt` downloads badge still returns the new-package error state.

### Change

- Replaced the unstable npm total-downloads badge in `README.md` with a stable `npm published` badge linked to the same npm package page.
- Kept the package name neutral and preserved the existing Final Fantasy / 最终幻想 study-positioning language.

### Evidence

- `npm view crystal-menu-ui version name --json`: pass.
- `https://img.shields.io/npm/v/crystal-menu-ui`: resolves to `npm: v0.1.0`.
- `https://img.shields.io/badge/npm-published-cb3837?logo=npm&logoColor=fff&labelColor=222`: static replacement avoids the new-package downloads API gap.

## Summary

Added bilingual `Final Fantasy` / `最终幻想` search keywords and supporting content while preserving the unofficial learning-only boundary. Outcome: pass.

## Contract

Parent contract: `eval/visual-contract.md`

Work contract: `eval/work-contract.md`

## Environment

- Workspace: `G:\...\final-fantasy-ui-study`
- Date context: 2026-06-08 Asia/Shanghai
- Node: v24.12.0
- npm: 11.6.2
- Scope: README, package metadata, AI docs, attribution, and rights-boundary docs

## Inputs

- User request:
  - add Final Fantasy / 最终幻想 as keywords and content.

## Implementation

- Updated `package.json`:
  - description now includes unofficial Final Fantasy-style UI studies.
  - keywords include `final-fantasy`, `final-fantasy-ui`, `final-fantasy-inspired`, `final-fantasy-remake-ui`, `最终幻想`, `最终幻想-ui`, and `最终幻想组件库`.
- Updated `README.md`:
  - intro mentions Final Fantasy-inspired JRPG-style UI.
  - added bilingual Search Keywords section with an explicit unofficial/search-intent note.
- Updated `AI_USAGE.md` and `docs/ai-user-guide.md`:
  - added search/discovery aliases.
  - added guardrails that these terms are reference labels only.
- Updated `ATTRIBUTION.md` and `docs/copyright-boundary.md`:
  - allowed descriptive search/reference usage.
  - forbade official ownership, endorsement, or asset-license claims.

## Checks Run

- Read `quality-eval-kit/SKILL.md`.
- Read `quality-eval-kit/templates/MANIFEST.md`.
- Read `ce-work` host shim.
- Ran `npm run typecheck`: pass.
- Ran `npm run audit:docs`: pass; 24 exported components documented.
- Ran `npm pack --dry-run --json`: pass.
- Ran keyword grep for `Final Fantasy` / `最终幻想`: pass; uses are paired with source reference, search intent, or unofficial boundary.

## Package Evidence

`npm pack --dry-run --json` confirms the public metadata and docs are included:

- `README.md` 14628 bytes
- `AI_USAGE.md` 14987 bytes
- `docs/ai-user-guide.md` 4480 bytes
- `docs/tokens.md` 2485 bytes
- `package.json` 2467 bytes

## Rights Boundary

The new keywords and content do not add official screenshots, character art, logos, official fonts, extracted UI cuts, exact source-vector paths, or remote Figma assets. Direct names are framed as study/search references only.

## Human Review

User should review whether the added SEO value is worth the remaining trademark-search risk before promoting the repository widely.

## Final Status

Pass. The repository now includes bilingual Final Fantasy / 最终幻想 search keywords with explicit unofficial learning-only guardrails.

---

# Evidence Report: Optima Display Stack & Six New JRPG Components

## Summary

Switched the display font stack to lead with `Optima` for a humanist-serif feel that matches the FFVII Remake reference language, then added six new components (`DamageNumber`, `LimitGauge`, `ChapterIntroCard`, `ChapterEndCard`, `MateriaGrowthTree`, `WeaponUpgradeMatrix`) to close the largest remaining structural gaps in the source-method roadmap. Outcome: pass.

## Contract

Parent contract: `eval/visual-contract.md`

Work contract: `eval/work-contract.md`

## Environment

- Workspace: `D:\work\crystal`
- Date context: 2026-06-08 Asia/Shanghai
- Node: v24.x
- Branch: `feat/optima-font-and-abdef-components`

## Inputs

- User request:
  - lead the display font stack with Optima with a Georgia-ending fallback for unlicensed environments,
  - implement candidates A (Materia growth), B (Limit gauge), D (Weapon SP matrix), E (Chapter intro / end cards), and F (Damage numbers).

## Implementation

### Display font stack

- Updated `src/styles/variables.less` `@crystal-font-display` to:
  `"Optima", "Optima Nova", "Linotype Optima", Optima-Regular, "URW Classico", "Charter", Georgia, "Times New Roman", serif`.
- Mirrored into `src/styles/tokens.ts` `crystalTokens.font.display`.
- Documented stack rationale and licensing posture in `docs/tokens.md`, `ATTRIBUTION.md`, and `docs/copyright-boundary.md`. The library does not bundle or self-host any Optima font file; the stack is a CSS hint only.

### New components

- `DamageNumber`: floating combat damage indicator with rise-and-fade animation; tones cover normal, critical, heal, magic, guard, and miss; supports an element/weakness chip via the `tag` prop.
- `LimitGauge`: segmented limit gauge with a level pip, animated fill, ready pulse, and gold/crimson/cyan tones; `ready` is auto-detected at 100% when not supplied.
- `ChapterIntroCard`: cinematic chapter-opening title card with rule-line title row, location frame, dossier rows, and an entrance animation that respects `prefers-reduced-motion`.
- `ChapterEndCard`: cinematic chapter-results card with ledger-style stat rows (with optional highlight emphasis) and a rewards list.
- `MateriaGrowthTree`: AP-progress panel with a tone-aware orb core, conic AP-progress ring, segmented level pip strip, and an ability list with locked / ready / unlocked states.
- `WeaponUpgradeMatrix`: SP-grid weapon upgrade matrix with diamond nodes, SVG-rendered node connections, locked / available / unlocked / selected states, kind tones (core / attack / magic / support / unique), and a side detail panel.

### Demo and docs

- Wired all six new components into `src/demo/App.tsx` with original placeholder data; added matching layout rules in `src/demo/demo.less` (limit gauges row, damage stage, materia row).
- Re-exported the components and their types from `src/index.ts`.
- Updated `src/components/CLAUDE.md`, `docs/requirements.md`, `docs/figma-coverage-matrix.md`, and `eval/visual-contract.md` to list the new components.
- Expanded `AI_USAGE.md` with routing rows, "Use … for …" lines, import block, and full prop docs for each new component.
- Updated `README.md` component map to "30 components" with the new `Combat / Feedback`, `Chapter / Cinematic`, and expanded `Status / HUD` and `Equipment / Orbs` rows.

## Files Changed

- `src/styles/variables.less`, `src/styles/tokens.ts`
- `src/index.ts`
- `src/components/CLAUDE.md`
- `src/components/{DamageNumber,LimitGauge,ChapterIntroCard,ChapterEndCard,MateriaGrowthTree,WeaponUpgradeMatrix}/*` (new)
- `src/demo/App.tsx`, `src/demo/demo.less`
- `AI_USAGE.md`, `README.md`, `ATTRIBUTION.md`
- `docs/tokens.md`, `docs/requirements.md`, `docs/copyright-boundary.md`, `docs/figma-coverage-matrix.md`
- `eval/visual-contract.md`
- `eval/screenshots/*` (refreshed by `visual:smoke`)

## Checks Run

- `npm run typecheck`: pass.
- `npm run audit:docs`: pass; 30 exported components documented (was 24 before).
- `npm run visual:smoke`: pass; desktop / mobile / mobile-preview-link, zero console / page errors.

## Backwards Compatibility

- All existing component APIs unchanged.
- Public API surface grows additively: six new components, no removals or renames.
- Display font stack now leads with Optima; environments without Optima fall back along the original chain ending in Georgia.

## Rights Boundary

- The package does not bundle or self-host any Optima font file. The CSS stack references Optima as a stack hint only.
- All six new components render their visuals from CSS, SVG, and inline shapes; no official screenshots, character art, fonts, or remote Figma assets were added.
- `ATTRIBUTION.md` and `docs/copyright-boundary.md` updated to call out the stack-hint vs binary-redistribution distinction.

## Final Status

Pass. The library now ships an Optima-led display stack and six FFVII Remake-language components covering the largest remaining structural gaps: floating damage numbers, limit-break gauges, chapter open/close cards, materia AP growth panels, and a weapon SP upgrade matrix.
