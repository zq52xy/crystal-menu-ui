// [PROTOCOL]: Change this header when demo dialog section ordering changes, then check CLAUDE.md.
// INPUT: Section-level demo gallery components.
// OUTPUT: Ordered secondary demo gallery rendered below the main menu shell.
// POS: Demo section orchestrator; individual section files own detailed JSX.
import { DemoEquipmentSections } from './DemoEquipmentSections';
import { DemoFoundationSections } from './DemoFoundationSections';
import { DemoProgressionSections } from './DemoProgressionSections';

export const DemoDialogSections = () => (
  <div className="demo-dialog">
    <DemoFoundationSections />
    <DemoEquipmentSections />
    <DemoProgressionSections />
  </div>
);
