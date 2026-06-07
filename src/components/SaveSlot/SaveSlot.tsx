// [PROTOCOL]: Change this header when SaveSlot behavior changes, then check CLAUDE.md.
// INPUT: Save/load slot metadata, selection state, status, and callback.
// OUTPUT: Prototypes-inspired save slot row.
// POS: Save slot presentation only; host owns persistence and routing logic.
import React from 'react';
import classNames from 'classnames';
import styles from './save-slot.module.less';

export type SaveSlotStatus = 'ready' | 'autosave' | 'empty' | 'locked';

export interface SaveSlotProps extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'type' | 'title'> {
  slotId: React.ReactNode;
  title?: React.ReactNode;
  location?: React.ReactNode;
  timestamp?: React.ReactNode;
  playtime?: React.ReactNode;
  party?: React.ReactNode[];
  status?: SaveSlotStatus;
  selected?: boolean;
  htmlType?: 'button' | 'submit' | 'reset';
}

export const SaveSlot: React.FC<SaveSlotProps> = ({
  slotId,
  title,
  location,
  timestamp,
  playtime,
  party = [],
  status = 'ready',
  selected = false,
  htmlType = 'button',
  disabled,
  className,
  ...rest
}) => {
  const isEmpty = status === 'empty';
  const isLocked = status === 'locked';

  return (
    <button
      {...rest}
      className={classNames(
        styles.slot,
        styles[status],
        selected && styles.selected,
        (disabled || isLocked) && styles.disabled,
        className,
      )}
      type={htmlType}
      disabled={disabled || isLocked}
      aria-pressed={selected || undefined}
    >
      <span className={styles.slotMark}>
        <span className={styles.bookend} aria-hidden="true" />
        <span className={styles.slotId}>{slotId}</span>
      </span>
      <span className={styles.content}>
        {isEmpty ? (
          <strong className={styles.emptyLabel}>Empty Slot</strong>
        ) : (
          <>
            <span className={styles.timestamp}>{timestamp}</span>
            <strong className={styles.title}>{title}</strong>
            {location ? <span className={styles.location}>{location}</span> : null}
          </>
        )}
      </span>
      <span className={styles.meta}>
        {playtime ? <span>{playtime}</span> : null}
        {party.length > 0 ? (
          <span className={styles.party}>
            {party.slice(0, 3).map((member, index) => (
              <span key={index} className={styles.partyPip}>
                {member}
              </span>
            ))}
          </span>
        ) : null}
        <span className={styles.status}>{status}</span>
      </span>
    </button>
  );
};

SaveSlot.displayName = 'SaveSlot';
