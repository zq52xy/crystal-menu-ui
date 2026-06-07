# Source Method Map

## Source Method

The reusable public-library method is:

1. Define a recognizable game-inspired visual language.
2. Convert that language into tokens.
3. Implement reusable components.
4. Document component usage for humans.
5. Document component usage for AI.
6. Provide generation prompts.
7. Provide a local skill file that teaches AI coding assistants the rules.
8. Show practical examples.

## Mapping to This Project

| Source Method | JRPG Glass HUD Equivalent |
|---|---|
| Recognizable game UI language | Dark glass and cyan JRPG HUD language |
| Token-first visual system | `src/styles/variables.less` |
| Reusable components | 24 typed React components |
| Human documentation | README, requirements, contribution docs |
| AI documentation | `AI_USAGE.md`, `PROMPT.md`, `DESIGN_PROMPT.md` |
| Local assistant rules | `skill/SKILL.md` |
| Practical examples | Party menu, profile screen, equipment, inventory, battle, save/archive, orb rail demos |

## Strict Rules to Preserve

- Token-first style definition.
- AI docs are not optional.
- Component names must encode user intent, not visual decoration only.
- Public package must avoid official IP assets and brand claims.
- Every future component needs props, states, usage examples, and anti-examples.
