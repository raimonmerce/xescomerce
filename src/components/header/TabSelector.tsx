import React, { Fragment, useState, useEffect } from "react";
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
    setGoToTab(tab);
    setActiveTab(tab);
  };

  const tabs = {
    about: t("header.about", "Sobre mi"),
    gallery: t("header.gallery", "Galeria"),
    newsletter: t("header.newsletter", "Butlletí"),
    videos: t("header.videos", "Videos"),
    contact: t("header.contact", "Contacte"),
  };

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  if (windowWidth < 768) {
    return (
      <div
        style={{
          filter: `brightness(${brightness})`,
          transition: "filter 0.3s ease",
        }}
      >
        <select
          value={activeTab}
          onChange={(e) => handleTabChange(e.target.value)}
          className="outline-none text-[15px] bg-none border-none rounded 
          text-white cursor-pointer p-1 transition-colors duration-300 
          ease-in-out focus:outline-none"
        >
          {Object.entries(tabs).map(([key, value]) => (
            <option key={key} value={key} className="bg-black text-white">
              {value.toUpperCase()}
            </option>
          ))}
        </select>
      </div>
    );
  }

  return (
    <div
      style={{ filter: `brightness(${brightness})` }}
    >
      {Object.entries(tabs).map(([key, value], index, array) => (
        <Fragment key={value}>
          <button
            id={`${key}_nav`}
            onClick={() => handleTabChange(key)}
            className={`outline-none bg-none border-0 text-gray-500 text-base cursor-pointer no-underline p-0 transition-colors duration-300 ease-in-out hover:text-white whitespace-nowrap focus:outline-none ${
              activeTab === key ? "text-white font-bold" : ""
            }`}
            style={{ pointerEvents: activeTab === key ? "none" : "auto" }}
          >
            {value.toUpperCase()}
          </button>
          {index < array.length - 1 && <span className="text-gray-500 px-2">|</span>}
        </Fragment>
      ))}
    </div>
  );
};

export default TabSelector;
