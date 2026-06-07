// [PROTOCOL]: Change this header when OrbSocketRail behavior changes, then check CLAUDE.md.
// INPUT: Orb socket tones, labels, connection lengths, and display size.
// OUTPUT: Original large linked orb socket rail.
// POS: Visual socket rail only; no official assets or equipment rules.
import React from 'react';
import classNames from 'classnames';
import { OrbGem, type OrbGemTone } from '../OrbGem';
import styles from './orb-socket-rail.module.less';

export type OrbSocketTone = OrbGemTone;
export type OrbSocketConnection = 'none' | 'short' | 'long' | 'brace';
export type OrbSocketRailSize = 'md' | 'lg';

export interface OrbSocket {
  id: string;
  label?: string;
  tone?: OrbSocketTone;
  active?: boolean;
  disabled?: boolean;
  linkedAfter?: OrbSocketConnection;
}

export interface OrbSocketRailProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, 'children'> {
  sockets: OrbSocket[];
  size?: OrbSocketRailSize;
  backdrop?: boolean;
  ariaLabel?: string;
}

export const OrbSocketRail: React.FC<OrbSocketRailProps> = ({
  sockets,
  size = 'lg',
  backdrop = true,
  ariaLabel = 'Orb socket rail',
  className,
  ...rest
}) => (
  <div
    {...rest}
    className={classNames(styles.rail, styles[size], backdrop && styles.backdrop, className)}
    role="list"
    aria-label={ariaLabel}
  >
    {sockets.map((socket, index) => {
      const tone = socket.tone ?? 'cyan';
      const connection = index === sockets.length - 1 ? 'none' : socket.linkedAfter ?? 'short';

      return (
        <span key={socket.id} className={classNames(styles.node, styles[`${connection}Node`])}>
          <OrbGem
            className={styles.socketGem}
            tone={tone}
            size="inherit"
            active={socket.active}
            disabled={socket.disabled}
            role="listitem"
            label={socket.label ?? socket.id}
          />

          {connection !== 'none' ? (
            <span
              className={classNames(styles.connector, styles[`${connection}Link`])}
              aria-hidden="true"
            >
              <span className={styles.connectorLine} />
              {connection === 'brace' ? <span className={styles.connectorBrace} /> : null}
            </span>
          ) : null}
        </span>
      );
    })}
  </div>
);

OrbSocketRail.displayName = 'OrbSocketRail';
