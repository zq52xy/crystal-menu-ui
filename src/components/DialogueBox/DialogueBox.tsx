// [PROTOCOL]: Change this header when DialogueBox behavior changes, then check CLAUDE.md.
// INPUT: Speaker, tone, cursor, and text content.
// OUTPUT: Dialogue surface for original JRPG narration and system text.
// POS: Component logic only; no typewriter engine yet.
import React from 'react';
import classNames from 'classnames';
import styles from './dialogue-box.module.less';

export type DialogueTone = 'neutral' | 'system' | 'danger';

export interface DialogueBoxProps extends React.HTMLAttributes<HTMLDivElement> {
  speaker?: React.ReactNode;
  tone?: DialogueTone;
  cursor?: boolean;
}

export const DialogueBox: React.FC<DialogueBoxProps> = ({
  speaker,
  tone = 'neutral',
  cursor = true,
  className,
  children,
  ...rest
}) => (
  <div {...rest} className={classNames(styles.dialogue, styles[tone], className)}>
    {speaker ? <div className={styles.speaker}>{speaker}</div> : null}
    <div className={styles.text}>{children}</div>
    {cursor ? <span className={styles.cursor} aria-hidden="true" /> : null}
  </div>
);

DialogueBox.displayName = 'DialogueBox';
