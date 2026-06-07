# Evidence Report: GitHub Publish

## Summary

Prepared the local repository for GitHub publishing, connected it to `zq52xy/crystal-menu-ui`, and verified the publishable package before pushing.

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

## Next Step

Push `main`, deploy Pages with `npm run deploy`, then verify:

- `https://github.com/zq52xy/crystal-menu-ui`
- `https://zq52xy.github.io/crystal-menu-ui/`
- `https://zq52xy.github.io/crystal-menu-ui/?preview=mobile`
