import {Fragment, useState, useEffect } from "react";
import { useTranslation } from "react-i18next";

interface LanguageSelectorProps {
  brightness: number;
}

const LanguageSelector: React.FC<LanguageSelectorProps> = ({brightness}) => {
  const { i18n } = useTranslation();

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const changeLanguage = (lang: string) => {
    i18n.changeLanguage(lang);
  };

  const languages = ["cat", "es", "en"]; //, "fr"
  const currentLang = i18n.language;

  if (windowWidth < 768) {
    return (
      <div
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
  }

  return (
    <div
      style={{
        filter: `brightness(${brightness})`,
        transition: "filter 0.3s ease"
      }}
    >
      {languages.map((lang, index) => (
        <Fragment key={lang}>
          <button
            id={lang}
            onClick={() => !(currentLang === lang) && changeLanguage(lang)}
            className={`outline-none bg-none border-0 text-gray-500 text-base cursor-pointer
              no-underline  p-0 transition-colors duration-300 ease-in-out hover:text-white  
              focus:outline-none ${currentLang === lang ? 'text-white font-bold' : ''}`}
            style={{
              pointerEvents: currentLang === lang ? 'none' : 'auto',
            }}
          >
            {lang.toUpperCase()}
          </button>
          {index < languages.length - 1 && 
            <span className="text-gray-500 px-2">|</span>}
        </Fragment>
      ))}
    </div>
  );
};

export default LanguageSelector;
