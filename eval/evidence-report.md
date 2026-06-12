# Evidence Report: crystal-menu-ui Quality History

## Roadmap and Good First Issues - 2026-06-12

Outcome: pass.

### Contract

- Governed by `eval/work-contract.md`.
- Parent contract: `eval/visual-contract.md`.

### Environment

- Workspace: `O:\coding\crystal-menu-ui`
- Repository: `zq52xy/crystal-menu-ui`
- Branch: `main`

### Change

- Added `ROADMAP.md` with short-term, next, and later contribution priorities.
- Linked `ROADMAP.md` from the README top link row and Start Here table.
- Updated root `CLAUDE.md` to include ROADMAP in the root docs surface.
- Created five GitHub starter issues with `good first issue` labels:
  - `#4` Add Next.js basic example
  - `#5` Add battle screen example
  - `#6` Add keyboard navigation docs
  - `#7` Add theme preset docs
  - `#8` Add community showcase page
- Linked those five issues from `ROADMAP.md`.

### Checks Run

- `quality-eval-kit/SKILL.md`: read.
- `quality-eval-kit/templates/MANIFEST.md`: read.
- GitHub issues page before creation: browser view showed no open issue results.
- GitHub labels page: browser view confirmed default labels including `documentation`, `enhancement`, `good first issue`, and `help wanted`.
- GitHub connector issue creation: pass for issues `#4` through `#8`.
- GitHub issue page verification: issue `#4` rendered open with `enhancement` and `good first issue` labels; repository issue count rendered as `Issues 5`.
- `npm run typecheck`: pass.
- `npm run audit:docs`: pass; 30 exported components documented.
- `git diff --check`: pass.

### Outputs

- Roadmap: `ROADMAP.md`
- Issues:
  - `https://github.com/zq52xy/crystal-menu-ui/issues/4`
  - `https://github.com/zq52xy/crystal-menu-ui/issues/5`
  - `https://github.com/zq52xy/crystal-menu-ui/issues/6`
  - `https://github.com/zq52xy/crystal-menu-ui/issues/7`
  - `https://github.com/zq52xy/crystal-menu-ui/issues/8`
- Evidence report: `eval/evidence-report.md`

### Failures

- Unauthenticated GitHub REST issue-list request returned 403. Browser issue page and authenticated GitHub connector were used instead.
- GitHub issue list page appeared stale immediately after issue creation, but individual issue pages confirmed the issues and repository issue count.

### Human Review

- User should review whether the roadmap priority order matches the intended public launch positioning before pinning issues.

### Baseline Decision

- No visual baseline changed.

## Runnable Vite Example - 2026-06-12

Outcome: pass.

### Contract

- Governed by `eval/work-contract.md`.
- Parent contract: `eval/visual-contract.md`.

### Environment

- Workspace: `O:\coding\crystal-menu-ui`
- Example path: `examples/vite-basic`
- Local preview URL: `http://127.0.0.1:5175/`
- Local preview process: listening on `127.0.0.1:5175`, owning process `33008`.
- Vite version observed during example build: `v7.3.5`.

### Change

- Added `examples/vite-basic`, a minimal Vite + React + TypeScript consumer app.
- The example imports `crystal-menu-ui` and `crystal-menu-ui/style` through package-like entry points.
- `examples/vite-basic/vite.config.ts` maps those package-like imports to repository source files for local clone development.
- Added `examples/CLAUDE.md` and updated root `CLAUDE.md` for the new example module.
- Added README first-screen links and run commands for the Vite example.
- Added a screenshot evidence artifact at `eval/screenshots/vite-basic-example.png`.

### Checks Run

- `quality-eval-kit/SKILL.md`: read.
- `quality-eval-kit/templates/MANIFEST.md`: read.
- Context7 Vite documentation: queried for npm scripts, React plugin setup, `resolve.alias`, and Less preprocessor options.
- `npm install --package-lock=false --no-audit` in `examples/vite-basic`: pass; 90 packages installed.
- `npm run build` in `examples/vite-basic`: pass; TypeScript check and Vite production build completed.
- `npm run typecheck`: pass.
- `npm run audit:docs`: pass; 30 exported components documented.
- `git diff --check`: pass.
- Browser verification at `http://127.0.0.1:5175/`: page title loaded as `crystal-menu-ui Vite Example`.
- Browser accessibility snapshot: confirmed `Transit Ring`, `Party`, `Commands`, `Loadout`, and `Limit` regions/content render.
- Browser console review after favicon fix: only React DevTools informational message remained.
- Screenshot review: `eval/screenshots/vite-basic-example.png` shows the rendered tactical menu composition.

