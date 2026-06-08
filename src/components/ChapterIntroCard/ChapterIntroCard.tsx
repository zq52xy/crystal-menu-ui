// [PROTOCOL]: Change this header when ChapterIntroCard behavior changes, then check CLAUDE.md.
// INPUT: Chapter index, title, subtitle, location, dossier metadata, and optional kicker.
// OUTPUT: Cinematic chapter-opening title card with rule-line typography.
// POS: Pure visual presentation; host owns mount/unmount lifecycle.
import React from 'react';
import classNames from 'classnames';
import styles from './chapter-intro-card.module.less';

export interface ChapterIntroDossierEntry {
  label: React.ReactNode;
  value: React.ReactNode;
}

export interface ChapterIntroCardProps extends Omit<React.HTMLAttributes<HTMLElement>, 'title'> {
  /** Chapter sequence label, e.g. "01" or "Episode IV". */
  chapter: React.ReactNode;
  /** Optional small kicker rendered above the chapter label. */
  kicker?: React.ReactNode;
  title: React.ReactNode;
  subtitle?: React.ReactNode;
  /** Optional location rendered below the title in a thin frame. */
  location?: React.ReactNode;
  /** Optional dossier metadata rows, e.g. party / objective / time. */
  dossier?: ChapterIntroDossierEntry[];
  /** Disable the cinematic entrance animation. */
  staticEntrance?: boolean;
}

export const ChapterIntroCard: React.FC<ChapterIntroCardProps> = ({
  kicker,
  chapter,
  title,
  subtitle,
  location,
  dossier,
  staticEntrance = false,
  className,
  ...rest
}) => (
  <section
    {...rest}
    className={classNames(styles.card, !staticEntrance && styles.entering, className)}
    role="region"
    aria-label={typeof title === 'string' ? title : 'Chapter intro'}
  >
    <span className={styles.frame} aria-hidden="true" />

    <div className={styles.kickerRow}>
      {kicker ? <span className={styles.kicker}>{kicker}</span> : null}
      <span className={styles.chapter}>
        <span className={styles.chapterLabel}>Chapter</span>
        <strong className={styles.chapterValue}>{chapter}</strong>
      </span>
    </div>

    <div className={styles.titleRow}>
      <span className={styles.rule} aria-hidden="true" />
      <h2 className={styles.title}>{title}</h2>
      <span className={styles.rule} aria-hidden="true" />
    </div>

    {subtitle ? <p className={styles.subtitle}>{subtitle}</p> : null}

    {location ? (
      <div className={styles.location}>
        <span className={styles.locationMark} aria-hidden="true" />
        <span className={styles.locationText}>{location}</span>
      </div>
    ) : null}

    {dossier && dossier.length > 0 ? (
      <dl className={styles.dossier}>
        {dossier.map((entry, index) => (
          <div key={`${index}`} className={styles.dossierRow}>
            <dt className={styles.dossierLabel}>{entry.label}</dt>
            <dd className={styles.dossierValue}>{entry.value}</dd>
          </div>
        ))}
      </dl>
    ) : null}
  </section>
);

ChapterIntroCard.displayName = 'ChapterIntroCard';
