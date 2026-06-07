// [PROTOCOL]: Change this header when ProfileScreen behavior changes, then check CLAUDE.md.
// INPUT: Character roster, selected id, optional command/detail/footer regions.
// OUTPUT: Reference-image-style full profile screen layout.
// POS: Layout composition only; host owns state, routing, and licensed images.
import React from 'react';
import classNames from 'classnames';
import { CharacterProfile } from '../CharacterProfile';
import { CharacterRoster, type CharacterRosterItem } from '../CharacterRoster';
import { MenuPanel } from '../MenuPanel';
import styles from './profile-screen.module.less';

export interface ProfileScreenProps extends Omit<React.HTMLAttributes<HTMLElement>, 'title' | 'onSelect'> {
  title?: React.ReactNode;
  subtitle?: React.ReactNode;
  characters: CharacterRosterItem[];
  selectedId?: string;
  commandPanel?: React.ReactNode;
  detailPanel?: React.ReactNode;
  footer?: React.ReactNode;
  onSelect?: (character: CharacterRosterItem) => void;
}

export const ProfileScreen: React.FC<ProfileScreenProps> = ({
  title = 'Profiles',
  subtitle,
  characters,
  selectedId,
  commandPanel,
  detailPanel,
  footer,
  onSelect,
  className,
  ...rest
}) => {
  const selected = characters.find((character) => character.id === selectedId) ?? characters[0];

  return (
    <section {...rest} className={classNames(styles.screen, className)}>
      <header className={styles.topline}>
        <strong>{title}</strong>
        {subtitle ? <span>{subtitle}</span> : null}
      </header>
      <div className={styles.grid}>
        <MenuPanel title="Roster" density="compact" variant="deep">
          <CharacterRoster
            characters={characters}
            selectedId={selected?.id}
            onSelect={onSelect}
            compact
          />
        </MenuPanel>
        <MenuPanel title="Profile" density="compact" variant="status">
          {selected ? (
            <CharacterProfile
              name={selected.name}
              role={selected.role}
              level={selected.level}
              status={selected.status}
              portraitSrc={selected.portraitSrc}
              portraitAlt={selected.portraitAlt}
              resources={selected.resources}
              selected
            />
          ) : null}
        </MenuPanel>
        <MenuPanel title="Details" density="compact" variant="blue">
          {detailPanel ?? <span className={styles.empty}>No detail panel supplied</span>}
        </MenuPanel>
        {commandPanel ? (
          <MenuPanel title="Commands" density="compact" variant="deep">
            {commandPanel}
          </MenuPanel>
        ) : null}
      </div>
      {footer ? <footer className={styles.footer}>{footer}</footer> : null}
    </section>
  );
};

ProfileScreen.displayName = 'ProfileScreen';
