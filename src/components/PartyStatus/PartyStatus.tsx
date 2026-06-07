// [PROTOCOL]: Change this header when PartyStatus behavior changes, then check CLAUDE.md.
// INPUT: Array of party member resource and status data.
// OUTPUT: Dense JRPG party status list using HPMPBar.
// POS: Aggregates display components; no battle logic.
import React from 'react';
import classNames from 'classnames';
import { HPMPBar } from '../HPMPBar';
import styles from './party-status.module.less';

export interface PartyMember {
  id: string;
  name: string;
  level: number;
  hp: number;
  maxHp: number;
  mp: number;
  maxMp: number;
  status?: string;
  active?: boolean;
}

export interface PartyStatusProps extends React.HTMLAttributes<HTMLDivElement> {
  members: PartyMember[];
  compact?: boolean;
}

export const PartyStatus: React.FC<PartyStatusProps> = ({
  members,
  compact = false,
  className,
  ...rest
}) => (
  <div {...rest} className={classNames(styles.party, compact && styles.compact, className)}>
    {members.map((member) => (
      <article
        key={member.id}
        className={classNames(styles.member, member.active && styles.active)}
        aria-label={`${member.name} level ${member.level}`}
      >
        <div className={styles.identity}>
          <span className={styles.name}>{member.name}</span>
          <span className={styles.level}>LV {member.level}</span>
        </div>
        <div className={styles.meters}>
          <HPMPBar label="HP" value={member.hp} max={member.maxHp} compact={compact} />
          <HPMPBar label="MP" value={member.mp} max={member.maxMp} tone="mp" compact={compact} />
        </div>
        <span className={styles.status}>{member.status ?? 'OK'}</span>
      </article>
    ))}
  </div>
);

PartyStatus.displayName = 'PartyStatus';
