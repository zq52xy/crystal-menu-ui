// [PROTOCOL]: Change this header when MenuPanel behavior changes, then check CLAUDE.md.
// INPUT: Panel content, title, subtitle, footer, variant, and density props.
// OUTPUT: Beveled blue container surface for JRPG menu compositions.
// POS: Surface component logic; no official game assets.
import React from 'react';
import classNames from 'classnames';
import styles from './menu-panel.module.less';

export type MenuPanelVariant = 'blue' | 'deep' | 'status';
export type MenuPanelDensity = 'normal' | 'compact';

export interface MenuPanelProps extends Omit<React.HTMLAttributes<HTMLElement>, 'title'> {
  title?: React.ReactNode;
  subtitle?: React.ReactNode;
  footer?: React.ReactNode;
  variant?: MenuPanelVariant;
  density?: MenuPanelDensity;
  as?: 'section' | 'article' | 'aside' | 'div';
}

export const MenuPanel: React.FC<MenuPanelProps> = ({
  title,
  subtitle,
  footer,
  variant = 'blue',
  density = 'normal',
  as: Component = 'section',
  className,
  children,
  ...rest
}) => {
  const hasHeader = title || subtitle;

  return (
    <Component
      {...rest}
      className={classNames(styles.panel, styles[variant], styles[density], className)}
    >
      <span className={styles.corner} aria-hidden="true" />
      {hasHeader ? (
        <header className={styles.header}>
          {title ? <h2 className={styles.title}>{title}</h2> : null}
          {subtitle ? <p className={styles.subtitle}>{subtitle}</p> : null}
        </header>
      ) : null}
      <div className={styles.body}>{children}</div>
      {footer ? <footer className={styles.footer}>{footer}</footer> : null}
    </Component>
  );
};

MenuPanel.displayName = 'MenuPanel';
