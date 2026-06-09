# Visual Contract: JRPG Remake Glass HUD Study Kit

## Target

Preserve an original JRPG Remake-style glass HUD visual language while keeping components reusable, readable, and safe for AI-assisted generation.

## Audience

Product/design learner and future implementer building a learning-only component library.

## Surface

Implemented components: `CommandButton`, `MenuPanel`, `DialogueBox`, `PartyStatus`, `HPMPBar`, `LevelInfo`, `MainMenu`, `FloatingStatusBar`, `EquipmentPanel`, `OrbGem`, `OrbSocketRail`, `PartyMenuShell`, `ConfirmDialog`, `SaveSlot`, `GameIcon`, `CharacterProfile`, `CharacterPortrait`, `CharacterRoster`, `ProfileScreen`, `Divider`, `Loading`, `InventoryList`, `ItemTooltip`, `BattleMenu`, `DamageNumber`, `LimitGauge`, `ChapterIntroCard`, `ChapterEndCard`, `MateriaGrowthTree`, and `WeaponUpgradeMatrix`.

Planned components: none in the current source-method roadmap.

## Core User Paths

1. User can scan party status, HP/MP/SP, EXP, and command options without visual clutter.
2. User can distinguish a Prototypes-style selected main menu row from idle rows.
3. User can read bottom playtime, currency, hint, and save/action metadata at desktop and mobile sizes.
4. User can scan equipment slots, selected item summary, stat deltas, compact orb sockets, standalone orb gems, and large linked orb socket rails.
5. User can compose a command/status/detail/footer screen without hand-writing layout grids.
6. User can present a centered confirmation dialog with readable metadata, message, and two actions.
7. User can scan save/load archive rows and distinguish selected, autosave, empty, and locked states.
8. User can use original HUD icons for combat, stat, equipment, time, currency, and summon categories.
9. User can compose character profile panels with authorized portraits or original placeholder art.
10. User can build full character profile screens with roster, focused profile, details, commands, and footer metadata.
11. User can add compact separators and loading states without leaving the design system.
12. User can scan inventory rows, read item details, and compose battle command shells.
13. User can distinguish active, selected, disabled, danger, and success states.
14. AI can generate a plausible JRPG menu layout without inventing official assets or unsupported components.

## Invariants

- Original assets only.
- Neutral public naming.
- Glass panel hierarchy remains readable at compact sizes.
- Text must not overflow command buttons, status rows, or panels.
- State colors must not rely on color alone.
- Components must use shared tokens instead of one-off styling.
- AI docs must match implemented component names and props once code exists.

## Gates

- Token review before implementation.
- Figma reference notes update when the reference file changes.
- Screenshot review for desktop and mobile demos once UI exists.
- Component API review against `AI_USAGE.md`.
- Rights-boundary review before public publication.
- Evidence report update after each implementation pass.

## Warnings

- FF7-9 visual references are recognizable and carry IP risk if copied too directly.
- Overusing bevels, glow, or gradients can make the UI noisy.
- Generic fantasy styling can drift away from the target if angular line work and status density are not preserved.
- AI prompts can accidentally request official assets unless guardrails are explicit.

## Review

Human design review is required for:

- similarity risk,
- naming,
- visual baseline acceptance,
- demo screenshots,
- public README wording.

## Evidence

Evidence reports live in `eval/evidence-report.md`. Future screenshots should live under `eval/screenshots/`.

## Baseline Policy

No visual baseline may be refreshed to hide a regression. Baselines can only be updated after human review confirms the change is an intentional target upgrade.