### Outputs

- Example README: `examples/vite-basic/README.md`
- Example entry: `examples/vite-basic/src/App.tsx`
- Evidence screenshot: `eval/screenshots/vite-basic-example.png`
- Evidence report: `eval/evidence-report.md`

### Failures

- Initial dev-server start attempt failed because PowerShell cannot redirect stdout and stderr to the same file.
- Second dev-server start attempt failed because Windows requires `npm.cmd` for `Start-Process`.
- First browser pass reported `favicon.ico` 404; fixed by adding an inline SVG favicon to `examples/vite-basic/index.html`.

### Human Review

- User should open `http://127.0.0.1:5175/` to judge whether the example is compelling enough for public promotion.

### Baseline Decision

- No existing visual baseline was refreshed.
- `eval/screenshots/vite-basic-example.png` is evidence for this implementation, not a durable baseline.

## GitHub Repository Surface Settings - 2026-06-11

Outcome: pass.

### Contract

- Governed by `eval/work-contract.md`.
- Parent contract: `eval/visual-contract.md`.

### Change

- Updated GitHub repository description to `AI-ready React components for original JRPG glass HUD interfaces.`
- Updated repository website to `https://zq52xy.github.io/crystal-menu-ui/`.
- Replaced repository topics with `react`, `typescript`, `component-library`, `design-system`, `game-ui`, `jrpg`, `vite`, `ai-ready`, and `rpg-ui`.
- Uploaded `docs/img/banner.png` as the GitHub Social Preview image.

### Checks Run

- Browser verification on the repository homepage confirmed the new title/description.
- Browser DOM verification confirmed the website link is present.
- Browser DOM verification confirmed the visible topics match the target topic set.
- Browser verification in Settings confirmed the repository image id changed from `1891527` to `1891564` after upload.

### Outputs

- Repository homepage: `https://github.com/zq52xy/crystal-menu-ui`
- Social preview source image: `docs/img/banner.png`
- Evidence report: `eval/evidence-report.md`

### Human Review

- User can visually confirm the Social Preview crop in GitHub Settings if desired.

### Baseline Decision

- No code or visual baseline changed.

## v0.2.0 Release and Pages Deploy - 2026-06-11

Outcome: pass.

### Contract

- Governed by `eval/work-contract.md`.
- Parent contract: `eval/visual-contract.md`.

### Environment

- Workspace: `O:\coding\crystal-menu-ui`
- Package after bump: `crystal-menu-ui@0.2.0`
- Release commit: `0e25924 Release v0.2.0`
- Remote branch: `origin/main`

### Change

- Bumped `package.json` and `package-lock.json` from `0.1.1` to `0.2.0`.
- Committed and pushed `0e25924 Release v0.2.0` to `origin/main`.
- Created and pushed annotated tag `v0.2.0` with message `v0.2.0: AI-ready JRPG screen presets`.
- Ran `npm run deploy`, which rebuilt the demo and published `demo-dist` through `gh-pages`.

### Checks Run

- `npm run typecheck`: pass.
- `npm run audit:docs`: pass; 30 exported components documented.
- `npm pack --dry-run --json`: pass; package reports `crystal-menu-ui@0.2.0` and includes `docs/screen-presets.md`.
- `npm run deploy`: pass; Vite built the demo and `gh-pages` returned `Published`.
- Remote verification: `origin/main` points to `0e25924ce4e0d5c1ec8c43572d6d9c3f7151a36f`; `origin/gh-pages` points to `a8cd289bcb15b81d3ff94c1efb759b58e2ed5ebc`; tag `v0.2.0` exists on origin.

### Outputs

- Pages URL: `https://zq52xy.github.io/crystal-menu-ui/`
- Tag URL: `https://github.com/zq52xy/crystal-menu-ui/releases/tag/v0.2.0`
- Evidence report: `eval/evidence-report.md`

### Failures

- GitHub CLI is not installed on this host.
- `git credential fill` did not expose a GitHub username/password token for API use.
- The available GitHub MCP connector did not expose repository topic, social-preview, or release-creation tools.
- Playwright opened `https://github.com/zq52xy/crystal-menu-ui/settings` as `Page not found`, indicating the browser context had no repository settings permission or login state.

