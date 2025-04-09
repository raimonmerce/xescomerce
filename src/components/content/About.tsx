import React from "react";
import { useTranslation } from "react-i18next";
import retratImg from "@assets/photos/about/xescomerce_sobremi_03.jpg";
import Text from "../commons/Text"; 

const About: React.FC = () => {
  const { t } = useTranslation();

  return (
    <>
      <p className="text-[20px] md:text-[30px]">{t("header.about")}</p>
      <div className="order-1 md:order-2 w-full md:w-[100%] max-h-[500px] md:max-h-full mb-4 md:mb-0 md:ml-4">
        <img src={retratImg} alt="portail" 
          className="w-full md:max-w-[500px] mb-[15px] ml-[15px] float-right" />
      </div>
      <Text id={"about.description"}/>
    </>
  );
};

export default About;