// [PROTOCOL]: Change this header when public token exports change, then check CLAUDE.md.
// INPUT: Shared Less token values mirrored for TypeScript consumers.
// OUTPUT: Public read-only design token object for AI and app builders.
// POS: Token metadata only; component styling remains sourced from Less modules.
export const crystalTokens = {
  color: {
    bg: '#17191e',
    bgRift: '#303030',
    panelTop: 'rgba(57, 69, 82, 0.7)',
    panelBottom: 'rgba(15, 26, 37, 0.84)',
    panelDeep: 'rgba(12, 18, 28, 0.88)',
    border: '#81dfff',
    borderShadow: '#043c6f',
    text: '#f8fbff',
    textMuted: '#949492',
    gold: '#a0ecea',
    cyan: '#4bcdff',
    danger: '#f06161',
    success: '#00f9fb',
    violet: '#9f7dff',
    line: '#0097d3',
    glass: 'rgba(28, 32, 38, 0.68)',
    glassStrong: 'rgba(18, 23, 31, 0.88)',
  },
  font: {
    body: 'Inter, "Segoe UI", Arial, sans-serif',
    display: 'Georgia, "Times New Roman", serif',
  },
  radius: {
    panel: 6,
    control: 4,
  },
  border: {
    width: 2,
    focusWidth: 3,
  },
  space: {
    1: 4,
    2: 8,
    3: 12,
    4: 16,
    5: 20,
    6: 24,
  },
  shadow: {
    panel: '0 22px 44px rgba(0, 0, 0, 0.32), inset 0 1px 0 rgba(255, 255, 255, 0.16)',
    focus: '0 0 0 3px rgba(75, 205, 255, 0.34)',
    inset: 'inset 0 0 0 1px rgba(129, 223, 255, 0.18)',
    text: '2px 3px 0 #043c6f',
  },
} as const;

export type CrystalTokens = typeof crystalTokens;
