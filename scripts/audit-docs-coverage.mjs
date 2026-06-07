// [PROTOCOL]: Change this header when docs coverage rules change, then check CLAUDE.md.
// INPUT: Public exports, README, AI usage docs, and component module map.
// OUTPUT: Failing audit if exported components are not documented.
// POS: Lightweight documentation consistency audit.
import { readFileSync } from 'node:fs';

const index = readFileSync('src/index.ts', 'utf8');
const readme = readFileSync('README.md', 'utf8');
const aiUsage = readFileSync('AI_USAGE.md', 'utf8');
const componentMap = readFileSync('src/components/CLAUDE.md', 'utf8');

const exported = [...index.matchAll(/^export \{ (\w+) \}/gm)].map((match) => match[1]);
const missing = exported.filter((component) => (
  !readme.includes(`\`${component}\``)
  || !aiUsage.includes(component)
  || !componentMap.includes(`${component}/`)
));

if (missing.length > 0) {
  console.error(`Missing docs coverage for: ${missing.join(', ')}`);
  process.exit(1);
}

console.log(`Docs coverage ok: ${exported.length} exported components documented.`);
