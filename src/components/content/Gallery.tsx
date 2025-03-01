import React from "react";
import { useTranslation } from "react-i18next";

interface GalleryProps {
  setOpenPopup: React.Dispatch<React.SetStateAction<string|null>>;
}

const Gallery: React.FC<GalleryProps> = ({ setOpenPopup }) => {
  const { t } = useTranslation();
  return (
    <>
      <h2>{t("header.gallery")}</h2>
      <p>{t("gallery.description")}</p>
    </>
  );
};

export default Gallery;
