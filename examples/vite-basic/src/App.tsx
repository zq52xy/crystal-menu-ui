// [PROTOCOL]: Change this header when the Vite example composition changes, then check CLAUDE.md.
// INPUT: Public crystal-menu-ui components and local example state.
// OUTPUT: Runnable tactical menu composition for package consumers.
// POS: Consumer-facing example; no library internals or official assets.
import { useMemo, useState } from 'react';
import {
  BattleMenu,
  DamageNumber,
  EquipmentPanel,
  LimitGauge,
  MenuPanel,
  PartyStatus,
} from 'crystal-menu-ui';
import type {
  BattleCommand,
  EquipmentAttribute,
  EquipmentSlot,
  OrbSlot,
  PartyMember,
} from 'crystal-menu-ui';
import 'crystal-menu-ui/style';

const battleCommands: BattleCommand[] = [
  { id: 'attack', label: 'Attack', shortcut: 'A', description: 'Fast pressure' },
  { id: 'arts', label: 'Arts', shortcut: 'R', variant: 'magic', description: 'Spend MP' },
  { id: 'items', label: 'Items', shortcut: 'I', variant: 'item' },
  { id: 'guard', label: 'Guard', shortcut: 'G' },
];

const party: PartyMember[] = [
  { id: 'ari', name: 'Ari', level: 32, hp: 2480, maxHp: 3120, mp: 84, maxMp: 110, active: true },
  { id: 'lyra', name: 'Lyra', level: 31, hp: 1940, maxHp: 2440, mp: 128, maxMp: 155 },
  { id: 'cairn', name: 'Cairn', level: 33, hp: 3380, maxHp: 3600, mp: 42, maxMp: 72 },
];

const equipmentSlots: EquipmentSlot[] = [
  {
    id: 'weapon',
    label: 'Weapon',
    item: 'Astra Saber',
    category: 'Balanced blade',
    description: 'A light weapon tuned for pressure windows and stable casting.',
    tone: 'active',
  },
  {
    id: 'armor',
    label: 'Armor',
    item: 'Vector Guard',
    category: 'Linked slots',
    description: 'Glass-fiber guard with two paired cores.',
  },
  {
    id: 'charm',
    label: 'Charm',
    item: 'Pulse Ring',
    category: 'Speed +8',
    description: 'A compact ring that sharpens command recovery.',
  },
  {
    id: 'extra',
    label: 'Extra',
    category: 'Optional slot',
    description: 'Open slot reserved for the next loadout pass.',
  },
];

const attributes: EquipmentAttribute[] = [
  { label: 'ATK', value: 118, delta: 12 },
  { label: 'MAT', value: 74, delta: -4 },
  { label: 'DEF', value: 86, delta: 8 },
  { label: 'SPD', value: 42, delta: 3 },
];

const orbSlots: OrbSlot[] = [
  { id: 'a', label: 'cyan core', tone: 'cyan', linkedAfter: true },
  { id: 'b', label: 'violet core', tone: 'violet' },
  { id: 'c', label: 'open core', empty: true },
  { id: 'd', label: 'gold core', tone: 'gold', linkedAfter: true },
  { id: 'e', label: 'cyan support', tone: 'cyan' },
];

export default function App() {
  const [selectedCommand, setSelectedCommand] = useState('attack');
  const [selectedSlot, setSelectedSlot] = useState('weapon');

  const activeCommand = useMemo(
    () => battleCommands.find((command) => command.id === selectedCommand),
    [selectedCommand],
  );

  return (
    <main className="example-shell">
      <section className="example-stage" aria-label="Tactical menu">
        <header className="example-header">
          <div>
            <p className="example-kicker">Sector 04</p>
            <h1>Transit Ring</h1>
          </div>
          <span className="example-status">Standby</span>
        </header>

        <div className="example-grid">
          <MenuPanel title="Party" subtitle="Active formation" variant="status">
            <PartyStatus members={party} />
          </MenuPanel>

          <MenuPanel
            title="Commands"
            subtitle={activeCommand?.description ?? 'Ready'}
            footer="Confirm with Enter"
          >
            <BattleMenu
              actor="Ari"
              selectedId={selectedCommand}
              atb={72}
              limit={92}
              commands={battleCommands}
              onSelect={(command) => setSelectedCommand(command.id)}
            />
          </MenuPanel>

          <MenuPanel
            title="Loadout"
            subtitle="Field kit"
            variant="deep"
            className="example-loadout"
          >
            <EquipmentPanel
              slots={equipmentSlots}
              selectedSlotId={selectedSlot}
              attributes={attributes}
              orbSlots={orbSlots}
              onSelect={(slot) => setSelectedSlot(slot.id)}
            />
          </MenuPanel>

          <MenuPanel title="Limit" subtitle="Phase charge" className="example-limit">
            <LimitGauge value={92} max={100} level={2} tone="cyan" size="lg" />
            <div className="example-hitline" aria-label="Combat feedback">
              <DamageNumber value={1842} tone="critical" tag="BURST" critical loop />
              <DamageNumber value={420} tone="heal" loop />
            </div>
          </MenuPanel>
        </div>
      </section>
    </main>
  );
}
