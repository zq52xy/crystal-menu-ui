// [PROTOCOL]: Change this header when equipment demo data changes, then check CLAUDE.md.
// INPUT: Equipment, orb, and icon public component prop types.
// OUTPUT: Placeholder equipment rows, slots, attributes, and orb socket data.
// POS: Demo data slice; isolates equipment-screen examples from App.tsx.
import type { EquipmentAttribute, EquipmentSlot, GameIconName, OrbSocket, OrbSlot } from '../../index';

export const equipmentSlots: EquipmentSlot[] = [
  {
    id: 'weapon',
    label: 'Weapon',
    item: 'Astra Saber',
    category: 'Balanced blade',
    description: 'A light weapon tuned for quick pressure and stable casting.',
    tone: 'active',
  },
  { id: 'armor', label: 'Armor', item: 'Vector Guard', category: 'Two linked slots' },
  { id: 'charm', label: 'Charm', item: 'Pulse Ring', category: 'Speed +8' },
  { id: 'extra', label: 'Extra', category: 'Optional slot' },
];

export const equipmentAttributes: EquipmentAttribute[] = [
  { label: 'ATK', value: 118, delta: 12 },
  { label: 'MAT', value: 74, delta: -4 },
  { label: 'DEF', value: 86, delta: 8 },
  { label: 'SPD', value: 42, delta: 3 },
];

export const orbSlots: OrbSlot[] = [
  { id: 'a', label: 'cyan core', tone: 'cyan', linkedAfter: true },
  { id: 'b', label: 'violet core', tone: 'violet' },
  { id: 'c', label: 'open core', empty: true },
  { id: 'd', label: 'gold core', tone: 'gold', linkedAfter: true },
  { id: 'e', label: 'cyan support', tone: 'cyan' },
];

export const largeOrbSockets: OrbSocket[] = [
  { id: 'green', label: 'Green core', tone: 'green', linkedAfter: 'short' },
  { id: 'violet', label: 'Violet core', tone: 'violet', linkedAfter: 'short' },
  { id: 'gold', label: 'Gold core', tone: 'gold', linkedAfter: 'brace' },
  { id: 'red', label: 'Red core', tone: 'red' },
];

export interface EquipmentRow {
  id: string;
  name: string;
  icon: GameIconName;
  description: string;
  stats: Array<{ icon: GameIconName; value: number }>;
  slots?: OrbSlot[];
  trailingOrb?: OrbSlot;
}

export const equipmentRows: EquipmentRow[] = [
  {
    id: 'weapon',
    name: 'Iron Blade',
    icon: 'sword',
    description: 'A greatsword cast from carefully selected iron ore.',
    stats: [
      { icon: 'attack', value: 29 },
      { icon: 'magicAttack', value: 31 },
      { icon: 'defense', value: 5 },
      { icon: 'magicDefense', value: 0 },
    ],
    slots: [
      { id: 'w1', tone: 'cyan', linkedAfter: true },
      { id: 'w2', tone: 'violet', linkedAfter: true },
      { id: 'w3', tone: 'gold' },
    ],
    trailingOrb: { id: 'wt', tone: 'cyan' },
  },
  {
    id: 'armor',
    name: 'Iron Bangle',
    icon: 'bangle',
    description: 'An armband crafted from iron. A sophisticated accoutrement with a reasonable price tag.',
    stats: [
      { icon: 'attack', value: 0 },
      { icon: 'magicAttack', value: 0 },
      { icon: 'defense', value: 16 },
      { icon: 'magicDefense', value: 16 },
    ],
    slots: [{ id: 'a1', empty: true }],
    trailingOrb: { id: 'at', tone: 'cyan' },
  },
  {
    id: 'accessory',
    name: 'Power Wristguards',
    icon: 'necklace',
    description: 'Wristguards capable of drawing out power latent in the wearer’s body.',
    stats: [
      { icon: 'attack', value: 0 },
      { icon: 'magicAttack', value: 0 },
      { icon: 'defense', value: 0 },
      { icon: 'magicDefense', value: 0 },
    ],
  },
];
