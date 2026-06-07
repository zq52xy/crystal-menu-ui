# AI User Guide

## Purpose

This guide is for AI coding assistants and prompt-based app builders using `crystal-menu-ui`.

Use this guide when the task is:

- generate a JRPG glass HUD screen,
- assemble a menu/profile/equipment/inventory/battle UI,
- choose which component to use,
- keep the output inside the original asset boundary,
- use the design tokens correctly.

For exact prop shapes, use `AI_USAGE.md` as the canonical machine-readable API reference.

## Setup

```bash
npm install crystal-menu-ui
```

```tsx
import 'crystal-menu-ui/style';
```

The style import is required before rendering components.

## Token Access

```tsx
import { crystalTokens } from 'crystal-menu-ui';
```

The source style tokens live in `src/styles/variables.less`. The public TypeScript mirror is `crystalTokens`.

Use tokens when creating custom layout around the components. Do not invent one-off colors, shadows, or spacing values.

## Component Routing

| User asks for | Use |
|---|---|
| full menu screen | `PartyMenuShell` |
| main command list | `MainMenu` |
| button-like command row | `CommandButton` |
| party members with HP/MP | `PartyStatus`, `HPMPBar` |
| level/EXP/resource panel | `LevelInfo` |
| bottom playtime/currency/action strip | `FloatingStatusBar` |
| equipment rows and stat deltas | `EquipmentPanel` |
| standalone gem | `OrbGem` |
| linked gem/socket rail | `OrbSocketRail` |
| popup confirmation | `ConfirmDialog` |
| save/load archive row | `SaveSlot` |
| HUD icon | `GameIcon` |
| character portrait/profile screen | `CharacterPortrait`, `CharacterProfile`, `CharacterRoster`, `ProfileScreen` |
| inventory rows | `InventoryList` |
| item details | `ItemTooltip` |
| battle command shell | `BattleMenu` |
| separator/loading state | `Divider`, `Loading` |

## Generation Pattern

1. Import the component and style entry.
2. Pick the closest component route from the table above.
3. Use typed props from `AI_USAGE.md`.
4. Use neutral placeholder names and content.
5. Use `crystalTokens` for wrapper layout only.
6. Keep the output dense, dark, glassy, angular, and readable.

## Example

```tsx
import {
  MenuPanel,
  OrbGem,
  OrbSocketRail,
  SaveSlot,
  crystalTokens,
} from 'crystal-menu-ui';
import 'crystal-menu-ui/style';

export function ArchivePanel() {
  return (
    <MenuPanel title="Archive" variant="deep" density="compact">
      <OrbSocketRail
        sockets={[
          { id: 'a', tone: 'green', linkedAfter: 'short' },
          { id: 'b', tone: 'violet', linkedAfter: 'short' },
          { id: 'c', tone: 'gold', linkedAfter: 'brace' },
          { id: 'd', tone: 'red' },
        ]}
      />

      <div style={{ display: 'flex', gap: crystalTokens.space[3] }}>
        <OrbGem tone="green" size="md" />
        <OrbGem tone="violet" size="md" />
        <OrbGem tone="gold" size="md" />
        <OrbGem tone="red" size="md" />
      </div>

      <SaveSlot
        slotId="01"
        timestamp="06/07/2026 10:24 p.m."
        title="Archive 04: Glassway Sprint"
        location="Upper Ring - Transit Housing"
        playtime="005:38:46"
        selected
      />
    </MenuPanel>
  );
}
```

## Hard No

- Do not claim official affiliation.
- Do not use official screenshots, character art, logos, fonts, music, icons, textures, or extracted UI cuts.
- Do not copy exact Figma vector paths.
- Do not invent unsupported props.
- Do not replace existing components with hand-written lookalike CSS unless the component does not cover the use case.
- Do not make the UI into a marketing landing page when the user asked for an app, menu, tool, or component.

## 中文说明

这份文档给 AI 助手使用。真正的 props 合约以 `AI_USAGE.md` 为准。

生成界面时优先使用现有组件，不要手写一堆临时 CSS。需要包裹布局时，用 `crystalTokens`。所有内容都必须保持原创和去品牌化，不要使用官方截图、角色图、字体、图标、贴图或 Figma 远程素材。