### Human Review

- GitHub Release page was completed through the logged-in browser session after initial CLI/API tooling was unavailable.
- Release verification: `https://github.com/zq52xy/crystal-menu-ui/releases/tag/v0.2.0` shows `Latest`, not `Pre-release`, with the screen preset release notes, demo link, presets link, npm link, and safety note.
- GitHub repository topics and Social Preview still require manual review in the GitHub settings UI.

### Baseline Decision

- No visual baseline changed.

## Star Growth Conversion Pass - 2026-06-11

Outcome: pass.

### Contract

- Governed by `eval/work-contract.md`.
- Parent contract: `eval/visual-contract.md`.

### Environment

- Workspace: `O:\coding\crystal-menu-ui`
- Package: `crystal-menu-ui@0.1.1`
- Dependency install: `npm ci` was required because `node_modules` was absent and the first typecheck could not find `tsc`.

### Change

- Reworked the README first screen around the fast conversion path: positioning, install command, minimal `BattleMenu` example, Screen Presets link, Live Demo link, AI Usage link, and Showcase/Star CTA.
- Added `docs/screen-presets.md` with copy-paste recipes for Equipment Screen, Battle Command HUD, Save / Load Archive, and Inventory Inspector compositions.
- Added `docs/screen-presets.md` to `package.json` `files` so npm README links can resolve inside the published package.
- Updated `docs/star-growth-strategy.md` into a concrete 14-day execution plan with release angle, channel order, metrics, and ethical rules.
- Updated `docs/launch/community-launch-kit.md` with `v0.2.0` release positioning, preset links, and refreshed English/Chinese/forum post copy.
- Updated `docs/CLAUDE.md` and this work contract/evidence pair for the new docs surface.

### Checks Run

- `npm ci`: pass; 141 packages installed, 0 vulnerabilities.
- `npm run typecheck`: pass after dependency install.
- `npm run audit:docs`: pass; 30 exported components documented.
- `npm pack --dry-run --json`: pass; package includes `docs/screen-presets.md`.
- Safety wording grep across changed docs: pass; unofficial/no-official-assets guardrails remain present.

### Outputs

- Evidence report: `eval/evidence-report.md`
- Work contract: `eval/work-contract.md`
- New screen preset guide: `docs/screen-presets.md`
- npm dry-run package entry includes `docs/screen-presets.md` with size 7508 bytes.

### Failures

- Initial `npm run typecheck` failed because `node_modules` was missing and `tsc` was not available. Classification: environment setup issue, not a code regression. Resolved with `npm ci`, then typecheck passed.

### Human Review

- User should review whether the README CTA tone is direct enough and whether the FF7-inspired search language remains acceptable before broad external promotion.

### Baseline Decision

- No visual baseline changed.

## AI Workflow and SEO Content Assets - 2026-06-10

Outcome: pass.

### Trigger

- User provided an AI discussion document and asked what the repository could learn from it.
- Sub-agent synthesis recommended shifting the primary story from a visual-style component library to an AI-ready JRPG interface design system with component-constrained AI composition.

### Change

- Added README `Why this exists` and `AI workflow` sections that explain prompt-only drift, screenshot-to-code bloat, and component-constrained AI composition.
- Added `docs/ai-workflow.md` with a direct answer, workflow steps, prompt pattern, comparison table, do/don't rules, and citation-safe summary.
- Added `docs/content/` with three SEO/AEO article drafts: React JRPG menu UI, AI-ready game UI components, and rights-safe game UI study.
- Updated `llms.txt` and `public/llms.txt` to position the project as an AI-ready JRPG interface design system.
- Added `docs/ai-workflow.md` and `docs/content` to `package.json` `files` so npm README links resolve inside the package.
- Updated `docs/CLAUDE.md` and added `docs/content/CLAUDE.md` for the new documentation surfaces.

### Evidence

- `npm run audit:docs`: pass; 30 exported components documented.
- `npm run typecheck`: pass.
- `npm run build:demo`: pass.
- `npm run smoke:package`: pass; `Package smoke ok: crystal-menu-ui@0.1.1 (79 files)`.
- `npm pack --dry-run --json`: package includes `docs/ai-workflow.md` and three `docs/content/*.md` article drafts.
- `git diff --check`: pass.

