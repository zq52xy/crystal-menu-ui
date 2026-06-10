// [PROTOCOL]: Change this header when motion showcase mounting changes, then check CLAUDE.md.
// INPUT: Browser document root.
// OUTPUT: Mounted animated README motion showcase.
// POS: Demo-only entry; rendering source for generated motion GIF.
import { createRoot } from 'react-dom/client';
import { MotionShowcase } from './MotionShowcase';

const root = document.getElementById('root');

if (!root) {
  throw new Error('Missing #root for motion showcase renderer.');
}

createRoot(root).render(<MotionShowcase />);
