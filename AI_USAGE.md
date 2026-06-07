# AI Usage: JRPG Remake Glass HUD Study Kit

Use this library as a learning-only JRPG menu component system. Do not claim affiliation with any game publisher or use official assets.

> FOR AI CODE ASSISTANTS: This file is the canonical machine-readable reference for generating code with `crystal-menu-ui`. Prefer this file over README prose. Do not invent components, props, token names, official assets, or brand claims.

## 0. Setup

```bash
npm install crystal-menu-ui
```

```tsx
import 'crystal-menu-ui/style';
```

The style import is required before rendering components. Peer requirements:

```text
react      >= 18.0.0
react-dom  >= 18.0.0
```

## 1. AI Rules

- Use existing components before writing custom CSS.
- Use `AI_USAGE.md` for prop names and accepted values.
- Use `docs/ai-user-guide.md` for component routing and generation patterns.
- Use `docs/tokens.md` or `crystalTokens` for colors, spacing, radius, and shadows.
- Keep generated UI dense, dark, glassy, angular, cyan-lined, and readable.
- Use neutral placeholder names and content.
- Do not use official screenshots, logos, characters, fonts, music, icons, textures, extracted UI cuts, or remote Figma assets.
- Do not claim affiliation with any publisher or franchise.
- Do not say the public package is an exact clone; describe it as visual-language parity and original implementation.

## 2. Design Tokens

The library has tokens:

- `src/styles/variables.less`: canonical styling source used by components.
- `crystalTokens`: public TypeScript token mirror for AI and app builders.

```tsx
import { crystalTokens } from 'crystal-menu-ui';

const panelStyle = {
  background: crystalTokens.color.glassStrong,
  borderColor: crystalTokens.color.border,
  borderRadius: crystalTokens.radius.panel,
  padding: crystalTokens.space[4],
};
```

Token groups:

- `crystalTokens.color`
- `crystalTokens.font`
- `crystalTokens.radius`
- `crystalTokens.border`
- `crystalTokens.space`
- `crystalTokens.shadow`

Do not create new one-off visual constants when a token exists. If a repeated visual value is missing, propose a token update instead.

## 3. Component Routing

| User asks for | Use |
|---|---|
| full menu screen | `PartyMenuShell` |
| dark glass panel | `MenuPanel` |
| main command list | `MainMenu` |
| command row/button | `CommandButton` |
| party status | `PartyStatus`, `HPMPBar` |
| level / EXP / HP / MP / SP panel | `LevelInfo` |
| bottom HUD metadata | `FloatingStatusBar` |
| equipment screen | `EquipmentPanel` |
| single gem | `OrbGem` |
| linked gem/socket rail | `OrbSocketRail` |
| confirm popup | `ConfirmDialog` |
| save/load row | `SaveSlot` |
| HUD icon | `GameIcon` |
| character/profile screen | `CharacterPortrait`, `CharacterProfile`, `CharacterRoster`, `ProfileScreen` |
| inventory | `InventoryList` |
| item detail surface | `ItemTooltip` |
| battle commands | `BattleMenu` |
| separator/loading | `Divider`, `Loading` |

## Implemented Components

- Use `MenuPanel` for main dark glass HUD containers.
- Use `CommandButton` for selectable command rows.
- Use `DialogueBox` for dialogue and narration.
- Use `PartyStatus` for party member state.
- Use `HPMPBar` for health and magic resources.
- Use `LevelInfo` for angular level, EXP, HP, MP, and SP displays.
- Use `MainMenu` for Prototypes-style title/main menu lists with pulsing selected rows.
- Use `FloatingStatusBar` for Prototypes-style playtime, currency, hint, and save/action metadata.
- Use `EquipmentPanel` for equipment slots, stat deltas, and linked orb sockets.
- Use `OrbGem` when a single green, violet, gold, red, cyan, or empty gem needs to be rendered independently.
- Use `OrbSocketRail` for large linked orb socket rails with gem tones and long connector braces.
- Use `PartyMenuShell` for Prototypes-style command, status, detail, and footer screen layouts.
- Use `ConfirmDialog` for glass confirmation popups with metadata, message, and two actions.
- Use `SaveSlot` for save/load archive rows with timestamp, location, playtime, party initials, and selected/autosave/empty/locked states.
- Use `GameIcon` for original SVG HUD icons matching the icon category names from the reference file.
- Use `CharacterProfile` for reference-image-style character panels with an optional authorized `portraitSrc` image slot.
- Use `CharacterPortrait` for reusable portrait crop, frame, HUD mask, empty art, and selected glow.
- Use `CharacterRoster` for selectable character lists that pair portrait frames with resource bars.
- Use `ProfileScreen` for a complete roster/profile/details/commands screen composition.
- Use `Divider` for compact HUD separators between dense menu sections.
- Use `Loading` for original crystal-ring loading states.
- Use `InventoryList` for dense selectable item lists with quantity, category, icon, and equipped state.
- Use `ItemTooltip` for compact item detail surfaces with description, effects, and footer notes.
- Use `BattleMenu` for compact battle command shells with command buttons and ATB/Limit gauges.

