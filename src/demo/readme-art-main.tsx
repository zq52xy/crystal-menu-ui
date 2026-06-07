// [PROTOCOL]: Change this header when README art mounting changes, then check CLAUDE.md.
// INPUT: Browser query parameter `board`.
// OUTPUT: Mounted README art React composition.
// POS: Demo-only entry; rendering source for generated README images.
import { createRoot } from 'react-dom/client';
import { ReadmeArt, type ReadmeArtBoard } from './ReadmeArt';

const boards = ['banner', 'features-en', 'features-zh'] as const satisfies ReadmeArtBoard[];
const requested = new URLSearchParams(window.location.search).get('board');
const board = boards.find((item) => item === requested) ?? 'banner';
const root = document.getElementById('root');

if (!root) {
  throw new Error('Missing #root for README art renderer.');
}

createRoot(root).render(<ReadmeArt board={board} />);
