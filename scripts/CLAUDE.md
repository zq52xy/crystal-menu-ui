# Module Map: scripts

## Purpose

Repeatable local QA helpers for the component library.

## Members

- `visual-smoke.mjs`: captures desktop and mobile demo screenshots and writes a JSON smoke report.
- `generate-readme-art.mjs`: generates original README banner and bilingual feature images under `docs/img/`.

## Boundaries

- Scripts may create files under `eval/` and `docs/img/`.
- Scripts must not mutate source components or baselines.
