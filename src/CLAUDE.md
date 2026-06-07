# Module Map: src

## Purpose

Source code for the React component library and local demo.

## Members

- `index.ts`: public package entry and exports.
- `styles/`: design tokens, reset, and global style entry.
- `components/`: reusable JRPG menu components.
- `demo/`: Vite local demo app for visual QA.

## Boundaries

- Components must use shared Less variables from `styles/variables.less`.
- Public exports must stay synchronized with `AI_USAGE.md`.
- Demo code must not introduce official assets or brand marks.
