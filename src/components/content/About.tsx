import React from "react";
import { useTranslation } from "react-i18next";
import retratImg from "@assets/photos/about/xescomerce_sobremi_03.jpg";
import Text from "../commons/Text"; 
import cv from "../../assets/cv/XescoMercéCV2025.pdf"
import { CV_NAME } from "../../constants";


const About: React.FC = () => {
  const { t } = useTranslation();

  function handelClick() {
    const a = document.createElement("a");
    a.href = cv;
    a.download = CV_NAME;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  }

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
      <div className="flex justify-center mt-6">
        <button
          onClick={handelClick}
          className="px-6 py-2 bg-[#dedde2] text-black rounded hover:bg-[#bebdc2] transition"
          style={{
            fontFamily: "'Courier New', Courier, monospace"
          }}
        >
          {t("header.cv")}
        </button>
      </div>    
    </>
  );
};

export default About;