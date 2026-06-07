# Work Contract: README Format Alignment

## Work Target

Rewrite the public README to follow the requested component-library README format: centered header, badges, bilingual intro, important rights boundary, showcase image, bilingual preview bullets, highlights, installation, quick start, AI docs, component table, design tokens, tech stack, local development, contributing, credits, and license.

## Parent Contract

`eval/visual-contract.md`

## Core User Paths

1. GitHub visitors can understand the package value above the fold.
2. Readers can find PC and mobile online preview links immediately.
3. Readers can identify the source Figma component library.
4. AI users can find AI usage docs, prompts, and token docs.
5. Component consumers can see the 24-component map and design tokens without opening source code.
6. Public wording stays neutral and does not present external repositories as benchmarks.

## Done Definition

- README uses the requested reference-style section order and mixed English/Chinese structure.
- README includes badges, important boundary block, showcase image, dual preview lists, highlights table, installation, quick start, AI docs, components, tokens, tech stack, local development, contributing, credits, and license.
- README says the source is the Figma component library.
- Public method/attribution docs do not expose external repository names.
- README image paths exist.
- Docs audit and typecheck pass.
- Evidence report is updated.

## Invariants

- Keep public naming neutral.
- Do not imply official affiliation.
- Do not use official screenshots, icons, textures, exact vector paths, fonts, or remote Figma assets.
- Do not add fake package repository metadata to `package.json`.
- If Pages URLs are not live yet, say they become active after deployment.

## Gates

- Read `quality-eval-kit/SKILL.md`.
- Read `quality-eval-kit/templates/MANIFEST.md`.
- Reuse existing `eval/visual-contract.md`.
- Fetch and inspect the requested README format from the provided GitHub repository.
- Rewrite README without copying project-specific claims from the reference.
- Check README image paths.
- Check public docs for external repository names.
- Run `npm run typecheck`.
- Run `npm run audit:docs`.
- Write evidence report after implementation.

## Evidence Required

`eval/evidence-report.md`

## Human Review

User should confirm whether the final public repository slug stays `crystal-menu-ui`; if it changes, update the GitHub Pages, npm, and stars badge links.

## Baseline Policy

No visual baseline may be refreshed to hide a regression. This work changes public documentation format only.
