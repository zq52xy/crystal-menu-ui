// [PROTOCOL]: Change this header when the SEO component catalog page changes, then check CLAUDE.md.
// INPUT: bilingual componentIndexData and public design-system components.
// OUTPUT: Bilingual searchable component index page for GitHub Pages and AI answer extraction.
// POS: Demo-only SEO landing surface; package exports remain in src/index.ts.
import { GameIcon, type GameIconName } from '../components/GameIcon';
import { MenuPanel } from '../components/MenuPanel';
import { OrbGem } from '../components/OrbGem';
import { componentIndexItems, componentIndexStats } from './componentIndexData';

const categoryIcons: Record<string, GameIconName> = {
  'Layout Shell': 'magic',
  Equipment: 'sword',
  Progression: 'summon',
  Combat: 'attack',
  'Combat Feedback': 'speed',
  Cinematic: 'clock',
  Character: 'vitality',
  System: 'gil',
};

const renderKeyword = (keyword: string) => <span className="component-index-chip" key={keyword}>{keyword}</span>;

export const ComponentIndexPage = () => (
  <main className="demo-shell component-index-shell">
    <section className="component-index-hero" aria-labelledby="component-index-title">
      <div className="component-index-hero__copy">
        <span className="component-index-kicker">React + TypeScript JRPG UI Kit / 游戏 UI 组件库</span>
        <h1 id="component-index-title">Component index for AI-ready RPG menu interfaces.</h1>
        <p>
          Browse crystal-menu-ui components for JRPG menus, equipment screens, progression,
          combat HUD feedback, and cinematic chapter cards.
        </p>
        <p lang="zh-CN">
          浏览 crystal-menu-ui 的核心组件：JRPG 菜单、装备界面、成长系统、战斗 HUD 反馈与章节演出卡片。
        </p>
        <div className="component-index-actions" aria-label="Primary actions">
          <a className="component-index-action" href="./">Open live demo <span>Demo</span></a>
          <a className="component-index-action component-index-action--magic" href="https://github.com/zq52xy/crystal-menu-ui">View GitHub <span>Repo</span></a>
        </div>
      </div>
      <MenuPanel title="Catalog Snapshot / 组件概览" variant="deep" className="component-index-snapshot">
        <div className="component-index-stat-grid">
          <strong>{componentIndexStats.components}</strong><span>typed components / 类型组件</span>
          <strong>{componentIndexStats.categories}</strong><span>UI categories / 界面分类</span>
          <strong>MIT</strong><span>original assets only / 仅原创资产</span>
        </div>
        <div className="component-index-query-list">
          {componentIndexStats.searchQueries.map(renderKeyword)}
        </div>
      </MenuPanel>
    </section>

    <section className="component-index-grid" aria-label="Bilingual component cards">
      {componentIndexItems.map((item, index) => (
        <MenuPanel title={item.name} variant="deep" density="compact" key={item.name}>
          <article className="component-index-card">
            <header>
              <GameIcon name={categoryIcons[item.category] ?? 'magic'} tone="cyan" />
              <div>
                <span>{item.category} / {item.categoryZh}</span>
                <h2>{item.name}</h2>
              </div>
              <OrbGem tone={index % 3 === 0 ? 'cyan' : index % 3 === 1 ? 'green' : 'violet'} size="sm" />
            </header>
            <div className="component-index-copy-pair">
              <p>{item.summary}</p>
              <p lang="zh-CN">{item.summaryZh}</p>
            </div>
            <dl>
              <div><dt>Use for</dt><dd>{item.useCase}</dd><dd lang="zh-CN">{item.useCaseZh}</dd></div>
              <div><dt>AI routing / AI 选型</dt><dd>{item.aiPrompt}</dd><dd lang="zh-CN">{item.aiPromptZh}</dd></div>
            </dl>
            <footer>{item.keywords.map(renderKeyword)}</footer>
          </article>
        </MenuPanel>
      ))}
    </section>
  </main>
);
