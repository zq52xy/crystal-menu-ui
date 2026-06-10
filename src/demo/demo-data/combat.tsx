// [PROTOCOL]: Change this header when combat and archive demo data changes, then check CLAUDE.md.
// INPUT: Inventory, battle command, tooltip, and chapter card public prop types.
// OUTPUT: Placeholder inventory, battle, chapter intro, and chapter result data.
// POS: Demo data slice; keeps tactical UI examples separate from shell layout.
import { GameIcon } from '../../index';
import type { BattleCommand, ChapterEndReward, ChapterEndStat, ChapterIntroDossierEntry, InventoryItem, ItemTooltipEffect } from '../../index';

export const inventoryItems: InventoryItem[] = [
  {
    id: 'pulse-tonic',
    name: 'Pulse Tonic',
    description: 'Restores a small amount of HP to one ally.',
    category: 'Recovery',
    quantity: 'x12',
    icon: 'vitality',
  },
  {
    id: 'arc-ether',
    name: 'Arc Ether',
    description: 'Restores MP and refreshes one command charge.',
    category: 'Support',
    quantity: 'x03',
    icon: 'magic',
    tone: 'rare',
    equipped: true,
  },
  {
    id: 'signal-key',
    name: 'Signal Key',
    description: 'A transit pass keyed to the upper ring.',
    category: 'Key Item',
    icon: 'gil',
    tone: 'key',
  },
];

export const tooltipEffects: ItemTooltipEffect[] = [
  { label: 'HP', value: '+450' },
  { label: 'Cast', value: 'Instant' },
  { label: 'Target', value: 'Single ally' },
];

export const battleCommands: BattleCommand[] = [
  { id: 'attack', label: 'Attack', shortcut: 'A', variant: 'default' },
  { id: 'magic', label: 'Magic', shortcut: 'M', variant: 'magic', description: 'Spend MP' },
  { id: 'items', label: 'Items', shortcut: 'I', variant: 'item' },
  { id: 'guard', label: 'Guard', shortcut: 'G', description: 'Reduce damage' },
];

export const chapterIntroDossier: ChapterIntroDossierEntry[] = [
  { label: 'Party', value: 'Ari · Cairn · Lyra' },
  { label: 'Objective', value: 'Reach the upper transit ring' },
  { label: 'Time', value: '23:42 — Cycle 04' },
];

export const chapterEndStats: ChapterEndStat[] = [
  { label: 'Time', value: '00:42:15' },
  { label: 'Battles', value: '12' },
  { label: 'Items found', value: '7' },
  { label: 'Rank', value: 'A', highlight: true },
];

export const chapterEndRewards: ChapterEndReward[] = [
  { id: 'gil', label: 'Gil', amount: '+ 1,420', icon: <GameIcon name="gil" title="Gil" size="sm" /> },
  { id: 'exp', label: 'EXP', amount: '+ 2,140' },
  { id: 'sp', label: 'SP', amount: '+ 6' },
];

// ============================================================
// Equipment Screen section data (Prototypes-style three-row layout).
// ============================================================
