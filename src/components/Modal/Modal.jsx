import { useEffect } from 'react';
import s from './Modal.module.css';

export default function Modal({ onClose, srcLI }) {
  const handleKeyDown = evt => {
    if (evt.code === 'Escape') {
      onClose();
    }
  };

  // add/remove EventListener
  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  });

  const overlayClickHandler = evt => {
    if (evt.target === evt.currentTarget) {
      onClose();
    }
  };

  return (
    <div className={s.Overlay} onClick={handleBackdropClick}>
      <div className={s.Modal}>
        <img src={largeImage} alt="" />
      </div>
    </div>
  );
}
