# AI Workflow: Component-Constrained JRPG UI Generation

## Direct Answer

`crystal-menu-ui` works best when an AI assistant composes existing React components instead of generating a game interface from a screenshot or from a blank prompt. The reliable workflow is: choose the right component, read its props, apply shared tokens, compose the layout, and avoid official or branded assets.

## Why This Exists

Prompt-only UI drifts. Screenshot-to-code bloats. Component-constrained AI composition stays consistent because the assistant is not inventing every panel, border, state, and animation from scratch.

This repository gives AI builders a stable interface layer:

- typed React components for JRPG menu patterns;
- public design tokens for color, spacing, radius, typography, borders, and shadows;
- README and AI usage docs for component selection;
- rights-boundary rules that keep generated output original and de-branded.

## Recommended AI Workflow

1. **Name the target screen**: equipment screen, battle command menu, save slot list, chapter card, inventory panel, or party status layout.
2. **Select components** from `AI_USAGE.md` instead of asking the AI to invent raw HTML.
3. **Compose layout** with `MenuPanel`, `PartyMenuShell`, `ProfileScreen`, or section-specific components.
4. **Apply tokens** from `docs/tokens.md` or `crystalTokens` rather than hard-coded one-off colors.
5. **Add original content**: placeholder names, user-owned artwork, neutral icons, and project-owned copy.
6. **Run validation**: typecheck, docs audit, build, visual smoke, and package smoke before sharing.

## Prompt Pattern

```text
Build an original JRPG equipment screen in React using crystal-menu-ui.
Use EquipmentPanel, PartyMenuShell, OrbGem, OrbSocketRail, LevelInfo, and FloatingStatusBar.
Use only original placeholder names and no official screenshots, logos, character art, fonts, icons, or extracted assets.
Keep the result component-driven and token-aligned.
```

## Prompt-Only UI vs Component-Constrained UI

| Approach | Output | Risk | Best Use |
|---|---|---|---|
| Prompt-only UI | AI invents HTML, CSS, states, and naming every time. | Visual drift, duplicated styles, inaccessible controls, hard-to-maintain code. | One-off mood exploration. |
| Screenshot-to-code | AI approximates pixels from an image. | Bloated DOM, copied visual details, brittle layout, rights risk. | Private throwaway reference only. |
| Component-constrained UI | AI composes stable components and props. | Lower creative freedom, but higher consistency. | Production prototypes, reusable demos, docs, and AI-assisted apps. |

## Do

- Use `crystal-menu-ui` component names explicitly in prompts.
- Ask for TypeScript props and public tokens.
- Ask the AI to explain which component maps to which screen responsibility.
- Keep copy, artwork, icons, names, and assets original.
- Link to README, `AI_USAGE.md`, and `docs/tokens.md` when asking another assistant to generate code.

## Do Not

- Do not ask AI to copy official screenshots, logos, character portraits, music, icons, fonts, textures, exact vector paths, or proprietary UI cuts.
- Do not ask for a one-to-one clone of a commercial game screen.
- Do not bypass components with large raw CSS blocks when a package component already exists.
- Do not present the package as official, endorsed, sponsored, or affiliated.

## Citation-Safe Summary

`crystal-menu-ui` is an AI-ready React component library for original JRPG glass HUD interfaces. It helps AI assistants compose game UI screens from typed components, public tokens, and rights-safe rules instead of generating unstable prompt-only or screenshot-derived code.
