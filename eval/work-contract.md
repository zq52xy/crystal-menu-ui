# Work Contract: Final Fantasy Search Keywords

## Work Target

Add bilingual `Final Fantasy` / `最终幻想` search keywords and supporting content while preserving the unofficial learning-only boundary.

## Parent Contract

`eval/visual-contract.md`

## Core User Paths

1. GitHub visitors can find the project through `Final Fantasy` / `最终幻想` style UI search terms.
2. npm metadata contains English and Chinese discovery keywords.
3. AI assistants can understand that these terms are search/reference aliases only.
4. Public docs keep the package name neutral and do not imply official affiliation.
5. Rights-boundary docs explicitly allow descriptive search phrases and forbid official ownership/license claims.

## Done Definition

- `package.json` includes Final Fantasy / 最终幻想 discovery keywords.
- README includes a bilingual Search Keywords section.
- `AI_USAGE.md` and `docs/ai-user-guide.md` include search aliases and guardrails.
- `ATTRIBUTION.md` and `docs/copyright-boundary.md` define allowed and forbidden direct-name usage.
- Typecheck, docs audit, package dry-run, and keyword grep pass.
- Evidence report is updated.

## Invariants

- Keep public naming neutral.
- Do not imply official affiliation.
- Do not use official screenshots, icons, textures, exact vector paths, fonts, or remote Figma assets.
- Do not describe the package as official, endorsed, licensed, or containing Final Fantasy assets.
- Direct game names must appear as study/search phrases only.

## Gates

- Read `quality-eval-kit/SKILL.md`.
- Read `quality-eval-kit/templates/MANIFEST.md`.
- Reuse existing `eval/visual-contract.md`.
- Run `npm run typecheck`.
- Run `npm run audit:docs`.
- Run `npm pack --dry-run --json`.
- Grep for `Final Fantasy` / `最终幻想` usage and confirm the disclaimer remains.
- Write evidence report after implementation.

## Evidence Required

`eval/evidence-report.md`

## Human Review

User should review whether the SEO value is worth the remaining trademark-search risk before promoting the repository widely.

## Baseline Policy

Do not weaken attribution or rights-boundary wording to make the keywords more aggressive.
