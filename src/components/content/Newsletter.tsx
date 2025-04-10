import React from "react";
import { useTranslation } from "react-i18next";
// import ArtworkThumbnail from "../artwork/ArtworkThumbnail";

const Newsletter: React.FC = () => {
  const { t } = useTranslation();
  return (
    <>
      <p className="text-[20px] md:text-[30px] p-3">{t("header.newsletter")}</p>

    </>
  );
};

export default Newsletter;
