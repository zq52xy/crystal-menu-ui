# Work Contract: README Visual Assets

## Work Target

Replace the current README screenshot-led opening with original marketing art: one banner header image and two bilingual core-highlight images.

## Parent Contract

`eval/visual-contract.md`

## Core User Paths

1. GitHub visitors see a polished banner before the preview links.
2. English readers can scan the feature one-pager quickly.
3. Chinese readers can scan the Chinese feature one-pager quickly.
4. The images communicate component count, AI docs, tokens, original visuals, preview, and rights boundary.
5. The assets remain original and do not use official screenshots, logos, characters, fonts, extracted UI cuts, or remote Figma assets.

## Done Definition

- `docs/img/banner.png` exists and is referenced by README.
- `docs/img/feature-onepager.png` exists and is referenced by README.
- `docs/img/feature-onepager-zh.png` exists and is referenced by README.
- A repeatable generator script exists.
- README no longer uses the demo screenshot as the top showcase banner.
- Scripts/docs module maps are updated.
- Typecheck, docs audit, README image-path check, and package dry-run pass.
- Evidence report is updated.

## Invariants

- Keep public naming neutral.
- Do not imply official affiliation.
- Do not use official screenshots, icons, textures, exact vector paths, fonts, or remote Figma assets.
- Keep image text readable at GitHub README scale.
- Generated assets must be committed as ordinary repo assets, not build outputs.

## Gates

- Read `quality-eval-kit/SKILL.md`.
- Read `quality-eval-kit/templates/MANIFEST.md`.
- Reuse existing `eval/visual-contract.md`.
- Generate original assets under `docs/img/`.
- Inspect generated images visually.
- Run `npm run typecheck`.
- Run `npm run audit:docs`.
- Run `npm pack --dry-run --json`.
- Write evidence report after implementation.

## Evidence Required

`eval/evidence-report.md`

## Human Review

User should review the banner and feature images for launch taste before treating them as final social-preview material.

## Baseline Policy

No visual baseline may be refreshed to hide a regression. README marketing images are public assets, not test baselines.
