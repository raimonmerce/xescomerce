import Main from './components/Main'
import Footer from './components/footer/Footer'
import LanguageSelector from "./components/header/LanguageSelector";
import './App.css'
import { useState } from "react";
import TabSelector from "./components/header/TabSelector";
import Peace from "./components/peace/Peace";

function App() {
  const [activeTab, setActiveTab] = useState<string>("home");
  const [openPeace, setOpenPeace] = useState("");

  const togglePopup = () => {
    setOpenPeace("");
  };

  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
  };

  return (
    <>
      <header className="app-header">
        <div className="header-top">
          <div className="title">Xesco Mercé</div>
          <LanguageSelector />
        </div>
        <div className="tab-selector">
          <TabSelector onTabChange={handleTabChange} />
        </div>
      </header>
        <Main activeTab={activeTab} setOpenPeace={setOpenPeace}/>
        <Footer/>

        {openPeace !== "" && 
          <Peace
            onClose={togglePopup}
            name={openPeace}
          />
        }
    </>
  )
}

export default App
