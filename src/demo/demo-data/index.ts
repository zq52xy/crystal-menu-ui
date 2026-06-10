// [PROTOCOL]: Change this header when demo data module exports change, then check CLAUDE.md.
// INPUT: Topic-specific demo data slices.
// OUTPUT: Barrel exports consumed by src/demo/demoData.ts.
// POS: Internal data boundary; prevents App.tsx from depending on slice file layout.
export * from './core';
export * from './equipment';
export * from './combat';
export * from './progression';
