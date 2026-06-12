# Work Contract: Runnable Vite Example Pass

## Work Target

Add a minimal, runnable Vite example so first-time visitors can install, inspect, and run `crystal-menu-ui` from a real app entry point without relying on the full demo site or prebuilt package output.

## Parent Contract

`eval/visual-contract.md`

## Core User Paths

1. GitHub visitors can find a runnable Vite example from the README first screen.
2. Builders can run `npm install` and `npm run dev` inside the example after cloning the repository.
3. Maintainers can typecheck and build the example without changing package exports or visual baselines.

## Done Definition

- `examples/vite-basic` exists as a self-contained Vite + React + TypeScript app.
- The example imports `crystal-menu-ui` through package-like imports and uses source aliases only for local repository development.
- The example renders a useful command/status composition using existing public components.
- The example includes concise run instructions.
- Root README links to the runnable example.
- Module maps include the new example surface.
- Root typecheck, docs audit, and example build pass.
- Evidence report is updated with commands, outputs, and remaining human-review items.

## Invariants

- Keep public package naming neutral.
- Do not imply official affiliation, endorsement, license, or ownership.
- Do not add official screenshots, icons, textures, vector paths, fonts, logos, characters, or remote Figma assets.
- Preserve original CSS/SVG and learning-only framing.
- Do not change component behavior or public exports in this pass.
- Do not require a published npm install to run the local repository example.

## Gates

- Read `quality-eval-kit/SKILL.md`.
- Read `quality-eval-kit/templates/MANIFEST.md`.
- Reuse existing `eval/visual-contract.md`.
- Use Context7 for current Vite configuration guidance.
- Run `npm run typecheck`.
- Run `npm run audit:docs`.
- Run example dependency install.
- Run example TypeScript check.
- Run example production build.
- Review changed docs for unsafe official-affiliation wording.
- Write evidence report after implementation.

## Evidence Required

`eval/evidence-report.md`

## Human Review

User should run the example locally if they want to judge first-run DX and visual appeal before promoting it as a community entry point.

## Baseline Policy

No visual baseline should be refreshed in this pass. If the example becomes a visual baseline later, screenshot evidence and human visual review are required before accepting it.
