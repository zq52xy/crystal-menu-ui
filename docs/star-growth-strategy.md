# Star Growth Strategy

## Positioning

Lead with a narrow, memorable promise:

> AI-ready React components for original JRPG glass HUD interfaces.

Do not position the project as a clone or asset extraction package. The stronger public angle is "game UI language turned into a safe, typed, AI-consumable component system."

## Repository Surface

High-impact items before launch:

- Strong README hero screenshot above the fold. Status: added `docs/img/readme-hero-equipment.png`.
- Social sharing banner and focused screenshots for posts. Status: use `docs/img/banner.png` and `eval/screenshots/preview-equipment-screen.png`.
- GitHub Pages demo from `npm run deploy`.
- Repository topics: `react`, `typescript`, `component-library`, `game-ui`, `jrpg`, `design-system`, `vite`, `ai-ready`.
- Clear disclaimer: original assets only, unofficial, learning-only.
- Copy-paste usage example plus Star / Share CTA in README.
- `AI_USAGE.md`, `docs/ai-user-guide.md`, `docs/tokens.md`, `PROMPT.md`, and `DESIGN_PROMPT.md` linked from README.

## README Conversion Surface

- Above-the-fold hero: `docs/img/readme-hero-equipment.png`.
- Share card: `docs/img/banner.png`.
- Trust proof: npm badge, license badge, 30-component badge, AI-ready badge, rights-boundary notice.
- Conversion CTA: Star / Share block immediately before Highlights.
- Discovery phrases: Final Fantasy / 最终幻想 only as unofficial study/search language, not package ownership.

## Launch Plan

### Day 0

- Create GitHub repository with neutral name: `crystal-menu-ui` or `jrpg-menu-ui`.
- Fill `package.json` repository/homepage/bugs/author fields.
- Run `npm run typecheck && npm run build && npm run build:demo && npm run audit:docs && npm run visual:smoke`.
- Run `npm run deploy`.
- Add the best screenshot as the GitHub social preview.
- Publish release `v0.1.0` with screenshots and component count.

### Day 1-3

- Post a short demo clip or screenshot thread:
  - problem: game UI references are hard for AI to reproduce consistently,
  - solution: typed components + AI usage contract,
  - proof: 30 components, live demo, prompt docs, production-safe README hero.
- Submit to design/dev communities where game UI is relevant.
- Ask for concrete feedback, not generic stars.

### Week 1

- Add 3-5 example pages:
  - main menu,
  - equipment screen,
  - archive/load screen,
  - profile screen,
  - battle command screen.
- Open "good first issue" tasks for components, docs, and accessibility.
- Add a roadmap issue and pin it.

## Channels

- GitHub topics and README SEO.
- X / Twitter visual thread with screenshots.
- Reddit communities only where self-promotion rules allow it.
- V2EX / Juejin / SegmentFault for Chinese dev audience.
- HelloGitHub submission after the README and Pages demo are stable.
- Product Hunt or Show HN only after the live demo and examples are polished.

## Content Angles

- "I turned JRPG menu UI into a React component library for AI builders."
- "The useful part is not the style clone; it is the component contract and prompt docs."
- "Every visual is CSS-rendered and de-branded."
- "The token layer is public: Less variables for components, `crystalTokens` for AI/app builders."
- "Use `OrbGem` and `OrbSocketRail` to compose socket systems without asset files."

## Ethical Star Growth Rules

- Do not buy stars.
- Do not use star-exchange groups.
- Do not automate GitHub activity.
- Do not imply official affiliation.
- Do not use official images to bait attention.

The durable growth loop is: strong screenshot -> live demo -> copy-paste example -> useful docs -> roadmap -> recurring improvements.

## Milestones

| Target | Goal |
|---|---|
| 50 stars | Validate README/demo clarity. |
| 100 stars | Add GitHub Pages examples and npm publish. |
| 300 stars | Add theming and more screen presets. |
| 500 stars | Submit to curated lists and newsletters. |
| 1,000 stars | Publish a build log article and invite contributors. |
