import React, { useState } from "react";
import { useTranslation } from "react-i18next";

interface TabSelectorProps {
  onTabChange: (tab: string) => void;
}

const TabSelector: React.FC<TabSelectorProps> = ({ onTabChange }) => {
  const [activeTab, setActiveTab] = useState<string>("home");
  const { t } = useTranslation();

  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
    onTabChange(tab);
  };

  const tabs = {
    home: t('header.home', 'Inici'),
    about: t('header.about', 'Sobre mi'),
    newsletter: t('header.newsletter', 'Butlletí'),
    gallery: t('header.gallery', 'Galeria'),
    books: t('header.books', 'Llibres'),
    contact: t('header.contact', 'Contacte'),
  };

  return (
    <div className="tab flex gap-4">
      {Object.entries(tabs).map(([key, value]) => (
        <button
          key={key}
          id={`${key}_nav`}
          className={`tablinks ${activeTab === key ? "nav_active font-bold text-black" : "text-gray-500"}`}
          lng-tag={key}
          onClick={() => handleTabChange(key)}
        >
          {value.charAt(0).toUpperCase() + value.slice(1)}
        </button>
      ))}
    </div>
  );
};

export default TabSelector;
