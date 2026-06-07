// [PROTOCOL]: Change this header when MainMenu behavior changes, then check CLAUDE.md.
// INPUT: Ordered menu options, selected id, pulsing state, and selection callback.
// OUTPUT: Accessible Prototypes-inspired main menu list.
// POS: Menu presentation and keyboard-friendly option semantics only.
import React from 'react';
import classNames from 'classnames';
import styles from './main-menu.module.less';

export interface MainMenuOption {
  id: string;
  label: string;
  disabled?: boolean;
}

export interface MainMenuProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'onSelect'> {
  options: MainMenuOption[];
  selectedId?: string;
  pulse?: boolean;
  onSelect?: (option: MainMenuOption) => void;
}

export const MainMenu: React.FC<MainMenuProps> = ({
  options,
  selectedId,
  pulse = true,
  onSelect,
  className,
  ...rest
}) => {
  const activeId = selectedId ?? options.find((option) => !option.disabled)?.id;

  return (
    <div {...rest} className={classNames(styles.menu, className)} role="menu">
      {options.map((option) => {
        const selected = option.id === activeId;

        return (
          <button
            key={option.id}
            className={classNames(
              styles.item,
              selected && styles.selected,
              selected && pulse && styles.pulse,
              option.disabled && styles.disabled,
            )}
            type="button"
            role="menuitem"
            disabled={option.disabled}
            aria-current={selected ? 'true' : undefined}
            onClick={() => {
              if (!option.disabled) onSelect?.(option);
            }}
          >
            <span className={styles.mask} aria-hidden="true" />
            <span className={styles.leftHighlight} aria-hidden="true" />
            <span className={styles.selectionGlow} aria-hidden="true" />
            <span className={styles.label}>{option.label}</span>
          </button>
        );
      })}
    </div>
  );
};

MainMenu.displayName = 'MainMenu';
