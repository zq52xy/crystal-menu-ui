// [PROTOCOL]: Change this header when exports change, then check CLAUDE.md.
// INPUT: Component modules and global style entry.
// OUTPUT: Public package exports for library consumers and AI usage docs.
// POS: Package boundary; no demo-only exports.
import './styles/index.less';

export * from './styles/tokens';

export { CommandButton } from './components/CommandButton';
export type {
  CommandButtonProps,
  CommandButtonSize,
  CommandButtonVariant,
} from './components/CommandButton';

export { MenuPanel } from './components/MenuPanel';
export type { MenuPanelDensity, MenuPanelProps, MenuPanelVariant } from './components/MenuPanel';

export { DialogueBox } from './components/DialogueBox';
export type { DialogueBoxProps, DialogueTone } from './components/DialogueBox';

export { HPMPBar } from './components/HPMPBar';
export type { HPMPBarProps, ResourceTone } from './components/HPMPBar';

export { PartyStatus } from './components/PartyStatus';
export type { PartyMember, PartyStatusProps } from './components/PartyStatus';

export { LevelInfo } from './components/LevelInfo';
export type { LevelInfoProps, LevelResource } from './components/LevelInfo';

export { MainMenu } from './components/MainMenu';
export type { MainMenuOption, MainMenuProps } from './components/MainMenu';

export { FloatingStatusBar } from './components/FloatingStatusBar';
export type { FloatingStatusBarProps } from './components/FloatingStatusBar';

export { EquipmentPanel } from './components/EquipmentPanel';
export type {
  EquipmentAttribute,
  EquipmentPanelProps,
  EquipmentSlot,
  EquipmentSlotTone,
  OrbSlot,
  OrbSlotTone,
} from './components/EquipmentPanel';

export { OrbGem } from './components/OrbGem';
export type { OrbGemProps, OrbGemSize, OrbGemTone } from './components/OrbGem';

export { OrbSocketRail } from './components/OrbSocketRail';
export type {
  OrbSocket,
  OrbSocketConnection,
  OrbSocketRailProps,
  OrbSocketRailSize,
  OrbSocketTone,
} from './components/OrbSocketRail';

export { PartyMenuShell } from './components/PartyMenuShell';
export type { PartyMenuShellPane, PartyMenuShellProps } from './components/PartyMenuShell';

export { ConfirmDialog } from './components/ConfirmDialog';
export type {
  ConfirmDialogAction,
  ConfirmDialogProps,
  ConfirmDialogTone,
} from './components/ConfirmDialog';

export { SaveSlot } from './components/SaveSlot';
export type { SaveSlotProps, SaveSlotStatus } from './components/SaveSlot';

export { GameIcon } from './components/GameIcon';
export type {
  GameIconName,
  GameIconProps,
  GameIconSize,
  GameIconTone,
} from './components/GameIcon';

export { CharacterProfile } from './components/CharacterProfile';
export type {
  CharacterProfileProps,
  CharacterProfileResource,
  CharacterProfileStat,
} from './components/CharacterProfile';

export { CharacterPortrait } from './components/CharacterPortrait';
export type { CharacterPortraitProps, CharacterPortraitSize } from './components/CharacterPortrait';

export { CharacterRoster } from './components/CharacterRoster';
export type { CharacterRosterItem, CharacterRosterProps } from './components/CharacterRoster';

export { ProfileScreen } from './components/ProfileScreen';
export type { ProfileScreenProps } from './components/ProfileScreen';

export { Divider } from './components/Divider';
export type { DividerProps, DividerVariant } from './components/Divider';

export { Loading } from './components/Loading';
export type { LoadingProps, LoadingSize } from './components/Loading';

export { InventoryList } from './components/InventoryList';
export type {
  InventoryItem,
  InventoryItemTone,
  InventoryListProps,
} from './components/InventoryList';

export { ItemTooltip } from './components/ItemTooltip';
export type {
  ItemTooltipEffect,
  ItemTooltipProps,
  ItemTooltipTone,
} from './components/ItemTooltip';

export { BattleMenu } from './components/BattleMenu';
export type { BattleCommand, BattleMenuProps } from './components/BattleMenu';
