# Attribution

This project is an unofficial learning-only component study kit. It is not affiliated with, endorsed by, sponsored by, or connected to Square Enix or any Final Fantasy publisher, owner, or rights holder.

## Method Sources

- Public game-UI component-library patterns informed the packaging, preview, AI documentation, prompt files, local skill rules, attribution boundaries, demo build flow, and audit scripts.
- Public source-method patterns informed the AI-consumable component docs and demo-driven library structure.

## Design Reference Boundary

The local library studies broad JRPG menu language: dark glass panels, cyan line work, compact status density, resource meters, command rows, profile screens, and save/load flows.

The package must not include official assets, extracted screenshots, exact vector paths, official fonts, character art, logos, music, marks, names, or remote Figma assets.

## Public Naming

Use neutral package names such as `crystal-menu-ui`, `fantasy-rpg-ui-study`, or `jrpg-menu-ui`.

Direct game names such as `Final Fantasy` / `最终幻想` may appear only as descriptive search and study-reference phrases, for example `Final Fantasy UI study` or `最终幻想风格菜单组件`, and must stay paired with the unofficial, learning-only boundary.

## Fonts

The package does not bundle or self-host any commercial font file. The display token references `Optima` (Linotype/Monotype) as the first preference in a CSS fallback chain that ends at `Georgia`, so apps that already have Optima installed system-wide use it, and apps that do not are served Georgia instead. The `Optima` reference is a stack hint only; it is not a redistribution. Consuming applications are responsible for their own font licensing if they choose to bundle or self-host Optima.
