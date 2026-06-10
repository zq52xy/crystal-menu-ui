# Module Map: scripts

## Purpose

Repeatable local QA helpers for the component library.

## Members

- `visual-smoke.mjs`: captures desktop and mobile demo screenshots and writes a JSON smoke report.
- `generate-readme-art.mjs`: starts Vite, captures component-rendered README banner and bilingual feature images under `docs/img/`.
- `generate-motion-showcase.mjs`: starts Vite, captures animated component frames, and encodes README motion GIF assets.

## Boundaries

- Scripts may create files under `eval/` and `docs/img/`.
- Scripts must not mutate source components or baselines.
- README art generation must screenshot `readme-art.html` instead of duplicating component styles in raw HTML.
