// [PROTOCOL]: Change this header when demo composition changes, then check CLAUDE.md.
// INPUT: Demo preview query, public library components, and original placeholder data.
// OUTPUT: Representative JRPG HUD screen for local visual QA.
// POS: Demo-only composition; no official assets.
import {
  BattleMenu,
  ChapterEndCard,
  ChapterIntroCard,
  ConfirmDialog,
  DamageNumber,
  Divider,
  EquipmentPanel,
  FloatingStatusBar,
  GameIcon,
  InventoryList,
  ItemTooltip,
  LevelInfo,
  LimitGauge,
  Loading,
  MainMenu,
  MateriaGrowthTree,
  MenuPanel,
  OrbGem,
  OrbSocketRail,
  PartyMenuShell,
  PartyStatus,
  ProfileScreen,
  SaveSlot,
  WeaponUpgradeMatrix,
  type CharacterProfileStat,
  type CharacterRosterItem,
  type BattleCommand,
  type ChapterEndStat,
  type ChapterEndReward,
  type ChapterIntroDossierEntry,
  type EquipmentAttribute,
  type EquipmentSlot,
  type GameIconName,
  type InventoryItem,
  type ItemTooltipEffect,
  type MateriaGrowthAbility,
  type OrbSocket,
  type OrbSlot,
  type PartyMember,
  type WeaponMatrixConnection,
  type WeaponMatrixNode,
} from '../index';

const party: PartyMember[] = [
  { id: 'ari', name: 'Ari', level: 32, hp: 1420, maxHp: 1600, mp: 214, maxMp: 260, active: true },
  { id: 'cairn', name: 'Cairn', level: 34, hp: 2115, maxHp: 2360, mp: 86, maxMp: 120 },
  { id: 'lyra', name: 'Lyra', level: 31, hp: 980, maxHp: 1320, mp: 302, maxMp: 340, status: 'Haste' },
];

