// [PROTOCOL]: Change this header when LimitGauge behavior changes, then check CLAUDE.md.
// INPUT: Limit value/max, level, label, ready flag, and optional segment count.
// OUTPUT: Original Remake-inspired limit gauge with segmented fill and ready flicker.
// POS: Pure visual gauge; host owns charge logic and limit-break invocation.
import React from 'react';
import classNames from 'classnames';
import styles from './limit-gauge.module.less';

export type LimitGaugeTone = 'gold' | 'crimson' | 'cyan';
export type LimitGaugeSize = 'sm' | 'md' | 'lg';

export interface LimitGaugeProps extends React.HTMLAttributes<HTMLDivElement> {
  label?: React.ReactNode;
  value: number;
  max: number;
  /** Limit level numeric label rendered to the left (e.g. 1, 2, 3). */
  level?: number | string;
  /** Number of segments rendered on the track. */
  segments?: number;
  tone?: LimitGaugeTone;
  size?: LimitGaugeSize;
  /** When true, the bar pulses to signal a usable limit. Auto-detected at 100% if omitted. */
  ready?: boolean;
}

const clampPercent = (value: number, max: number) => {
  if (max <= 0) return 0;
  return Math.min(100, Math.max(0, (value / max) * 100));
};

export const LimitGauge: React.FC<LimitGaugeProps> = ({
  label = 'Limit',
  value,
  max,
  level,
  segments = 10,
  tone = 'gold',
  size = 'md',
  ready,
  className,
  ...rest
}) => {
  const percent = clampPercent(value, max);
  const isReady = ready ?? percent >= 100;
  const safeSegments = Math.max(2, Math.min(20, Math.round(segments)));
  const segmentWidth = 100 / safeSegments;

  return (
    <div
      {...rest}
      className={classNames(
        styles.gauge,
        styles[tone],
        styles[size],
        isReady && styles.ready,
        className,
      )}
      role="progressbar"
      aria-label={typeof label === 'string' ? label : 'Limit'}
      aria-valuemin={0}
      aria-valuemax={Math.max(0, Math.round(max))}
      aria-valuenow={Math.min(Math.round(value), Math.round(max))}
    >
      {level !== undefined ? <span className={styles.level}>{level}</span> : null}
      <div className={styles.body}>
        <span className={styles.label}>{label}</span>
        <span
          className={styles.track}
          style={
            {
              '--limit-fill': `${percent}%`,
              '--limit-segment': `${segmentWidth}%`,
            } as React.CSSProperties
          }
        >
          <span className={styles.fill} aria-hidden="true" />
          <span className={styles.ticks} aria-hidden="true" />
          {isReady ? <span className={styles.shine} aria-hidden="true" /> : null}
        </span>
      </div>
      {isReady ? <span className={styles.readyTag}>Ready</span> : null}
    </div>
  );
};

LimitGauge.displayName = 'LimitGauge';
