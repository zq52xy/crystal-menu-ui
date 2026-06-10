// [PROTOCOL]: Change this header when foundational demo sections change, then check CLAUDE.md.
// INPUT: Profile, icon, primitive, inventory, battle, limit, and damage demo data.
// OUTPUT: Foundational component gallery sections below the main shell.
// POS: Demo section group; keeps primitive examples out of App.tsx.
import { BattleMenu, CharacterPortrait, DamageNumber, Divider, GameIcon, InventoryList, ItemTooltip, LimitGauge, Loading, MainMenu, MenuPanel, OrbGem, OrbSocketRail, ProfileScreen } from '../../index';
import { LOCAL_PORTRAIT_SRC } from '../localDemoAssets';
import { battleCommands, iconSamples, inventoryItems, largeOrbSockets, profileStats, rosterCharacters, tooltipEffects } from '../demoData';

export const DemoFoundationSections = () => (
  <>
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
      <DamageNumber value={184} tone="normal" loop style={{ animationDelay: '0s' }} />
      <DamageNumber value={612} tone="critical" critical tag="WEAK" size="lg" loop style={{ animationDelay: '0.32s' }} />
      <DamageNumber value={120} tone="heal" tag="HEAL" loop style={{ animationDelay: '0.66s' }} />
      <DamageNumber value={244} tone="magic" tag="ARC" loop style={{ animationDelay: '0.95s' }} />
      <DamageNumber value={32} tone="guard" loop style={{ animationDelay: '1.28s' }} />
      <DamageNumber value={0} tone="miss" loop style={{ animationDelay: '1.6s' }} />
    </div>
    <p className="demo-note">
      Damage numbers animate in/out automatically. Tones cover normal, critical, heal, magic, guard, and miss.
    </p>
  </MenuPanel>
  </>
);
