// [PROTOCOL]: Change this header when InventoryList behavior changes, then check CLAUDE.md.
// INPUT: Inventory items, selection id, compact state, and optional selection callback.
// OUTPUT: Dense selectable inventory list.
// POS: Inventory presentation only; host owns item rules and state.
import React from 'react';
import classNames from 'classnames';
import { GameIcon, type GameIconName } from '../GameIcon';
import styles from './inventory-list.module.less';

export type InventoryItemTone = 'default' | 'key' | 'rare' | 'danger';

export interface InventoryItem {
  id: string;
  name: React.ReactNode;
  description?: React.ReactNode;
  category?: React.ReactNode;
  quantity?: React.ReactNode;
  icon?: GameIconName;
  tone?: InventoryItemTone;
  equipped?: boolean;
  disabled?: boolean;
}

export interface InventoryListProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, 'onSelect'> {
  items: InventoryItem[];
  selectedId?: string;
  compact?: boolean;
  emptyLabel?: React.ReactNode;
  onSelect?: (item: InventoryItem) => void;
}

export const InventoryList: React.FC<InventoryListProps> = ({
  items,
  selectedId,
  compact = false,
  emptyLabel = 'No items',
  onSelect,
  className,
  ...rest
}) => (
  <div
    {...rest}
    className={classNames(styles.list, compact && styles.compact, className)}
    role="listbox"
    aria-label="Inventory list"
  >
    {items.length === 0 ? <span className={styles.empty}>{emptyLabel}</span> : null}
    {items.map((item) => {
      const selected = item.id === selectedId;
      const tone = item.tone ?? 'default';

      return (
        <button
          key={item.id}
          className={classNames(styles.item, styles[tone], selected && styles.selected)}
          type="button"
          role="option"
          aria-selected={selected}
          disabled={item.disabled}
          onClick={() => onSelect?.(item)}
        >
          <span className={styles.icon}>
            <GameIcon name={item.icon ?? 'gil'} size="sm" />
          </span>
          <span className={styles.body}>
            <span className={styles.topline}>
              <strong>{item.name}</strong>
              {item.quantity ? <span className={styles.quantity}>{item.quantity}</span> : null}
            </span>
            {item.description ? <span className={styles.description}>{item.description}</span> : null}
          </span>
          <span className={styles.meta}>
            {item.category ? <span>{item.category}</span> : null}
            {item.equipped ? <b>Set</b> : null}
          </span>
        </button>
      );
    })}
  </div>
);

InventoryList.displayName = 'InventoryList';
