// [PROTOCOL]: Change this header when ConfirmDialog behavior changes, then check CLAUDE.md.
// INPUT: Optional metadata, message, selected action, labels, and callbacks.
// OUTPUT: Prototypes-inspired confirmation dialog card.
// POS: Presentation and button semantics only; host owns modal state.
import React from 'react';
import classNames from 'classnames';
import styles from './confirm-dialog.module.less';

export type ConfirmDialogTone = 'info' | 'warning' | 'danger';
export type ConfirmDialogAction = 'confirm' | 'cancel';

export interface ConfirmDialogProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'title'> {
  timestamp?: React.ReactNode;
  title?: React.ReactNode;
  subtitle?: React.ReactNode;
  message: React.ReactNode;
  confirmLabel?: React.ReactNode;
  cancelLabel?: React.ReactNode;
  selectedAction?: ConfirmDialogAction;
  tone?: ConfirmDialogTone;
  onConfirm?: () => void;
  onCancel?: () => void;
}

export const ConfirmDialog: React.FC<ConfirmDialogProps> = ({
  timestamp,
  title,
  subtitle,
  message,
  confirmLabel = 'Yes',
  cancelLabel = 'No',
  selectedAction = 'confirm',
  tone = 'info',
  onConfirm,
  onCancel,
  className,
  ...rest
}) => (
  <div
    {...rest}
    className={classNames(styles.dialog, styles[tone], className)}
    role="dialog"
    aria-modal="true"
  >
    <div className={styles.iconRow} aria-hidden="true">
      <span className={styles.rule} />
      <span className={styles.icon}>
        <span>!</span>
      </span>
      <span className={styles.rule} />
    </div>

    <div className={styles.copy}>
      {timestamp ? <div className={styles.timestamp}>{timestamp}</div> : null}
      {title ? <strong className={styles.title}>{title}</strong> : null}
      {subtitle ? <div className={styles.subtitle}>{subtitle}</div> : null}
      <p className={styles.message}>{message}</p>
    </div>

    <div className={styles.actions}>
      <button
        className={classNames(styles.action, selectedAction === 'confirm' && styles.selected)}
        type="button"
        aria-pressed={selectedAction === 'confirm'}
        onClick={onConfirm}
      >
        {confirmLabel}
      </button>
      <button
        className={classNames(styles.action, selectedAction === 'cancel' && styles.selected)}
        type="button"
        aria-pressed={selectedAction === 'cancel'}
        onClick={onCancel}
      >
        {cancelLabel}
      </button>
    </div>
  </div>
);

ConfirmDialog.displayName = 'ConfirmDialog';
