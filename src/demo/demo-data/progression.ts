// [PROTOCOL]: Change this header when progression demo data changes, then check CLAUDE.md.
// INPUT: Materia growth and weapon matrix public prop types.
// OUTPUT: Placeholder progression graph data for standalone progression panels.
// POS: Demo data slice; isolates graph-like data from render composition.
import type { MateriaGrowthAbility, WeaponMatrixConnection, WeaponMatrixNode } from '../../index';

export const materiaArcAbilities: MateriaGrowthAbility[] = [
  { id: 'arc-1', level: 1, label: 'Arc Surge', description: 'Single target arc damage', status: 'unlocked' },
  { id: 'arc-2', level: 2, label: 'Arc Burst', description: 'Small radius arc damage', status: 'unlocked' },
  { id: 'arc-3', level: 3, label: 'Arc Cascade', description: 'Chain arc to nearby targets', status: 'ready' },
  { id: 'arc-4', level: 4, label: 'Arc Spire', description: 'Concentrated arc column', status: 'locked' },
  { id: 'arc-5', level: 5, label: 'Mastered Arc', description: 'Cycle all arc commands', status: 'locked' },
];

export const weaponMatrixNodes: WeaponMatrixNode[] = [
  { id: 'core', col: 1, row: 2, label: 'Core', kind: 'core', status: 'unlocked', effect: 'Base node' },
  { id: 'atk-a', col: 2, row: 1, label: 'ATK', kind: 'attack', status: 'unlocked', cost: 1, effect: 'ATK +6' },
  { id: 'atk-b', col: 3, row: 1, label: 'ATK+', kind: 'attack', status: 'available', cost: 2, effect: 'ATK +10', description: 'Boosts physical damage on light weapons.' },
  { id: 'mag-a', col: 2, row: 3, label: 'MAG', kind: 'magic', status: 'unlocked', cost: 1, effect: 'Magic +4' },
  { id: 'mag-b', col: 3, row: 3, label: 'MAG+', kind: 'magic', status: 'locked', cost: 2, effect: 'Magic +8' },
  { id: 'sup-a', col: 4, row: 2, label: 'SUP', kind: 'support', status: 'available', cost: 2, effect: 'MP recovery on hit' },
  { id: 'unique', col: 5, row: 2, label: 'UNIQ', kind: 'unique', status: 'locked', cost: 4, effect: 'Unique action: Arc Lance', description: 'Unlocks a unique active ability tied to this weapon.' },
  { id: 'fin', col: 6, row: 2, label: 'FIN', kind: 'unique', status: 'locked', cost: 6, effect: 'Final empowerment' },
];

export const weaponMatrixConnections: WeaponMatrixConnection[] = [
  { from: 'core', to: 'atk-a', active: true },
  { from: 'atk-a', to: 'atk-b' },
  { from: 'core', to: 'mag-a', active: true },
  { from: 'mag-a', to: 'mag-b' },
  { from: 'atk-b', to: 'sup-a' },
  { from: 'mag-b', to: 'sup-a' },
  { from: 'sup-a', to: 'unique' },
  { from: 'unique', to: 'fin' },
];
