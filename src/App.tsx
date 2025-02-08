import Main from './components/Main'
import './App.css'
import { useState, useEffect, useRef } from "react";
import Peace from "./components/peace/Peace";
import LandPage from "./components/content/LandPage";
import Header from "./components/header/Header";
import { Helmet } from "react-helmet-async";
import { useTranslation } from "react-i18next";

function App() {
  const minZoom = 1.7;

  const [isLandPage, setIsLandPage] = useState(true);
  const [initialScale, setInitialScale] = useState(minZoom);
  const [activeTab, setActiveTab] = useState<string>("about");
  const [goToTab, setGoToTab] = useState<string>("");
  const [openPeace, setOpenPeace] = useState("");
  const touchStartRef = useRef<number | null>(null);
  const { t } = useTranslation();

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

  const handleTouchStart = (event: React.TouchEvent) => {
    if (event.touches.length === 1) {
      touchStartRef.current = event.touches[0].clientY;
    }
  };

  const handleTouchMove = (event: React.TouchEvent) => {
    if (event.touches.length === 1 && touchStartRef.current !== null) {
      const touchY = event.touches[0].clientY;
      const deltaY = touchY - touchStartRef.current; 

      if (window.scrollY === 0 && deltaY > 50) {
        setIsLandPage(true);
      }
    }
  };

  const handleTouchEnd = () => {
    touchStartRef.current = null;
  };

  return (
    <>
      <Helmet>
        <title>My Awesome App</title>
        <meta name="description" content={t('metadata.description')} />

        {/* Open Graph Meta (Facebook, LinkedIn, etc.) */}
        <meta property="og:title" content="Xesco Mercé" />
        <meta property="og:description" content={t('metadata.description')} />
        <meta property="og:image" content="https://www.xescomerce.com/thumbnail.jpg" />
        <meta property="og:url" content="https://www.xescomerce.com" />
        <meta property="og:type" content="website" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Xesco Mercé" />
        <meta name="twitter:description" content={t('metadata.description')} />
        <meta name="twitter:image" content="https://www.xescomerce.com/thumbnail.jpg" />
      </Helmet>

      {isLandPage && 
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
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
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
  );
}

export default App;
