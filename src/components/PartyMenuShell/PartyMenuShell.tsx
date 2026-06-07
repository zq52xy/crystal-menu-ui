// [PROTOCOL]: Change this header when PartyMenuShell behavior changes, then check CLAUDE.md.
// INPUT: Navigation pane, stacked content panes, detail pane, and optional footer.
// OUTPUT: Prototypes-inspired party/menu screen shell using existing panel primitives.
// POS: Layout composition only; child components own domain behavior.
import React from 'react';
import classNames from 'classnames';
import { MenuPanel, type MenuPanelDensity, type MenuPanelVariant } from '../MenuPanel';
import styles from './party-menu-shell.module.less';

export interface PartyMenuShellPane {
  title?: React.ReactNode;
  subtitle?: React.ReactNode;
  content: React.ReactNode;
  variant?: MenuPanelVariant;
  density?: MenuPanelDensity;
  className?: string;
  ariaLabel?: string;
}

export interface PartyMenuShellProps extends Omit<React.HTMLAttributes<HTMLElement>, 'title'> {
  title?: React.ReactNode;
  subtitle?: React.ReactNode;
  navigation: PartyMenuShellPane;
  primary: PartyMenuShellPane[];
  detail?: PartyMenuShellPane;
  footer?: React.ReactNode;
  footerPanel?: boolean;
  as?: 'section' | 'article' | 'div';
}

const renderPane = (pane: PartyMenuShellPane, key: React.Key) => (
  <MenuPanel
    key={key}
    title={pane.title}
    subtitle={pane.subtitle}
    variant={pane.variant ?? 'deep'}
    density={pane.density ?? 'compact'}
    className={pane.className}
    aria-label={pane.ariaLabel}
  >
    {pane.content}
  </MenuPanel>
);

export const PartyMenuShell: React.FC<PartyMenuShellProps> = ({
  title,
  subtitle,
  navigation,
  primary,
  detail,
  footer,
  footerPanel = true,
  as: Component = 'section',
  className,
  ...rest
}) => (
  <Component {...rest} className={classNames(styles.shell, className)}>
    <MenuPanel title={title} subtitle={subtitle} className={styles.frame}>
      <div className={styles.grid}>
        <div className={styles.navigation}>{renderPane(navigation, 'navigation')}</div>
        <div className={styles.primary}>
          {primary.map((pane, index) => renderPane(pane, pane.title?.toString() ?? index))}
        </div>
        {detail ? <div className={styles.detail}>{renderPane(detail, 'detail')}</div> : null}
      </div>
    </MenuPanel>

    {footer ? (
      footerPanel ? (
        <MenuPanel variant="deep" density="compact" className={styles.footerPanel}>
          {footer}
        </MenuPanel>
      ) : (
        <div className={styles.footer}>{footer}</div>
      )
    ) : null}
  </Component>
);

PartyMenuShell.displayName = 'PartyMenuShell';
