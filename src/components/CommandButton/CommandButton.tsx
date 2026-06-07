// [PROTOCOL]: Change this header when CommandButton behavior changes, then check CLAUDE.md.
// INPUT: Button-like props for RPG command selection.
// OUTPUT: Accessible command button with selected, active, variant, and shortcut states.
// POS: Component logic only; visual constants come from Less tokens.
import React from 'react';
import classNames from 'classnames';
import styles from './command-button.module.less';

export type CommandButtonVariant = 'default' | 'magic' | 'item' | 'danger';
export type CommandButtonSize = 'compact' | 'normal' | 'large';

export interface CommandButtonProps
  extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'type'> {
  variant?: CommandButtonVariant;
  size?: CommandButtonSize;
  selected?: boolean;
  active?: boolean;
  shortcut?: string;
  description?: string;
  htmlType?: 'button' | 'submit' | 'reset';
}

export const CommandButton: React.FC<CommandButtonProps> = ({
  variant = 'default',
  size = 'normal',
  selected = false,
  active = false,
  shortcut,
  description,
  htmlType = 'button',
  disabled,
  className,
  children,
  ...rest
}) => {
  const rootClassName = classNames(
    styles.command,
    styles[variant],
    styles[size],
    selected && styles.selected,
    active && styles.active,
    disabled && styles.disabled,
    className,
  );

  return (
    <button
      {...rest}
      type={htmlType}
      className={rootClassName}
      disabled={disabled}
      aria-pressed={selected || undefined}
    >
      <span className={styles.cursor} aria-hidden="true" />
      <span className={styles.content}>
        <span className={styles.label}>{children}</span>
        {description ? <span className={styles.description}>{description}</span> : null}
      </span>
      {shortcut ? <span className={styles.shortcut}>{shortcut}</span> : null}
    </button>
  );
};

CommandButton.displayName = 'CommandButton';
