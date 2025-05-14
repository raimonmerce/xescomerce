import React, { useEffect, useState } from 'react';
import ArtworkPeace from './ArtworkPeace';
import NewsPeace from './NewsPeace';
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

  const [fadeIn, setFadeIn] = useState(false);
  const [fadeOut, setFadeOut] = useState(false);

  const handleOutsideClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      triggerFadeOut();
    }
  };

  const handleCloseClick = () => {
    triggerFadeOut();
  };

  const triggerFadeOut = () => {
    setFadeOut(true);
    setTimeout(() => {
      onClose();
    }, 500);
  };

  useEffect(() => {
    setFadeIn(true);
  }, []);

  useEffect(() => {
    if (fadeOut) {
      setFadeIn(false);
    }
  }, [fadeOut]);

  if (!artwork && !news) return null;

  const isArtwork = !!artwork;
  const title = isArtwork ? artwork.name : (news ? t(news.name) : '');

  return (
    <div
    className={`fixed inset-0 flex items-center justify-center z-[1000] transition-opacity duration-500 ease-in-out ${fadeIn ? 'opacity-100' : 'opacity-0'} ${fadeOut ? 'opacity-0' : ''}`}
    style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}
      onClick={handleOutsideClick}
    >
      <div className={`bg-white rounded-lg shadow-lg w-[80%] h-[80%] flex flex-col relative overflow-hidden transform transition-all duration-750 ease-in-out
        ${fadeIn && !fadeOut ? 'translate-y-0' : '-translate-y-200'}
      `}>
        <p className="w-[75%] mx-auto text-center text-2xl font-medium italic mt-2">
          {title}
        </p>
        <button
          className="absolute top-4 right-4 bg-transparent border-none cursor-pointer text-gray-400 hover:text-black transition-colors duration-300"
          onClick={handleCloseClick}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
        <div className="overflow-y-auto flex-grow m-2 mb-4">
          {isArtwork ? <ArtworkPeace id={id} /> : <NewsPeace id={id} />}
        </div>
      </div>
    </div>
  );
};

export default ContentPopup;
