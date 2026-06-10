// [PROTOCOL]: Change this header when progression and archive demo sections change, then check CLAUDE.md.
// INPUT: Materia, weapon matrix, chapter, reward, and save-slot placeholder data.
// OUTPUT: Progression, chapter, archive, and confirmation demo sections.
// POS: Demo section group; keeps graph and archive examples separate from foundational UI.
import { ChapterEndCard, ChapterIntroCard, ConfirmDialog, MateriaGrowthTree, MenuPanel, SaveSlot, WeaponUpgradeMatrix } from '../../index';
import { chapterEndRewards, chapterEndStats, chapterIntroDossier, materiaArcAbilities, weaponMatrixConnections, weaponMatrixNodes } from '../demoData';

export const DemoProgressionSections = () => (
  <>
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
        abilities={materiaArcAbilities}
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
  </>
);
