// [PROTOCOL]: Change this header when the demo menu shell composition changes, then check CLAUDE.md.
// INPUT: Party, equipment, and resource demo data plus public shell/status components.
// OUTPUT: Top-level Crystal Menu shell used by App.tsx.
// POS: Demo section component; owns the first-party menu layout only.
import {
  EquipmentPanel,
  FloatingStatusBar,
  LevelInfo,
  MainMenu,
  PartyMenuShell,
  PartyStatus,
} from '../../index';
import { equipmentAttributes, equipmentSlots, orbSlots, party } from '../demoData';

export const DemoMenuShell = () => (
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
);
