import React from "react";
import { useTranslation } from "react-i18next";

interface LanguageSelectorPhoneProps {
  brightness: number;
}

const LanguageSelectorPhone: React.FC<LanguageSelectorPhoneProps> = ({ brightness }) => {
  const { i18n } = useTranslation();

  const changeLanguage = (lang: string) => {
    i18n.changeLanguage(lang);
  };

  const languages = ["cat", "es", "en"]; // you can add more languages here
  const currentLang = i18n.language;

  return (
    <div
      className="absolute top-[15px] right-[15px]"
      style={{
        filter: `brightness(${brightness})`,
        transition: "filter 0.3s ease",
      }}
    >
      <select
        value={currentLang}
        onChange={(e) => changeLanguage(e.target.value)}
        className="outline-none w-[70px] text-center bg-none border 
        border-none rounded text-white text-base cursor-pointer p-2 
        transition-colors duration-300 ease-in-out focus:outline-none"
      >
        {languages.map((lang) => (
          <option key={lang} value={lang} className="bg-black text-white text-center">
            {lang.toUpperCase()}
          </option>
        ))}
      </select>
    </div>
  );
};

export default LanguageSelectorPhone;
