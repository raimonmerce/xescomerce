import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import FrameThumbnail from "../artwork/FrameThumbnail";
import { GalleryManager } from '../../data/GalleryManager';
import { photos } from '../../assets/photos/photos';

const thumbnails = {
  "accions" : photos.accions.cccp.cccp1,
  "cartells" : photos.cartells.cartell1,
  "escultures" : photos.escultura.m.m1,
  "experiments" : photos.escultura.m.m1,
  "gransformats" : photos.gransFormats.gf1.gf1,
  "instalacions" : photos.instalacions.flams.flams1,
  "murals" : photos.murals.pilota.pilota1,
  "publicacions" : photos.publicacions.pub1, 
  "series" : photos.series.xove.xove1 
}

interface GalleryProps {
  setOpenPopup: React.Dispatch<React.SetStateAction<string | null>>;
  setGoToTab: React.Dispatch<React.SetStateAction<string>>;
}

const Gallery: React.FC<GalleryProps> = ({ setOpenPopup, setGoToTab }) => {
  const { t } = useTranslation();
  const galleryManager = GalleryManager.getInstance();
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const handleClick = (id: string) => {
    setOpenPopup(id);
  };

  const handleSelectCategory = (name: string) => {
    setSelectedCategory(name)
    setGoToTab("gallery")
  };

  return (
    <>
      <p className="text-[20px] md:text-[30px] p-3">{t("header.gallery")}</p>
      <div className="max-w-6xl mx-auto">
        {selectedCategory ? (
          <>
            <button
              className="text-[15px] md:text-[20px] text-gray-600 hover:text-black transition-colors duration-300 cursor-pointer flex items-center gap-2 mb-[20px]"
              onClick={() => setSelectedCategory(null)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              {t("gallery.back")}
            </button>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
              {(() => {
                const ids = galleryManager.getIdsByType(selectedCategory);

                return ids.map((id) => {
                  const artwork = galleryManager.getById(id);
                  if (!artwork) return null;

                  return (
                    <FrameThumbnail
                      key={id}
                      name={artwork.name}
                      imageUrl={artwork.thumbnail}
                      onClick={() => handleClick(id)}
                    />
                  );
                });
              })()}
            </div>
          </>
          ) : (
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {Object.entries(thumbnails).map(([name, imageUrl]) => (
                <FrameThumbnail
                  key={name}
                  name={name}
                  imageUrl={imageUrl}
                  onClick={() => handleSelectCategory(name)}
                />
              ))}
            </div>
          )
        }
      </div>
    </>
  );
};

export default Gallery;
