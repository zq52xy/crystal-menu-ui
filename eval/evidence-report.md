# Evidence Report: Final Fantasy Search Keywords

## Summary

Added bilingual `Final Fantasy` / `最终幻想` search keywords and supporting content while preserving the unofficial learning-only boundary. Outcome: pass.

## Contract

Parent contract: `eval/visual-contract.md`

Work contract: `eval/work-contract.md`

## Environment

- Workspace: `G:\...\final-fantasy-ui-study`
- Date context: 2026-06-08 Asia/Shanghai
- Node: v24.12.0
- npm: 11.6.2
- Scope: README, package metadata, AI docs, attribution, and rights-boundary docs

## Inputs

- User request:
  - add Final Fantasy / 最终幻想 as keywords and content.

## Implementation

- Updated `package.json`:
  - description now includes unofficial Final Fantasy-style UI studies.
  - keywords include `final-fantasy`, `final-fantasy-ui`, `final-fantasy-inspired`, `final-fantasy-remake-ui`, `最终幻想`, `最终幻想-ui`, and `最终幻想组件库`.
- Updated `README.md`:
  - intro mentions Final Fantasy-inspired JRPG-style UI.
  - added bilingual Search Keywords section with an explicit unofficial/search-intent note.
- Updated `AI_USAGE.md` and `docs/ai-user-guide.md`:
  - added search/discovery aliases.
  - added guardrails that these terms are reference labels only.
- Updated `ATTRIBUTION.md` and `docs/copyright-boundary.md`:
  - allowed descriptive search/reference usage.
  - forbade official ownership, endorsement, or asset-license claims.

## Checks Run

- Read `quality-eval-kit/SKILL.md`.
- Read `quality-eval-kit/templates/MANIFEST.md`.
- Read `ce-work` host shim.
- Ran `npm run typecheck`: pass.
- Ran `npm run audit:docs`: pass; 24 exported components documented.
- Ran `npm pack --dry-run --json`: pass.
- Ran keyword grep for `Final Fantasy` / `最终幻想`: pass; uses are paired with source reference, search intent, or unofficial boundary.

## Package Evidence

`npm pack --dry-run --json` confirms the public metadata and docs are included:

- `README.md` 14628 bytes
- `AI_USAGE.md` 14987 bytes
- `docs/ai-user-guide.md` 4480 bytes
- `docs/tokens.md` 2485 bytes
- `package.json` 2467 bytes

## Rights Boundary

The new keywords and content do not add official screenshots, character art, logos, official fonts, extracted UI cuts, exact source-vector paths, or remote Figma assets. Direct names are framed as study/search references only.

## Human Review

User should review whether the added SEO value is worth the remaining trademark-search risk before promoting the repository widely.

## Final Status

Pass. The repository now includes bilingual Final Fantasy / 最终幻想 search keywords with explicit unofficial learning-only guardrails.

---

# Evidence Report: Optima Display Stack & Six New JRPG Components

## Summary

Switched the display font stack to lead with `Optima` for a humanist-serif feel that matches the FFVII Remake reference language, then added six new components (`DamageNumber`, `LimitGauge`, `ChapterIntroCard`, `ChapterEndCard`, `MateriaGrowthTree`, `WeaponUpgradeMatrix`) to close the largest remaining structural gaps in the source-method roadmap. Outcome: pass.

## Contract

Parent contract: `eval/visual-contract.md`

Work contract: `eval/work-contract.md`

## Environment

- Workspace: `D:\work\crystal`
- Date context: 2026-06-08 Asia/Shanghai
- Node: v24.x
- Branch: `feat/optima-font-and-abdef-components`

## Inputs

- User request:
  - lead the display font stack with Optima with a Georgia-ending fallback for unlicensed environments,
  - implement candidates A (Materia growth), B (Limit gauge), D (Weapon SP matrix), E (Chapter intro / end cards), and F (Damage numbers).

## Implementation

### Display font stack

