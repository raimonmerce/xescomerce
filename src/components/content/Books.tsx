import React from "react";
import { useTranslation } from "react-i18next";
import desertQuimicsImg from "../../assets/web/books/desertQuimic.jpg"
import obresImg from "../../assets/web/books/obres.jpg"
import conxinxinaImg from "../../assets/web/books/conxinxina.jpg"

const Books: React.FC = () => {
  const { t } = useTranslation();
  return (
    <>
      <h2>{t("header.books")}</h2>
      <h3>Desert Químic</h3>
      <p>
      {t("books.desertQuimic")}
      </p>
      <img src={desertQuimicsImg} alt="desertQuimic" />
      <h3>´</h3>
      <p>
        {t("books.obres")}
      </p>
      <img src={obresImg} alt="obres" />
      <h3>La Conxinxina</h3>
      <p>
        {t("books.conxinxina")}
      </p>
      <img src={conxinxinaImg} alt="conxinxina" />
    </>
  );
};

export default Books;
