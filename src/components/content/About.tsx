import React from "react";
import { useTranslation } from "react-i18next";
import retratImg from "@assets/photos/about/xescomerce_sobremi_03.jpg";
import Text from "../commons/Text"; 

const About: React.FC = () => {
  const { t } = useTranslation();

  return (
    <>
      <h2>{t("header.about")}</h2>
      <img src={retratImg} alt="portail" 
        className="image-portail" />
      <Text id={"about.description"}/>
    </>
  );
};

export default About;