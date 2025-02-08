import React from "react";
import { useTranslation } from "react-i18next";
import retratImg from "../../assets/web/about/retrat.jpg"

const About: React.FC = () => {
  const { t } = useTranslation();
  return (
    <>
      <h2>{t("header.about")}</h2>
      <p>
      {t("about.description")}
      </p>
      <img src={retratImg} alt="conxinxina" style={{ width: "80%" }}/>
    </>
  );
};

export default About;
