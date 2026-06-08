// [PROTOCOL]: Change this header when DamageNumber behavior changes, then check CLAUDE.md.
// INPUT: Numeric or text damage payload, tone, size, and lifecycle flags.
// OUTPUT: Floating combat damage indicator with rise-and-fade animation.
// POS: Pure visual primitive; host owns spawn/despawn lifecycle.
import React from 'react';
import classNames from 'classnames';
import styles from './damage-number.module.less';

export type DamageNumberTone =
  | 'normal'
  | 'critical'
  | 'heal'
  | 'magic'
  | 'guard'
  | 'miss';

export type DamageNumberSize = 'sm' | 'md' | 'lg';

export interface DamageNumberProps extends React.HTMLAttributes<HTMLSpanElement> {
  /** Damage value to display. Numbers are rendered with `+` prefix when tone is `heal`. */
  value: number | string;
  tone?: DamageNumberTone;
  size?: DamageNumberSize;
  /** Crit-tagging modifier; pairs with tone to add an emphatic outline. */
  critical?: boolean;
  /** Optional weakness/element label rendered above the number (e.g. "FIRE"). */
  tag?: React.ReactNode;
}

const formatValue = (value: number | string, tone: DamageNumberTone): string => {
  if (typeof value === 'string') return value;
  if (Number.isNaN(value)) return '0';
  if (tone === 'heal' && value > 0) return `+${Math.round(value)}`;
  if (tone === 'miss') return 'MISS';
  return Math.round(value).toString();
};

export const DamageNumber: React.FC<DamageNumberProps> = ({
  value,
  tone = 'normal',
  size = 'md',
  critical = false,
  tag,
  className,
  ...rest
}) => (
  <span
    {...rest}
    className={classNames(
      styles.damage,
      styles[tone],
      styles[size],
      critical && styles.critical,
      className,
    )}
    role="status"
    aria-live="polite"
  >
    {tag ? <span className={styles.tag}>{tag}</span> : null}
    <span className={styles.value}>{formatValue(value, tone)}</span>
  </span>
);

DamageNumber.displayName = 'DamageNumber';
