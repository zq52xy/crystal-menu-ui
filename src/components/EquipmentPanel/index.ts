// [PROTOCOL]: Change this header when EquipmentPanel exports change, then check CLAUDE.md.
// INPUT: EquipmentPanel component and public types.
// OUTPUT: Re-exported equipment panel API.
// POS: Component package boundary.
export { EquipmentPanel } from './EquipmentPanel';
export type {
  EquipmentAttribute,
  EquipmentPanelProps,
  EquipmentSlot,
  EquipmentSlotTone,
  OrbSlot,
  OrbSlotTone,
} from './EquipmentPanel';
