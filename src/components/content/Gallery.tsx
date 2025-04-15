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
}

const Gallery: React.FC<GalleryProps> = ({ setOpenPopup }) => {
  const { t } = useTranslation();
  const galleryManager = GalleryManager.getInstance();
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const handleClick = (id: string) => {
    setOpenPopup(id);
  };

  const handleSelectCategory = (name: string) => {
    console.log("name", name)
    setSelectedCategory(name)
  };

  const types = [
    "accions",
    "cartells",
    "escultures",
    "experiments",
    "gransformats",
    "instalacions",
    "murals",
    "publicacions", 
    "series"
  ];

  return (
    <>
      <p className="text-[20px] md:text-[30px] mb-4 p-3">{t("header.gallery")}</p>
      <div className="max-w-6xl mx-auto">
        {selectedCategory ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
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
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
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
