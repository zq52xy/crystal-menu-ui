# GitHub Settings Checklist

## Purpose

These settings turn the repository surface into a clearer discovery and star-conversion funnel after the local changes are pushed.

## About Box

- Description: `AI-ready React components for original JRPG glass HUD interfaces.`
- Website: `https://zq52xy.github.io/crystal-menu-ui/`
- Topics: `react`, `typescript`, `component-library`, `game-ui`, `jrpg`, `rpg-ui`, `design-system`, `ai-ready`, `vite`.
- Include in the sidebar: Releases, Packages, Deployments if available.

## Social Preview

Upload `docs/img/banner.png` in GitHub repository settings as the social preview image.

Why this image:

- It communicates the product name in large type.
- It shows real component output, not a logo-only card.
- It says `30 components`, matching the current README and component audit.
- It avoids official assets and stays within the rights boundary.

## Pinned Issue

Create and pin a roadmap issue titled:

`Roadmap: examples, themes, accessibility, and more JRPG screens`

Suggested body:

```md
Thanks for checking out crystal-menu-ui.

Current focus:

- Add example pages: main menu, equipment screen, archive/load screen, profile screen, battle command screen.
- Add theme presets and token docs.
- Improve mobile layouts and accessibility states.
- Collect showcases from people using the package.

If you build something with the library, please open a Showcase issue.
```

## First Release

Create release `v0.1.0` with title:

`v0.1.0 - 30 AI-ready JRPG glass HUD components`

Suggested body:

```md
crystal-menu-ui v0.1.0 ships 30 React + TypeScript components for original JRPG glass HUD interfaces.

Highlights:

- Equipment Screen hero composition
- Materia Growth panels
- Weapon Upgrade Matrix
- Limit Gauges and Damage Numbers
- Chapter intro / results cards
- AI_USAGE component contract
- README visual gallery and social banner

Install:

npm install crystal-menu-ui

Demo: https://zq52xy.github.io/crystal-menu-ui/
Docs: https://github.com/zq52xy/crystal-menu-ui#readme
```

Attach or embed:

- `docs/img/readme-hero-equipment.png`
- `docs/img/banner.png`
- `docs/img/gallery-equipment-screen.png`

## Good First Issues

Create 5 starter issues:

1. `Add archive/load screen example page`
2. `Add battle command screen example page`
3. `Improve keyboard navigation notes in AI_USAGE.md`
4. `Add theme preset docs for darker / brighter HUD variants`
5. `Add showcase screenshots from community-built screens`

Labels:

- `good first issue`
- `documentation`
- `example`
- `accessibility`
- `showcase`

## Weekly Growth Ritual

- Monday: post one screenshot and one implementation note.
- Wednesday: answer issues and invite one showcase.
- Friday: ship one small docs/example improvement and update release notes.

## Success Signals

- README visitors click live demo.
- Users open Showcase issues.
- First external PR uses the PR template without rights-boundary cleanup.
- Stars grow from organic dev/design/game UI communities, not exchange groups.

[PROTOCOL]: 变更时更新此头部，然后检查 CLAUDE.md
