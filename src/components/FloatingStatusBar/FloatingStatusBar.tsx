// [PROTOCOL]: Change this header when FloatingStatusBar behavior changes, then check CLAUDE.md.
// INPUT: Optional playtime, currency, hint, and action text.
// OUTPUT: Prototypes-inspired bottom HUD status/action bar.
// POS: Display component only; no official icons or game-state logic.
import React from 'react';
import classNames from 'classnames';
import styles from './floating-status-bar.module.less';

export interface FloatingStatusBarProps extends React.HTMLAttributes<HTMLElement> {
  playtime?: string;
  currency?: string | number;
  currencyLabel?: string;
  hint?: React.ReactNode;
  actionLabel?: React.ReactNode;
}

export const FloatingStatusBar: React.FC<FloatingStatusBarProps> = ({
  playtime,
  currency,
  currencyLabel = 'G',
  hint,
  actionLabel,
  className,
  ...rest
}) => (
  <footer {...rest} className={classNames(styles.bar, className)}>
    <div className={styles.metaGroup}>
      {playtime ? (
        <span className={styles.metaItem}>
          <span className={styles.clockIcon} aria-hidden="true" />
          <span>{playtime}</span>
        </span>
      ) : null}
      {currency !== undefined ? (
        <span className={styles.metaItem}>
          <span className={styles.currencyIcon} aria-hidden="true">
            {currencyLabel}
          </span>
          <span>{currency}</span>
        </span>
      ) : null}
    </div>
    {hint ? <div className={styles.hint}>{hint}</div> : null}
    {actionLabel ? (
      <div className={styles.action}>
        <span className={styles.triangleButton} aria-hidden="true" />
        <span>{actionLabel}</span>
      </div>
    ) : null}
  </footer>
);

FloatingStatusBar.displayName = 'FloatingStatusBar';
