// [PROTOCOL]: Change this header when generated AI-consumable component data changes, then check CLAUDE.md.
// INPUT: src/demo/componentIndexData.ts bilingual component metadata.
// OUTPUT: public/component-index.json for crawlers, AI tools, and static consumers.
// POS: Build helper only; source facts live in componentIndexData.ts.
import { mkdirSync, readFileSync, rmSync, writeFileSync } from 'node:fs';
import { dirname, resolve } from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';
import ts from 'typescript';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const sourcePath = resolve(root, 'src/demo/componentIndexData.ts');
const tempPath = resolve(root, '.tmp-component-index-data.mjs');
const outputPath = resolve(root, 'public/component-index.json');

const source = readFileSync(sourcePath, 'utf8');
const transpiled = ts.transpileModule(source, {
  compilerOptions: {
    module: ts.ModuleKind.ES2022,
    target: ts.ScriptTarget.ES2022,
    verbatimModuleSyntax: true,
  },
}).outputText;

writeFileSync(tempPath, transpiled, 'utf8');
const { componentIndexItems, componentIndexStats } = await import(`${pathToFileURL(tempPath).href}?t=${Date.now()}`);

const payload = {
  name: 'crystal-menu-ui component index',
  url: 'https://zq52xy.github.io/crystal-menu-ui/components.html',
  repository: 'https://github.com/zq52xy/crystal-menu-ui',
  npm: 'https://www.npmjs.com/package/crystal-menu-ui',
  license: 'MIT',
  unofficial: true,
  languages: ['en', 'zh-CN'],
  stats: componentIndexStats,
  components: componentIndexItems,
  rightsBoundary: 'Original React, TypeScript, Less, CSS, SVG, and documentation only; no official assets or affiliation claims.',
};

mkdirSync(dirname(outputPath), { recursive: true });
writeFileSync(outputPath, `${JSON.stringify(payload, null, 2)}\n`, 'utf8');
rmSync(tempPath, { force: true });
console.log(`[component-index-json] wrote ${outputPath}`);
