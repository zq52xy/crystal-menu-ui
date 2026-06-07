# Figma Coverage Matrix

## Scope

This document checks whether the current component library can recreate the main surfaces from the private Figma study file at a reusable component level.

Current Figma MCP status: access to the requested node `1:3` failed in this pass because the Figma MCP client could not complete the app handshake. The coverage below is based on previously recorded Figma node notes in `docs/figma-reference-notes.md`, `FIGMA_REFERENCE.md`, and current local demo screenshots.

## Coverage Summary

| Figma area | Current component route | Status |
|---|---|---|
| Prototypes page shell | `PartyMenuShell` | Covered |
| Main command rows | `MainMenu`, `CommandButton` | Covered |
| Party status list | `PartyStatus`, `HPMPBar` | Covered |
| Level info | `LevelInfo` | Covered |
| Bottom floating metadata | `FloatingStatusBar` | Covered |
| Equipment list and stat detail | `EquipmentPanel` | Covered |
| Materia/orb sockets | `EquipmentPanel`, `OrbGem`, `OrbSocketRail` | Covered |
| Confirm popup | `ConfirmDialog` | Covered |
| Save/archive rows | `SaveSlot` | Covered |
| Icon vector categories | `GameIcon` | Covered with original paths |
| Character/profile references | `CharacterPortrait`, `CharacterProfile`, `CharacterRoster`, `ProfileScreen` | Covered structurally |
| Inventory list | `InventoryList` | Covered as source-roadmap extension |
| Item detail tooltip | `ItemTooltip` | Covered as source-roadmap extension |
| Battle command shell | `BattleMenu` | Covered as source-roadmap extension |
| Separators/loading primitives | `Divider`, `Loading` | Covered |

## Exactness Judgment

The current library can reproduce the Figma file's major interface composition patterns:

- dark glass panel hierarchy,
- cyan line work and corner marks,
- dense command/status/inventory rows,
- large level display and resource meters,
- save/archive metadata rows,
- centered confirmation dialog,
- character/profile frame structure,
- orb/socket visual system.

It should not claim one-to-one asset parity in a public README. The public package intentionally excludes:

- official character artwork,
- exact official fonts,
- exact Figma vector paths,
- official screenshots,
- extracted UI cuts,
- remote Figma images,
- publisher names or marks.

## Current Screenshots Used As Evidence

- `eval/screenshots/desktop-prototypes.png`
- `eval/screenshots/mobile-prototypes.png`
- `eval/screenshots/orb-gem-and-rail-panel.png`

## Remaining Figma Verification Need

When Figma MCP access is restored, rerun:

- metadata read for file `GjQLMKKW4sLALp3auVsSqG`, node `1:3`,
- screenshot capture for node `1:3`,
- targeted screenshots for popup, icon vectors, and profile/reference pages if accessible.

Then update this document with exact node screenshots and any missing component deltas.