- Updated `src/styles/variables.less` `@crystal-font-display` to:
  `"Optima", "Optima Nova", "Linotype Optima", Optima-Regular, "URW Classico", "Charter", Georgia, "Times New Roman", serif`.
- Mirrored into `src/styles/tokens.ts` `crystalTokens.font.display`.
- Documented stack rationale and licensing posture in `docs/tokens.md`, `ATTRIBUTION.md`, and `docs/copyright-boundary.md`. The library does not bundle or self-host any Optima font file; the stack is a CSS hint only.

### New components

- `DamageNumber`: floating combat damage indicator with rise-and-fade animation; tones cover normal, critical, heal, magic, guard, and miss; supports an element/weakness chip via the `tag` prop.
- `LimitGauge`: segmented limit gauge with a level pip, animated fill, ready pulse, and gold/crimson/cyan tones; `ready` is auto-detected at 100% when not supplied.
- `ChapterIntroCard`: cinematic chapter-opening title card with rule-line title row, location frame, dossier rows, and an entrance animation that respects `prefers-reduced-motion`.
- `ChapterEndCard`: cinematic chapter-results card with ledger-style stat rows (with optional highlight emphasis) and a rewards list.
- `MateriaGrowthTree`: AP-progress panel with a tone-aware orb core, conic AP-progress ring, segmented level pip strip, and an ability list with locked / ready / unlocked states.
- `WeaponUpgradeMatrix`: SP-grid weapon upgrade matrix with diamond nodes, SVG-rendered node connections, locked / available / unlocked / selected states, kind tones (core / attack / magic / support / unique), and a side detail panel.

### Demo and docs

- Wired all six new components into `src/demo/App.tsx` with original placeholder data; added matching layout rules in `src/demo/demo.less` (limit gauges row, damage stage, materia row).
- Re-exported the components and their types from `src/index.ts`.
- Updated `src/components/CLAUDE.md`, `docs/requirements.md`, `docs/figma-coverage-matrix.md`, and `eval/visual-contract.md` to list the new components.
- Expanded `AI_USAGE.md` with routing rows, "Use … for …" lines, import block, and full prop docs for each new component.
- Updated `README.md` component map to "30 components" with the new `Combat / Feedback`, `Chapter / Cinematic`, and expanded `Status / HUD` and `Equipment / Orbs` rows.

## Files Changed

- `src/styles/variables.less`, `src/styles/tokens.ts`
- `src/index.ts`
- `src/components/CLAUDE.md`
- `src/components/{DamageNumber,LimitGauge,ChapterIntroCard,ChapterEndCard,MateriaGrowthTree,WeaponUpgradeMatrix}/*` (new)
- `src/demo/App.tsx`, `src/demo/demo.less`
- `AI_USAGE.md`, `README.md`, `ATTRIBUTION.md`
- `docs/tokens.md`, `docs/requirements.md`, `docs/copyright-boundary.md`, `docs/figma-coverage-matrix.md`
- `eval/visual-contract.md`
- `eval/screenshots/*` (refreshed by `visual:smoke`)

## Checks Run

- `npm run typecheck`: pass.
- `npm run audit:docs`: pass; 30 exported components documented (was 24 before).
- `npm run visual:smoke`: pass; desktop / mobile / mobile-preview-link, zero console / page errors.

## Backwards Compatibility

- All existing component APIs unchanged.
- Public API surface grows additively: six new components, no removals or renames.
- Display font stack now leads with Optima; environments without Optima fall back along the original chain ending in Georgia.

## Rights Boundary

- The package does not bundle or self-host any Optima font file. The CSS stack references Optima as a stack hint only.
- All six new components render their visuals from CSS, SVG, and inline shapes; no official screenshots, character art, fonts, or remote Figma assets were added.
- `ATTRIBUTION.md` and `docs/copyright-boundary.md` updated to call out the stack-hint vs binary-redistribution distinction.

## Final Status

Pass. The library now ships an Optima-led display stack and six FFVII Remake-language components covering the largest remaining structural gaps: floating damage numbers, limit-break gauges, chapter open/close cards, materia AP growth panels, and a weapon SP upgrade matrix.
