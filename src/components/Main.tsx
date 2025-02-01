import React from "react";
import About from "./content/About";
import Contact from "./content/Contact";
import Home from "./content/Home";
import Gallery from "./content/Gallery";
import Newsletter from "./content/Newsletter";

interface MainProps {
  activeTab: string;
  setOpenPeace: React.Dispatch<React.SetStateAction<string>>;
}

const Main: React.FC<MainProps> = ({ activeTab, setOpenPeace }) => {
    const renderContent = () => {
        switch (activeTab) {
          case "about":
            return <About/>;
          case "newsletter":
            return <Newsletter/>;
          case "gallery":
            return <Gallery setOpenPeace={setOpenPeace}/>;
          case "contact":
            return <Contact/>;
          case "books":
            return <Contact/>;
          default:
            return <Home setOpenPeace={setOpenPeace}/>;
        }
      };

    return (
        <main className="p-4">
            {renderContent()}
        </main>
    );
};

export default Main;