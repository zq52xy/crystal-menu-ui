# Module Map: src/styles

## Purpose

Design system token source and global style entry for the component library.

## Members

- `variables.less`: color, typography, spacing, radius, border, and shadow tokens.
- `tokens.ts`: public read-only TypeScript token mirror for AI and app builders.
- `index.less`: global style entry imported by the package.
- `reset.less`: minimal reset.

## Boundaries

- Component-specific styles belong in component CSS modules.
- New visual constants should become tokens before being used across components.
- Keep `variables.less` and `tokens.ts` synchronized when shared token values change.