## SEO and AI Search Surface Pass - 2026-06-10

Outcome: pass.

### Trigger

- User paused code-structure optimization and prioritized repository SEO / AI-search visibility.
- Review found the project already had strong README visuals and `llms.txt`, but the GitHub Pages demo lacked canonical metadata, crawler files, sitemap, and structured data.

### Change

- Added canonical URL, keyword meta, Open Graph image metadata, Twitter image metadata, and `SoftwareSourceCode` JSON-LD to `index.html`.
- Added README answer blocks for `What is crystal-menu-ui?`, `Best for`, and FAQ-style AI extraction.
- Added `public/robots.txt`, `public/sitemap.xml`, and deployed-copy `public/llms.txt` for GitHub Pages indexing.
- Expanded root `llms.txt` with common AI questions and a citation-safe answer.
- Added `public/CLAUDE.md` and updated root `CLAUDE.md` so crawler files are documented as a first-class public surface.

### Evidence

- `npm run audit:docs`: pass; 30 exported components documented.
- `npm run typecheck`: pass.
- `npm run build:demo`: pass; Vite output includes `demo-dist/index.html` plus public crawler files.
- Demo-dist SEO check: canonical `true`, JSON-LD `true`, OG image `true`, robots `true`, sitemap `true`, llms `true`.
- `npm run smoke:package`: pass; `Package smoke ok: crystal-menu-ui@0.1.1 (74 files)`.
- `git diff --check`: pass.

## Demo Composition Boundary Refactor - 2026-06-10

Outcome: pass.

### Trigger

- Repository review found `src/demo/App.tsx` had grown into a large mixed-responsibility file containing local asset loading, placeholder data, and JSX composition.
- The safe refactor target was to remove data clumps and split section JSX without changing the rendered demo layout.

### Change

- Extracted dev-only local portrait/font loading into `src/demo/localDemoAssets.ts`.
- Extracted demo placeholder data behind `src/demo/demoData.ts` and topic slices under `src/demo/demo-data/`.
- Extracted demo section JSX under `src/demo/sections/`, grouped by menu shell, foundation gallery, equipment, and progression/archive responsibilities.
- Reduced `src/demo/App.tsx` from 862 lines to 22 lines so it only owns preview-mode shell wiring.
- Updated `src/demo/CLAUDE.md`, `src/demo/demo-data/CLAUDE.md`, and `src/demo/sections/CLAUDE.md` to keep the architecture map aligned.

### Evidence

- `npm run typecheck`: pass.
- `npm run audit:docs`: pass; 30 exported components documented.
- `npm run build`: pass.
- `npm run smoke:package`: pass; `Package smoke ok: crystal-menu-ui@0.1.1 (74 files)`.
- `npm run visual:smoke`: pass; screenshots refreshed at `eval/screenshots/desktop-prototypes.png`, `eval/screenshots/mobile-prototypes.png`, and `eval/screenshots/mobile-preview-link-prototypes.png`.
- Browser runtime check: `http://127.0.0.1:5173/` opened with title `crystal-menu-ui 路 Final Fantasy VII Remake-inspired JRPG UI Kit for React / 鏈€缁堝够鎯?VII Remake 椋庢牸 JRPG 缁勪欢搴揱 and exposed `Crystal Menu UI demo` region.
- `git diff --check`: pass.

## CI and Package Consumer Smoke - 2026-06-10

Outcome: pass.

### Trigger

- Repository review found that local quality scripts existed but were not enforced by GitHub Actions.
- Review also found no tarball-level consumer smoke test for ESM, CJS, token, and CSS export resolution.

### Change

- Added `.github/workflows/ci.yml` to run install, typecheck, docs audit, production build, and packed-package smoke checks on pull requests and `main` pushes.
- Added `scripts/package-smoke.mjs`, which runs `npm pack`, installs the tarball into a temporary consumer project, and verifies ESM, CJS, token, and CSS export resolution.
- Added `smoke:package`, `packageManager`, `engines`, and `publishConfig.access` metadata to `package.json`.
- Updated `CLAUDE.md`, `.github/CLAUDE.md`, `.github/workflows/CLAUDE.md`, and `scripts/CLAUDE.md` so the architecture map matches the new CI and QA surfaces.

### Evidence

- `npm run typecheck`: pass.
- `npm run audit:docs`: pass; 30 exported components documented.
- `npm run build`: pass.
- `npm run smoke:package`: pass; `Package smoke ok: crystal-menu-ui@0.1.1 (74 files)`.
- `git diff --check`: pass.

## npm 0.1.1 Release - 2026-06-10

Outcome: pass.

### Trigger

- User approved updating the npm package after README hero, motion showcase, gallery, and Core Highlights image fixes landed in the repository.

### Change

- Bumped `crystal-menu-ui` from `0.1.0` to `0.1.1` in `package.json` and `package-lock.json`.
- Switched README image references to GitHub raw URLs so npm README rendering keeps the visuals without shipping large marketing images in the package tarball.
- Removed `docs/img` from `package.json` `files` so the npm package remains a lean component library package rather than a screenshot archive.

### Evidence

- `npm run audit:docs`: pass; 30 exported components documented.
- `npm run typecheck`: pass.
- `npm pack --dry-run --json`: pass; `crystal-menu-ui@0.1.1`, package size `78.9 kB`, unpacked size `287.9 kB`, total files `74`, `docs/img` excluded.
- `npm view crystal-menu-ui version time.modified --json`: latest version `0.1.1`, modified `2026-06-10T07:24:48.770Z`.
- `npm view crystal-menu-ui@0.1.1 version dist.tarball dist.unpackedSize --json`: tarball `https://registry.npmjs.org/crystal-menu-ui/-/crystal-menu-ui-0.1.1.tgz`, unpacked size `287927`.

