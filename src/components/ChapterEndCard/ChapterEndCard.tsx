// [PROTOCOL]: Change this header when ChapterEndCard behavior changes, then check CLAUDE.md.
// INPUT: Chapter index, headline, summary stats, rewards list, and footer hint.
// OUTPUT: Cinematic chapter-results card with ledger-style stat rows and rewards.
// POS: Pure visual presentation; host owns mount/unmount lifecycle.
import React from 'react';
import classNames from 'classnames';
import styles from './chapter-end-card.module.less';

export interface ChapterEndStat {
  label: React.ReactNode;
  value: React.ReactNode;
  /** Optional emphasis class hook for highlight rows like total / new record. */
  highlight?: boolean;
}

export interface ChapterEndReward {
  id: string;
  label: React.ReactNode;
  amount?: React.ReactNode;
  /** Optional helper that lets the host pass any GameIcon name string. */
  icon?: React.ReactNode;
}

export interface ChapterEndCardProps extends Omit<React.HTMLAttributes<HTMLElement>, 'title'> {
  /** Chapter sequence label, e.g. "01" or "Episode IV". */
  chapter: React.ReactNode;
  /** Top kicker label, e.g. "Chapter Complete" or "Episode End". */
  kicker?: React.ReactNode;
  title: React.ReactNode;
  subtitle?: React.ReactNode;
  stats?: ChapterEndStat[];
  rewards?: ChapterEndReward[];
  footer?: React.ReactNode;
  /** Disable the cinematic entrance animation. */
  staticEntrance?: boolean;
}

export const ChapterEndCard: React.FC<ChapterEndCardProps> = ({
  chapter,
  kicker = 'Chapter Complete',
  title,
  subtitle,
  stats,
  rewards,
  footer,
  staticEntrance = false,
  className,
  ...rest
}) => (
  <section
    {...rest}
    className={classNames(styles.card, !staticEntrance && styles.entering, className)}
    role="region"
    aria-label={typeof title === 'string' ? title : 'Chapter end summary'}
  >
    <header className={styles.header}>
      <span className={styles.kicker}>{kicker}</span>
      <span className={styles.chapter}>
        <span className={styles.chapterLabel}>Chapter</span>
        <strong className={styles.chapterValue}>{chapter}</strong>
      </span>
    </header>

    <div className={styles.titleRow}>
      <span className={styles.rule} aria-hidden="true" />
      <h2 className={styles.title}>{title}</h2>
      <span className={styles.rule} aria-hidden="true" />
    </div>

    {subtitle ? <p className={styles.subtitle}>{subtitle}</p> : null}

    {stats && stats.length > 0 ? (
      <dl className={styles.stats}>
        {stats.map((stat, index) => (
          <div
            key={`${index}`}
            className={classNames(styles.statRow, stat.highlight && styles.statHighlight)}
          >
            <dt className={styles.statLabel}>{stat.label}</dt>
            <span className={styles.statLeader} aria-hidden="true" />
            <dd className={styles.statValue}>{stat.value}</dd>
          </div>
        ))}
      </dl>
    ) : null}

    {rewards && rewards.length > 0 ? (
      <div className={styles.rewards}>
        <span className={styles.rewardsHeading}>Rewards</span>
        <ul className={styles.rewardList}>
          {rewards.map((reward) => (
            <li key={reward.id} className={styles.rewardItem}>
              {reward.icon ? <span className={styles.rewardIcon}>{reward.icon}</span> : null}
              <span className={styles.rewardLabel}>{reward.label}</span>
              {reward.amount ? <span className={styles.rewardAmount}>{reward.amount}</span> : null}
            </li>
          ))}
        </ul>
      </div>
    ) : null}

    {footer ? <p className={styles.footer}>{footer}</p> : null}
  </section>
);

ChapterEndCard.displayName = 'ChapterEndCard';
