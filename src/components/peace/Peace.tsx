import React, { useEffect } from 'react';
import { GalleryManager, GalleryPiece } from "../../managers/GalleryManager";

interface PeaceProps {
  name: string;
  onClose: () => void;
}

const Peace: React.FC<PeaceProps> = ({ name, onClose }) => {
  const gallery = GalleryManager.getInstance();
  const peace = gallery.getPiece(name)
  
  const handleOutsideClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  useEffect(() => {
    const handleKeydown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeydown);
    return () => {
      window.removeEventListener('keydown', handleKeydown);
    };
  }, [onClose]);

  if (name === "") return null;

  return (
    <div
      className="peace-overlay"
      style={overlayStyle}
      onClick={handleOutsideClick}
    >
      <div className="peace-content" style={peaceContentStyle}>
        <button onClick={onClose} style={closeButtonStyle}>
          X
        </button>
        <img src={peace.thumbnail} alt="peace" style={imageStyle} />
        <p>{peace.description}</p>
      </div>
    </div>
  );
};

// Basic styles for the peace
const overlayStyle: React.CSSProperties = {
  position: 'fixed',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: 'rgba(0, 0, 0, 0.5)',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  zIndex: 1000,
};

const peaceContentStyle: React.CSSProperties = {
  backgroundColor: 'white',
  padding: '20px',
  borderRadius: '8px',
  position: 'relative',
  minWidth: '300px',
  textAlign: 'center',
};

const closeButtonStyle: React.CSSProperties = {
  position: 'absolute',
  top: '10px',
  right: '10px',
  background: 'transparent',
  border: 'none',
  fontSize: '16px',
  cursor: 'pointer',
};

const imageStyle: React.CSSProperties = {
  maxWidth: '100%',
  height: 'auto',
  marginBottom: '15px',
};

export default Peace;