## README Feature Image Regeneration - 2026-06-10

Outcome: pass.

### Trigger

- User confirmed the Core Highlights problem came from the generated image itself: the proof strip was clipped inside `feature-onepager.png`, not just by README table layout.

### Change

- Increased feature artboard capture height from `1200x720` to `1200x840` in `scripts/generate-readme-art.mjs`.
- Updated `src/demo/readme-art.less` feature board height/padding to match the new capture size.
- Regenerated `docs/img/feature-onepager.png` and `docs/img/feature-onepager-zh.png`.

### Evidence

- `npm run art:readme`: pass.
- Manual image review: both English and Chinese Core Highlights images now show the bottom proof strip completely.

## README Highlights Layout Fix - 2026-06-10

Outcome: pass.

### Trigger

- User showed that the Core Highlights section still rendered poorly: two wide images in a table were squeezed and visually broken on GitHub.

### Change

- Replaced the two-column highlights image table with two centered full-width image blocks.
- Kept both English and Chinese one-pager images, but removed the fragile table layout.

### Evidence

- README now renders `feature-onepager.png` and `feature-onepager-zh.png` as separate `width="100%"` blocks instead of a compressed table row.

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
- Inserted a `Motion Showcase / 鍔ㄦ晥灞曠ず` README section before the static visual gallery.

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

- Renamed `Star / Share / 浼犳挱` to `Use, Share, or Showcase / 浣跨敤銆佸垎浜垨灞曠ず浣滃搧`.
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
- Added a `Visual Gallery / 瑙嗚鐢诲粖` README section covering Equipment Screen, Materia Growth, Weapon Matrix, Damage Numbers, and Chapter Card.
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
- Kept the package name neutral and preserved the existing Final Fantasy / 鏈€缁堝够鎯?study-positioning language.

### Evidence

- `npm view crystal-menu-ui version name --json`: pass.
- `https://img.shields.io/npm/v/crystal-menu-ui`: resolves to `npm: v0.1.0`.
- `https://img.shields.io/badge/npm-published-cb3837?logo=npm&logoColor=fff&labelColor=222`: static replacement avoids the new-package downloads API gap.

## Summary

