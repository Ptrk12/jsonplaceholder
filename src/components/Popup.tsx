import React from 'react';
import './styles/popup.css';

interface PopupProps {
  onClose: () => void;
  children: React.ReactNode;
}

function Popup({ onClose, children }: PopupProps) {
  return (
    <div className="popup">
      <div className="popup-content">
        <button className="close-button" onClick={onClose}>
          Close
        </button>
        {children}
      </div>
    </div>
  );
}

export default Popup;
