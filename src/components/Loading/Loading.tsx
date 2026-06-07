// [PROTOCOL]: Change this header when Loading behavior changes, then check CLAUDE.md.
// INPUT: Tip, size, active state, and div props.
// OUTPUT: Original crystal-ring loading indicator.
// POS: Presentation only; host owns async state.
import React from 'react';
import classNames from 'classnames';
import styles from './loading.module.less';

export type LoadingSize = 'sm' | 'md' | 'lg';

export interface LoadingProps extends React.HTMLAttributes<HTMLDivElement> {
  tip?: React.ReactNode;
  size?: LoadingSize;
  active?: boolean;
}

export const Loading: React.FC<LoadingProps> = ({
  tip,
  size = 'md',
  active = true,
  className,
  ...rest
}) => (
  <div
    {...rest}
    className={classNames(styles.loading, styles[size], !active && styles.paused, className)}
    aria-live="polite"
    aria-busy={active}
  >
    <span className={styles.ring} aria-hidden="true">
      <span className={styles.core} />
    </span>
    {tip ? <span className={styles.tip}>{tip}</span> : null}
  </div>
);

Loading.displayName = 'Loading';
