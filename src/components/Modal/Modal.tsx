import React from 'react';
import styles from './Modal.module.css'; // Import your CSS file for modal styles

const Modal: React.FC<{ closeModal: () => void }> = (props) => {
  return (
    <div className={styles.modalBackdrop} onClick={props.closeModal}>
      <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
        <div className={styles.modalHeader}>
          <h2>Modal Title</h2>
          <button className={styles.closeButton} onClick={props.closeModal}>X</button>
        </div>
        <div className={styles.modalBody}>
          {/* Modal content goes here */}
          <p>This is the modal content. You can add whatever you want here.</p>
        </div>
      </div>
    </div>
  );
};

export default Modal;
