# Module Map: src/components

## Purpose

Reusable React components for the original JRPG blue menu UI study kit.

## Members

- `CommandButton/`: selectable RPG command control.
- `MenuPanel/`: beveled blue content container.
- `DialogueBox/`: dialogue and narration surface.
- `HPMPBar/`: accessible resource meter.
- `PartyStatus/`: dense party status list.
- `LevelInfo/`: angular level and HP/MP/SP information display.
- `MainMenu/`: Prototypes-inspired title/main menu list with selected-row highlight.
- `FloatingStatusBar/`: Prototypes-inspired bottom playtime/currency/hint/action bar.
- `EquipmentPanel/`: Prototypes-inspired equipment slots, attributes, and linked orb sockets.
- `OrbGem/`: single original CSS-rendered gem socket atom.
- `OrbSocketRail/`: large original linked orb socket rail for weapon/equipment compositions.
- `PartyMenuShell/`: Prototypes-inspired full party/menu layout shell.
- `ConfirmDialog/`: Prototypes-inspired glass confirmation popup.
- `SaveSlot/`: Prototypes-inspired save/load metadata row.
- `GameIcon/`: Icon-vectors-inspired original SVG HUD icon set.
- `CharacterProfile/`: Reference-image-inspired profile panel with an authorized image slot.
- `CharacterPortrait/`: reusable authorized portrait frame with original empty art.
- `CharacterRoster/`: selectable character list for profile and party screens.
- `ProfileScreen/`: complete reference-profile screen composition.
- `Divider/`: original HUD separator for dense menu sections.
- `Loading/`: original crystal-ring loading indicator.
- `InventoryList/`: dense selectable item list.
- `ItemTooltip/`: compact item detail surface.
- `BattleMenu/`: compact battle command shell.
- `DamageNumber/`: floating combat damage indicator with rise-and-fade animation.
- `LimitGauge/`: segmented limit gauge with ready pulse for limit-break readiness.
- `ChapterIntroCard/`: cinematic chapter-opening title card with rule-line typography.
- `ChapterEndCard/`: cinematic chapter-results card with ledger stats and rewards.
- `MateriaGrowthTree/`: materia AP/level panel with orb core, segmented level ring, and ability list.
- `WeaponUpgradeMatrix/`: SP-grid weapon upgrade matrix with node connections and selection.

## Boundaries

- Component props should express RPG UI intent, not one-off demo needs.
- Each component owns its CSS module and public export.
- Shared visual decisions belong in `src/styles/variables.less`.
