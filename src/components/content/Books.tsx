import React from "react";
import { useTranslation } from "react-i18next";
import PublicationTumbnail from "../artwork/ArtworkThumbnail"
import { GalleryManager } from '../../data/GalleryManager';

interface BooksProps {
  setOpenPopup: React.Dispatch<React.SetStateAction<string|null>>;
}

const Books: React.FC<BooksProps> = ({ setOpenPopup }) => {
  const { t } = useTranslation();
  const galleryManager = GalleryManager.getInstance();
  const keyA = galleryManager.getRandomArtworkKey();
  const keyB = galleryManager.getRandomArtworkKey();
  const keyC = galleryManager.getRandomArtworkKey();
  if (!keyA || !keyB || !keyC) return(null)
  return (
    <>
      <p className="text-[20px] md:text-[30px]">{t("header.books")}</p>
      <PublicationTumbnail id={keyA} setOpenPopup={setOpenPopup}/>
      <PublicationTumbnail id={keyB} setOpenPopup={setOpenPopup}/>
      <PublicationTumbnail id={keyC} setOpenPopup={setOpenPopup}/>
    </>
  );
};

export default Books;
