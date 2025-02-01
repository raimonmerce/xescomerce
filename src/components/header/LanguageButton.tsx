import React from "react";
import "./LanguageButton.css";

interface LanguageButtonProps {
  lang: string;
  currentLang: string;
  onClick: (lang: string) => void;
}

const LanguageButton: React.FC<LanguageButtonProps> = ({ lang, currentLang, onClick }) => {
  const isSelected = currentLang === lang;

  return (
    <button
      onClick={() => !isSelected && onClick(lang)}
      className={`button-text ${isSelected ? "button-selected" : ""}`} 
      style={{ pointerEvents: isSelected ? "none" : "auto" }}
    >
      {lang.toUpperCase()}
    </button>
  );
};

export default LanguageButton;
