// [PROTOCOL]: Change this header when demo composition changes, then check CLAUDE.md.
// INPUT: Demo preview query, public library components, and original placeholder data.
// OUTPUT: Representative JRPG HUD screen for local visual QA.
// POS: Demo-only composition; no official assets.
import {
  BattleMenu,
  CharacterPortrait,
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
  MenuPanel,
  OrbGem,
  OrbSocketRail,
  PartyMenuShell,
  PartyStatus,
  ProfileScreen,
  SaveSlot,
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
  type OrbSocket,
  type OrbSlot,
  type PartyMember,
} from '../index';

// ============================================================
// Local-only authorized portrait (third-party reference image).
// Vite globs src/demo/local-assets/portrait.png if present; the
// local-assets directory is gitignored, so the public repo never
// ships a portrait. When the file is missing the demo falls back
// to the original placeholder shape rendered by CharacterPortrait.
// ============================================================
const localPortraits = import.meta.glob<{ default: string }>(
  './local-assets/portrait.png',
  { eager: true, query: '?url', import: 'default' },
);
const LOCAL_PORTRAIT_SRC: string | undefined =
  (Object.values(localPortraits)[0] as unknown as string) ?? undefined;

// ============================================================
// Local-only Optima font file. Same gitignored path. When the
// file is present we inject an @font-face rule at runtime so
// the display token "Optima" resolves to the bundled binary;
// when it's missing the CSS stack falls through to URW Classico
// → Charter → Georgia. Public package never ships the binary.
// ============================================================
const localFonts = import.meta.glob<{ default: string }>(
  './local-assets/optima.ttf',
  { eager: true, query: '?url', import: 'default' },
);
const LOCAL_OPTIMA_SRC: string | undefined =
  (Object.values(localFonts)[0] as unknown as string) ?? undefined;

if (typeof document !== 'undefined' && LOCAL_OPTIMA_SRC) {
  const styleEl = document.createElement('style');
  styleEl.dataset.source = 'crystal-menu-ui-demo-local-optima';
  // Map both regular and bold to the same TTF — the binary only ships
  // a 400 weight, but covering 700 explicitly stops the browser from
  // falling back to Inter/Georgia when a panel title uses bold.
  // Browsers will synthesize the bold weight from the regular file.
  styleEl.textContent = `
    @font-face {
      font-family: 'Optima';
      src: url('${LOCAL_OPTIMA_SRC}') format('truetype');
      font-weight: 400;
      font-style: normal;
      font-display: swap;
    }
    @font-face {
      font-family: 'Optima';
      src: url('${LOCAL_OPTIMA_SRC}') format('truetype');
      font-weight: 700;
      font-style: normal;
      font-display: swap;
    }
  `;
  document.head.appendChild(styleEl);
}

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

// ============================================================
// Equipment Screen section data (Prototypes-style three-row layout).
// ============================================================
interface EquipmentRow {
  id: string;
  name: string;
  icon: GameIconName;
  description: string;
  stats: Array<{ icon: GameIconName; value: number }>;
  slots?: OrbSlot[];
  trailingOrb?: OrbSlot;
}

