import React from "react";
import { useTranslation } from "react-i18next";
import ArtworkThumbnail from "../artwork/ArtworkThumbnail";
import FrameThumbnail from "../artwork/FrameThumbnail";
import { GalleryManager } from '../../data/GalleryManager';

interface GalleryProps {
  setOpenPopup: React.Dispatch<React.SetStateAction<string | null>>;
}

const Gallery: React.FC<GalleryProps> = ({ setOpenPopup }) => {
  const { t } = useTranslation();
  const galleryManager = GalleryManager.getInstance();

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
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
          {types.map((type) => {
            const ids = galleryManager.getIdsByType(type);
            return ids.map((id) => (
              <FrameThumbnail key={id} id={id} setOpenPopup={setOpenPopup} />
            ));
          })}
        </div>
      </div>
    </>
  );
};

export default Gallery;
