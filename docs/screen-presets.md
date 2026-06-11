# Screen Presets

Use these recipes as copy-paste starting points for complete JRPG menu screens. They use original placeholder names and public `crystal-menu-ui` components only; replace copy, layout CSS, and game state with your own project data.

## Import Setup

```tsx
import {
  BattleMenu,
  EquipmentPanel,
  FloatingStatusBar,
  InventoryList,
  ItemTooltip,
  MainMenu,
  MenuPanel,
  PartyMenuShell,
  PartyStatus,
  SaveSlot,
} from 'crystal-menu-ui';
import 'crystal-menu-ui/style';
```

## Preset Map

| Preset | Best for | Core components |
|---|---|---|
| Equipment Screen | party equipment, orb slots, stat deltas | `PartyMenuShell`, `MainMenu`, `EquipmentPanel`, `PartyStatus`, `FloatingStatusBar` |
| Battle Command HUD | turn command menus, ATB/limit state | `MenuPanel`, `BattleMenu`, `PartyStatus` |
| Save / Load Archive | save slots, autosave rows, locked slots | `MenuPanel`, `SaveSlot`, `FloatingStatusBar` |
| Inventory Inspector | item list plus selected-item detail | `PartyMenuShell`, `InventoryList`, `ItemTooltip` |

## Equipment Screen

```tsx
export function EquipmentScreenPreset() {
  return (
    <PartyMenuShell
      title="Equipment"
      subtitle="Tune weapons, armor, charms, and orb sockets"
      navigation={{
        title: "Menu",
        content: (
          <MainMenu
            selectedId="equipment"
            options={[
              { id: "items", label: "Items" },
              { id: "equipment", label: "Equipment" },
              { id: "status", label: "Status" },
              { id: "system", label: "System" },
            ]}
          />
        ),
      }}
      primary={[
        {
          title: "Ari Vale",
          subtitle: "Vanguard / pressure",
          content: (
            <EquipmentPanel
              selectedSlotId="weapon"
              slots={[
                { id: "weapon", label: "Weapon", item: "Astra Saber", category: "Balanced blade", tone: "active" },
                { id: "armor", label: "Armor", item: "Vector Guard", category: "Two linked slots" },
                { id: "charm", label: "Charm", item: "Pulse Ring", category: "Speed +8" },
                { id: "extra", label: "Extra", category: "Optional slot" },
              ]}
              attributes={[
                { label: "ATK", value: 118, delta: 12 },
                { label: "MAT", value: 74, delta: -4 },
                { label: "DEF", value: 86, delta: 8 },
                { label: "SPD", value: 42, delta: 3 },
              ]}
              orbSlots={[
                { id: "a", tone: "cyan", linkedAfter: true },
                { id: "b", tone: "violet" },
                { id: "c", empty: true },
                { id: "d", tone: "gold", linkedAfter: true },
                { id: "e", tone: "cyan" },
              ]}
            />
          ),
        },
      ]}
      detail={{
        title: "Party",
        content: (
          <PartyStatus
            compact
            members={[
              { id: "ari", name: "Ari", level: 32, hp: 1420, maxHp: 1600, mp: 214, maxMp: 260, active: true },
              { id: "cairn", name: "Cairn", level: 34, hp: 2115, maxHp: 2360, mp: 86, maxMp: 120 },
              { id: "lyra", name: "Lyra", level: 31, hp: 980, maxHp: 1320, mp: 302, maxMp: 340, status: "Haste" },
            ]}
          />
        ),
      }}
      footer={<FloatingStatusBar playtime="23:42:18" currency={12840} hint="Select a slot" actionLabel="Confirm" />}
    />
  );
}
```

## Battle Command HUD

```tsx
export function BattleCommandPreset() {
  return (
    <MenuPanel title="Battle" subtitle="Active command window" variant="deep">
      <BattleMenu
        actor="Ari"
        selectedId="attack"
        atb={72}
        limit={38}
        commands={[
          { id: "attack", label: "Attack", shortcut: "A" },
          { id: "magic", label: "Magic", shortcut: "M", variant: "magic", description: "Spend MP" },
          { id: "items", label: "Items", shortcut: "I", variant: "item" },
          { id: "guard", label: "Guard", shortcut: "G", description: "Reduce damage" },
        ]}
      />
    </MenuPanel>
  );
}
```

## Save / Load Archive

```tsx
export function ArchivePreset() {
  return (
    <MenuPanel title="Archive" subtitle="Select save data">
      <SaveSlot
        selected
        slotId="01"
        title="Upper Transit Ring"
        location="Sector Atlas"
        timestamp="Cycle 04 / 23:42"
        playtime="23:42:18"
        party={["A", "C", "L"]}
      />
      <SaveSlot
        slotId="02"
        title="Lower Freight Line"
        location="Cargo Span"
        timestamp="Cycle 04 / 22:15"
        playtime="22:15:02"
        party={["A", "L"]}
        status="autosave"
      />
      <SaveSlot slotId="03" status="empty" />
      <SaveSlot slotId="04" title="Locked route" status="locked" />
      <FloatingStatusBar playtime="23:42:18" currency={12840} hint="Choose a slot" actionLabel="Load" />
    </MenuPanel>
  );
}
```

## Inventory Inspector

```tsx
export function InventoryInspectorPreset() {
  return (
    <PartyMenuShell
      title="Inventory"
      subtitle="Review recovery, support, and key items"
      navigation={{
        title: "Category",
        content: (
          <MainMenu
            selectedId="items"
            options={[
              { id: "items", label: "Items" },
              { id: "weapons", label: "Weapons" },
              { id: "armor", label: "Armor" },
              { id: "key", label: "Key Items" },
            ]}
          />
        ),
      }}
      primary={[
        {
          title: "Recovery",
          content: (
            <InventoryList
              selectedId="pulse-tonic"
              items={[
                { id: "pulse-tonic", name: "Pulse Tonic", description: "Restores HP to one ally.", category: "Recovery", quantity: "x12", icon: "vitality" },
                { id: "arc-ether", name: "Arc Ether", description: "Restores MP and command charge.", category: "Support", quantity: "x03", icon: "magic", tone: "rare" },
                { id: "signal-key", name: "Signal Key", description: "Transit pass for the upper ring.", category: "Key Item", icon: "gil", tone: "key" },
              ]}
            />
          ),
        },
      ]}
      detail={{
        title: "Details",
        content: (
          <ItemTooltip
            title="Pulse Tonic"
            category="Recovery"
            description="A bright restorative prepared for quick field use."
            icon="vitality"
            quantity="x12"
            effects={[
              { label: "HP", value: "+450" },
              { label: "Cast", value: "Instant" },
              { label: "Target", value: "Single ally" },
            ]}
            footer="Keep names and icons original for public releases."
          />
        ),
      }}
    />
  );
}
```

## AI Prompt Seed

```text
Build an original JRPG glass HUD screen using crystal-menu-ui.
Use the Equipment Screen preset as the base composition.
Keep all names, icons, artwork, and copy original.
Use public components only and import crystal-menu-ui/style.
Do not request official screenshots, logos, characters, fonts, textures, or extracted assets.
```

## Safe Reuse Notes

- Use presets as structure, not as a claim of official affiliation.
- Replace placeholder names with your own game terms.
- Keep screenshots and social posts focused on original CSS/SVG output.
- Link back to the live demo, component index, and AI usage docs when sharing.