## Planned Components

No planned components remain from the current source-method roadmap.

## Current API

```tsx
import {
  CharacterProfile,
  CharacterPortrait,
  CharacterRoster,
  CommandButton,
  ConfirmDialog,
  Divider,
  DialogueBox,
  EquipmentPanel,
  FloatingStatusBar,
  GameIcon,
  HPMPBar,
  InventoryList,
  ItemTooltip,
  LevelInfo,
  Loading,
  MainMenu,
  MenuPanel,
  OrbGem,
  OrbSocketRail,
  PartyMenuShell,
  PartyStatus,
  ProfileScreen,
  SaveSlot,
  BattleMenu,
  crystalTokens,
} from 'crystal-menu-ui';
import type { CrystalTokens } from 'crystal-menu-ui';
import 'crystal-menu-ui/style';
```

`CommandButton` props:

- `variant?: 'default' | 'magic' | 'item' | 'danger'`
- `size?: 'compact' | 'normal' | 'large'`
- `selected?: boolean`
- `active?: boolean`
- `shortcut?: string`
- `description?: string`
- native button props except native `type`; use `htmlType` instead

`MenuPanel` props:

- `title?: React.ReactNode`
- `subtitle?: React.ReactNode`
- `footer?: React.ReactNode`
- `variant?: 'blue' | 'deep' | 'status'`
- `density?: 'normal' | 'compact'`
- `as?: 'section' | 'article' | 'aside' | 'div'`

`DialogueBox` props:

- `speaker?: React.ReactNode`
- `tone?: 'neutral' | 'system' | 'danger'`
- `cursor?: boolean`

`HPMPBar` props:

- `label: string`
- `value: number`
- `max: number`
- `tone?: 'hp' | 'mp'`
- `compact?: boolean`
- `showValue?: boolean`

`PartyStatus` props:

- `members: PartyMember[]`
- `compact?: boolean`

`PartyMember` shape:

```ts
{
  id: string;
  name: string;
  level: number;
  hp: number;
  maxHp: number;
  mp: number;
  maxMp: number;
  status?: string;
  active?: boolean;
}
```

`LevelInfo` props:

- `level: number`
- `exp: number`
- `maxExp: number`
- `weaponLevel?: string`
- `resources: LevelResource[]`

`LevelResource` shape:

```ts
{
  label: 'HP' | 'MP' | 'SP' | string;
  value: number;
  max: number;
}
```

`MainMenu` props:

- `options: MainMenuOption[]`
- `selectedId?: string`
- `pulse?: boolean`
- `onSelect?: (option: MainMenuOption) => void`

`MainMenuOption` shape:

```ts
{
  id: string;
  label: string;
  disabled?: boolean;
}
```

`FloatingStatusBar` props:

- `playtime?: string`
- `currency?: string | number`
- `currencyLabel?: string`
- `hint?: React.ReactNode`
- `actionLabel?: React.ReactNode`

`EquipmentPanel` props:

- `slots: EquipmentSlot[]`
- `selectedSlotId?: string`
- `attributes?: EquipmentAttribute[]`
- `orbSlots?: OrbSlot[]`
- `compact?: boolean`
- `onSelect?: (slot: EquipmentSlot) => void`

`EquipmentSlot` shape:

```ts
{
  id: string;
  label: string;
  item?: React.ReactNode;
  category?: React.ReactNode;
  description?: React.ReactNode;
  tone?: 'neutral' | 'active' | 'empty';
  disabled?: boolean;
}
```

`EquipmentAttribute` shape:

```ts
{
  label: string;
  value: React.ReactNode;
  delta?: number;
}
```

`OrbSlot` shape:

```ts
{
  id: string;
  label?: string;
  tone?: 'cyan' | 'violet' | 'gold' | 'empty';
  linkedAfter?: boolean;
  empty?: boolean;
}
```

`OrbGem` props:

- `tone?: 'green' | 'violet' | 'gold' | 'red' | 'cyan' | 'empty'`
- `size?: 'sm' | 'md' | 'lg' | 'inherit'`
- `label?: string`
- `active?: boolean`
- `disabled?: boolean`
- native span props except `children`

`OrbSocketRail` props:

- `sockets: OrbSocket[]`
- `size?: 'md' | 'lg'`
- `backdrop?: boolean`
- `ariaLabel?: string`
- native div props except `children`

`OrbSocket` shape:

```ts
{
  id: string;
  label?: string;
  tone?: 'green' | 'violet' | 'gold' | 'red' | 'cyan' | 'empty';
  active?: boolean;
  disabled?: boolean;
  linkedAfter?: 'none' | 'short' | 'long' | 'brace';
}
```

`PartyMenuShell` props:

- `title?: React.ReactNode`
- `subtitle?: React.ReactNode`
- `navigation: PartyMenuShellPane`
- `primary: PartyMenuShellPane[]`
- `detail?: PartyMenuShellPane`
- `footer?: React.ReactNode`
- `footerPanel?: boolean`
- `as?: 'section' | 'article' | 'div'`

`PartyMenuShellPane` shape:

```ts
{
  title?: React.ReactNode;
  subtitle?: React.ReactNode;
  content: React.ReactNode;
  variant?: 'blue' | 'deep' | 'status';
  density?: 'normal' | 'compact';
  className?: string;
  ariaLabel?: string;
}
```

`ConfirmDialog` props:

- `timestamp?: React.ReactNode`
- `title?: React.ReactNode`
- `subtitle?: React.ReactNode`
- `message: React.ReactNode`
- `confirmLabel?: React.ReactNode`
- `cancelLabel?: React.ReactNode`
- `selectedAction?: 'confirm' | 'cancel'`
- `tone?: 'info' | 'warning' | 'danger'`
- `onConfirm?: () => void`
- `onCancel?: () => void`

`SaveSlot` props:

- `slotId: React.ReactNode`
- `title?: React.ReactNode`
- `location?: React.ReactNode`
- `timestamp?: React.ReactNode`
- `playtime?: React.ReactNode`
- `party?: React.ReactNode[]`
- `status?: 'ready' | 'autosave' | 'empty' | 'locked'`
- `selected?: boolean`
- native button props except native `type` and native `title`; use `htmlType` for button type

`GameIcon` props:

- `name: GameIconName`
- `tone?: 'cyan' | 'muted' | 'success' | 'danger' | 'gold'`
- `size?: 'sm' | 'md' | 'lg' | number`
- `title?: string`
- native SVG props except native `color`

`GameIconName` values:

`'attack' | 'magicAttack' | 'defense' | 'magicDefense' | 'strength' | 'magic' | 'vitality' | 'spirit' | 'luck' | 'speed' | 'sword' | 'bangle' | 'necklace' | 'clock' | 'gil' | 'summon'`

`CharacterProfile` props:

- `name: React.ReactNode`
- `role?: React.ReactNode`
- `level?: React.ReactNode`
- `status?: React.ReactNode`
- `portraitSrc?: string`
- `portraitAlt?: string`
- `resources?: CharacterProfileResource[]`
- `stats?: CharacterProfileStat[]`
- `selected?: boolean`
- `compact?: boolean`
- native article props except native `role`

`CharacterProfileResource` shape:

```ts
{
  label: string;
  value: number;
  max: number;
  tone?: 'hp' | 'mp';
}
```

`CharacterProfileStat` shape:

```ts
{
  label: string;
  value: React.ReactNode;
}
```

`CharacterPortrait` props:

- `src?: string`
- `alt?: string`
- `label?: React.ReactNode`
- `size?: 'sm' | 'md' | 'lg' | 'wide'`
- `selected?: boolean`
- native div props except `children`

`CharacterRoster` props:

- `characters: CharacterRosterItem[]`
- `selectedId?: string`
- `compact?: boolean`
- `onSelect?: (character: CharacterRosterItem) => void`
- native div props except native `onSelect`

`CharacterRosterItem` shape:

```ts
{
  id: string;
  name: React.ReactNode;
  role?: React.ReactNode;
  level?: React.ReactNode;
  status?: React.ReactNode;
  portraitSrc?: string;
  portraitAlt?: string;
  resources?: CharacterProfileResource[];
  disabled?: boolean;
}
```

`ProfileScreen` props:

- `title?: React.ReactNode`
- `subtitle?: React.ReactNode`
- `characters: CharacterRosterItem[]`
- `selectedId?: string`
- `commandPanel?: React.ReactNode`
- `detailPanel?: React.ReactNode`
- `footer?: React.ReactNode`
- `onSelect?: (character: CharacterRosterItem) => void`
- native section props except native `title` and native `onSelect`

`Divider` props:

- `variant?: 'line' | 'glow' | 'ornament'`
- `label?: React.ReactNode`
- native div props

`Loading` props:

- `tip?: React.ReactNode`
- `size?: 'sm' | 'md' | 'lg'`
- `active?: boolean`
- native div props

`InventoryList` props:

- `items: InventoryItem[]`
- `selectedId?: string`
- `compact?: boolean`
- `emptyLabel?: React.ReactNode`
- `onSelect?: (item: InventoryItem) => void`
- native div props except native `onSelect`

`InventoryItem` shape:

```ts
{
  id: string;
  name: React.ReactNode;
  description?: React.ReactNode;
  category?: React.ReactNode;
  quantity?: React.ReactNode;
  icon?: GameIconName;
  tone?: 'default' | 'key' | 'rare' | 'danger';
  equipped?: boolean;
  disabled?: boolean;
}
```

`ItemTooltip` props:

- `title: React.ReactNode`
- `category?: React.ReactNode`
- `description?: React.ReactNode`
- `icon?: GameIconName`
- `quantity?: React.ReactNode`
- `tone?: 'default' | 'rare' | 'warning'`
- `effects?: ItemTooltipEffect[]`
- `footer?: React.ReactNode`
- native aside props except native `title`

`ItemTooltipEffect` shape:

```ts
{
  label: string;
  value: React.ReactNode;
}
```

`BattleMenu` props:

- `commands: BattleCommand[]`
- `selectedId?: string`
- `actor?: React.ReactNode`
- `atb?: number`
- `limit?: number`
- `onSelect?: (command: BattleCommand) => void`
- native section props except native `onSelect`

`BattleCommand` shape:

```ts
{
  id: string;
  label: React.ReactNode;
  description?: string;
  shortcut?: string;
  variant?: 'default' | 'magic' | 'item' | 'danger';
  disabled?: boolean;
}
```

## Style Rules

- Prefer dense, readable layouts over large marketing-style cards.
- Use dark glass panels, thin cyan borders, white text, cyan highlights, angular guide lines, and restrained state colors.
- Keep text inside panels compact and scannable.
- Do not add official game logos, characters, icons, fonts, screenshots, or music.
- Do not invent unsupported props when implementation begins.

## Prompt Pattern

Create a Remake-inspired JRPG HUD interface using `PartyMenuShell`, `MainMenu`, `PartyStatus`, `HPMPBar`, `LevelInfo`, `EquipmentPanel`, `OrbGem`, `OrbSocketRail`, `FloatingStatusBar`, `ConfirmDialog`, `SaveSlot`, `GameIcon`, `CharacterProfile`, `CharacterPortrait`, `CharacterRoster`, `ProfileScreen`, `Divider`, `Loading`, `InventoryList`, `ItemTooltip`, and `BattleMenu`. Use `MenuPanel` for custom subpanels, use `DialogueBox` for narration, and use `CommandButton` only for battle or contextual command rows. Keep the layout dense, dark, glassy, angular, readable, and free of official assets or direct screen clones.
