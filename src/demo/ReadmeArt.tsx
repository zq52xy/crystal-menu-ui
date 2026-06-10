// [PROTOCOL]: Change this header when README art composition changes, then check CLAUDE.md.
// INPUT: Public library components, original placeholder data, and board selection.
// OUTPUT: Banner or bilingual feature artboards rendered from real components.
// POS: Demo-only marketing composition; no official assets or remote Figma content.
import {
  BattleMenu,
  EquipmentPanel,
  GameIcon,
  InventoryList,
  MainMenu,
  MenuPanel,
  OrbSocketRail,
  PartyMenuShell,
  PartyStatus,
  SaveSlot,
  type BattleCommand,
  type EquipmentAttribute,
  type EquipmentSlot,
  type GameIconName,
  type InventoryItem,
  type OrbSlot,
  type OrbSocket,
  type PartyMember,
} from '../index';
import './readme-art.less';

export type ReadmeArtBoard = 'banner' | 'features-en' | 'features-zh';

const party: PartyMember[] = [
  { id: 'ari', name: 'Ari', level: 32, hp: 1420, maxHp: 1600, mp: 214, maxMp: 260, active: true },
  { id: 'cairn', name: 'Cairn', level: 34, hp: 2115, maxHp: 2360, mp: 86, maxMp: 120 },
  { id: 'lyra', name: 'Lyra', level: 31, hp: 980, maxHp: 1320, mp: 302, maxMp: 340, status: 'Haste' },
];

const equipmentSlots: EquipmentSlot[] = [
  { id: 'weapon', label: 'Weapon', item: 'Astra Saber', category: 'Linked blade', description: 'Quick pressure and stable casting.', tone: 'active' },
  { id: 'armor', label: 'Armor', item: 'Vector Guard', category: 'Two sockets' },
  { id: 'charm', label: 'Charm', item: 'Pulse Ring', category: 'Speed +8' },
];

const attributes: EquipmentAttribute[] = [
  { label: 'ATK', value: 118, delta: 12 },
  { label: 'MAT', value: 74, delta: -4 },
  { label: 'DEF', value: 86, delta: 8 },
  { label: 'SPD', value: 42, delta: 3 },
];

const orbSlots: OrbSlot[] = [
  { id: 'a', tone: 'cyan', linkedAfter: true },
  { id: 'b', tone: 'violet' },
  { id: 'c', empty: true },
  { id: 'd', tone: 'gold', linkedAfter: true },
  { id: 'e', tone: 'cyan' },
];

const sockets: OrbSocket[] = [
  { id: 'green', label: 'Green core', tone: 'green', linkedAfter: 'short' },
  { id: 'violet', label: 'Violet core', tone: 'violet', linkedAfter: 'short' },
  { id: 'gold', label: 'Gold core', tone: 'gold', linkedAfter: 'brace' },
  { id: 'red', label: 'Red core', tone: 'red' },
];

const commands: BattleCommand[] = [
  { id: 'attack', label: 'Attack', shortcut: 'A' },
  { id: 'magic', label: 'Magic', shortcut: 'M', variant: 'magic', description: 'Spend MP' },
  { id: 'items', label: 'Items', shortcut: 'I', variant: 'item' },
];

const inventory: InventoryItem[] = [
  { id: 'tonic', name: 'Pulse Tonic', description: 'Restores HP.', category: 'Recovery', quantity: 'x12', icon: 'vitality' },
  { id: 'ether', name: 'Arc Ether', description: 'Restores MP.', category: 'Support', quantity: 'x03', icon: 'magic', tone: 'rare', equipped: true },
];

const featureCopy = {
  en: {
    eyebrow: 'Core Highlights',
    title: 'Built from the component system',
    subtitle: 'README images are rendered by the same React components, Less modules, and tokens shipped in the library.',
    items: [
      ['30 Typed Components', 'Menu shells, command rows, status panels, archive slots, inventory, battle commands, and orb sockets.', 'attack'],
      ['AI-ready Docs', 'AI_USAGE, prompts, local skill rules, component routing, and hard boundaries for safer generation.', 'summon'],
      ['Public Tokens', 'Less variables plus crystalTokens for colors, spacing, radius, borders, fonts, and shadows.', 'magic'],
      ['Original Visuals', 'CSS-rendered glass panels, cyan linework, glow states, icon vectors, and gem/socket controls.', 'sword'],
      ['Live Preview', 'GitHub Pages demo with desktop and mobile preview modes for quick review.', 'clock'],
      ['Rights Boundary', 'No official screenshots, logos, characters, fonts, extracted UI cuts, or remote Figma assets.', 'defense'],
    ],
  },
  zh: {
    eyebrow: '核心卖点',
    title: '由真实组件系统生成',
    subtitle: 'README 图片直接使用仓库里的 React 组件、Less 模块和 tokens 渲染，视觉会跟组件库同步。',
    items: [
      ['30 个类型化组件', '覆盖菜单外壳、命令行、状态面板、存档、物品、战斗命令和宝石插槽。', 'attack'],
      ['AI 友好文档', '包含 AI_USAGE、提示词、本地 skill、组件路由和生成边界。', 'summon'],
      ['公开设计变量', 'Less 变量与 crystalTokens 同步提供颜色、间距、圆角、边框、字体和阴影。', 'magic'],
      ['原创视觉实现', 'CSS 绘制玻璃面板、青色线框、发光状态、矢量图标和宝石插槽控件。', 'sword'],
      ['在线预览', 'GitHub Pages demo 支持桌面和移动预览模式，方便快速评审。', 'clock'],
      ['权利边界清晰', '不包含官方截图、logo、角色、字体、切图或远程 Figma 资产。', 'defense'],
    ],
  },
} as const;

