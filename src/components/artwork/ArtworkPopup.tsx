import React, { useEffect } from 'react';
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
    <div 
      className="fixed inset-0 flex items-center justify-center z-[1000]" 
      style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}
      onClick={handleOutsideClick}
    >
      <div className="bg-white rounded-lg shadow-lg w-[80%] h-[80%] flex flex-col relative overflow-hidden">
        <p className="text-center w-full text-xl font-medium italic mt-2">
          <i>{artwork.name}</i>
        </p>
        <button 
          className="absolute top-2.5 right-2.5 bg-transparent border-none cursor-pointer text-gray-400 hover:text-black transition-colors duration-300" 
          onClick={onClose}
        >
          <img src={xSVG} className="w-4 h-4" alt="Close" />
        </button>
        <div className="overflow-y-auto flex-grow mt-2 px-2">
          <ArtworkPeace id={id} />
        </div>
      </div>
    </div>
  );
};

export default ArtworkPopup;