const equipmentSlots: EquipmentSlot[] = [
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

const equipmentAttributes: EquipmentAttribute[] = [
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

const largeOrbSockets: OrbSocket[] = [
  { id: 'green', label: 'Green core', tone: 'green', linkedAfter: 'short' },
  { id: 'violet', label: 'Violet core', tone: 'violet', linkedAfter: 'short' },
  { id: 'gold', label: 'Gold core', tone: 'gold', linkedAfter: 'brace' },
  { id: 'red', label: 'Red core', tone: 'red' },
];

const iconSamples: Array<{ name: GameIconName; label: string }> = [
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

const profileStats: CharacterProfileStat[] = [
  { label: 'ATK', value: 118 },
  { label: 'MAT', value: 74 },
  { label: 'DEF', value: 86 },
  { label: 'SPD', value: 42 },
  { label: 'LCK', value: 39 },
  { label: 'SPR', value: 68 },
];

const rosterCharacters: CharacterRosterItem[] = [
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

const inventoryItems: InventoryItem[] = [
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

const tooltipEffects: ItemTooltipEffect[] = [
  { label: 'HP', value: '+450' },
  { label: 'Cast', value: 'Instant' },
  { label: 'Target', value: 'Single ally' },
];

const battleCommands: BattleCommand[] = [
  { id: 'attack', label: 'Attack', shortcut: 'A', variant: 'default' },
  { id: 'magic', label: 'Magic', shortcut: 'M', variant: 'magic', description: 'Spend MP' },
  { id: 'items', label: 'Items', shortcut: 'I', variant: 'item' },
  { id: 'guard', label: 'Guard', shortcut: 'G', description: 'Reduce damage' },
];

const chapterIntroDossier: ChapterIntroDossierEntry[] = [
  { label: 'Party', value: 'Ari · Cairn · Lyra' },
  { label: 'Objective', value: 'Reach the upper transit ring' },
  { label: 'Time', value: '23:42 — Cycle 04' },
];

const chapterEndStats: ChapterEndStat[] = [
  { label: 'Time', value: '00:42:15' },
  { label: 'Battles', value: '12' },
  { label: 'Items found', value: '7' },
  { label: 'Rank', value: 'A', highlight: true },
];

const chapterEndRewards: ChapterEndReward[] = [
  { id: 'gil', label: 'Gil', amount: '+ 1,420', icon: <GameIcon name="gil" title="Gil" size="sm" /> },
  { id: 'exp', label: 'EXP', amount: '+ 2,140' },
  { id: 'sp', label: 'SP', amount: '+ 6' },
];

const materiaAbilities: MateriaGrowthAbility[] = [
  { id: 'arc-1', level: 1, label: 'Arc Surge', description: 'Single target arc damage', status: 'unlocked' },
  { id: 'arc-2', level: 2, label: 'Arc Burst', description: 'Small radius arc damage', status: 'unlocked' },
  { id: 'arc-3', level: 3, label: 'Arc Cascade', description: 'Chain arc to nearby targets', status: 'ready' },
  { id: 'arc-4', level: 4, label: 'Arc Spire', description: 'Concentrated arc column', status: 'locked' },
  { id: 'arc-5', level: 5, label: 'Mastered Arc', description: 'Cycle all arc commands', status: 'locked' },
];

const weaponMatrixNodes: WeaponMatrixNode[] = [
  { id: 'core', col: 1, row: 2, label: 'Core', kind: 'core', status: 'unlocked', effect: 'Base node' },
  { id: 'atk-a', col: 2, row: 1, label: 'ATK', kind: 'attack', status: 'unlocked', cost: 1, effect: 'ATK +6' },
  { id: 'atk-b', col: 3, row: 1, label: 'ATK+', kind: 'attack', status: 'available', cost: 2, effect: 'ATK +10', description: 'Boosts physical damage on light weapons.' },
  { id: 'mag-a', col: 2, row: 3, label: 'MAG', kind: 'magic', status: 'unlocked', cost: 1, effect: 'Magic +4' },
  { id: 'mag-b', col: 3, row: 3, label: 'MAG+', kind: 'magic', status: 'locked', cost: 2, effect: 'Magic +8' },
  { id: 'sup-a', col: 4, row: 2, label: 'SUP', kind: 'support', status: 'available', cost: 2, effect: 'MP recovery on hit' },
  { id: 'unique', col: 5, row: 2, label: 'UNIQ', kind: 'unique', status: 'locked', cost: 4, effect: 'Unique action: Arc Lance', description: 'Unlocks a unique active ability tied to this weapon.' },
  { id: 'fin', col: 6, row: 2, label: 'FIN', kind: 'unique', status: 'locked', cost: 6, effect: 'Final empowerment' },
];

const weaponMatrixConnections: WeaponMatrixConnection[] = [
  { from: 'core', to: 'atk-a', active: true },
  { from: 'atk-a', to: 'atk-b' },
  { from: 'core', to: 'mag-a', active: true },
  { from: 'mag-a', to: 'mag-b' },
  { from: 'atk-b', to: 'sup-a' },
  { from: 'mag-b', to: 'sup-a' },
  { from: 'sup-a', to: 'unique' },
  { from: 'unique', to: 'fin' },
];

const getShellClassName = () => {
  if (typeof window === 'undefined') return 'demo-shell';

  const preview = new URLSearchParams(window.location.search).get('preview');
  return preview === 'mobile' ? 'demo-shell demo-shell--mobile-preview' : 'demo-shell';
};

export const App = () => (
  <main className={getShellClassName()}>
    <section className="demo-stage">
      <PartyMenuShell
        title="Crystal Menu"
        subtitle="Original JRPG glass HUD study"
        aria-label="Crystal Menu UI demo"
        navigation={{
          title: 'Commands',
          content: (
            <MainMenu
              selectedId="continue"
              options={[
                { id: 'new', label: 'New Game' },
                { id: 'continue', label: 'Continue' },
                { id: 'load', label: 'Load Game' },
                { id: 'options', label: 'Options' },
              ]}
            />
          ),
        }}
        primary={[
          {
            title: 'Party',
            variant: 'status',
            content: <PartyStatus members={party} compact />,
          },
          {
            title: 'Equipment',
            content: (
              <EquipmentPanel
                slots={equipmentSlots}
                selectedSlotId="weapon"
                attributes={equipmentAttributes}
                orbSlots={orbSlots}
                compact
              />
            ),
          },
        ]}
        detail={{
          title: 'Level Info',
          content: (
            <LevelInfo
              level={13}
              exp={1139}
              maxExp={1199}
              weaponLevel="Weapon Level 2"
              resources={[
                { label: 'HP', value: 1310, max: 1720 },
                { label: 'MP', value: 13, max: 39 },
                { label: 'SP', value: 7, max: 10 },
              ]}
            />
          ),
        }}
        footer={
          <FloatingStatusBar
          playtime="005:38:46"
          currency="2,468"
          hint="Change equipment or set orb sockets. Keep all content original and de-branded."
          actionLabel="Save"
        />
        }
      />

      <div className="demo-dialog">
        <div className="demo-profile-screen">
          <ProfileScreen
            title="Profile Screen"
            subtitle="Authorized portrait slots only"
            characters={rosterCharacters}
            selectedId="ari"
            commandPanel={
              <MainMenu
                selectedId="status"
                options={[
                  { id: 'status', label: 'Status' },
                  { id: 'equipment', label: 'Equipment' },
                  { id: 'abilities', label: 'Abilities' },
                  { id: 'back', label: 'Back' },
                ]}
              />
            }
            detailPanel={
              <div className="demo-detail-grid">
                {profileStats.map((stat) => (
                  <span key={stat.label}>
                    <strong>{stat.label}</strong>
                    <b>{stat.value}</b>
                  </span>
                ))}
              </div>
            }
            footer="Portrait art is a replaceable slot. The library supplies frame, crop, mask, roster, and full-screen composition."
          />
          </div>

        <MenuPanel title="Icon Vectors" variant="deep" density="compact">
          <div className="demo-icon-grid">
            {iconSamples.map((icon) => (
              <span key={icon.name} className="demo-icon-chip">
                <GameIcon name={icon.name} title={icon.label} />
                <span>{icon.label}</span>
              </span>
            ))}
          </div>
        </MenuPanel>

        <MenuPanel title="System Primitives" variant="deep" density="compact">
          <div className="demo-system-primitives">
            <Divider variant="ornament" label="Checkpoint" />
            <Loading tip="Syncing party data" />
            <Divider variant="glow" />
          </div>
        </MenuPanel>

        <MenuPanel title="Orb Socket Rail" variant="deep" density="compact">
          <div className="demo-orb-showcase">
            <div className="demo-orb-rail">
              <OrbSocketRail sockets={largeOrbSockets} ariaLabel="Large linked orb socket rail" />
            </div>
            <div className="demo-gem-row" aria-label="Standalone orb gems">
              <OrbGem tone="green" size="md" label="Green orb gem" />
              <OrbGem tone="violet" size="md" label="Violet orb gem" />
              <OrbGem tone="gold" size="md" label="Gold orb gem" />
              <OrbGem tone="red" size="md" label="Red orb gem" />
            </div>
          </div>
        </MenuPanel>

        <MenuPanel title="Inventory System" variant="deep" density="compact">
          <div className="demo-inventory-system">
            <InventoryList items={inventoryItems} selectedId="arc-ether" />
            <ItemTooltip
              title="Arc Ether"
              category="Support Item"
              description="A charged capsule that restores focus and stabilizes casting flow."
              icon="magic"
              quantity="x03"
              tone="rare"
              effects={tooltipEffects}
              footer="All item names and effects are original placeholders."
            />
          </div>
        </MenuPanel>

        <MenuPanel title="Battle Commands" variant="deep" density="compact">
          <BattleMenu
            actor="Ari Vale"
            commands={battleCommands}
            selectedId="magic"
            atb={72}
            limit={34}
          />
        </MenuPanel>

        <MenuPanel title="Limit Gauges" variant="deep" density="compact">
          <div className="demo-limit-gauges">
            <LimitGauge label="Limit" value={62} max={100} level={2} tone="gold" />
            <LimitGauge label="Limit" value={100} max={100} level={3} tone="gold" />
            <LimitGauge label="Burst" value={88} max={100} level={1} tone="crimson" />
            <LimitGauge label="Surge" value={45} max={100} level={1} tone="cyan" size="sm" />
          </div>
        </MenuPanel>

        <MenuPanel title="Damage Numbers" variant="deep" density="compact">
          <div className="demo-damage-stage" aria-label="Damage number tone gallery">
            <DamageNumber value={184} tone="normal" />
            <DamageNumber value={612} tone="critical" critical tag="WEAK" size="lg" />
            <DamageNumber value={120} tone="heal" tag="HEAL" />
            <DamageNumber value={244} tone="magic" tag="ARC" />
            <DamageNumber value={32} tone="guard" />
            <DamageNumber value={0} tone="miss" />
          </div>
          <p className="demo-note">
            Damage numbers animate in/out automatically. Tones cover normal, critical, heal, magic, guard, and miss.
          </p>
        </MenuPanel>

        <MenuPanel title="Materia Growth" variant="deep" density="compact">
          <div className="demo-materia-row">
            <MateriaGrowthTree
              name="Arc Materia"
              kicker="Magic Materia"
              tone="cyan"
              level={2}
              maxLevel={5}
              ap={1820}
              apToNext={2400}
              totalAp={5440}
              abilities={materiaAbilities}
              footer="Equip the host weapon to keep earning AP from defeated enemies."
            />
            <MateriaGrowthTree
              name="Aegis Materia"
              kicker="Support Materia"
              tone="gold"
              level={4}
              maxLevel={5}
              ap={3240}
              apToNext={3600}
              totalAp={9120}
              abilities={[
                { id: 'aegis-1', level: 1, label: 'Aegis I', description: 'Reflect 8% of physical damage', status: 'unlocked' },
                { id: 'aegis-2', level: 2, label: 'Aegis II', description: 'Reflect 14% of physical damage', status: 'unlocked' },
                { id: 'aegis-3', level: 3, label: 'Aegis III', description: 'Reflect 22% of physical damage', status: 'unlocked' },
                { id: 'aegis-4', level: 4, label: 'Aegis IV', description: 'Reflect physical and minor magic', status: 'ready' },
                { id: 'aegis-5', level: 5, label: 'Aegis Mastery', description: 'Full reflect and party halo', status: 'locked' },
              ]}
              footer="Aegis is one level away from mastery."
            />
          </div>
        </MenuPanel>

        <MenuPanel title="Weapon Upgrade Matrix" variant="deep" density="compact">
          <WeaponUpgradeMatrix
            weaponName="Astra Saber"
            weaponLevel="Weapon Level 2"
            sp={4}
            spMax={12}
            columns={6}
            rows={4}
            nodes={weaponMatrixNodes}
            connections={weaponMatrixConnections}
            selectedNodeId="atk-b"
          />
        </MenuPanel>

        <MenuPanel title="Chapter Title" variant="deep" density="compact">
          <ChapterIntroCard
            kicker="Episode"
            chapter="04"
            title="Glassway Sprint"
            subtitle="Original placeholder copy"
            location="Upper Ring · Transit Housing"
            dossier={chapterIntroDossier}
            staticEntrance
          />
        </MenuPanel>

        <MenuPanel title="Chapter Results" variant="deep" density="compact">
          <ChapterEndCard
            chapter="04"
            kicker="Chapter Complete"
            title="Glassway Sprint"
            subtitle="Original placeholder copy"
            stats={chapterEndStats}
            rewards={chapterEndRewards}
            footer="Continue to next checkpoint to bank rewards."
            staticEntrance
          />
        </MenuPanel>

        <MenuPanel title="Archive Slots" variant="deep" density="compact">
          <div className="demo-save-list">
            <SaveSlot
              slotId="01"
              timestamp="06/07/2026 10:24 p.m."
              title="Archive 04: Glassway Sprint"
              location="Upper Ring - Transit Housing"
              playtime="005:38:46"
              party={['A', 'C', 'L']}
              selected
            />
            <SaveSlot
              slotId="02"
              timestamp="06/06/2026 08:10 p.m."
              title="Archive 03: Reactor Walk"
              location="Lower Rail - Maintenance Path"
              playtime="004:12:09"
              party={['A', 'L']}
              status="autosave"
            />
            <SaveSlot slotId="03" status="empty" />
          </div>
        </MenuPanel>

        <ConfirmDialog
          timestamp="06/07/2026 10:24 p.m."
          title="Archive 04: Glassway Sprint"
          subtitle="Upper Ring - Transit Housing"
          message="Resume from the latest checkpoint?"
          confirmLabel="Yes"
          cancelLabel="No"
          selectedAction="confirm"
        />
      </div>
    </section>
  </main>
);
