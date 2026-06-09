# Requirements: JRPG Blue Menu UI Study Library

## Target

Create a learning-only UI component library blueprint for JRPG glass HUD interfaces, following a source-method product workflow.

## Audience

- Product/design learner studying how famous game UI language becomes a design system.
- AI-assisted builder using prompts and skills to generate consistent UI.
- Future developer implementing a React + TypeScript component library.

## Core User Paths

1. User can understand the visual language without seeing official game assets.
2. User can ask an AI assistant to generate a JRPG menu UI using stable component names and props.
3. User can implement components later without inventing scope, naming, or copyright rules.

## Component Set V1

- `CommandButton`: menu command item with focus/disabled/selected states.
- `MenuPanel`: blue layered panel with border, title area, and content region.
- `DialogueBox`: speaker text panel with typewriter-ready layout.
- `HPMPBar`: compact meter pair for resource display.
- `PartyStatus`: party member rows with name, level, HP, MP, and status.
- `LevelInfo`: angular level, EXP, HP, MP, SP, and weapon-level display extracted from the Figma reference language.
- `MainMenu`: Prototypes-derived title/main menu with four-row list, selected-row frame, left glow, and pulse-ready state.
- `FloatingStatusBar`: Prototypes-derived bottom metadata bar for playtime, currency, hint text, and save/action affordance.
- `EquipmentPanel`: Prototypes-derived equipment slots, compact stat deltas, and linked orb sockets.
- `OrbGem`: single CSS-rendered gem socket atom for independently rendering green, violet, gold, red, cyan, and empty gems.
- `OrbSocketRail`: large original linked orb socket rail with colored gem cores, short links, long links, and brace connectors.
- `PartyMenuShell`: Prototypes-derived command/status/detail/footer screen layout shell.
- `ConfirmDialog`: Prototypes-derived centered glass confirmation popup with metadata and two actions.
- `SaveSlot`: Prototypes-derived save/load archive row with timestamp, location, playtime, party initials, and selected/autosave/empty/locked states.
- `GameIcon`: Icon-vectors-derived original SVG icon set for combat, stats, equipment, time, currency, and summon categories.
- `CharacterProfile`: Reference-images-inspired character profile panel with an optional authorized portrait image slot, compact resource meters, and stat metadata.
- `CharacterPortrait`: reusable portrait frame with crop, HUD mask, selected glow, and original empty art.
- `CharacterRoster`: selectable character list that pairs portrait slots with identity and resource bars.
- `ProfileScreen`: complete reference-profile layout with roster, focused profile, detail, command, and footer regions.
- `Divider`: compact HUD separator for dense menu sections.
- `Loading`: original crystal-ring loading indicator for async/system states.
- `InventoryList`: dense selectable item list with icon, quantity, category, selected, equipped, and disabled states.
- `ItemTooltip`: compact item detail surface with category, description, effect metadata, quantity, and footer note.
- `BattleMenu`: compact battle command shell with command grid, shortcuts, descriptions, and ATB/Limit gauges.
- `DamageNumber`: floating combat damage indicator with rise-and-fade animation, critical/heal/magic/guard/miss tones, and optional element/weakness tag.
- `LimitGauge`: segmented limit gauge with ready pulse, limit-level pip, and gold/crimson/cyan tones for limit-break readiness.
- `ChapterIntroCard`: cinematic chapter-opening title card with rule-line title row, location frame, and dossier metadata.
- `ChapterEndCard`: cinematic chapter-results card with ledger-style stats, rewards list, and footer hint.
- `MateriaGrowthTree`: materia AP/level panel with orb core, conic AP-progress ring, segmented level ring, and ability list with locked/ready/unlocked states.
- `WeaponUpgradeMatrix`: SP-grid weapon upgrade matrix with diamond nodes, SVG node connections, locked/available/unlocked/selected states, and a side detail panel.

## Planned Later Components

No planned components remain from the current source-method roadmap.

## Style Direction

- Modern dark glass panels with controlled gradient, thin cyan line work, and angular geometry.
- Dense but readable JRPG hierarchy.
- White primary text, muted secondary text, cyan highlight, restrained red/green state accents.
- Remake-style compact HUD density without directly copying official screens.
- Original symbols and ornaments only.

## AI Deliverables

- `AI_USAGE.md`: component usage contract.
- `PROMPT.md`: app/page generation prompt.
- `DESIGN_PROMPT.md`: visual generation prompt.
- `skill/SKILL.md`: AI coding-assistant rules.

## Done for Planning Pass

- Source-method map exists.
- Visual contract exists.
- Work contract exists.
- Evidence report exists.
- AI docs and skill drafts exist.
- React implementation skeleton is live for the implemented component set above.