const equipmentRows: EquipmentRow[] = [
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

const characterStats: Array<{ icon: GameIconName; label: string; value: number }> = [
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

const affinityRows: Array<{ label: string; selected?: boolean }> = [
  { label: 'Lesser Resistances' },
  { label: 'Greater Resistances' },
  { label: 'Immunities', selected: true },
  { label: 'Absorbed Elements' },
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

        <div className="demo-bright-room" aria-label="Equipment Screen surface">
          <span className="demo-bright-room__corner demo-bright-room__corner--tl" aria-hidden="true" />
          <span className="demo-bright-room__corner demo-bright-room__corner--tr" aria-hidden="true" />
          <span className="demo-bright-room__corner demo-bright-room__corner--bl" aria-hidden="true" />
          <span className="demo-bright-room__corner demo-bright-room__corner--br" aria-hidden="true" />
          <span className="demo-bright-room__rule demo-bright-room__rule--top" aria-hidden="true" />
          <span className="demo-bright-room__rule demo-bright-room__rule--bottom" aria-hidden="true" />
          <span className="demo-bright-room__sidetag demo-bright-room__sidetag--left" aria-hidden="true">Party</span>
          <span className="demo-bright-room__sidetag demo-bright-room__sidetag--right" aria-hidden="true">Cloud<i>Strife</i></span>
          <div className="demo-bright-room__hudtop" aria-hidden="true">
            <span className="demo-bright-room__hud-trig">L2</span>
            <span className="demo-bright-room__hud-arrow">«</span>
            <span className="demo-bright-room__hud-current">Cloud</span>
            <span className="demo-bright-room__hud-arrow">»</span>
            <span className="demo-bright-room__hud-trig">R2</span>
          </div>

        <PartyMenuShell
          title={undefined}
          subtitle={undefined}
          aria-label="Equipment Screen demo"
          className="demo-equipment-shell"
          navigation={{
            title: undefined,
            ariaLabel: 'Party roster',
            content: (
              <ul className="demo-equip-roster">
                <li className="demo-equip-roster__row demo-equip-roster__row--selected">
                  <span className="demo-equip-roster__name">Cloud</span>
                  <span className="demo-equip-roster__leader" aria-label="Leader">
                    Leader
                  </span>
                </li>
              </ul>
            ),
          }}
          primary={[
            {
              title: 'Equipment',
              variant: 'status',
              ariaLabel: 'Equipped gear',
              content: (
                <div className="demo-equip-stack">
                  {equipmentRows.map((row) => (
                    <article key={row.id} className="demo-equip-row">
                      <span className="demo-equip-icon" aria-hidden="true">
                        <GameIcon name={row.icon} size="md" />
                      </span>
                      <div className="demo-equip-body">
                        <header className="demo-equip-head">
                          <h4 className="demo-equip-name">{row.name}</h4>
                          {row.slots ? (
                            <span className="demo-equip-rail">
                              <OrbSocketRail
                                size="md"
                                ariaLabel={`${row.name} sockets`}
                                sockets={row.slots.map((slot) => ({
                                  id: slot.id,
                                  tone: slot.empty ? 'empty' : (slot.tone as OrbSocket['tone']) ?? 'cyan',
                                  linkedAfter: slot.linkedAfter ? 'short' : undefined,
                                }))}
                              />
                              {row.trailingOrb ? (
                                <span className="demo-equip-trailing">
                                  <OrbGem tone={row.trailingOrb.tone ?? 'cyan'} size="sm" />
                                </span>
                              ) : null}
                            </span>
                          ) : null}
                        </header>
                        <div className="demo-equip-stats">
                          {row.stats.map((stat, index) => (
                            <span key={index} className="demo-equip-stat">
                              <GameIcon name={stat.icon} size="sm" />
                              <b>{stat.value}</b>
                            </span>
                          ))}
                        </div>
                        <p className="demo-equip-desc">{row.description}</p>
                      </div>
                    </article>
                  ))}
                </div>
              ),
            },
            {
              title: 'Attributes',
              ariaLabel: 'Attribute summary',
              content: (
                <div className="demo-attr-grid">
                  <ul className="demo-attr-list">
                    {characterStats.map((stat) => (
                      <li key={stat.label} className="demo-attr-row">
                        <span className="demo-attr-label">
                          <GameIcon name={stat.icon} size="sm" />
                          <span>{stat.label}</span>
                        </span>
                        <strong className="demo-attr-value">{stat.value}</strong>
                      </li>
                    ))}
                  </ul>
                  <div className="demo-affinity">
                    <h5 className="demo-affinity-title">Affinities</h5>
                    <h6 className="demo-affinity-sub">Resistances</h6>
                    <ul className="demo-affinity-list">
                      {affinityRows.map((row) => (
                        <li
                          key={row.label}
                          className={`demo-affinity-row${row.selected ? ' demo-affinity-row--selected' : ''}`}
                        >
                          {row.label}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ),
            },
          ]}
          detail={{
            title: 'Cloud Strife',
            ariaLabel: 'Character profile',
            content: (
              <div className="demo-character-pane">
                {LOCAL_PORTRAIT_SRC ? (
                  <img
                    src={LOCAL_PORTRAIT_SRC}
                    alt="Authorized portrait"
                    className="demo-character-portrait-img"
                    aria-hidden="true"
                  />
                ) : (
                  <CharacterPortrait
                    size="lg"
                    label={undefined}
                    className="demo-character-portrait"
                  />
                )}
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
              </div>
            ),
          }}
          footer={
            <FloatingStatusBar
              playtime="005:38:46"
              currency="2,468"
              hint="Select a character whose attributes you wish to view."
              actionLabel="Toggle Page"
            />
          }
        />
        </div>

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
