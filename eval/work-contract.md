# Work Contract: Roadmap and Good First Issues Pass

## Work Target

Add a public roadmap and starter issue set so first-time visitors can see where `crystal-menu-ui` is going, identify low-risk contribution entry points, and trust that the project is actively maintained.

## Parent Contract

`eval/visual-contract.md`

## Core User Paths

1. GitHub visitors can find the roadmap from the README first screen.
2. Contributors can open a small, scoped Good First Issue with clear acceptance criteria.
3. Maintainers can keep the roadmap aligned with examples, accessibility, documentation, and showcase priorities.

## Done Definition

- `ROADMAP.md` exists with short-term, next, and later priorities.
- README links to `ROADMAP.md` from the first screen / Start Here area.
- Root project map includes the roadmap surface.
- Five GitHub issues exist with `good first issue` labels and clear acceptance criteria.
- Issue topics cover Next.js example, battle screen example, keyboard navigation docs, theme preset docs, and community showcase page.
- Root typecheck and docs audit pass.
- Evidence report is updated with commands, outputs, and remaining human-review items.

## Invariants

- Keep public package naming neutral.
- Do not imply official affiliation, endorsement, license, or ownership.
- Do not add official screenshots, icons, textures, vector paths, fonts, logos, characters, or remote Figma assets.
- Preserve original CSS/SVG and learning-only framing.
- Do not change component behavior or public exports in this pass.
- Do not overpromise timelines, sponsorship, official affiliation, or guaranteed contributor response.
- Do not create duplicate open issues.

## Gates

- Read `quality-eval-kit/SKILL.md`.
- Read `quality-eval-kit/templates/MANIFEST.md`.
- Reuse existing `eval/visual-contract.md`.
- Verify existing open issues before creating starter issues.
- Verify available GitHub labels before assigning labels.
- Run `npm run typecheck`.
- Run `npm run audit:docs`.
- Run `git diff --check`.
- Review changed docs for unsafe official-affiliation wording.
- Write evidence report after implementation.

## Evidence Required

`eval/evidence-report.md`

## Human Review

User should review whether the roadmap priority order matches the intended public positioning before pinning or promoting issues.

## Baseline Policy

No visual baseline should be refreshed in this pass. Issue and roadmap evidence are delivery artifacts, not visual baselines.
