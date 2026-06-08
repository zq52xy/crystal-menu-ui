// [PROTOCOL]: Change this header when WeaponUpgradeMatrix behavior changes, then check CLAUDE.md.
// INPUT: Weapon name, SP pool, grid dimensions, node placements, and connection list.
// OUTPUT: Original SP-grid weapon upgrade matrix with linked nodes and selection.
// POS: Pure visual presentation; host owns SP earn/spend logic.
import React from 'react';
import classNames from 'classnames';
import styles from './weapon-upgrade-matrix.module.less';

export type WeaponNodeStatus = 'locked' | 'available' | 'unlocked' | 'selected';

export type WeaponNodeKind = 'core' | 'attack' | 'magic' | 'support' | 'unique';

export interface WeaponMatrixNode {
  id: string;
  /** Grid column index, 1-based. */
  col: number;
  /** Grid row index, 1-based. */
  row: number;
  label: React.ReactNode;
  /** Hover/selected description shown in the side panel. */
  description?: React.ReactNode;
  /** Effect summary line, e.g. "ATK +6", "Magic +4". */
  effect?: React.ReactNode;
  cost?: number;
  status?: WeaponNodeStatus;
  kind?: WeaponNodeKind;
}

export interface WeaponMatrixConnection {
  from: string;
  to: string;
  /** When true, the host has unlocked the path between the two nodes. */
  active?: boolean;
}

export interface WeaponUpgradeMatrixProps extends Omit<React.HTMLAttributes<HTMLElement>, 'onSelect'> {
  weaponName: React.ReactNode;
  weaponLevel?: React.ReactNode;
  /** Available SP. */
  sp: number;
  /** Maximum SP earned so far (used to display "x / total" hint). */
  spMax?: number;
  /** Grid columns count. Default 6. */
  columns?: number;
  /** Grid rows count. Default 4. */
  rows?: number;
  nodes: WeaponMatrixNode[];
  connections?: WeaponMatrixConnection[];
  selectedNodeId?: string;
  onSelectNode?: (node: WeaponMatrixNode) => void;
}

const sizeOf = (count: number, fallback: number) => {
  if (!Number.isFinite(count) || count < 1) return fallback;
  return Math.max(1, Math.min(12, Math.round(count)));
};

export const WeaponUpgradeMatrix: React.FC<WeaponUpgradeMatrixProps> = ({
  weaponName,
  weaponLevel,
  sp,
  spMax,
  columns = 6,
  rows = 4,
  nodes,
  connections = [],
  selectedNodeId,
  onSelectNode,
  className,
  ...rest
}) => {
  const cols = sizeOf(columns, 6);
  const rowCount = sizeOf(rows, 4);

  const fallbackId = nodes.find((node) => node.status === 'unlocked')?.id ?? nodes[0]?.id;
  const activeId = selectedNodeId ?? fallbackId;
  const activeNode = nodes.find((node) => node.id === activeId);

  return (
    <section
      {...rest}
      className={classNames(styles.matrix, className)}
      role="group"
      aria-label={typeof weaponName === 'string' ? weaponName : 'Weapon upgrade matrix'}
    >
      <header className={styles.header}>
        <div className={styles.titleBlock}>
          {weaponLevel ? <span className={styles.weaponLevel}>{weaponLevel}</span> : null}
          <h3 className={styles.weaponName}>{weaponName}</h3>
        </div>
        <div className={styles.spBlock}>
          <span className={styles.spLabel}>SP</span>
          <strong className={styles.spValue}>{Math.max(0, Math.round(sp))}</strong>
          {spMax !== undefined ? (
            <span className={styles.spMax}>/{Math.round(spMax)}</span>
          ) : null}
        </div>
      </header>

      <div
        className={styles.gridWrapper}
        style={
          {
            '--matrix-cols': cols,
            '--matrix-rows': rowCount,
          } as React.CSSProperties
        }
      >
        <svg className={styles.connections} aria-hidden="true">
          {connections.map((conn, index) => {
            const a = nodes.find((node) => node.id === conn.from);
            const b = nodes.find((node) => node.id === conn.to);
            if (!a || !b) return null;
            const x1 = ((a.col - 0.5) / cols) * 100;
            const y1 = ((a.row - 0.5) / rowCount) * 100;
            const x2 = ((b.col - 0.5) / cols) * 100;
            const y2 = ((b.row - 0.5) / rowCount) * 100;
            return (
              <line
                key={`${conn.from}-${conn.to}-${index}`}
                x1={`${x1}%`}
                y1={`${y1}%`}
                x2={`${x2}%`}
                y2={`${y2}%`}
                className={classNames(styles.connection, conn.active && styles.connectionActive)}
              />
            );
          })}
        </svg>

        <div className={styles.grid} role="grid">
          {nodes.map((node) => {
            const status: WeaponNodeStatus = node.status ?? 'locked';
            const kind: WeaponNodeKind = node.kind ?? 'attack';
            const isSelected = node.id === activeId;
            return (
              <button
                key={node.id}
                type="button"
                className={classNames(
                  styles.node,
                  styles[`status-${status}`],
                  styles[`kind-${kind}`],
                  isSelected && styles.nodeSelected,
                )}
                style={
                  {
                    gridColumn: node.col,
                    gridRow: node.row,
                  } as React.CSSProperties
                }
                disabled={status === 'locked'}
                aria-pressed={isSelected}
                aria-label={typeof node.label === 'string' ? node.label : undefined}
                onClick={() => onSelectNode?.(node)}
              >
                <span className={styles.nodeShape} aria-hidden="true" />
                <span className={styles.nodeLabel}>{node.label}</span>
                {node.cost !== undefined ? (
                  <span className={styles.nodeCost}>{node.cost} SP</span>
                ) : null}
              </button>
            );
          })}
        </div>
      </div>

      <div className={styles.detail}>
        <span className={styles.detailKicker}>Selected Node</span>
        {activeNode ? (
          <>
            <strong className={styles.detailTitle}>{activeNode.label}</strong>
            {activeNode.effect ? (
              <span className={styles.detailEffect}>{activeNode.effect}</span>
            ) : null}
            {activeNode.description ? (
              <p className={styles.detailDescription}>{activeNode.description}</p>
            ) : null}
            {activeNode.cost !== undefined ? (
              <span className={styles.detailCost}>Cost: {activeNode.cost} SP</span>
            ) : null}
          </>
        ) : (
          <p className={styles.detailDescription}>Select a node to view its effect.</p>
        )}
      </div>
    </section>
  );
};

WeaponUpgradeMatrix.displayName = 'WeaponUpgradeMatrix';
