// [PROTOCOL]: Change this header when core demo party/profile data changes, then check CLAUDE.md.
// INPUT: Party, profile, roster, and icon-related public component prop types.
// OUTPUT: Placeholder character and stat data for the main demo composition.
// POS: Demo data slice; imported through demoData.ts barrel only.
import type { CharacterProfileStat, CharacterRosterItem, GameIconName, PartyMember } from '../../index';

export const party: PartyMember[] = [
  { id: 'ari', name: 'Ari', level: 32, hp: 1420, maxHp: 1600, mp: 214, maxMp: 260, active: true },
  { id: 'cairn', name: 'Cairn', level: 34, hp: 2115, maxHp: 2360, mp: 86, maxMp: 120 },
  { id: 'lyra', name: 'Lyra', level: 31, hp: 980, maxHp: 1320, mp: 302, maxMp: 340, status: 'Haste' },
];

export const iconSamples: Array<{ name: GameIconName; label: string }> = [
  { name: 'attack', label: 'Attack' },
  { name: 'magicAttack', label: 'Magic ATK' },
  { name: 'defense', label: 'Defense' },
  { name: 'magicDefense', label: 'Magic DEF' },
  { name: 'strength', label: 'Strength' },
  { name: 'magic', label: 'Magic' },
  { name: 'vitality', label: 'Vitality' },
  { name: 'spirit', label: 'Spirit' },
  { name: 'luck', label: 'Luck' },
  { name: 'speed', label: 'Speed' },
  { name: 'sword', label: 'Sword' },
  { name: 'bangle', label: 'Bangle' },
  { name: 'necklace', label: 'Necklace' },
  { name: 'clock', label: 'Clock' },
  { name: 'gil', label: 'Gil' },
  { name: 'summon', label: 'Summon' },
];

export const profileStats: CharacterProfileStat[] = [
  { label: 'ATK', value: 118 },
  { label: 'MAT', value: 74 },
  { label: 'DEF', value: 86 },
  { label: 'SPD', value: 42 },
  { label: 'LCK', value: 39 },
  { label: 'SPR', value: 68 },
];

export const rosterCharacters: CharacterRosterItem[] = [
  {
    id: 'ari',
    name: 'Ari Vale',
    role: 'Vanguard / pressure',
    level: 32,
    status: 'Ready',
    resources: [
      { label: 'HP', value: 1420, max: 1600 },
      { label: 'MP', value: 214, max: 260, tone: 'mp' },
    ],
  },
  {
    id: 'cairn',
    name: 'Cairn Holt',
    role: 'Guard / breaker',
    level: 34,
    status: 'Linked',
    resources: [
      { label: 'HP', value: 2115, max: 2360 },
      { label: 'MP', value: 86, max: 120, tone: 'mp' },
    ],
  },
  {
    id: 'lyra',
    name: 'Lyra Rune',
    role: 'Arc / support',
    level: 31,
    status: 'Haste',
    resources: [
      { label: 'HP', value: 980, max: 1320 },
      { label: 'MP', value: 302, max: 340, tone: 'mp' },
    ],
  },
];

export const characterStats: Array<{ icon: GameIconName; label: string; value: number }> = [
  { icon: 'attack', label: 'Attack', value: 99 },
  { icon: 'magicAttack', label: 'Magic Attack', value: 89 },
  { icon: 'defense', label: 'Defense', value: 46 },
  { icon: 'magicDefense', label: 'Magic Defense', value: 38 },
  { icon: 'strength', label: 'Strength', value: 35 },
  { icon: 'magic', label: 'Magic', value: 29 },
  { icon: 'vitality', label: 'Vitality', value: 25 },
  { icon: 'spirit', label: 'Spirit', value: 22 },
  { icon: 'luck', label: 'Luck', value: 25 },
  { icon: 'speed', label: 'Speed', value: 18 },
];

export const affinityRows: Array<{ label: string; selected?: boolean }> = [
  { label: 'Lesser Resistances' },
  { label: 'Greater Resistances' },
  { label: 'Immunities', selected: true },
  { label: 'Absorbed Elements' },
];

// ============================================================
// MateriaGrowthTree + WeaponUpgradeMatrix demo data — these are
// public components but the source-method roadmap places them in
// dedicated subscreens, so we showcase them as standalone panels
// rather than mixing them into the main equipment surface.
// ============================================================
