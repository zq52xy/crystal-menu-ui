# Roadmap

`crystal-menu-ui` is focused on becoming a practical, AI-ready React component system for original JRPG glass HUD interfaces.

This roadmap is intentionally small and contributor-friendly. It favors runnable examples, safe reuse patterns, accessibility, and showcase surfaces over adding components without a clear user path.

## Now

These items are scoped for short public contribution loops.

| Priority | Track | Outcome |
|---|---|---|
| P0 | Examples | Add a Next.js basic example that mirrors the Vite example and proves package usage in an app-router project. |
| P0 | Examples | Add a battle screen example that combines battle commands, gauges, party status, damage numbers, and safe placeholder data. |
| P1 | Docs | Add keyboard navigation docs for menu, list, dialog, and command-style components. |
| P1 | Docs | Add theme preset docs for dark, bright, high-contrast, and reduced-motion reuse. |
| P1 | Community | Add a community showcase page that can link to user builds, screenshots, and AI-generated screens safely. |

## Next

- Add small integration examples for common host app patterns.
- Expand `docs/screen-presets.md` with more copy-paste compositions.
- Improve accessibility notes for focus order, keyboard selection, and motion preferences.
- Add contribution notes for visual evidence, screenshot review, and rights-safe demo assets.

## Later

- Explore Storybook or a similar component playground if it stays lightweight.
- Add theme token export examples for app-level customization.
- Add more AI prompt recipes that constrain layouts to public component props.
- Add optional visual-regression checks for the flagship demo surfaces.

## Contribution Rules

- Keep examples original and de-branded.
- Do not add official screenshots, logos, characters, fonts, textures, or extracted assets.
- Use public package exports in examples.
- Prefer small PRs with one clear outcome.
- Include screenshots for visible UI changes and command output for build/docs checks.

## Good First Issues

The current starter issue set should stay small:

- [Add Next.js basic example](https://github.com/zq52xy/crystal-menu-ui/issues/4)
- [Add battle screen example](https://github.com/zq52xy/crystal-menu-ui/issues/5)
- [Add keyboard navigation docs](https://github.com/zq52xy/crystal-menu-ui/issues/6)
- [Add theme preset docs](https://github.com/zq52xy/crystal-menu-ui/issues/7)
- [Add community showcase page](https://github.com/zq52xy/crystal-menu-ui/issues/8)

Each issue should include scope, acceptance criteria, files likely to change, and verification commands.
