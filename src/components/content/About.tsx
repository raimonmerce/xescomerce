import React from "react";
import { useTranslation } from "react-i18next";
import retratImg from "../../assets/web/about/retrat.jpg";
import Text from "../commons/Text"; 

const About: React.FC = () => {
  const { t } = useTranslation();

  return (
    <>
      <h2>{t("header.about")}</h2>
      <Text id={"about.description"}/>
      <img src={retratImg} alt="conxinxina" style={{ width: "80%", maxWidth: "500px" }} />
    </>
  );
};

export default About;