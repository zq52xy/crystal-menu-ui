// [PROTOCOL]: Change this header when LevelInfo behavior changes, then check CLAUDE.md.
// INPUT: Character level, EXP progress, HP/MP/SP resources, and weapon-level text.
// OUTPUT: Original angular Remake-inspired status display.
// POS: Visual data display only; no official assets or character logic.
import React from 'react';
import classNames from 'classnames';
import styles from './level-info.module.less';

export interface LevelResource {
  label: 'HP' | 'MP' | 'SP' | string;
  value: number;
  max: number;
}

export interface LevelInfoProps extends React.HTMLAttributes<HTMLDivElement> {
  level: number;
  exp: number;
  maxExp: number;
  weaponLevel?: string;
  resources: LevelResource[];
}

const clampPercent = (value: number, max: number) => {
  if (max <= 0) return 0;
  return Math.min(100, Math.max(0, (value / max) * 100));
};

export const LevelInfo: React.FC<LevelInfoProps> = ({
  level,
  exp,
  maxExp,
  weaponLevel,
  resources,
  className,
  ...rest
}) => {
  const expPercent = clampPercent(exp, maxExp);

  return (
    <section {...rest} className={classNames(styles.levelInfo, className)}>
      <div className={styles.triangle} aria-hidden="true" />
      <div className={styles.levelBlock}>
        <span className={styles.levelLabel}>Level</span>
        <strong className={styles.levelValue}>{level}</strong>
      </div>
      <div className={styles.expBlock}>
        <span className={styles.expTrack}>
          <span className={styles.expFill} style={{ width: `${expPercent}%` }} />
        </span>
        <span className={styles.expValue}>{Math.round(exp)}</span>
        <span className={styles.expMax}>/{Math.round(maxExp)}</span>
        <span className={styles.expLabel}>EXP</span>
      </div>
      <div className={styles.resources}>
        {resources.map((resource, index) => (
          <div
            key={`${resource.label}-${index}`}
            className={styles.resource}
            style={{ '--level-offset': `${index * 34}px` } as React.CSSProperties}
          >
            <span className={styles.resourceLabel}>{resource.label}</span>
            <span className={styles.resourceLine} aria-hidden="true" />
            <span className={styles.resourceValue}>{Math.round(resource.value)}</span>
            <span className={styles.resourceMax}>/{Math.round(resource.max)}</span>
          </div>
        ))}
      </div>
      {weaponLevel ? <span className={styles.weaponLevel}>{weaponLevel}</span> : null}
    </section>
  );
};

LevelInfo.displayName = 'LevelInfo';
