# Work Contract: Star Growth Conversion Pass

## Work Target

Improve the public repository surface so first-time visitors can quickly understand, try, share, and star `crystal-menu-ui` without weakening the unofficial learning-only boundary.

## Parent Contract

`eval/visual-contract.md`

## Core User Paths

1. GitHub visitors can identify the package value, preview the visual result, install it, and find a copy-paste example within the README first screen.
2. Builders and AI users can choose from concrete screen presets instead of assembling every component from scratch.
3. Maintainers can run a repeatable launch plan with safe positioning, social copy, and measurable star-growth checkpoints.

## Done Definition

- README lead is repositioned around "AI-ready React components for JRPG glass HUD interfaces".
- README contains install/import usage, quick component example, screen preset links, live demo links, and a Star/Share CTA before long-form background.
- A local screen preset guide exists with 3-5 concrete recipes and safe reuse notes.
- Launch/growth docs explain priority actions, channel order, release angle, and ethical constraints.
- Docs module map includes any new documentation surface touched by this work.
- Typecheck and docs audit pass.
- Evidence report is updated with commands, outputs, and remaining human-review items.

## Invariants

- Keep public package naming neutral.
- Do not imply official affiliation, endorsement, license, or ownership.
- Do not add official screenshots, icons, textures, vector paths, fonts, logos, characters, or remote Figma assets.
- Preserve original CSS/SVG and learning-only framing.
- Do not change component behavior in this pass.

## Gates

- Read `quality-eval-kit/SKILL.md`.
- Read `quality-eval-kit/templates/MANIFEST.md`.
- Reuse existing `eval/visual-contract.md`.
- Run `npm run typecheck`.
- Run `npm run audit:docs`.
- Run `npm pack --dry-run --json`.
- Review changed docs for unsafe official-affiliation wording.
- Write evidence report after implementation.

## Evidence Required

`eval/evidence-report.md`

## Human Review

User should review the final README tone, launch copy, and whether the FF7-inspired search language remains worth the trademark/search tradeoff before wide promotion.

## Baseline Policy

No visual baseline should be refreshed in this pass. If visual assets are changed later, screenshot evidence and human visual review are required before accepting the new baseline.
