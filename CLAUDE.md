# Project Map: Final Fantasy UI Style Study Kit

## Purpose

This directory contains a learning-only blueprint for a JRPG-style UI component library following a public game-UI component-library method.

## Boundaries

- Treat this as a study project, not a commercial brand package.
- Keep public assets original and de-branded.
- Preserve AI documentation as a first-class surface, equal to the component API.
- Update `eval/visual-contract.md` before implementing visual components.

## Current Modules

- `.github/`: issue and PR templates for community conversion and safe contributions.
- `docs/`: product requirements, source-method mapping, launch materials, and rights boundary.
- `eval/`: visual contract, work contract, and evidence report.
- `skill/`: local AI-assistant instruction draft.
- root docs: AI usage, generation prompt, visual design prompt, README, and `llms.txt` AI citation summary.
- `readme-art.html`: local Vite entry for component-rendered README screenshots.
- `motion-showcase.html`: local Vite entry for component-rendered README motion GIF capture.
- `src/`: React component source, styles, and demo.
- `scripts/`: repeatable QA helpers.

## Next Engineering Track

When implementation starts, mirror the established library code shape:

- `src/index.ts`
- `src/styles/variables.less`
- `src/components/<ComponentName>/`
- `examples/`

Add L3 headers to new source files when code is introduced.

[PROTOCOL]: 变更时更新此头部，然后检查 CLAUDE.md