const ArtShell = ({ children, kind }: { children: React.ReactNode; kind: string }) => (
  <main className={`readme-artboard readme-artboard--${kind}`} data-readme-artboard>
    <span className="readme-artboard__grid" aria-hidden="true" />
    <span className="readme-artboard__rift readme-artboard__rift--a" aria-hidden="true" />
    <span className="readme-artboard__rift readme-artboard__rift--b" aria-hidden="true" />
    {children}
  </main>
);

const BannerArt = () => (
  <ArtShell kind="banner">
    <section className="readme-banner__copy">
      <span className="readme-art__eyebrow">AI-ready React component library</span>
      <h1>crystal-menu-ui</h1>
      <p>Original JRPG glass HUD components rendered from the same public component API used by the demo.</p>
      <div className="readme-art__chips">
        <span>30 components</span>
        <span>TypeScript</span>
        <span>Design tokens</span>
        <span>Preview ready</span>
      </div>
    </section>

    <section className="readme-banner__screen" aria-label="Component-rendered banner mockup">
      <PartyMenuShell
        className="readme-banner-shell"
        title="Crystal Menu"
        subtitle="Original glass HUD study"
        navigation={{
          title: 'Commands',
          content: <MainMenu selectedId="continue" pulse={false} options={[
            { id: 'new', label: 'New Game' },
            { id: 'continue', label: 'Continue' },
            { id: 'load', label: 'Load Game' },
            { id: 'options', label: 'Options' },
          ]} />,
        }}
        primary={[
          { title: 'Party', variant: 'status', content: <PartyStatus members={party} compact /> },
          { title: 'Equipment', content: <EquipmentPanel slots={equipmentSlots} selectedSlotId="weapon" attributes={attributes} orbSlots={orbSlots} compact /> },
        ]}
        detail={{
          title: 'Battle',
          content: <BattleMenu commands={commands} selectedId="magic" actor="Ari" atb={78} limit={43} />,
        }}
      />
    </section>
  </ArtShell>
);

const FeatureCard = ({ title, body, icon }: { title: string; body: string; icon: GameIconName }) => (
  <MenuPanel
    density="compact"
    variant="deep"
    title={<span className="readme-feature-card__title"><GameIcon name={icon} size="sm" />{title}</span>}
  >
    <p>{body}</p>
  </MenuPanel>
);

const FeatureArt = ({ lang }: { lang: 'en' | 'zh' }) => {
  const copy = featureCopy[lang];

  return (
    <ArtShell kind="feature">
      <header className="readme-feature__header">
        <span className="readme-art__eyebrow">{copy.eyebrow}</span>
        <h1>{copy.title}</h1>
        <p>{copy.subtitle}</p>
      </header>

      <section className="readme-feature__grid" aria-label={copy.eyebrow}>
        {copy.items.map(([title, body, icon]) => (
          <FeatureCard key={title} title={title} body={body} icon={icon} />
        ))}
      </section>

      <section className="readme-feature__proof" aria-label="Component proof strip">
        <SaveSlot slotId="01" title="README Art Source" location="Vite + React components" timestamp="Auto-generated" playtime="00:00:12" party={['A', 'C', 'L']} selected />
        <InventoryList items={inventory} selectedId="ether" compact />
        <OrbSocketRail sockets={sockets} size="md" ariaLabel="Feature orb socket rail" />
      </section>
    </ArtShell>
  );
};

export const ReadmeArt = ({ board }: { board: ReadmeArtBoard }) => {
  if (board === 'features-en') return <FeatureArt lang="en" />;
  if (board === 'features-zh') return <FeatureArt lang="zh" />;
  return <BannerArt />;
};
