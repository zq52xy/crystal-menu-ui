---
name: jrpg-blue-menu-ui
description: Build original learning-only JRPG blue menu UI components and demos, following a source-method component-library workflow.
argument-hint: "[component, demo, or documentation task]"
---

# JRPG Blue Menu UI Skill

Use this skill when creating or editing the local JRPG blue menu UI study kit.

## Hard Rules

- This is learning-only and non-official.
- Do not use official game assets, logos, screenshots, fonts, icons, music, or textures.
- Keep public naming neutral.
- Follow token-first component design.
- Update `AI_USAGE.md` when component API changes.
- Update `eval/visual-contract.md` if visual quality rules change.

## Visual Language

- Dark glass panels.
- Thin cyan borders.
- White primary text.
- Cyan highlight.
- Dense status tables.
- Compact command lists.
- Angular level and resource guide lines.
- Prototypes-style main menu rows with pulsing selection.
- Bottom floating status/action metadata.
- Original ornaments and symbols.
- Original icon vectors for combat, stats, equipment, time, currency, and summon categories.

## Component Naming

Implemented component names:

- `CommandButton`
- `MenuPanel`
- `DialogueBox`
- `PartyStatus`
- `HPMPBar`
- `LevelInfo`
- `MainMenu`
- `FloatingStatusBar`
- `EquipmentPanel`
- `OrbGem`
- `OrbSocketRail`
- `PartyMenuShell`
- `ConfirmDialog`
- `SaveSlot`
- `GameIcon`
- `CharacterProfile`
- `CharacterPortrait`
- `CharacterRoster`
- `ProfileScreen`
- `Divider`
- `Loading`
- `InventoryList`
- `ItemTooltip`
- `BattleMenu`

Planned component names:

- None in the current source-method roadmap.

## Implementation Shape

When code begins, mirror the source method:

- `src/index.ts`
- `src/styles/variables.less`
- `src/components/<ComponentName>/index.tsx`
- `src/components/<ComponentName>/<ComponentName>.less`
- `examples/`

Each component needs:

- props,
- visual states,
- compact example,
- accessibility note,
- AI usage example,
- anti-example.
