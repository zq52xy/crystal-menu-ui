// [PROTOCOL]: Change this header when CharacterPortrait behavior changes, then check CLAUDE.md.
// INPUT: Optional authorized image source, alt text, label, size, and selected state.
// OUTPUT: Reusable HUD portrait frame with original placeholder art.
// POS: Image presentation only; host owns licensed image sources.
import React from 'react';
import classNames from 'classnames';
import styles from './character-portrait.module.less';

export type CharacterPortraitSize = 'sm' | 'md' | 'lg' | 'wide';

export interface CharacterPortraitProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'children'> {
  src?: string;
  alt?: string;
  label?: React.ReactNode;
  size?: CharacterPortraitSize;
  selected?: boolean;
}

export const CharacterPortrait: React.FC<CharacterPortraitProps> = ({
  src,
  alt,
  label,
  size = 'md',
  selected = false,
  className,
  ...rest
}) => (
  <div
    {...rest}
    className={classNames(styles.portrait, styles[size], selected && styles.selected, className)}
    aria-hidden={src ? undefined : true}
  >
    {src ? (
      <img src={src} alt={alt ?? ''} />
    ) : (
      <span className={styles.placeholder}>
        <span className={styles.head} />
        <span className={styles.shoulder} />
        <span className={styles.slash} />
      </span>
    )}
    {label ? <span className={styles.label}>{label}</span> : null}
  </div>
);

CharacterPortrait.displayName = 'CharacterPortrait';
