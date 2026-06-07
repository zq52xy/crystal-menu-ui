// [PROTOCOL]: Change this header when CharacterProfile behavior changes, then check CLAUDE.md.
// INPUT: Character identity, optional authorized portrait source, resources, stats, and state.
// OUTPUT: Reference-image-inspired character profile panel.
// POS: Presentation only; host owns character data, routing, and licensed image assets.
import React from 'react';
import classNames from 'classnames';
import { CharacterPortrait } from '../CharacterPortrait';
import { HPMPBar } from '../HPMPBar';
import styles from './character-profile.module.less';

export interface CharacterProfileResource {
  label: string;
  value: number;
  max: number;
  tone?: 'hp' | 'mp';
}

export interface CharacterProfileStat {
  label: string;
  value: React.ReactNode;
}

export interface CharacterProfileProps extends Omit<React.HTMLAttributes<HTMLElement>, 'role'> {
  name: React.ReactNode;
  role?: React.ReactNode;
  level?: React.ReactNode;
  status?: React.ReactNode;
  portraitSrc?: string;
  portraitAlt?: string;
  resources?: CharacterProfileResource[];
  stats?: CharacterProfileStat[];
  selected?: boolean;
  compact?: boolean;
}

export const CharacterProfile: React.FC<CharacterProfileProps> = ({
  name,
  role,
  level,
  status = 'OK',
  portraitSrc,
  portraitAlt,
  resources = [],
  stats = [],
  selected = false,
  compact = false,
  className,
  ...rest
}) => (
  <article
    {...rest}
    className={classNames(styles.profile, selected && styles.selected, compact && styles.compact, className)}
    aria-label={typeof name === 'string' ? `${name} character profile` : undefined}
  >
    <CharacterPortrait
      src={portraitSrc}
      alt={portraitAlt}
      size={compact ? 'sm' : 'md'}
    />

    <div className={styles.content}>
      <header className={styles.header}>
        <div className={styles.identity}>
          <strong className={styles.name}>{name}</strong>
          {role ? <span className={styles.role}>{role}</span> : null}
        </div>
        <div className={styles.meta}>
          {level ? <span>LV {level}</span> : null}
          <span>{status}</span>
        </div>
      </header>

      {resources.length > 0 ? (
        <div className={styles.resources}>
          {resources.map((resource) => (
            <HPMPBar
              key={resource.label}
              label={resource.label}
              value={resource.value}
              max={resource.max}
              tone={resource.tone}
              compact
            />
          ))}
        </div>
      ) : null}

      {stats.length > 0 ? (
        <dl className={styles.stats}>
          {stats.map((stat) => (
            <div key={stat.label} className={styles.stat}>
              <dt>{stat.label}</dt>
              <dd>{stat.value}</dd>
            </div>
          ))}
        </dl>
      ) : null}
    </div>
  </article>
);

CharacterProfile.displayName = 'CharacterProfile';
