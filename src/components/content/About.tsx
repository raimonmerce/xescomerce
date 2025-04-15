import React from "react";
import { useTranslation } from "react-i18next";
import retratImg from "@assets/photos/about/xescomerce_sobremi_03.jpg";
import Text from "../commons/Text"; 

const About: React.FC = () => {
  const { t } = useTranslation();

  return (
    <>
      <div className="flex items-center w-full px-4 pb-4">
        <div className="flex-grow border-t border-gray-300"></div>
        <p className="text-[25px] md:text-[30px] px-4 text-center whitespace-nowrap">{t("header.about")}</p>
        <div className="flex-grow border-t border-gray-300"></div>
      </div>
      <div className="order-1 md:order-2 w-full md:w-[100%] max-h-[500px] md:max-h-full mb-4 md:mb-0 md:ml-4">
        <img src={retratImg} alt="portail" 
          className="w-full md:max-w-[500px] mb-[15px] ml-[15px] float-right" />
      </div>
      <Text id={"about.description"}/>
    </>
  );
};

export default About;