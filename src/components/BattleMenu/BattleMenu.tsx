// [PROTOCOL]: Change this header when BattleMenu behavior changes, then check CLAUDE.md.
// INPUT: Battle commands, selected id, gauges, actor label, and callback.
// OUTPUT: Compact battle command shell.
// POS: Battle menu presentation only; host owns turn logic.
import React from 'react';
import classNames from 'classnames';
import { CommandButton, type CommandButtonVariant } from '../CommandButton';
import styles from './battle-menu.module.less';

export interface BattleCommand {
  id: string;
  label: React.ReactNode;
  description?: string;
  shortcut?: string;
  variant?: CommandButtonVariant;
  disabled?: boolean;
}

export interface BattleMenuProps
  extends Omit<React.HTMLAttributes<HTMLElement>, 'onSelect'> {
  commands: BattleCommand[];
  selectedId?: string;
  actor?: React.ReactNode;
  atb?: number;
  limit?: number;
  onSelect?: (command: BattleCommand) => void;
}

const clampPercent = (value = 0) => Math.max(0, Math.min(100, value));

export const BattleMenu: React.FC<BattleMenuProps> = ({
  commands,
  selectedId,
  actor,
  atb = 0,
  limit = 0,
  onSelect,
  className,
  ...rest
}) => (
  <section {...rest} className={classNames(styles.menu, className)}>
    <header className={styles.header}>
      <strong>{actor ?? 'Active Unit'}</strong>
      <span>Command</span>
    </header>
    <div className={styles.commands}>
      {commands.map((command) => (
        <CommandButton
          key={command.id}
          variant={command.variant}
          selected={command.id === selectedId}
          disabled={command.disabled}
          shortcut={command.shortcut}
          description={command.description}
          onClick={() => onSelect?.(command)}
        >
          {command.label}
        </CommandButton>
      ))}
    </div>
    <div className={styles.gauges} aria-label="Battle gauges">
      <span>
        <b>ATB</b>
        <i style={{ width: `${clampPercent(atb)}%` }} />
      </span>
      <span>
        <b>Limit</b>
        <i style={{ width: `${clampPercent(limit)}%` }} />
      </span>
    </div>
  </section>
);

BattleMenu.displayName = 'BattleMenu';
