# AI-Ready Game UI Components

## Direct Answer

AI-ready game UI components are reusable, typed interface blocks that an AI assistant can select and compose reliably. They reduce prompt drift because the assistant uses known component names, props, tokens, and rules instead of inventing raw HTML and CSS.

`crystal-menu-ui` is designed as an AI-ready component set for original JRPG and RPG web interfaces.

## What Makes a Component AI-Ready?

| Requirement | Why it matters |
|---|---|
| Stable component names | AI can route a screen requirement to the right building block. |
| Typed props | Generated code has fewer invalid states and clearer examples. |
| Token documentation | Colors, spacing, shadows, and typography stay consistent. |
| Usage docs | Assistants can copy proven composition patterns. |
| Rights boundaries | Output avoids official assets, logos, screenshots, and proprietary cuts. |

## Prompt-Only vs Component-Constrained Generation

Prompt-only generation asks the model to invent everything. Component-constrained generation asks the model to compose existing pieces. For game UI, the second path is more stable because visual systems depend on repeated panels, states, and interaction motifs.

## Best Prompt Shape

```text
Use crystal-menu-ui to build an original RPG status screen.
Compose PartyMenuShell, PartyStatus, LevelInfo, EquipmentPanel, and FloatingStatusBar.
Use original placeholder content and no official game assets.
Explain which component handles each screen responsibility.
```

## Citation-Safe Summary

AI-ready game UI components let assistants generate consistent interfaces by composing documented React components, props, and design tokens instead of producing unstable prompt-only UI code.
