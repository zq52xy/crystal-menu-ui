// [PROTOCOL]: Change this header when ItemTooltip behavior changes, then check CLAUDE.md.
// INPUT: Item summary, icon, effects, stats, and tone.
// OUTPUT: Compact item details surface.
// POS: Item presentation only; host owns item mechanics.
import React from 'react';
import classNames from 'classnames';
import { GameIcon, type GameIconName } from '../GameIcon';
import styles from './item-tooltip.module.less';

export type ItemTooltipTone = 'default' | 'rare' | 'warning';

export interface ItemTooltipEffect {
  label: string;
  value: React.ReactNode;
}

export interface ItemTooltipProps extends Omit<React.HTMLAttributes<HTMLElement>, 'title'> {
  title: React.ReactNode;
  category?: React.ReactNode;
  description?: React.ReactNode;
  icon?: GameIconName;
  quantity?: React.ReactNode;
  tone?: ItemTooltipTone;
  effects?: ItemTooltipEffect[];
  footer?: React.ReactNode;
}

export const ItemTooltip: React.FC<ItemTooltipProps> = ({
  title,
  category,
  description,
  icon = 'gil',
  quantity,
  tone = 'default',
  effects = [],
  footer,
  className,
  ...rest
}) => (
  <aside {...rest} className={classNames(styles.tooltip, styles[tone], className)}>
    <header className={styles.header}>
      <span className={styles.icon}>
        <GameIcon name={icon} />
      </span>
      <span className={styles.identity}>
        <strong>{title}</strong>
        {category ? <span>{category}</span> : null}
      </span>
      {quantity ? <span className={styles.quantity}>{quantity}</span> : null}
    </header>
    {description ? <p className={styles.description}>{description}</p> : null}
    {effects.length > 0 ? (
      <dl className={styles.effects}>
        {effects.map((effect) => (
          <div key={effect.label} className={styles.effect}>
            <dt>{effect.label}</dt>
            <dd>{effect.value}</dd>
          </div>
        ))}
      </dl>
    ) : null}
    {footer ? <footer className={styles.footer}>{footer}</footer> : null}
  </aside>
);

ItemTooltip.displayName = 'ItemTooltip';
