import Main from './components/Main'
import './App.css'
import { useState, useEffect } from "react";
import Peace from "./components/peace/Peace";
import LandPage from "./components/content/LandPage";
import Header from "./components/header/Header";

function App() {
  const minZoom = 1.7;

  const [isLandPage, setIsLandPage] = useState(true);
  const [initialScale, setInitialScale] = useState(minZoom);
  const [activeTab, setActiveTab] = useState<string>("about");
  const [goToTab, setGoToTab] = useState<string>("");
  const [openPeace, setOpenPeace] = useState("");

  useEffect(() => {
    setGoToTab("");
  }, [isLandPage]);

  const togglePopup = () => {
    setOpenPeace("");
  };

  const handleWheel = (event: React.WheelEvent) => {
    if (window.scrollY === 0 && event.deltaY < 0) {
        setIsLandPage(true);
    }
};

  return (
    <>{isLandPage && 
        <LandPage 
          setIsLandPage={setIsLandPage}
          initialScale={initialScale}
          setInitialScale={setInitialScale}
        />
      }
      {!isLandPage && 
        <div
          style={{
            backgroundColor: 'white',
            width: '100vw',
          }}
          onWheel={handleWheel}
        >
          <div
            style={{
                width: '100vw',
                height: '110vh',
                backgroundColor: 'black',
                zIndex: 10
            }}
          />
          <Header 
            setActiveTab={setActiveTab} 
            activeTab={activeTab}
            setGoToTab={setGoToTab}
          />

        <Main
          setActiveTab={setActiveTab}
          goToTab={goToTab}
        />
        {/* <Footer/> */}

        {openPeace !== "" && 
          <Peace
            onClose={togglePopup}
            name={openPeace}
          />
        }

        </div>
      }
      
    </>
  )
}

export default App
