import React, { useEffect } from 'react';
import './ArtworkPopup.css';
import ArtworkPeace from './ArtworkPeace';
import xSVG from '../../assets/svg/x.svg';
import { GalleryManager } from '../../data/GalleryManager';


interface ArtworkPopupProps {
  id: string;
  onClose: () => void;
}

const ArtworkPopup: React.FC<ArtworkPopupProps> = ({ id, onClose }) => {
  const galleryManager = GalleryManager.getInstance();
  const artwork = galleryManager.getById(id);

  if (!artwork) return null;

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

  if (!id) return null;

  return (
    <div className="peace-overlay" onClick={handleOutsideClick}>
      <div className="peace-content">
      <p className="artwork-title"><i>{artwork.name}</i></p>
        <button className="close-button" onClick={onClose}>
          <img src={xSVG} style={{ width: '16px', height: '16px' }} alt="Close" />
        </button>
        <div className="main-content">
          <ArtworkPeace id={id} />
        </div>
      </div>
    </div>
  );
};

export default ArtworkPopup;
