# Figma Reference Notes: FFVII Remake Community Copy

## Source

- Original Figma file: `m4g2JKsMrQKr9DhiussfaZ`
- Current copy file: `GjQLMKKW4sLALp3auVsSqG`
- Root page/node read: `0:1` / `📕 Cover`
- Prototypes page/node read: `1:3` / `🎮 Prototypes`
- Icon vectors page/node read: `1:5` / `Icon vectors`
- Icon vectors frame read: `10:5379` / `Icon vectors`
- Reference images page/node attempted: `1:6`; Figma MCP handshake failed on 2026-06-07, so no image layers were imported.
- Implemented reference node: `10:6748` / `Level info`

## Access Result

The file is accessible through Figma MCP. Figma MCP's page list only returned `📕 Cover`, but direct node access confirmed `1:3` / `🎮 Prototypes`.

## Usable Design Signals

- Dark glass surface with blue highlight gradients.
- Thin cyan frame lines and corner marks.
- Text uses strong white foreground with dark blue shadow.
- Secondary metadata is gray and compact.
- EXP uses a black track with cyan fill.
- HP/MP/SP are arranged along angular guide lines.
- Level number is large, serif-like, and shadowed.
- Main menu rows use a 56px-tall list item, a narrow left highlight, thin blue/teal frames, white foreground text, darker text shadow, and a pulsing selected-row highlight.
- Icon vectors use a compact cyan silhouette language for combat, magic, defense, stat, equipment, time, currency, and summon categories.

## Excluded Signals

- Character artwork.
- Official names, marks, screenshots, and recognizable game assets.
- Remote image assets returned by Figma MCP.
- Exact font dependencies from the Figma file.
- Exact icon vector paths from the Figma file.
- Official or community reference character images from the Figma file.

## Translation Rule

Use the Figma file as a visual-language reference only. Implement CSS-drawn original components and neutral placeholder content.

## Prototypes Component Targets

- `MainMenu`: implemented from `Continue A/B` and `Load game A/B` menu rows.
- `MainMenu` selection state: implemented from the `Selection`, `Highlight and mask`, `Teal frames`, and `White and glow` layers.
- `FloatingStatusBar`: implemented from `Floating elements`, `Gil`, `Playtime`, triangle action controls, and bottom hint text.
- `EquipmentPanel`: implemented from cached `Equipment`, hidden `Attributes`, and `Materia slots` structures.
- `PartyMenuShell`: implemented from cached Prototypes page structure: command area, party/equipment stack, detail panel, and bottom floating status region.
- `ConfirmDialog`: implemented from `10:5302` / `Popup` in `Confirm continue`; remote Figma assets were excluded and replaced with CSS-drawn glass, borders, icon, and buttons.
- `SaveSlot`: implemented from Mock-ups save/confirm metadata patterns and Prototypes-style dense list rows; `10:5433` was checked and found to be only `icon/bangle`, so it was not used as a component source.
- `GameIcon`: implemented from `1:5` / `Icon vectors` category inventory and `10:5379` / `Icon vectors` screenshot/context; remote image asset and exact vector paths were excluded and replaced with original inline SVG paths.
- `CharacterProfile`: implemented as a safe Reference-images-inspired profile panel after `1:6` MCP access failed; it supports authorized `portraitSrc` input but bundles only original CSS placeholder art.
- `CharacterPortrait`, `CharacterRoster`, `ProfileScreen`: implemented as the component-library version of the Reference Images direction; these provide portrait framing, roster selection, and full screen composition without bundling official images.
- `Divider` and `Loading`: added from the source-repo baseline component gap, implemented as original JRPG HUD primitives rather than direct ports.
- `InventoryList`, `ItemTooltip`, `BattleMenu`: implemented as final source-roadmap gaps using original placeholder item/command content and no official names or assets.
- Later targets: none in the current source-method roadmap.
