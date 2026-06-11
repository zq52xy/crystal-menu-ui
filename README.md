<div align="center">

# crystal-menu-ui

### Final Fantasy VII Remake-inspired JRPG Glass HUD UI Kit for React
### 鏈€缁堝够鎯?VII Remake 椋庢牸 JRPG 鐜荤拑 HUD 缁勪欢搴擄紙React + TypeScript锛?
[![npm version](https://img.shields.io/npm/v/crystal-menu-ui?color=cb3837&labelColor=222)](https://www.npmjs.com/package/crystal-menu-ui)
[![npm package](https://img.shields.io/badge/npm-published-cb3837?logo=npm&logoColor=fff&labelColor=222)](https://www.npmjs.com/package/crystal-menu-ui)
[![GitHub stars](https://img.shields.io/github/stars/zq52xy/crystal-menu-ui?color=ffd700&labelColor=222)](https://github.com/zq52xy/crystal-menu-ui/stargazers)
[![License](https://img.shields.io/badge/license-MIT-81dfff?labelColor=222)](LICENSE)

[![Components](https://img.shields.io/badge/Components-30-4bcdff?labelColor=222)](#components-30--缁勪欢)
[![React](https://img.shields.io/badge/React-18+-61DAFB?logo=react&labelColor=222)](https://react.dev)
[![TypeScript](https://img.shields.io/badge/TypeScript-5+-3178C6?logo=typescript&logoColor=fff&labelColor=222)](https://typescriptlang.org)
[![Vite](https://img.shields.io/badge/Vite-7-646CFF?logo=vite&logoColor=fff&labelColor=222)](https://vite.dev)
[![AI Ready](https://img.shields.io/badge/AI-Ready-00f9fb?labelColor=222)](AI_USAGE.md)
[![Figma Source](https://img.shields.io/badge/Figma-Source-9f7dff?labelColor=222)](FIGMA_REFERENCE.md)
[![Bilingual](https://img.shields.io/badge/docs-EN%20%2F%20涓枃-FF9E64?labelColor=222)](#)

<img src="https://raw.githubusercontent.com/zq52xy/crystal-menu-ui/main/docs/img/readme-hero-equipment.png" alt="crystal-menu-ui Equipment Screen hero preview" width="100%" />
<p>
  <a href="https://zq52xy.github.io/crystal-menu-ui/"><strong>Live Demo</strong></a> ·
  <a href="https://zq52xy.github.io/crystal-menu-ui/components.html"><strong>Component Index / 组件索引</strong></a> ·
  <a href="https://www.npmjs.com/package/crystal-menu-ui"><strong>npm</strong></a> ·
  <a href="AI_USAGE.md"><strong>AI Usage</strong></a> ·
  <a href="https://zq52xy.github.io/crystal-menu-ui/component-index.json"><strong>component-index.json</strong></a>
</p>

</div>

**`crystal-menu-ui`** is an original, MIT-licensed React + TypeScript component library that recreates the visual language of *Final Fantasy VII Remake*'s in-game UI 鈥?dark blue glass panels, cyan linework, materia orb sockets, angular HUD frames, and humanist Optima-style typography 鈥?as **30 reusable components** ready to drop into any JRPG, RPG, fantasy, sci-fi, or game-style web project. It ships AI-ready component documentation, a Figma-derived design tokens system, a flagship bright-blue **Equipment Screen** demo composition, opt-in motion (looped damage numbers, animated chapter cards, ready-pulse limit gauges), and full bilingual docs in English and 绠€浣撲腑鏂?鈥?explicitly framed as an unofficial fan study project, not an official Square Enix asset.

**`crystal-menu-ui`** 鏄竴濂楀熀浜?MIT 璁稿彲鐨勫師鍒?React + TypeScript 缁勪欢搴擄紝鎶娿€婃渶缁堝够鎯?VII Remake銆嬫父鎴?UI 鐨勮瑙夎瑷€鈥斺€旀繁钃濈幓鐠冮潰鏉裤€侀潚鑹茬嚎鏉°€侀瓟鏅剁煶瀹濈煶杞ㄣ€佽彵褰?HUD 妗嗐€佽‖绾挎劅鐨?Optima 瀛椾綋鈥斺€旈噸寤轰负 **30 涓彲澶嶇敤缁勪欢**锛屽彲鐩存帴宓屽叆浠绘剰 JRPG / 瑙掕壊鎵紨 / 濂囧够 / 绉戝够 / 娓告垙椋庢牸鐨?Web 椤圭洰銆傚簱鏈綋闄勫甫闈㈠悜 AI 鐨勭粍浠舵枃妗ｃ€佹潵鑷?Figma 鐨勮璁″彉閲忕郴缁熴€佹槑浜疂钃濋鏍肩殑 **Equipment Screen 瑁呭灞?demo**銆佸彲閫夌殑鍔ㄧ敾浣撶郴锛堝惊鐜激瀹虫暟瀛椼€佺珷鑺傚崱鍏ュ満銆佹瀬闄愭Ы鑴夊啿锛変互鍙婂叏涓嫳鍙岃鏂囨。鈥斺€旀湰椤圭洰鏄庣‘瀹氫箟涓洪潪瀹樻柟绮変笣瀛︿範椤圭洰锛屼笌 Square Enix 绛変换浣曟潈鍒╂柟鏃犲叧銆?
> [!IMPORTANT]
> **Unofficial learning project 路 闈炲畼鏂瑰涔犻」鐩?*
>
> This is a free learning and demonstration project. It is **not affiliated with, endorsed by, or sponsored by any game publisher, studio, owner, or rights holder**.
>
> This package does **not** redistribute official screenshots, logos, characters, fonts, music, icons, textures, extracted UI cuts, exact vector paths, or remote Figma assets. The implementation is original React + Less code that studies broad interface patterns from a source Figma component library.
>
> The MIT license covers **this project's code only**. It does not grant any rights to third-party trademarks, game IP, official art, names, or proprietary visual assets. If you reuse this project, especially for commercial work, you are responsible for your own IP and trademark review.
>
> 鏈」鐩负鍏嶈垂瀛︿範鍜屾紨绀虹敤閫旓紝**涓嶉毝灞炰簬浠讳綍娓告垙鍙戣鏂广€佸伐浣滃銆佹墍鏈夎€呮垨鏉冨埄鏂癸紝涔熶笉浠ｈ〃浠讳綍瀹樻柟鎺堟潈銆佽儗涔︽垨璧炲姪**銆?>
> 鏈寘**涓嶅垎鍙?*瀹樻柟鎴浘銆乴ogo銆佽鑹层€佸瓧浣撱€侀煶涔愩€佸浘鏍囥€佽创鍥俱€佸垏鍥俱€佺簿纭煝閲忚矾寰勬垨杩滅▼ Figma 璧勪骇銆備唬鐮佹槸鍘熷垱 React + Less 瀹炵幇锛屽彧浠庢潵婧?Figma 缁勪欢搴撲腑鐮旂┒閫氱敤鐣岄潰璇█銆?>
> MIT 璁稿彲浠呰鐩?*鏈」鐩唬鐮?*锛屼笉鎺堜簣浠讳綍绗笁鏂瑰晢鏍囥€佹父鎴?IP銆佸畼鏂圭編鏈€佸悕绉版垨涓撴湁瑙嗚璧勪骇鐨勪娇鐢ㄦ潈銆備换浣曞鐢紝灏ゅ叾鏄晢涓氱敤閫旓紝閮介渶瑕佷娇鐢ㄨ€呰嚜琛屽畬鎴?IP 鍜屽晢鏍囬闄╁鏌ャ€?
### About this project / 鍏充簬鏈」鐩?
`crystal-menu-ui` is a long-form study of the question: *what would the Final Fantasy VII Remake equipment, party, and battle UIs look like as a clean, typed React component library?* It studies the in-game **dark blue glass panel hierarchy**, **angular cyan corner brackets**, **materia / orb socket motifs**, **Lv-13-style diagonal stat shelves**, **chapter title / chapter results cards**, **floating damage numbers**, **limit gauges**, **save / load archive rows**, and **Optima-led humanist typography** 鈥?and turns each pattern into an isolated, prop-driven, theme-friendly React component that an LLM or human builder can compose into a complete JRPG menu screen in a few lines.

Because every component is rebuilt from scratch in CSS and SVG, the package can be MIT-licensed and shipped to npm without redistributing official screenshots, logos, character art, fonts, or extracted vector paths. The repository ships matching AI documentation (`AI_USAGE.md`, `PROMPT.md`, `DESIGN_PROMPT.md`, `skill/SKILL.md`) so an AI assistant can produce a Final Fantasy-style menu using the public component API without inventing branded assets.

`crystal-menu-ui` 鏄竴娆″畬鏁寸殑璁捐鐮旂┒锛?濡傛灉鐢ㄤ竴濂楀共鍑€銆佸己绫诲瀷鐨?React 缁勪欢搴撴潵閲嶅缓銆婃渶缁堝够鎯?VII Remake銆嬩腑鐨勮澶囧睆銆侀槦浼嶈彍鍗曞拰鎴樻枟 UI锛屼細闀夸粈涔堟牱?* 浠撳簱绯荤粺鎬х爺绌朵簡娓告垙涓殑**娣辫摑鐜荤拑闈㈡澘灞傜骇**銆?*鑿卞舰闈掕壊瑙掓**銆?*榄旀櫠鐭?/ 瀹濈煶鎻掓Ы璇█**銆?*Lv 13 鏂滅嚎灞炴€ц建**銆?*绔犺妭鏍囬 / 缁撶畻鍗?*銆?*娴姩浼ゅ鏁板瓧**銆?*鏋侀檺鎶€鑳芥Ы**銆?*瀛樻。琛?*涓?**Optima 琛嚎瀛椾綋** 鈥斺€?姣忎竴涓ā寮忛兘琚嫭绔嬫垚涓€涓?prop 椹卞姩銆佸彲鎹㈣偆銆佸彲琚?AI 鎴栦汉绫讳竴琛岃缁勫悎鐨?React 缁勪欢銆?
鐢变簬鎵€鏈夌粍浠堕兘鏄敤 CSS + SVG 浠庡ご瀹炵幇锛屾暣涓寘鍙互浠?MIT 璁稿彲鍙戝竷鍒?npm锛?*瀹屽叏涓嶅垎鍙?*瀹樻柟鎴浘銆乴ogo銆佽鑹茬珛缁樸€佸瓧浣撴垨鐭㈤噺璺緞銆備粨搴撹繕鎻愪緵浜嗛厤濂楃殑 AI 鏂囨。锛坄AI_USAGE.md`銆乣PROMPT.md`銆乣DESIGN_PROMPT.md`銆乣skill/SKILL.md`锛夛紝璁?AI 鍔╂墜鑳藉湪涓?骞昏"鍑哄搧鐗岃祫浜х殑鍓嶆彁涓嬶紝鍩轰簬鍏紑缁勪欢 API 鐢熸垚涓€涓畬鏁寸殑鏈€缁堝够鎯抽鏍艰彍鍗曘€?
### What is crystal-menu-ui? / crystal-menu-ui 鏄粈涔堬紵

**crystal-menu-ui is an AI-ready React + TypeScript component library for original JRPG glass HUD interfaces.** It helps developers build RPG menus, equipment screens, battle commands, character status panels, orb/socket systems, chapter cards, limit gauges, and animated damage numbers without copying official game assets.

**crystal-menu-ui 鏄竴涓潰鍚戝師鍒?JRPG 鐜荤拑 HUD 鐣岄潰鐨?React + TypeScript 缁勪欢搴撱€?* 瀹冮€傚悎鍒朵綔 RPG 鑿滃崟銆佽澶囩晫闈€佹垬鏂楁寚浠ゃ€佽鑹茬姸鎬侀潰鏉裤€侀瓟鏅剁煶/瀹濈煶鎻掓Ы绯荤粺銆佺珷鑺傚崱鐗囥€佹瀬闄愭妧妲藉拰鍔ㄦ€佷激瀹虫暟瀛楋紝鍚屾椂涓嶅垎鍙戝畼鏂规父鎴忕礌鏉愩€?
### Best for / 閫傚悎鍦烘櫙

| Query / 鎼滅储鎰忓浘 | Direct answer / 鐩存帴绛旀 |
|---|---|
| React JRPG UI kit | Use `crystal-menu-ui` when you need typed React components for RPG menus, game HUDs, party panels, equipment screens, and battle UI. |
| RPG menu component library | The package provides 30 reusable components with Less modules, TypeScript props, public tokens, and AI usage docs. |
| Final Fantasy-inspired UI study | The project studies JRPG glass-HUD patterns as an unofficial learning reference and rebuilds them with original CSS/SVG. |
| AI-generated game UI | The repository includes `AI_USAGE.md`, prompts, tokens, and `llms.txt` so AI assistants can compose screens from the public API. |
### Why this exists / 涓轰粈涔堥渶瑕佸畠

Prompt-only UI drifts. Screenshot-to-code bloats. **Component-constrained AI composition stays consistent.** `crystal-menu-ui` gives humans and AI assistants a stable JRPG interface layer: typed React components, documented props, shared tokens, rights-safe boundaries, and demo-proven composition patterns.

This means an AI builder can generate an RPG equipment screen or battle menu by selecting components and props instead of inventing every border, panel, animation, and state from scratch.

### AI workflow / AI 宸ヤ綔娴?
Use the package as a constrained design system for AI-assisted UI work:

1. Choose a target screen: equipment, battle commands, party status, inventory, archive, or chapter card.
2. Select components from `AI_USAGE.md` and the component table below.
3. Compose layout with typed props and public tokens.
4. Keep names, artwork, icons, fonts, and copy original.
5. Validate with typecheck, build, docs audit, package smoke, and visual smoke.

Full guide: [docs/ai-workflow.md](docs/ai-workflow.md).
### Search Keywords / 鎼滅储鍏抽敭璇?
- **English component-library keywords:** Final Fantasy UI components, Final Fantasy VII Remake UI kit, FF7R UI clone, FF7 menu components, JRPG UI library, JRPG menu React library, JRPG glass HUD React components, materia orb React component, RPG status bar React, fantasy game UI components, anime game UI library.
- **English design-language keywords:** dark blue glass UI, cyan linework UI, angular menu HUD, holographic glass HUD, sci-fi RPG menu, Optima font menu, blue glass equipment screen, JRPG status panel, RPG character profile React.
- **English use-case keywords:** game web menu, indie RPG UI starter, fan game UI kit, MMO inspector UI, RPG character sheet web, web RPG companion app UI, AI-generated JRPG menu, GPT JRPG UI generator.
- **涓枃缁勪欢搴撳叧閿瘝锛?* 鏈€缁堝够鎯?UI銆佹渶缁堝够鎯?7 閲嶅埗鐗?UI銆丗F7 閲嶅埗鐗堢晫闈€丗F7R 缁勪欢搴撱€丣RPG 缁勪欢搴撱€佹渶缁堝够鎯抽鏍艰彍鍗曠粍浠躲€佹渶缁堝够鎯抽鏍?React 缁勪欢銆丣RPG 鐜荤拑 HUD React 缁勪欢銆侀瓟鏅剁煶瀹濈煶 React 缁勪欢銆丷PG 鐘舵€佹爮 React銆?- **涓枃璁捐璇█鍏抽敭璇嶏細** 娣辫摑鐜荤拑 UI銆侀潚鑹茶竟妗?UI銆佽彵褰?HUD銆佺骞?RPG 鑿滃崟銆佺幓鐠冭川鎰熻澶囧睆銆丣RPG 鐘舵€侀潰鏉裤€丱ptima 瀛椾綋鑿滃崟銆佽‖绾?RPG UI銆?- **涓枃浣跨敤鍦烘櫙鍏抽敭璇嶏細** 娓告垙 Web 鑿滃崟銆佺嫭绔?RPG UI 鍚姩鍖呫€佸悓浜烘父鎴?UI 濂椾欢銆丮MO 淇℃伅闈㈡澘銆丷PG 瑙掕壊鍗?Web銆乄eb RPG 閰嶅 App UI銆丄I 鐢熸垚 JRPG 鑿滃崟銆丟PT JRPG UI 鐢熸垚鍣ㄣ€?
> These keywords describe learning, reference, and search intent only. They are not official product names, affiliation claims, or asset licenses.
>
> 浠ヤ笂鍏抽敭璇嶄粎鐢ㄤ簬璇存槑瀛︿範鍙傝€冨拰鎼滅储鎰忓浘锛屼笉浠ｈ〃瀹樻柟浜у搧鍚嶃€佹巿鏉冨叧绯绘垨绱犳潗璁稿彲銆?
![Crystal Menu UI banner](https://raw.githubusercontent.com/zq52xy/crystal-menu-ui/main/docs/img/banner.png)

### 馃敆 Preview

- **Online Preview (PC):** [crystal-menu-ui](https://zq52xy.github.io/crystal-menu-ui/) 鈥?full demo gallery, including the bright-blue Equipment Screen, Materia Growth panels, Weapon Upgrade Matrix, looping Damage Numbers, Limit Gauges, Chapter Intro / Results cards, and the full 30-component gallery.
- **Online Preview (Mobile):** [crystal-menu-ui-mobile](https://zq52xy.github.io/crystal-menu-ui/?preview=mobile) 鈥?same gallery in 390 px layout.
- **Component Docs:** [All 30 components](#components-30--缁勪欢) 鈥?component map, code examples, and props contract.
- **Showcase:** [Highlights / 鏍稿績鍗栫偣](#highlights--鏍稿績鍗栫偣) 鈥?menu screens, HUD panels, archive slots, inventory surfaces, materia growth, weapon upgrade matrix, and chapter cinematics.
- **Source Figma:** [Final Fantasy VII Remake UI Kit and Prototypes (Community Copy)](https://www.figma.com/design/GjQLMKKW4sLALp3auVsSqG/Final-Fantasy-VII-Remake-UI-Kit-and-Prototypes--Community---Copy-?node-id=1-3&t=NbDcbMPlhTXk572y-1) 鈥?visual-language reference; not bundled.

### 馃敆 棰勮

- **鍦ㄧ嚎棰勮锛圥C锛夛細** [crystal-menu-ui](https://zq52xy.github.io/crystal-menu-ui/) 鈥斺€?瀹屾暣 demo 鐢诲粖锛屽寘鍚槑浜疂钃濊澶囧睆銆侀瓟鏅剁煶鍗囩骇闈㈡澘銆佹鍣ㄥ崌绾х煩闃点€佸惊鐜激瀹虫暟瀛椼€佹瀬闄愭Ы銆佺珷鑺傚紑鍦?/ 缁撶畻鍗★紝浠ュ強瀹屾暣 30 涓粍浠剁敾寤娿€?- **鍦ㄧ嚎棰勮锛圡obile锛夛細** [crystal-menu-ui-mobile](https://zq52xy.github.io/crystal-menu-ui/?preview=mobile) 鈥斺€?390 px 绉诲姩绔増鏈€?- **缁勪欢鏂囨。锛?* [鍏ㄩ儴 30 涓粍浠禲(#components-30--缁勪欢) 鈥斺€?缁勪欢鍦板浘銆佷唬鐮佺ず渚嬪拰 Props 濂戠害銆?- **鏁堟灉灞曠ず锛?* [鏍稿績鍗栫偣 / Highlights](#highlights--鏍稿績鍗栫偣) 鈥斺€?鑿滃崟灞忋€丠UD 闈㈡澘銆佸瓨妗ｈ銆佺墿鍝佺晫闈€侀瓟鏅剁煶鍗囩骇銆佹鍣ㄧ煩闃点€佺珷鑺傚崱銆?- **鏉ユ簮 Figma锛?* [Final Fantasy VII Remake UI Kit and Prototypes (Community Copy)](https://www.figma.com/design/GjQLMKKW4sLALp3auVsSqG/Final-Fantasy-VII-Remake-UI-Kit-and-Prototypes--Community---Copy-?node-id=1-3&t=NbDcbMPlhTXk572y-1) 鈥斺€?瑙嗚璇█鍙傝€冿紝涓嶆墦鍖呫€?
> The GitHub Pages links update after each `npm run deploy`. If the live preview is older than the latest commit, run `npm run deploy` from a clone to refresh `demo-dist`.
>
> GitHub Pages 棰勮閾炬帴鍦ㄦ瘡娆℃墽琛?`npm run deploy` 鍚庢洿鏂般€傚鏋滃彂鐜板湪绾块瑙堟瘮褰撳墠 commit 鏃э紝clone 浠撳簱鍚庢墽琛?`npm run deploy` 鍗冲彲閲嶆柊鍙戝竷 `demo-dist`銆?
---

## Use, Share, or Showcase / 浣跨敤銆佸垎浜垨灞曠ず浣滃搧

<p align="center">
  <img src="https://raw.githubusercontent.com/zq52xy/crystal-menu-ui/main/docs/img/banner.png" alt="crystal-menu-ui social preview banner" width="100%" />
</p>

Use the package, share the visual assets, or open a showcase issue if it helps you build JRPG, RPG, game HUD, or AI-generated menu interfaces faster. Stars are welcome, but useful demos, feedback, and showcases are even more valuable for the project.

濡傛灉杩欎釜椤圭洰鑳藉府浣犳洿蹇惌寤?JRPG / RPG / 娓告垙 HUD / AI 鐢熸垚鑿滃崟鐣岄潰锛屽彲浠ョ洿鎺ヤ娇鐢ㄣ€佸垎浜厤鍥撅紝鎴栬€呮彁浜や竴涓?Showcase issue銆係tar 褰撶劧娆㈣繋锛屼絾鐪熷疄 demo銆佸弽棣堝拰浣滃搧灞曠ず瀵归」鐩洿鏈変环鍊笺€?
- **Star:** [github.com/zq52xy/crystal-menu-ui](https://github.com/zq52xy/crystal-menu-ui)
- **Live demo:** [zq52xy.github.io/crystal-menu-ui](https://zq52xy.github.io/crystal-menu-ui/)
- **npm:** [npmjs.com/package/crystal-menu-ui](https://www.npmjs.com/package/crystal-menu-ui)
- **Social preview asset:** use `docs/img/banner.png` for posts, release notes, and the GitHub repository social preview.
- **Launch kit:** use [`docs/launch/community-launch-kit.md`](docs/launch/community-launch-kit.md) for ready-to-post launch copy and community checklists.
- **GitHub settings checklist:** use [`docs/launch/github-settings-checklist.md`](docs/launch/github-settings-checklist.md) for topics, social preview, release, and pinned issue setup.
- **AI citation entry:** [`llms.txt`](llms.txt) summarizes the project for AI search and answer engines.
- **Showcase your build:** open a [Showcase issue](https://github.com/zq52xy/crystal-menu-ui/issues/new?template=showcase.yml) if you use the library in a project or AI-generated screen.
- **Contribute safely:** issue and PR templates guide contributors through visual evidence, docs updates, and rights-boundary checks.
- **Suggested topics:** `react`, `typescript`, `component-library`, `game-ui`, `jrpg`, `rpg-ui`, `design-system`, `ai-ready`, `vite`.

## Motion Showcase / 鍔ㄦ晥灞曠ず

<p align="center">
  <img src="https://raw.githubusercontent.com/zq52xy/crystal-menu-ui/main/docs/img/motion-showcase.gif" alt="Animated crystal-menu-ui component showcase" width="100%" />
</p>

The GIF is generated from real React components: looping damage numbers, ready limit gauges, a cinematic chapter card, and the crystal loading state.

杩欏紶 GIF 鐢辩湡瀹?React 缁勪欢鐢熸垚锛氬惊鐜激瀹虫暟瀛椼€丷eady 鏋侀檺妲姐€佺珷鑺傚崱鍏ュ満鍜屾按鏅跺姞杞芥€併€?
## Visual Gallery / 瑙嗚鐢诲粖

These screenshots are generated from the public demo and use original CSS/SVG visuals only. They are safe to reuse in posts, release notes, and community submissions.

杩欎簺鎴浘鏉ヨ嚜鍏紑 demo锛屽彧浣跨敤鍘熷垱 CSS / SVG 瑙嗚銆傚彲浠ョ敤浜庣ぞ鍖哄笘瀛愩€乺elease notes 鍜岄」鐩粙缁嶃€?
<table>
<tr>
<td width="50%"><img src="https://raw.githubusercontent.com/zq52xy/crystal-menu-ui/main/docs/img/gallery-equipment-screen.png" alt="Equipment Screen component composition" width="100%" /><br /><strong>Equipment Screen</strong></td>
<td width="50%"><img src="https://raw.githubusercontent.com/zq52xy/crystal-menu-ui/main/docs/img/gallery-materia-growth.png" alt="Materia Growth component panels" width="100%" /><br /><strong>Materia Growth</strong></td>
</tr>
<tr>
<td width="50%"><img src="https://raw.githubusercontent.com/zq52xy/crystal-menu-ui/main/docs/img/gallery-weapon-matrix.png" alt="Weapon Upgrade Matrix component" width="100%" /><br /><strong>Weapon Matrix</strong></td>
<td width="50%"><img src="https://raw.githubusercontent.com/zq52xy/crystal-menu-ui/main/docs/img/gallery-damage-numbers.png" alt="Damage Numbers feedback component" width="100%" /><br /><strong>Damage Numbers</strong></td>
</tr>
<tr>
<td colspan="2"><img src="https://raw.githubusercontent.com/zq52xy/crystal-menu-ui/main/docs/img/gallery-chapter-title.png" alt="Chapter title cinematic card" width="100%" /><br /><strong>Chapter Card</strong></td>
</tr>
</table>

## Highlights / 鏍稿績鍗栫偣

<p align="center">
  <img src="https://raw.githubusercontent.com/zq52xy/crystal-menu-ui/main/docs/img/feature-onepager.png" alt="Core highlights in English" width="100%" />
</p>

<p align="center">
  <img src="https://raw.githubusercontent.com/zq52xy/crystal-menu-ui/main/docs/img/feature-onepager-zh.png" alt="鏍稿績鍗栫偣涓枃鍥? width="100%" />
</p>

- **30 typed React components** spanning menu shells, command lists, dialogs, HUD metadata, party status, archive slots, inventory panels, battle commands, materia growth panels, weapon upgrade matrices, chapter cinematics, and floating combat damage indicators.
- **Equipment Screen demo** 鈥?a complete bright-blue glass HUD composition in `src/demo/App.tsx` that mirrors the source method's flagship equipment surface, composed entirely from existing public components plus a small wrapper.
- **Optima-led typography** 鈥?both display and body tokens lead with `Optima`; the package never bundles a font binary, but a gitignored local-only injection slot lets the demo preview the real face on any platform.
- **Original CSS-rendered visuals**: dark / bright dual glass surfaces, cyan and gold linework, glow states, custom inline-SVG icons, materia orb sockets, weapon SP nodes, and damage-number loops.
- **Opt-in motion** 鈥?`DamageNumber loop`, `LimitGauge ready` pulse, `ChapterIntroCard` / `ChapterEndCard` entrance animations; all motion respects `prefers-reduced-motion`.
- **AI-ready documentation** with component routing, prompt files, hard boundaries, and local skill instructions.
- **Public design tokens** through Less variables and the TypeScript `crystalTokens` export.
- **Demo-driven QA** with desktop, mobile, and mobile-preview visual smoke screenshots.

- **30 涓甫绫诲瀷鐨?React 缁勪欢**锛岃鐩栬彍鍗曞澹炽€佸懡浠ゅ垪琛ㄣ€佸脊绐椼€丠UD 鍏冧俊鎭€侀槦浼嶇姸鎬併€佸瓨妗ｅ垪琛ㄣ€佺墿鍝侀潰鏉裤€佹垬鏂楀懡浠ゃ€侀瓟鏅剁煶鍗囩骇闈㈡澘銆佹鍣ㄥ崌绾х煩闃点€佺珷鑺傚紑鍦?/ 缁撶畻鍗″拰娴姩鎴樻枟浼ゅ鏁板瓧銆?- **Equipment Screen 瑁呭灞?demo** 鈥斺€?`src/demo/App.tsx` 涓寘鍚竴涓畬鏁寸殑鏄庝寒瀹濊摑鐜荤拑 HUD 澶嶅悎鐣岄潰锛屽鍒绘潵婧愮晫闈㈢殑鏃楄埌瑁呭灞忥紝鏁村睆鐢辩幇鏈夊叕寮€缁勪欢 + 涓€涓交閲?wrapper 鎷兼垚銆?- **Optima 琛嚎瀛椾綋浼樺厛** 鈥斺€?display 鍜?body token 閮戒互 `Optima` 璧峰ご锛涘寘鏈韩涓嶆墦鍖呬换浣曞瓧浣撴枃浠讹紝浣?demo 閰嶅浜?gitignored 鐨勬湰鍦板瓧浣撴敞鍏ユЫ锛屽彲浠ヨ鐪?Optima 鍦ㄤ换浣曞钩鍙颁笂棰勮銆?- **鍘熷垱 CSS 瑙嗚**锛氭殫鑹?/ 鏄庝寒鍙岀幓鐠冮潰鏉跨郴缁熴€侀潚鑹蹭笌閲戣壊绾挎潯銆佸彂鍏夋€併€佽嚜缁樺唴鑱?SVG 鍥炬爣銆侀瓟鏅剁煶瀹濈煶杞ㄣ€佹鍣?SP 鑺傜偣銆佷激瀹虫暟瀛楀惊鐜€?- **鍙€夊姩鐢?*锛歚DamageNumber loop`銆乣LimitGauge ready` 鑴夊啿銆乣ChapterIntroCard` / `ChapterEndCard` 鍏ュ満鍔ㄧ敾锛涙墍鏈夊姩鐢婚兘灏婇噸 `prefers-reduced-motion`銆?- **闈㈠悜 AI 鐨勬枃妗ｄ綋绯?*锛氱粍浠惰矾鐢便€佹彁绀鸿瘝鏂囦欢銆佺‖杈圭晫鍜屾湰鍦?skill 鎸囦护銆?- **鍏紑璁捐鍙橀噺**锛歀ess 鍙橀噺鍜?TypeScript `crystalTokens` 瀵煎嚭銆?- **Demo 椹卞姩 QA**锛氭闈€佺Щ鍔ㄧ鍜岀Щ鍔ㄩ瑙堥摼鎺ョ殑瑙嗚鐑熸祴鎴浘銆?
---

## Installation / 瀹夎

```bash
npm install crystal-menu-ui
```

```tsx
import 'crystal-menu-ui/style'
```

---

## Quick Start / 蹇€熷紑濮?
```tsx
import {
  MenuPanel,
  OrbGem,
  OrbSocketRail,
  SaveSlot,
} from 'crystal-menu-ui'
import 'crystal-menu-ui/style'

export default function App() {
  return (
    <div style={{ background: '#17191e', padding: 40, minHeight: '100vh' }}>
      <MenuPanel title="Orb Socket Rail" variant="deep" density="compact">
        <OrbSocketRail
          sockets={[
            { id: 'green', tone: 'green', linkedAfter: 'short' },
            { id: 'violet', tone: 'violet', linkedAfter: 'short' },
            { id: 'gold', tone: 'gold', linkedAfter: 'brace' },
            { id: 'red', tone: 'red' },
          ]}
        />

        <div style={{ display: 'flex', gap: 12, marginTop: 12 }}>
          <OrbGem tone="green" size="md" label="Green orb" />
          <OrbGem tone="violet" size="md" label="Violet orb" />
          <OrbGem tone="gold" size="md" label="Gold orb" />
          <OrbGem tone="red" size="md" label="Red orb" />
        </div>

        <SaveSlot
          slotId="01"
          timestamp="06/07/2026 10:24 p.m."
          title="Archive 04: Glassway Sprint"
          location="Upper Ring - Transit Housing"
          playtime="005:38:46"
          party={['A', 'C', 'L']}
          selected
        />
      </MenuPanel>
    </div>
  )
}
```

---

### SEO / AI-search reading paths

- [How to Build a JRPG Menu UI in React](docs/content/react-jrpg-menu-ui.md)
- [AI-Ready Game UI Components](docs/content/ai-ready-game-ui-components.md)
- [How to Study Game UI Without Shipping Official Assets](docs/content/safe-game-ui-study-without-assets.md)
## For AI Users / AI 鐢ㄦ埛鎸囧崡

This package is structured for AI-assisted app generation. Use the existing components first, then use tokens only for wrapper layout. Do not invent official assets, character art, logos, copied screenshots, or exact source-vector paths.

杩欎釜鍖呬笓闂ㄦ暣鐞嗕簡闈㈠悜 AI 鐨勭粍浠跺绾︺€傜敓鎴愮晫闈㈡椂浼樺厛浣跨敤鐜版湁缁勪欢锛屽彧鍦ㄥ寘瑁瑰竷灞€鏃朵娇鐢?token銆備笉瑕佺敓鎴愬畼鏂圭礌鏉愩€佽鑹插浘銆乴ogo銆佸鍒舵埅鍥炬垨绮剧‘婧愮煝閲忚矾寰勩€?
### AI Documentation Files / AI 鏂囨。

| File | Purpose |
|------|---------|
| [AI_USAGE.md](AI_USAGE.md) | Canonical AI component contract, props, examples, and anti-hallucination rules |
| [docs/ai-user-guide.md](docs/ai-user-guide.md) | AI routing guide, generation pattern, and hard boundaries |
| [docs/tokens.md](docs/tokens.md) | Public design token guide for colors, spacing, radius, borders, fonts, and shadows |
| [PROMPT.md](PROMPT.md) | App/page generation prompt |
| [DESIGN_PROMPT.md](DESIGN_PROMPT.md) | Visual generation prompt |
| [skill/SKILL.md](skill/SKILL.md) | Local coding-assistant skill draft |

| 鏂囦欢 | 鐢ㄩ€?|
|------|------|
| [AI_USAGE.md](AI_USAGE.md) | AI 缁勪欢濂戠害涓诲叆鍙ｏ紝鍖呭惈 props銆佺ず渚嬪拰闃?hallucination 瑙勫垯 |
| [docs/ai-user-guide.md](docs/ai-user-guide.md) | AI 璺敱銆佺敓鎴愭ā寮忓拰纭竟鐣?|
| [docs/tokens.md](docs/tokens.md) | 鍏紑璁捐鍙橀噺鏂囨。锛岃鐩栭鑹层€侀棿璺濄€佸渾瑙掋€佽竟妗嗐€佸瓧浣撳拰闃村奖 |
| [PROMPT.md](PROMPT.md) | 椤甸潰/搴旂敤鐢熸垚鎻愮ず璇?|
| [DESIGN_PROMPT.md](DESIGN_PROMPT.md) | 瑙嗚鐢熸垚鎻愮ず璇?|
| [skill/SKILL.md](skill/SKILL.md) | 鏈湴 coding-assistant skill 鑽夋 |

---

## Components (30) / 缁勪欢

| Category | Count | Components |
|----------|-------|------------|
| **Shell / Panels** | 3 | `MenuPanel`, `PartyMenuShell`, `ProfileScreen` |
| **Commands / Dialogs** | 5 | `CommandButton`, `MainMenu`, `DialogueBox`, `ConfirmDialog`, `BattleMenu` |
| **Status / HUD** | 5 | `PartyStatus`, `HPMPBar`, `LevelInfo`, `FloatingStatusBar`, `LimitGauge` |
| **Combat / Feedback** | 1 | `DamageNumber` |
| **Equipment / Orbs** | 5 | `EquipmentPanel`, `OrbGem`, `OrbSocketRail`, `MateriaGrowthTree`, `WeaponUpgradeMatrix` |
| **Characters** | 3 | `CharacterProfile`, `CharacterPortrait`, `CharacterRoster` |
| **Inventory** | 2 | `InventoryList`, `ItemTooltip` |
| **Chapter / Cinematic** | 2 | `ChapterIntroCard`, `ChapterEndCard` |
| **Archive / System** | 4 | `SaveSlot`, `GameIcon`, `Divider`, `Loading` |

> 馃摉 Component contract with examples and props: **[AI_USAGE.md](AI_USAGE.md)**
>
> 缁勪欢濂戠害銆佺ず渚嬪拰 Props锛?*[AI_USAGE.md](AI_USAGE.md)**

---

## Design Tokens / 璁捐鍙橀噺

Use `variables.less` when editing component styles. Use `crystalTokens` when an app, generator, or AI assistant needs to inspect the design system from TypeScript.

缂栬緫缁勪欢鏍峰紡鏃朵互 `variables.less` 涓哄噯銆傚簲鐢ㄣ€佺敓鎴愬櫒鎴?AI 鍔╂墜闇€瑕佷粠 TypeScript 璇诲彇璁捐绯荤粺鏃朵娇鐢?`crystalTokens`銆?
| Token | Value | Usage |
|-------|-------|-------|
| Background | `#17191e` | Page and demo background |
| Crystal Cyan | `#4bcdff` | Active lines, focus states, icons |
| Crystal Border | `#81dfff` | Panel borders and outlines |
| Text Main | `#f8fbff` | Primary readable text |
| Text Muted | `#949492` | Secondary metadata |
| Success Glow | `#00f9fb` | Resource highlights and OK states |
| Violet | `#9f7dff` | Magic/orb accent |
| Panel Radius | `6px` | Main panel radius |
| Space Scale | `4 / 8 / 12 / 16 / 20 / 24` | Layout rhythm |

| 鍙橀噺 | 鍊?| 鐢ㄩ€?|
|------|-----|------|
| 鑳屾櫙 | `#17191e` | 椤甸潰鍜?demo 鑳屾櫙 |
| 姘存櫠闈?| `#4bcdff` | 婵€娲荤嚎鏉°€佺劍鐐规€併€佸浘鏍?|
| 姘存櫠杈规 | `#81dfff` | 闈㈡澘杈规鍜岃疆寤?|
| 涓绘枃瀛?| `#f8fbff` | 涓昏鍙鏂囧瓧 |
| 娆＄骇鏂囧瓧 | `#949492` | 娆＄骇鍏冧俊鎭?|
| 鎴愬姛杈夊厜 | `#00f9fb` | 璧勬簮楂樹寒鍜?OK 鐘舵€?|
| 绱壊 | `#9f7dff` | 榄旀硶/瀹濈煶寮鸿皟鑹?|
| 闈㈡澘鍦嗚 | `6px` | 涓婚潰鏉垮渾瑙?|
| 闂磋窛鍒诲害 | `4 / 8 / 12 / 16 / 20 / 24` | 甯冨眬鑺傚 |

```tsx
import { crystalTokens } from 'crystal-menu-ui'

const shellStyle = {
  background: crystalTokens.color.glassStrong,
  borderColor: crystalTokens.color.border,
  borderRadius: crystalTokens.radius.panel,
  padding: crystalTokens.space[4],
}
```

---

## FAQ / 甯歌闂

### Is crystal-menu-ui an official Final Fantasy package?

No. `crystal-menu-ui` is an unofficial study project and is not affiliated with, endorsed by, or sponsored by any game publisher or rights holder. The package does not ship official screenshots, logos, character art, fonts, music, icons, textures, extracted UI cuts, exact vector paths, or remote Figma assets.

### Can I use crystal-menu-ui in a commercial React project?

The project code is MIT-licensed, but the Final Fantasy / 鏈€缁堝够鎯?wording is only a search and study reference. For commercial use, keep your own product branding, artwork, names, icons, music, fonts, and legal review separate from this package.

### What does crystal-menu-ui include?

The library includes 30 typed React components for menu shells, command rows, dialogs, HUD metadata, party status, equipment panels, orb sockets, materia-style progression panels, weapon matrices, chapter cards, save slots, loading states, limit gauges, and damage numbers.

### Does crystal-menu-ui work with AI coding assistants?

Yes. The repository includes `AI_USAGE.md`, `PROMPT.md`, `DESIGN_PROMPT.md`, `docs/tokens.md`, `skill/SKILL.md`, and `llms.txt` so ChatGPT, Claude, Copilot, and other assistants can identify component names, props, token values, rights boundaries, and safe generation patterns.

---
## Tech Stack / 鎶€鏈爤

| | |
|---|---|
| Framework | React 18 + TypeScript 5 |
| Build | Vite 7, library mode, ESM + CJS dual output |
| Styling | Less Modules with `crystal-[local]-[hash:base64:5]` scoped names |
| Tokens | Less variables + exported `crystalTokens` TypeScript mirror |
| Typography | Optima-led humanist serif stack on both display and body tokens (no bundled binary) |
| QA | TypeScript, docs coverage audit, Vite demo build, Playwright visual smoke |
| Package | CSS side effects, typed exports, `prepublishOnly` build |

---

## Local Development / 鏈湴寮€鍙?
```bash
git clone https://github.com/zq52xy/crystal-menu-ui.git
cd crystal-menu-ui
npm install
npm run typecheck
npm run build
npm run build:demo
npm run audit:docs
npm run visual:smoke
```

Run the local demo:

```bash
npm run dev
```

Open:

```text
http://127.0.0.1:5173/
http://127.0.0.1:5173/?preview=mobile
```

Deploy the static demo to GitHub Pages:

```bash
npm run deploy
```

This script runs `npm run build:demo` followed by `gh-pages -d demo-dist`, refreshing https://zq52xy.github.io/crystal-menu-ui/ . Run it whenever the live preview is older than the latest commit (e.g. after merging new components or tweaking the Equipment Screen demo).

閮ㄧ讲闈欐€?demo 鍒?GitHub Pages锛?
```bash
npm run deploy
```

璇ヨ剼鏈細鍏?`npm run build:demo`锛屽啀 `gh-pages -d demo-dist`锛屽埛鏂?https://zq52xy.github.io/crystal-menu-ui/ 銆?*褰撳湪绾块瑙堣惤鍚庝簬鏈€鏂?commit 鏃?*锛堜緥濡傚垰鍚堝苟鏂扮粍浠舵垨璋冩暣 Equipment Screen demo锛夛紝杩愯姝ゅ懡浠ゅ嵆鍙噸鏂板彂甯冦€?
---

## Contributing / 璐＄尞

Contributions are welcome if they keep the project original, neutral, and component-focused.

娆㈣繋璐＄尞锛屼絾蹇呴』淇濇寔鍘熷垱銆佸幓鍝佺墝鍖栵紝骞跺洿缁曠粍浠跺簱鑳藉姏灞曞紑銆?
- Read [CONTRIBUTING.md](CONTRIBUTING.md).
- Keep official assets, copied screenshots, logos, character art, official fonts, and exact source-vector paths out of the package.
- Update `AI_USAGE.md` when component props or behavior change.
- Update `docs/tokens.md` if token values change.
- Run the validation commands before submitting changes.

---

## Credits / 鑷磋阿

- Source Figma component library: [Figma component library](https://www.figma.com/design/GjQLMKKW4sLALp3auVsSqG/Final-Fantasy-VII-Remake-UI-Kit-and-Prototypes--Community---Copy-?node-id=1-3&t=NbDcbMPlhTXk572y-1)
- Local study notes: [FIGMA_REFERENCE.md](FIGMA_REFERENCE.md)
- Rights and method boundary: [ATTRIBUTION.md](ATTRIBUTION.md)

This repository converts source-interface ideas into original React components. It does not ship source Figma assets or official game assets.

鏈粨搴撴妸鏉ユ簮鐣岄潰鐨勮璁¤瑷€杞崲涓哄師鍒?React 缁勪欢锛屼笉鍒嗗彂鏉ユ簮 Figma 璧勪骇鎴栧畼鏂规父鎴忕礌鏉愩€?
---

## License / 璁稿彲璇?
MIT. See [LICENSE](LICENSE).

MIT銆傝 [LICENSE](LICENSE)銆?
