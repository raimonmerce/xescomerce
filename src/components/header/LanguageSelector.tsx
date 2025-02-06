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

  const languages = ["cat", "es", "en", "fr"];
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
            className={`lenguage-button-text ${(currentLang === lang) ? "lenguage-button-selected" : ""}`}
            style={{
              pointerEvents: (currentLang === lang) ? "none" : "auto",
            }}
          >
            {lang.toUpperCase()}
          </button>
          {index < languages.length - 1 && 
            <span className="separator">|</span>}
        </Fragment>
      ))}
    </div>
  );
};

export default LanguageSelector;
