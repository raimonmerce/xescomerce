import React from "react";
import { useTranslation } from "react-i18next";
import LanguageButton from "./LanguageButton";
import "./LanguageButton.css";

const LanguageSelector: React.FC = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (lang: string) => {
    i18n.changeLanguage(lang);
  };

  const languages = ["cat", "es", "en", "fr"];

  return (
    <div className="language-selector">
      {languages.map((lang, index) => (
        <React.Fragment key={lang}>
          <LanguageButton lang={lang} currentLang={i18n.language} onClick={changeLanguage} />
          {index < languages.length - 1 && <span className="separator"> | </span>} {/* Add | separator except after last button */}
        </React.Fragment>
      ))}
    </div>
  );
};

export default LanguageSelector;
