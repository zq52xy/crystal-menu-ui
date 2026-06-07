# Evidence Report: GitHub Publish

## Summary

Published the local repository to `zq52xy/crystal-menu-ui`, deployed the Vite demo to GitHub Pages, and verified the public repository plus preview URLs.

## Environment

- Workspace: `G:\...\final-fantasy-ui-study`
- Date context: 2026-06-08 Asia/Shanghai
- Git: `2.40.0.windows.1`
- Branch: `main`
- Repository: `https://github.com/zq52xy/crystal-menu-ui`

## Checks Run

- Checked current path: it was not a git repository before publish prep.
- Checked `gh auth status`: `gh` CLI is not installed.
- Checked GitHub token environment variables: `GITHUB_TOKEN` and `GH_TOKEN` are not present.
- Checked SSH agent environment: `SSH_AUTH_SOCK` is not present.
- Checked Git Credential Manager: installed.
- Checked remote repository with `git ls-remote`: `zq52xy/crystal-menu-ui` exists.
- Fetched `origin/main`; remote had a 2-line README initial commit.
- Ran secret scan over source/docs excluding dependencies and build outputs: no token or private-key matches.
- Verified ignore rules exclude:
  - `node_modules`
  - `dist`
  - `demo-dist`
  - local `.log` files
- Ran `npm install --package-lock-only`: pass.
- Ran `npm run typecheck`: pass.
- Ran `npm run audit:docs`: pass.
- Ran `npm run build`: pass.
- Ran `npm run build:demo`: pass.
- Ran `npm pack --dry-run --json`: pass.
- Pushed `main` to GitHub: pass.
- Ran `npm run deploy`: pass; `gh-pages` published.
- Verified public repository URL with `curl`: HTTP 200.
- Verified GitHub Pages PC URL with `curl`: HTTP 200.
- Verified GitHub Pages mobile preview URL with `curl`: HTTP 200.
- Verified Pages HTML contains:
  - `<title>Crystal Menu UI Study</title>`
  - `assets/index-4IlbiwjI.js`
  - `assets/index-B0QZ9NWJ.css`

## Local Publish Prep Completed

- Added `.gitattributes` for stable LF text normalization and binary image handling.
- Expanded `.gitignore` for dependencies, build outputs, local env files, archives, logs, and test artifacts.
- Initialized Git repository on `main`.
- Added remote:
  - `origin https://github.com/zq52xy/crystal-menu-ui.git`
- Updated owner-specific metadata:
  - README badges
  - README preview links
  - README clone command
  - package `author`
  - package `homepage`
  - package `repository`
  - package `bugs`
- Staged source, docs, screenshots, scripts, package files, contracts, and evidence.
- Created publish merge commit:
  - `91f9b489aff2f2d5b5428d76e95e8f6018c29de0`
- Published demo branch:
  - `gh-pages` at `69006ef32f4f5c1719ff3b2c47908c6975f40107`

## Package Evidence

`npm pack --dry-run --json` confirms these key files are included:

- `README.md` 14010 bytes
- `AI_USAGE.md` 14506 bytes
- `docs/ai-user-guide.md` 3970 bytes
- `docs/tokens.md` 2485 bytes
- `dist/types/styles/tokens.d.ts` 1627 bytes
- `package.json` 2161 bytes

## Remote History Note

The remote repository was not empty. It contained:

- commit `9349894`
- file `README.md`
- content: 2-line initial repository README

The local publish branch preserves that remote history by merging it before pushing, while keeping the full local README as the repository README.

## Published URLs

- `https://github.com/zq52xy/crystal-menu-ui`
- `https://zq52xy.github.io/crystal-menu-ui/`
- `https://zq52xy.github.io/crystal-menu-ui/?preview=mobile`

## Remaining Manual Polish

- Add repository topics in GitHub settings.
- Add repository social preview image.
- Create release `v0.1.0` when ready.
