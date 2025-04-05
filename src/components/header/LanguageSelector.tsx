import {Fragment} from "react";
import { useTranslation } from "react-i18next";

interface LanguageSelectorProps {
  brightness: number;
}

const LanguageSelector: React.FC<LanguageSelectorProps> = ({brightness}) => {
  const { i18n } = useTranslation();


  const changeLanguage = (lang: string) => {
    i18n.changeLanguage(lang);
  };

  const languages = ["cat", "es", "en"]; //, "fr"
  const currentLang = i18n.language;

  return (
    <div 
      className="language-selector"
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
