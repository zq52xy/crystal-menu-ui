// [PROTOCOL]: Change this header when motion showcase composition changes, then check CLAUDE.md.
// INPUT: Public animated components and original placeholder copy.
// OUTPUT: A compact animated board for README GIF capture.
// POS: Demo-only marketing composition; no official assets or remote Figma content.
import {
  ChapterIntroCard,
  DamageNumber,
  LimitGauge,
  Loading,
  MenuPanel,
} from '../index';
import './motion-showcase.less';

const dossier = [
  { label: 'Party', value: 'Ari / Cairn / Lyra' },
  { label: 'Objective', value: 'Charge the limit gauge' },
  { label: 'Time', value: '00:05:38' },
];

export const MotionShowcase = () => (
  <main className="motion-showcase" data-motion-showcase>
    <span className="motion-showcase__grid" aria-hidden="true" />
    <span className="motion-showcase__rift motion-showcase__rift--a" aria-hidden="true" />
    <span className="motion-showcase__rift motion-showcase__rift--b" aria-hidden="true" />

    <section className="motion-showcase__copy">
      <span className="motion-showcase__eyebrow">Animated component proof</span>
      <h1>Motion-ready JRPG HUD</h1>
      <p>Damage ticks, ready gauges, chapter cards, and loading states are real React components.</p>
    </section>

    <MenuPanel className="motion-showcase__damage" title="Damage Numbers" variant="deep" density="compact">
      <div className="motion-showcase__damage-row" aria-label="Animated damage number samples">
        <DamageNumber value={184} tone="normal" loop />
        <DamageNumber value={612} tone="critical" critical tag="WEAK" size="lg" loop />
        <DamageNumber value={120} tone="heal" tag="HEAL" loop />
        <DamageNumber value={244} tone="magic" tag="ARC" loop />
        <DamageNumber value={0} tone="miss" size="lg" loop />
      </div>
    </MenuPanel>

    <MenuPanel className="motion-showcase__gauges" title="Limit Gauges" variant="deep" density="compact">
      <LimitGauge label="Limit" value={100} max={100} level={3} tone="gold" size="md" />
      <LimitGauge label="Burst" value={88} max={100} level={2} tone="crimson" size="sm" />
    </MenuPanel>

    <ChapterIntroCard
      className="motion-showcase__chapter"
      kicker="Chapter Select"
      chapter="04"
      title="Glassway Sprint"
      subtitle="Original cinematic HUD card"
      location="Sector rail / midnight arcade loop"
      dossier={dossier}
    />

    <div className="motion-showcase__loading">
      <Loading tip="Syncing crystal tokens" size="lg" />
    </div>
  </main>
);
