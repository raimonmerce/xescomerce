import React from "react";
import { useTranslation } from "react-i18next";
import PublicationTumbnail from "../artwork/ArtworkThumbnail";
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
      <p className="text-[20px] md:text-[30px] mb-4">{t("header.gallery")}</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {types.map((type) => {
          const ids = galleryManager.getIdsByType(type);
          return ids.map((id) => (
            <PublicationTumbnail key={id} id={id} setOpenPopup={setOpenPopup} />
          ));
        })}
      </div>
    </>
  );
};

export default Gallery;
