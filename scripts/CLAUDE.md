# Module Map: scripts

## Purpose

Repeatable local QA helpers for the component library.

## Members

- `visual-smoke.mjs`: captures desktop and mobile demo screenshots and writes a JSON smoke report.

## Boundaries

- Scripts may create files under `eval/`.
- Scripts must not mutate source components or baselines.
