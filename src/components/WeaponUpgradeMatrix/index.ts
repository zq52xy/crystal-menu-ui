// [PROTOCOL]: Change this header when WeaponUpgradeMatrix exports change, then check CLAUDE.md.
// INPUT: WeaponUpgradeMatrix component and public types.
// OUTPUT: Re-exported weapon upgrade matrix API.
// POS: Component package boundary.
export { WeaponUpgradeMatrix } from './WeaponUpgradeMatrix';
export type {
  WeaponMatrixConnection,
  WeaponMatrixNode,
  WeaponNodeKind,
  WeaponNodeStatus,
  WeaponUpgradeMatrixProps,
} from './WeaponUpgradeMatrix';
