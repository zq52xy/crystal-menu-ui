# Module Map: .github/workflows

> L2 | 父级: .github/CLAUDE.md

## Members

- `ci.yml`: GitHub Actions quality gate for dependency install, typecheck, docs coverage, production build, and packed-package smoke testing.

## Boundary

Workflow files validate source and package output; they must not publish npm releases or deploy GitHub Pages without an explicit release workflow.

[PROTOCOL]: 变更时更新此头部，然后检查 CLAUDE.md
