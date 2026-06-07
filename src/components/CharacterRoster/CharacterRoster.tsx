// [PROTOCOL]: Change this header when CharacterRoster behavior changes, then check CLAUDE.md.
// INPUT: Character list, selection id, optional callback, and compact state.
// OUTPUT: Selectable JRPG character roster.
// POS: Roster presentation only; host owns selection and navigation.
import React from 'react';
import classNames from 'classnames';
import { CharacterPortrait } from '../CharacterPortrait';
import { HPMPBar } from '../HPMPBar';
import type { CharacterProfileResource } from '../CharacterProfile';
import styles from './character-roster.module.less';

export interface CharacterRosterItem {
  id: string;
  name: React.ReactNode;
  role?: React.ReactNode;
  level?: React.ReactNode;
  status?: React.ReactNode;
  portraitSrc?: string;
  portraitAlt?: string;
  resources?: CharacterProfileResource[];
  disabled?: boolean;
}

export interface CharacterRosterProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, 'onSelect'> {
  characters: CharacterRosterItem[];
  selectedId?: string;
  compact?: boolean;
  onSelect?: (character: CharacterRosterItem) => void;
}

export const CharacterRoster: React.FC<CharacterRosterProps> = ({
  characters,
  selectedId,
  compact = false,
  onSelect,
  className,
  ...rest
}) => (
  <div
    {...rest}
    className={classNames(styles.roster, compact && styles.compact, className)}
    role="listbox"
    aria-label="Character roster"
  >
    {characters.map((character) => {
      const selected = character.id === selectedId;

      return (
        <button
          key={character.id}
          className={classNames(styles.item, selected && styles.selected)}
          type="button"
          role="option"
          aria-selected={selected}
          disabled={character.disabled}
          onClick={() => onSelect?.(character)}
        >
          <CharacterPortrait
            src={character.portraitSrc}
            alt={character.portraitAlt}
            size="sm"
            selected={selected}
          />
          <span className={styles.body}>
            <span className={styles.header}>
              <strong>{character.name}</strong>
              {character.level ? <span>LV {character.level}</span> : null}
            </span>
            {character.role ? <span className={styles.role}>{character.role}</span> : null}
            {character.resources?.slice(0, 2).map((resource) => (
              <HPMPBar
                key={resource.label}
                label={resource.label}
                value={resource.value}
                max={resource.max}
                tone={resource.tone}
                compact
              />
            ))}
          </span>
          <span className={styles.status}>{character.status ?? 'OK'}</span>
        </button>
      );
    })}
  </div>
);

CharacterRoster.displayName = 'CharacterRoster';
