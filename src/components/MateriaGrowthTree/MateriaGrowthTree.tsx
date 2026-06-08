// [PROTOCOL]: Change this header when MateriaGrowthTree behavior changes, then check CLAUDE.md.
// INPUT: Materia identity, level cap, current AP/exp, and ability nodes per level stage.
// OUTPUT: Original AP-progress panel with orb core, segmented level ring, and ability list.
// POS: Pure visual presentation; host owns AP earn/spend logic.
import React from 'react';
import classNames from 'classnames';
import styles from './materia-growth-tree.module.less';

export type MateriaGrowthTone = 'green' | 'violet' | 'gold' | 'red' | 'cyan';

export type MateriaGrowthAbilityStatus = 'locked' | 'ready' | 'unlocked';

export interface MateriaGrowthAbility {
  id: string;
  /** Displayed level pip, e.g. 1, 2, 3. */
  level: number | string;
  label: React.ReactNode;
  description?: React.ReactNode;
  status?: MateriaGrowthAbilityStatus;
}

export interface MateriaGrowthTreeProps extends React.HTMLAttributes<HTMLElement> {
  /** Materia name displayed at the top of the panel. */
  name: React.ReactNode;
  /** Optional small kicker, e.g. "Magic Materia" / "Command". */
  kicker?: React.ReactNode;
  /** Numeric level reached so far. */
  level: number;
  /** Maximum level achievable for this materia. */
  maxLevel: number;
  /** Current AP toward the next level. */
  ap: number;
  /** AP needed to reach the next level. */
  apToNext: number;
  /** Total AP accumulated since this materia was equipped. */
  totalAp?: number;
  tone?: MateriaGrowthTone;
  abilities: MateriaGrowthAbility[];
  /** Optional flavor footer rendered below the abilities list. */
  footer?: React.ReactNode;
}

const clamp01 = (value: number) => Math.min(1, Math.max(0, value));

export const MateriaGrowthTree: React.FC<MateriaGrowthTreeProps> = ({
  name,
  kicker,
  level,
  maxLevel,
  ap,
  apToNext,
  totalAp,
  tone = 'green',
  abilities,
  footer,
  className,
  ...rest
}) => {
  const safeMax = Math.max(1, Math.round(maxLevel));
  const safeLevel = Math.min(safeMax, Math.max(0, Math.round(level)));
  const apProgress = apToNext > 0 ? clamp01(ap / apToNext) : 1;
  const isMaxLevel = safeLevel >= safeMax;

  const ringSegments = Array.from({ length: safeMax }, (_, index) => {
    if (index < safeLevel) return 'unlocked';
    if (index === safeLevel && !isMaxLevel) return 'progress';
    return 'locked';
  });

  return (
    <section
      {...rest}
      className={classNames(styles.tree, styles[tone], className)}
      role="group"
      aria-label={typeof name === 'string' ? name : 'Materia growth panel'}
    >
      <header className={styles.header}>
        {kicker ? <span className={styles.kicker}>{kicker}</span> : null}
        <h3 className={styles.name}>{name}</h3>
      </header>

      <div className={styles.coreRow}>
        <div
          className={styles.orb}
          style={
            {
              '--orb-progress': `${apProgress * 100}%`,
            } as React.CSSProperties
          }
          role="progressbar"
          aria-label="AP progress"
          aria-valuemin={0}
          aria-valuemax={Math.max(1, Math.round(apToNext))}
          aria-valuenow={Math.min(Math.round(ap), Math.round(apToNext))}
        >
          <span className={styles.orbCore} aria-hidden="true" />
          <span className={styles.orbHalo} aria-hidden="true" />
          <span className={styles.orbProgress} aria-hidden="true" />
          <span className={styles.orbLevel}>
            <span className={styles.orbLevelLabel}>Lv</span>
            <strong className={styles.orbLevelValue}>{safeLevel}</strong>
          </span>
        </div>

        <div className={styles.metrics}>
          <div className={styles.metricRow}>
            <span className={styles.metricLabel}>AP</span>
            <span className={styles.metricValue}>
              {Math.round(ap)}
              <span className={styles.metricMax}>/{Math.round(apToNext)}</span>
            </span>
          </div>
          {totalAp !== undefined ? (
            <div className={styles.metricRow}>
              <span className={styles.metricLabel}>Total</span>
              <span className={styles.metricValue}>{Math.round(totalAp)}</span>
            </div>
          ) : null}
          <div className={styles.metricRow}>
            <span className={styles.metricLabel}>Cap</span>
            <span className={styles.metricValue}>
              Lv {safeLevel}
              <span className={styles.metricMax}>/{safeMax}</span>
            </span>
          </div>
        </div>
      </div>

      <div className={styles.ring} aria-hidden="true">
        {ringSegments.map((status, index) => (
          <span
            key={index}
            className={classNames(styles.ringPip, styles[`ring-${status}`])}
            style={
              {
                '--ring-progress': index === safeLevel && !isMaxLevel ? `${apProgress * 100}%` : '100%',
              } as React.CSSProperties
            }
          />
        ))}
      </div>

      <ul className={styles.abilityList}>
        {abilities.map((ability) => {
          const status: MateriaGrowthAbilityStatus = ability.status ?? 'unlocked';
          return (
            <li
              key={ability.id}
              className={classNames(styles.abilityItem, styles[`ability-${status}`])}
            >
              <span className={styles.abilityPip} aria-hidden="true">
                {ability.level}
              </span>
              <span className={styles.abilityBody}>
                <span className={styles.abilityLabel}>{ability.label}</span>
                {ability.description ? (
                  <span className={styles.abilityDescription}>{ability.description}</span>
                ) : null}
              </span>
              <span className={styles.abilityStatus}>{status}</span>
            </li>
          );
        })}
      </ul>

      {footer ? <p className={styles.footer}>{footer}</p> : null}
    </section>
  );
};

MateriaGrowthTree.displayName = 'MateriaGrowthTree';