Added bilingual `Final Fantasy` / `鏈€缁堝够鎯砢 search keywords and supporting content while preserving the unofficial learning-only boundary. Outcome: pass.

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
  - add Final Fantasy / 鏈€缁堝够鎯?as keywords and content.

## Implementation

- Updated `package.json`:
  - description now includes unofficial Final Fantasy-style UI studies.
  - keywords include `final-fantasy`, `final-fantasy-ui`, `final-fantasy-inspired`, `final-fantasy-remake-ui`, `鏈€缁堝够鎯砢, `鏈€缁堝够鎯?ui`, and `鏈€缁堝够鎯崇粍浠跺簱`.
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
- Ran keyword grep for `Final Fantasy` / `鏈€缁堝够鎯砢: pass; uses are paired with source reference, search intent, or unofficial boundary.

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

Pass. The repository now includes bilingual Final Fantasy / 鏈€缁堝够鎯?search keywords with explicit unofficial learning-only guardrails.

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
- Expanded `AI_USAGE.md` with routing rows, "Use 鈥?for 鈥? lines, import block, and full prop docs for each new component.
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

---

# Evidence Report: SEO Component Index Page

## Summary

Added a dedicated bilingual `components.html` GitHub Pages entry that exposes a searchable component index for AI-ready JRPG React UI use cases in English and Chinese. Outcome: pass.

## Contract

Parent contract: `eval/visual-contract.md`

## Environment

- Workspace: `D:\work\crystal`
- Date context: 2026-06-11 Asia/Shanghai
- Preview URL: `http://127.0.0.1:4178/components.html`

## Implementation

- Added `components.html` with bilingual canonical metadata, Open Graph tags, and valid `CollectionPage` structured data.
- Added `src/demo/ComponentIndexPage.tsx`, `src/demo/componentIndexData.ts`, `src/demo/component-index-main.tsx`, and `src/demo/component-index.less`.
- Reused public design-system components (`MenuPanel`, `GameIcon`, `OrbGem`) and shared tokens rather than hand-rolling a separate visual system.
- Updated `vite.config.demo.ts` to build both `index.html` and `components.html` into `demo-dist/`.
- Added homepage navigation links to the component index, GitHub, and npm through a lightweight demo navigation stylesheet.
- Updated `public/sitemap.xml` so crawlers can discover `components.html`.

## Checks Run

- `npm run typecheck`: pass.
- `npm run build:demo`: pass; generated `demo-dist/components.html`.
- Browser preview: `components.html` loaded with 0 console errors and 0 warnings; JSON-LD parsed successfully.
- DOM check: verified title, canonical URL, meta description, H1, 10 representative component cards, and 31 `lang="zh-CN"` bilingual text nodes.

## Evidence

- Screenshot: `eval/screenshots/component-index-seo-page.png`
- Bilingual screenshot: `eval/screenshots/component-index-bilingual-seo-page.png`

## Final Status

Pass. The public demo now has a focused bilingual SEO/AEO component index entry without adding a new runtime dependency or bypassing the design system.




---

# Evidence Report: Static AI-Readable Component Layer

## Summary

Added a static AI-readable layer for the bilingual component index so crawlers and AI tools can extract component facts without executing React. Outcome: pass.

## Contract

Parent contract: `eval/visual-contract.md`

## Environment

- Workspace: `D:\work\crystal`
- Date context: 2026-06-11 Asia/Shanghai
- Preview URL: `http://127.0.0.1:4178/components.html`

## Implementation

- Added `public/component-index.json`, generated from `src/demo/componentIndexData.ts` by `scripts/generate-component-index-json.mjs`.
- Updated `npm run build:demo` to regenerate the machine-readable component JSON before building GitHub Pages output.
- Added `<noscript>` bilingual component summary to `components.html` for no-JS crawlers and static AI extraction.
- Added `FAQPage` JSON-LD to `components.html` for install/use, unofficial status, asset boundary, and AI component routing questions.
- Added README first-screen links to Live Demo, Component Index, npm, AI Usage, and `component-index.json`.
- Added component index links to root `llms.txt`, deployed `public/llms.txt`, and `public/sitemap.xml`.

## Checks Run

- `npm run typecheck`: pass.
- `npm run build:demo`: pass; regenerated `public/component-index.json` and built `demo-dist/components.html`.
- JSON check: `public/component-index.json` parses, contains 10 representative component entries, and includes EN + `zh-CN` language metadata.
- Browser check: `components.html` loaded with 0 console errors and 0 warnings.
- Browser DOM/fetch check: `/component-index.json` returned 10 components; structured data types were `CollectionPage` and `FAQPage`; `<noscript>` static summary was present.

## Evidence

- Machine-readable data: `public/component-index.json`
- Page evidence: `eval/screenshots/component-index-bilingual-seo-page.png`

## Final Status

Pass. The public demo now exposes component facts through rendered React, static no-JS HTML, JSON-LD FAQ, `llms.txt`, sitemap, and machine-readable JSON.
