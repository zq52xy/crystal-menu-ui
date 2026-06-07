// [PROTOCOL]: Change this header when Divider behavior changes, then check CLAUDE.md.
// INPUT: Variant, optional label, and div props.
// OUTPUT: Original JRPG HUD divider.
// POS: Presentation only; no official ornament paths.
import React from 'react';
import classNames from 'classnames';
import styles from './divider.module.less';

export type DividerVariant = 'line' | 'glow' | 'ornament';

export interface DividerProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: DividerVariant;
  label?: React.ReactNode;
}

export const Divider: React.FC<DividerProps> = ({
  variant = 'line',
  label,
  className,
  ...rest
}) => (
  <div
    {...rest}
    className={classNames(styles.divider, styles[variant], className)}
    role={label ? 'separator' : rest.role}
  >
    <span className={styles.line} />
    {label ? <span className={styles.label}>{label}</span> : null}
    {variant === 'ornament' ? <span className={styles.diamond} aria-hidden="true" /> : null}
    <span className={styles.line} />
  </div>
);

Divider.displayName = 'Divider';
