import React from "react";
import { useTranslation } from "react-i18next";

const Gallery: React.FC = () => {
  const { t } = useTranslation();
  return (
    <>
      <h2>{t("header.gallery")}</h2>
      <p>{t("gallery.description")}</p>
      <div className="grid grid-cols-3 gap-4">
        <div className="image-item">
          <img src="https://via.placeholder.com/150" alt="Image 1" />
        </div>
        <div className="image-item">
          <img src="https://via.placeholder.com/150" alt="Image 2" />
        </div>
        <div className="image-item">
          <img src="https://via.placeholder.com/150" alt="Image 3" />
        </div>
      </div>
      <p>
        A
      </p>
      <p>
        A
      </p>
      <p>
        A
      </p>
      <p>
        A
      </p>
      <p>
        A
      </p>
      <p>
        A
      </p>
      <p>
        A
      </p>
      <p>
        A
      </p>
    </>
  );
};

export default Gallery;
