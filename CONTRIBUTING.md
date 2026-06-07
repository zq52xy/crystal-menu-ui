# Contributing

This project is a learning-only JRPG HUD component library. Contributions must keep the package original, neutral, and safe for public reuse.

## Rules

- Do not add official game assets, screenshots, logos, fonts, icons, music, character art, or extracted UI cuts.
- Do not add remote Figma asset URLs to source code.
- Use shared tokens from `src/styles/variables.less`.
- Update `AI_USAGE.md` when public component props change.
- Update `eval/visual-contract.md` when visual quality rules change.
- Add or update evidence in `eval/evidence-report.md` after visible UI changes.

## Checks

Run these before handing off:

```bash
npm run typecheck
npm run build
npm run visual:smoke
npm run audit:docs
```

## Component Shape

Each component should have:

- `ComponentName.tsx`
- `component-name.module.less`
- `index.ts`
- public exports from `src/index.ts`
- an entry in `src/components/CLAUDE.md`
- matching AI usage docs
