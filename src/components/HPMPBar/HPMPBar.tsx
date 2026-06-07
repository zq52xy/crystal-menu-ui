// [PROTOCOL]: Change this header when HPMPBar behavior changes, then check CLAUDE.md.
// INPUT: Resource label, value, max, tone, and display options.
// OUTPUT: Accessible meter for HP, MP, or equivalent resources.
// POS: Resource display logic only; aggregate status belongs in PartyStatus.
import React from 'react';
import classNames from 'classnames';
import styles from './hpmp-bar.module.less';

export type ResourceTone = 'hp' | 'mp';

export interface HPMPBarProps extends React.HTMLAttributes<HTMLDivElement> {
  label: string;
  value: number;
  max: number;
  tone?: ResourceTone;
  compact?: boolean;
  showValue?: boolean;
}

const clampPercent = (value: number, max: number) => {
  if (max <= 0) return 0;
  return Math.min(100, Math.max(0, (value / max) * 100));
};

export const HPMPBar: React.FC<HPMPBarProps> = ({
  label,
  value,
  max,
  tone = 'hp',
  compact = false,
  showValue = true,
  className,
  ...rest
}) => {
  const percent = clampPercent(value, max);
  const roundedValue = Math.max(0, Math.round(value));
  const roundedMax = Math.max(0, Math.round(max));

  return (
    <div
      {...rest}
      className={classNames(styles.resource, styles[tone], compact && styles.compact, className)}
      role="meter"
      aria-label={label}
      aria-valuemin={0}
      aria-valuemax={roundedMax}
      aria-valuenow={Math.min(roundedValue, roundedMax)}
    >
      <span className={styles.label}>{label}</span>
      <span className={styles.track}>
        <span className={styles.fill} style={{ width: `${percent}%` }} />
      </span>
      {showValue ? (
        <span className={styles.value}>
          {roundedValue}/{roundedMax}
        </span>
      ) : null}
    </div>
  );
};

HPMPBar.displayName = 'HPMPBar';
