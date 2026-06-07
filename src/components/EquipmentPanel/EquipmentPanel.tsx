// [PROTOCOL]: Change this header when EquipmentPanel behavior changes, then check CLAUDE.md.
// INPUT: Equipment slots, selected slot id, attributes, orb slots, and selection callback.
// OUTPUT: Original Prototypes-inspired equipment/status panel.
// POS: Equipment presentation only; no game inventory rules or official assets.
import React from 'react';
import classNames from 'classnames';
import styles from './equipment-panel.module.less';

export type EquipmentSlotTone = 'neutral' | 'active' | 'empty';
export type OrbSlotTone = 'cyan' | 'violet' | 'gold' | 'empty';

export interface EquipmentSlot {
  id: string;
  label: string;
  item?: React.ReactNode;
  category?: React.ReactNode;
  description?: React.ReactNode;
  tone?: EquipmentSlotTone;
  disabled?: boolean;
}

export interface EquipmentAttribute {
  label: string;
  value: React.ReactNode;
  delta?: number;
}

export interface OrbSlot {
  id: string;
  label?: string;
  tone?: OrbSlotTone;
  linkedAfter?: boolean;
  empty?: boolean;
}

export interface EquipmentPanelProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, 'onSelect'> {
  slots: EquipmentSlot[];
  selectedSlotId?: string;
  attributes?: EquipmentAttribute[];
  orbSlots?: OrbSlot[];
  compact?: boolean;
  onSelect?: (slot: EquipmentSlot) => void;
}

const getDeltaLabel = (delta?: number) => {
  if (!delta) return null;
  return delta > 0 ? `+${delta}` : `${delta}`;
};

export const EquipmentPanel: React.FC<EquipmentPanelProps> = ({
  slots,
  selectedSlotId,
  attributes = [],
  orbSlots = [],
  compact = false,
  onSelect,
  className,
  ...rest
}) => {
  const selectedSlot = slots.find((slot) => slot.id === selectedSlotId) ?? slots[0];

  return (
    <div {...rest} className={classNames(styles.panel, compact && styles.compact, className)}>
      <div className={styles.slotList} role="listbox" aria-label="Equipment slots">
        {slots.map((slot) => {
          const selected = slot.id === selectedSlot?.id;
          const tone = slot.item ? slot.tone ?? 'neutral' : 'empty';

          return (
            <button
              key={slot.id}
              className={classNames(
                styles.slot,
                styles[tone],
                selected && styles.selected,
              )}
              type="button"
              role="option"
              aria-selected={selected}
              disabled={slot.disabled}
              onClick={() => onSelect?.(slot)}
            >
              <span className={styles.slotLabel}>{slot.label}</span>
              <span className={styles.slotItem}>{slot.item ?? 'Empty'}</span>
              {slot.category ? <span className={styles.slotCategory}>{slot.category}</span> : null}
            </button>
          );
        })}
      </div>

      <aside className={styles.detail} aria-label="Equipment details">
        <div className={styles.itemSummary}>
          <span className={styles.summaryLabel}>{selectedSlot?.label ?? 'Slot'}</span>
          <strong className={styles.summaryName}>{selectedSlot?.item ?? 'Empty slot'}</strong>
          {selectedSlot?.description ? (
            <span className={styles.summaryDescription}>{selectedSlot.description}</span>
          ) : null}
        </div>

        {attributes.length > 0 ? (
          <dl className={styles.attributes}>
            {attributes.map((attribute) => {
              const deltaLabel = getDeltaLabel(attribute.delta);

              return (
                <div key={attribute.label} className={styles.attribute}>
                  <dt>{attribute.label}</dt>
                  <dd>
                    <span>{attribute.value}</span>
                    {deltaLabel ? (
                      <span
                        className={classNames(
                          styles.delta,
                          attribute.delta && attribute.delta > 0 ? styles.up : styles.down,
                        )}
                      >
                        {deltaLabel}
                      </span>
                    ) : null}
                  </dd>
                </div>
              );
            })}
          </dl>
        ) : null}

        {orbSlots.length > 0 ? (
          <div className={styles.orbArea} aria-label="Orb slots">
            <span className={styles.orbTitle}>Slots</span>
            <div className={styles.orbSlots}>
              {orbSlots.map((slot) => {
                const tone = slot.empty ? 'empty' : slot.tone ?? 'cyan';

                return (
                  <span
                    key={slot.id}
                    className={classNames(
                      styles.orbSlot,
                      styles[tone],
                      slot.linkedAfter && styles.linked,
                    )}
                    aria-label={slot.label ?? `slot ${slot.id}`}
                    title={slot.label}
                  />
                );
              })}
            </div>
          </div>
        ) : null}
      </aside>
    </div>
  );
};

EquipmentPanel.displayName = 'EquipmentPanel';
