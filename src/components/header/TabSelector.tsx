import React, { Fragment } from "react";
import { useTranslation } from "react-i18next";

interface TabSelectorProps {
  setActiveTab: React.Dispatch<React.SetStateAction<string>>;
  activeTab: string;
  brightness: number;
  setGoToTab: React.Dispatch<React.SetStateAction<string>>;
}

const TabSelector: React.FC<TabSelectorProps> = ({ setActiveTab, brightness, activeTab, setGoToTab }) => {
  const { t } = useTranslation();

  const handleTabChange = (tab: string) => {
    setGoToTab(tab)
    setActiveTab(tab);
  };

  const tabs = {
    about: t('header.about', 'Sobre mi'),
    newsletter: t('header.newsletter', 'Butlletí'),
    gallery: t('header.gallery', 'Galeria'),
    books: t('header.books', 'Llibres'),
    contact: t('header.contact', 'Contacte'),
  };

  return (
    <div 
      className="tab flex gap-4"
      style={{
        filter: `brightness(${brightness})`,
        transition: "filter 0.3s ease",
        padding: "10px",
      }}
    >
      {Object.entries(tabs).map(([key, value], index, array) => (
        <Fragment key={value}>
          <button
            key={key}
            id={`${key}_nav`}
            onClick={() => handleTabChange(key)}
            className={`lenguage-button-text ${(activeTab === key) ? "lenguage-button-selected" : ""}`}
            style={{
              pointerEvents: (activeTab === key) ? "none" : "auto",
            }}
          >
            {value.toUpperCase()}
          </button>
          {index < array.length - 1 && <span className="separator">|</span>}
        </Fragment>
      ))}
    </div>
  );
};

export default TabSelector;
