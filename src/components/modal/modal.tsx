import { CSSProperties } from 'react';
import styles from './modal.module.scss';
import cn from 'classnames';
type ModalProps = {
  isActive: boolean;
  body: JSX.Element;
  onClose: () => void;
  contentStyles?: CSSProperties;
};
export const Modal = ({ isActive, body, onClose, contentStyles }: ModalProps) => {
  const modalClassNames = cn(styles.modal, isActive && styles.active);

  return (
    <div className={modalClassNames} onClick={onClose}>
      <div
        className={styles['modal_content']}
        style={contentStyles}
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <div className={styles['modal_body']}>{body}</div>
      </div>
    </div>
  );
};
