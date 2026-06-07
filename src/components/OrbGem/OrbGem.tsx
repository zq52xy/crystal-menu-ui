// [PROTOCOL]: Change this header when OrbGem behavior changes, then check CLAUDE.md.
// INPUT: Orb gem tone, size, label, and state.
// OUTPUT: Original CSS-rendered orb gem with socket frame.
// POS: Single visual gem atom only; no official assets or equipment rules.
import React from 'react';
import classNames from 'classnames';
import styles from './orb-gem.module.less';

export type OrbGemTone = 'green' | 'violet' | 'gold' | 'red' | 'cyan' | 'empty';
export type OrbGemSize = 'sm' | 'md' | 'lg' | 'inherit';

export interface OrbGemProps
  extends Omit<React.HTMLAttributes<HTMLSpanElement>, 'children'> {
  tone?: OrbGemTone;
  size?: OrbGemSize;
  label?: string;
  active?: boolean;
  disabled?: boolean;
}

export const OrbGem: React.FC<OrbGemProps> = ({
  tone = 'cyan',
  size = 'lg',
  label,
  active = false,
  disabled = false,
  role,
  className,
  ...rest
}) => (
  <span
    {...rest}
    className={classNames(
      styles.gemFrame,
      styles[size],
      styles[tone],
      active && styles.active,
      disabled && styles.disabled,
      className,
    )}
    role={role ?? 'img'}
    aria-label={rest['aria-label'] ?? label ?? tone}
    aria-disabled={disabled || undefined}
    title={rest.title ?? label}
  >
    <span className={styles.gem} aria-hidden="true" />
  </span>
);

OrbGem.displayName = 'OrbGem';
