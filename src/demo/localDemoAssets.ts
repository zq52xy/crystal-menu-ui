// [PROTOCOL]: Change this header when demo local asset loading changes, then check CLAUDE.md.
// INPUT: Gitignored local demo assets guarded by Vite dev-only glob checks.
// OUTPUT: LOCAL_PORTRAIT_SRC plus local Optima @font-face injection for development only.
// POS: Demo-only asset boundary; public builds must never ship local asset files.
// ============================================================
// Local-only authorized portrait (third-party reference image).
//
// HARD RULE — assets must NEVER ship in production builds:
//   - The src/demo/local-assets/ directory is gitignored, so the
//     repo cannot accidentally commit them.
//   - But Vite's `import.meta.glob` would still copy any file it
//     finds into demo-dist/ at build time, which would publish
//     them via `npm run deploy` to GitHub Pages.
//   - Therefore the glob runs ONLY when `import.meta.env.DEV`
//     is true. Production builds (build:demo, build) skip the
//     glob entirely and the demo falls back to the original
//     placeholder shape rendered by CharacterPortrait.
// ============================================================
const localPortraits = import.meta.env.DEV
  ? import.meta.glob<{ default: string }>('./local-assets/portrait.png', {
      eager: true,
      query: '?url',
      import: 'default',
    })
  : {};
export const LOCAL_PORTRAIT_SRC: string | undefined =
  (Object.values(localPortraits)[0] as unknown as string) ?? undefined;

// ============================================================
// Local-only Optima font file. Same gitignored path, same dev-only
// gating. When the file is present in dev we inject an @font-face
// rule at runtime so the display token "Optima" resolves to the
// bundled binary; in production the CSS stack falls through to
// URW Classico → Charter → Georgia. Public package and Pages
// build never ship the binary.
// ============================================================
const localFonts = import.meta.env.DEV
  ? import.meta.glob<{ default: string }>('./local-assets/optima.ttf', {
      eager: true,
      query: '?url',
      import: 'default',
    })
  : {};
const LOCAL_OPTIMA_SRC: string | undefined =
  (Object.values(localFonts)[0] as unknown as string) ?? undefined;

if (typeof document !== 'undefined' && LOCAL_OPTIMA_SRC) {
  const styleEl = document.createElement('style');
  styleEl.dataset.source = 'crystal-menu-ui-demo-local-optima';
  // Map both regular and bold to the same TTF — the binary only ships
  // a 400 weight, but covering 700 explicitly stops the browser from
  // falling back to Inter/Georgia when a panel title uses bold.
  // Browsers will synthesize the bold weight from the regular file.
  styleEl.textContent = `
    @font-face {
      font-family: 'Optima';
      src: url('${LOCAL_OPTIMA_SRC}') format('truetype');
      font-weight: 400;
      font-style: normal;
      font-display: swap;
    }
    @font-face {
      font-family: 'Optima';
      src: url('${LOCAL_OPTIMA_SRC}') format('truetype');
      font-weight: 700;
      font-style: normal;
      font-display: swap;
    }
  `;
  document.head.appendChild(styleEl);
}
