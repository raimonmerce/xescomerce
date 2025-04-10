import React, { useEffect } from 'react';
import ArtworkPeace from './ArtworkPeace';
import NewsPeace from './NewsPeace';
import xSVG from '../../assets/svg/x.svg';
import { GalleryManager } from '../../data/GalleryManager';
import { NewsManager } from '../../data/NewsManager';
import { useTranslation } from "react-i18next";

interface ContentPopupProps {
  id: string;
  onClose: () => void;
}

const ContentPopup: React.FC<ContentPopupProps> = ({ id, onClose }) => {
  const galleryManager = GalleryManager.getInstance();
  const newsManager = NewsManager.getInstance();
  const { t } = useTranslation();
  const artwork = galleryManager.getById(id);
  const news = newsManager.getById(id);

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

  // If ID is not found in either, return null
  if (!artwork && !news) return null;

  // Determine which type it is
  const isArtwork = !!artwork;
  const title = isArtwork ? artwork.name : (news ? t(news.name) : '');

  return (
    <div
      className="fixed inset-0 flex items-center justify-center z-[1000]"
      style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}
      onClick={handleOutsideClick}
    >
      <div className="bg-white rounded-lg shadow-lg w-[80%] h-[80%] flex flex-col relative overflow-hidden">
        <p className="text-center w-full text-2xl font-medium italic mt-2">
          <i>{title}</i>
        </p>
        <button
          className="absolute top-2.5 right-2.5 bg-transparent border-none cursor-pointer text-gray-400 hover:text-black transition-colors duration-300"
          onClick={onClose}
        >
          <img src={xSVG} className="w-4 h-4" alt="Close" />
        </button>
        <div className="overflow-y-auto flex-grow m-2">
          {isArtwork ? <ArtworkPeace id={id} /> : <NewsPeace id={id} />}
        </div>
      </div>
    </div>
  );
};

export default ContentPopup;
