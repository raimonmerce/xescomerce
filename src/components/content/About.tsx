import React from "react";
import { useTranslation } from "react-i18next";
import retratImg from "@assets/photos/about/xescomerce_sobremi_03.jpg";
import Text from "../commons/Text"; 

const About: React.FC = () => {
  const { t } = useTranslation();

  return (
    <>
      <p className="text-[20px] md:text-[30px]">{t("header.about")}</p>
      <img src={retratImg} alt="portail" 
        className="w-4/5 max-w-[500px] ml-[15px] float-right" />
      <Text id={"about.description"}/>
    </>
  );
};

export default About;