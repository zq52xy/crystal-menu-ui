// [PROTOCOL]: Change this header when GameIcon behavior changes, then check CLAUDE.md.
// INPUT: Icon name, tone, size, optional accessible title, and SVG props.
// OUTPUT: Original SVG icon inspired by JRPG HUD icon categories.
// POS: Presentation only; no official or Figma vector assets.
import React from 'react';
import classNames from 'classnames';
import styles from './game-icon.module.less';

export type GameIconName =
  | 'attack'
  | 'magicAttack'
  | 'defense'
  | 'magicDefense'
  | 'strength'
  | 'magic'
  | 'vitality'
  | 'spirit'
  | 'luck'
  | 'speed'
  | 'sword'
  | 'bangle'
  | 'necklace'
  | 'clock'
  | 'gil'
  | 'summon';

export type GameIconTone = 'cyan' | 'muted' | 'success' | 'danger' | 'gold';
export type GameIconSize = 'sm' | 'md' | 'lg' | number;

export interface GameIconProps extends Omit<React.SVGAttributes<SVGSVGElement>, 'color'> {
  name: GameIconName;
  tone?: GameIconTone;
  size?: GameIconSize;
  title?: string;
}

type IconRenderer = () => React.ReactNode;

const strokeProps = {
  fill: 'none',
  stroke: 'currentColor',
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
  strokeWidth: 2.1,
} as const;

const filledProps = {
  fill: 'currentColor',
  stroke: 'currentColor',
  strokeLinejoin: 'round',
  strokeWidth: 1.1,
} as const;

const icons: Record<GameIconName, IconRenderer> = {
  attack: () => (
    <>
      <path {...strokeProps} d="M6 25 24 7" />
      <path {...filledProps} d="M21 4 28 11 23 12 20 9Z" />
      <path {...strokeProps} d="M5 20 12 27" />
    </>
  ),
  magicAttack: () => (
    <>
      <path {...strokeProps} d="M8 7h10l-2 8h5l-12 11 3-9H7Z" />
      <path {...strokeProps} d="M22 8 26 4M24 14h4" />
    </>
  ),
  defense: () => <path {...strokeProps} d="M16 4 26 8v7c0 6-4.2 10.4-10 13-5.8-2.6-10-7-10-13V8Z" />,
  magicDefense: () => (
    <>
      <path {...strokeProps} d="M8 9c1.8-3 5.2-4.5 8-4.5S22.2 6 24 9v10c0 5-3.8 8-8 9-4.2-1-8-4-8-9Z" />
      <path {...strokeProps} d="M12 16h8M16 12v8" />
    </>
  ),
  strength: () => (
    <>
      <path {...filledProps} d="M10 14c0-4 2.5-7 6-7s6 3 6 7v4c0 4-2.5 7-6 7s-6-3-6-7Z" />
      <path {...strokeProps} d="M8 17H5M24 17h3M13 8 10 4M19 8l3-4" />
    </>
  ),
  magic: () => (
    <>
      <path {...strokeProps} d="M16 5v22M7 16h18M10 10l12 12M22 10 10 22" />
      <circle cx="16" cy="16" r="3" fill="currentColor" />
    </>
  ),
  vitality: () => (
    <path
      {...filledProps}
      d="M16 27C9 22 5 17.8 5 12.8 5 9.8 7.2 7.5 10.2 7.5c2 0 3.7 1 4.8 2.8 1.1-1.8 2.8-2.8 4.8-2.8 3 0 5.2 2.3 5.2 5.3 0 5-4 9.2-9 14.2Z"
    />
  ),
  spirit: () => (
    <>
      <path {...strokeProps} d="M16 4c4 4.2 6 8 6 11.5a6 6 0 0 1-12 0C10 12 12 8.2 16 4Z" />
      <path {...strokeProps} d="M16 15c-3 2.2-5 4.8-5 8M16 15c3 2.2 5 4.8 5 8" />
    </>
  ),
  luck: () => (
    <>
      <path {...filledProps} d="M13 13 8 8c-1.5-1.5-.5-4 1.7-4C12 4 13 6 13 8ZM19 13l5-5c1.5-1.5.5-4-1.7-4C20 4 19 6 19 8ZM13 19l-5 5c-1.5 1.5-.5 4 1.7 4C12 28 13 26 13 24ZM19 19l5 5c1.5 1.5.5 4-1.7 4C20 28 19 26 19 24Z" />
      <circle cx="16" cy="16" r="3" fill="currentColor" />
    </>
  ),
  speed: () => (
    <>
      <path {...strokeProps} d="M5 20h10M7 14h12M10 8h9" />
      <path {...filledProps} d="M18 5 27 16 18 27l2-8h-6l5-5h-5Z" />
    </>
  ),
  sword: () => (
    <>
      <path {...strokeProps} d="M11 23 25 9l-2-2L9 21" />
      <path {...strokeProps} d="M7 25 12 20M8 18l6 6M23 7l3-3" />
    </>
  ),
  bangle: () => (
    <>
      <path {...strokeProps} d="M7 18c0-5 4-9 9-9s9 4 9 9c0 3.8-3.2 6-9 6s-9-2.2-9-6Z" />
      <path {...strokeProps} d="M10 18c0 1.9 2.1 3 6 3s6-1.1 6-3" />
    </>
  ),
  necklace: () => (
    <>
      <path {...strokeProps} d="M7 7c1 7 4 11 9 11s8-4 9-11" />
      <path {...filledProps} d="M16 18 21 24 16 29 11 24Z" />
    </>
  ),
  clock: () => (
    <>
      <circle {...strokeProps} cx="16" cy="16" r="10" />
      <path {...strokeProps} d="M16 10v7l5 3" />
    </>
  ),
  gil: () => (
    <>
      <path {...filledProps} d="M16 5 27 16 16 27 5 16Z" />
      <path fill="#02161f" d="M16 10 22 16 16 22 10 16Z" />
      <path fill="currentColor" d="M16 13 19 16 16 19 13 16Z" />
    </>
  ),
  summon: () => (
    <>
      <path {...strokeProps} d="M16 4 20 13 29 16 20 19 16 28 12 19 3 16 12 13Z" />
      <path {...strokeProps} d="M16 10v12M10 16h12" />
    </>
  ),
};

export const GameIcon: React.FC<GameIconProps> = ({
  name,
  tone = 'cyan',
  size = 'md',
  title,
  className,
  style,
  ...rest
}) => {
  const numericSize = typeof size === 'number' ? size : undefined;
  const titleId = title ? `game-icon-${name}` : undefined;

  return (
    <svg
      {...rest}
      className={classNames(styles.icon, typeof size === 'string' && styles[size], styles[tone], className)}
      style={numericSize ? { ...style, width: numericSize, height: numericSize } : style}
      viewBox="0 0 32 32"
      role={title ? 'img' : undefined}
      aria-hidden={title ? undefined : true}
      aria-labelledby={titleId}
      focusable="false"
    >
      {title ? <title id={titleId}>{title}</title> : null}
      {icons[name]()}
    </svg>
  );
};

GameIcon.displayName = 'GameIcon';
