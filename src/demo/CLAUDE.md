# Module Map: src/demo

## Purpose

Local Vite demo used for visual review, responsive QA, and online preview links.

## Members

- `main.tsx`: demo app mount.
- `App.tsx`: representative JRPG menu composition and `?preview=mobile` online preview mode.
- `demo.less`: demo-only layout, page background, and mobile preview wrapper.
- `readme-art-main.tsx`: local mount for README art screenshot boards.
- `motion-showcase-main.tsx`: local mount for README motion showcase capture.
- `MotionShowcase.tsx`: animated component proof board for README GIF generation.
- `ReadmeArt.tsx`: component-rendered banner and bilingual feature one-pagers.
- `readme-art.less`: fixed-size README artboard layout using shared tokens.
- `motion-showcase.less`: fixed-size animated GIF board layout using shared tokens.

## Boundaries

- Demo content must be original placeholder content.
- Demo styles may compose components but must not replace component internals.
- README art must render public components instead of hand-drawn parallel UI.
