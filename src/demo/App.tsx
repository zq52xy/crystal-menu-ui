// [PROTOCOL]: Change this header when demo app shell changes, then check CLAUDE.md.
// INPUT: Demo preview query and section-level demo components.
// OUTPUT: Representative JRPG HUD page shell for local visual QA.
// POS: Demo app shell only; section composition lives in sibling modules.
import { DemoDialogSections } from './sections/DemoDialogSections';
import { DemoMenuShell } from './sections/DemoMenuShell';

const getShellClassName = () => {
  if (typeof window === 'undefined') return 'demo-shell';

  const preview = new URLSearchParams(window.location.search).get('preview');
  return preview === 'mobile' ? 'demo-shell demo-shell--mobile-preview' : 'demo-shell';
};

export const App = () => (
  <main className={getShellClassName()}>
    <section className="demo-stage">
      <DemoMenuShell />
      <DemoDialogSections />
    </section>
  </main>
);
