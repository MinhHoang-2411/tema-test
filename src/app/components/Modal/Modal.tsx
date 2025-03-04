import React, { useCallback, useEffect, useState } from "react";
import styles from "./styles.module.scss";

interface ModalProps {
  isOpen?: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

export default function Modal({ isOpen, onClose, children }: ModalProps) {
  const [visible, setVisible] = useState(isOpen);

  const handleClose = useCallback(() => {
    setVisible(false);
    setTimeout(() => {
      onClose();
    }, 300);
  }, [onClose]);

  useEffect(() => {
    setVisible(isOpen);
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div
      className={`${styles.modalOverlay} ${visible ? styles.modalOpen : ""}`}
      onClick={handleClose}
    >
      <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
        <button className={styles.modalCloseBtn} onClick={handleClose}>
          ×
        </button>
        {children}
      </div>
    </div>
  );
}
