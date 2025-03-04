import React from "react";
import { useTranslation } from "react-i18next";
import PublicationTumbnail from "../artwork/ArtworkThumbnail"

interface BooksProps {
  setOpenPopup: React.Dispatch<React.SetStateAction<string|null>>;
}

const Books: React.FC<BooksProps> = ({ setOpenPopup }) => {
  const { t } = useTranslation();
  return (
    <>
      <h2>{t("header.books")}</h2>
      <PublicationTumbnail id={"PB1"} setOpenPopup={setOpenPopup}/>
      <PublicationTumbnail id={"PB2"} setOpenPopup={setOpenPopup}/>
      <PublicationTumbnail id={"PB4"} setOpenPopup={setOpenPopup}/>
    </>
  );
};

export default Books;
