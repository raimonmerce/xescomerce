import Main from './components/Main'
import './App.css'
import { useState, useEffect, useRef } from "react";
import ArtworkPopup from "./components/artwork/ArtworkPopup";
import LandPage from "./components/content/LandPage";
import Header from "./components/header/Header";
import { Helmet } from "react-helmet-async";
import { useTranslation } from "react-i18next";

function App() {
  const [isLandPage, setIsLandPage] = useState(true);
  const [returnLandPage, setReturnLandPage] = useState(false);
  const [activeTab, setActiveTab] = useState<string>("about");
  const [goToTab, setGoToTab] = useState<string>("");
  const [openPopup, setOpenPopup] = useState<string|null>(null);
  const touchStartRef = useRef<number | null>(null);
  const { t } = useTranslation();

  useEffect(() => {
    setGoToTab("");
  }, [isLandPage]);

  useEffect(() => {
    if (isLandPage) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [isLandPage]);

  const togglePopup = () => {
    setOpenPopup(null);
  };

  useEffect(() => {
    if (!isLandPage) {
      const targetElement = document.getElementById("header");

      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    }
  }, [isLandPage]);

  const handleWheel = (event: React.WheelEvent) => {
    if (window.scrollY <= 50 && event.deltaY < 0) {
      setReturnLandPage(true)
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

      if (window.scrollY <= 50 && deltaY > 50) {
        setReturnLandPage(true)
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
        <title>Xesco Mercé</title>
        <meta name="description" content={t('metadata.description')} />

        <meta property="og:title" content="Xesco Mercé" />
        <meta property="og:description" content={t('metadata.description')} />
        <meta property="og:image" content="https://www.xescomerce.com/thumbnail.jpg" />
        <meta property="og:url" content="https://www.xescomerce.com" />
        <meta property="og:type" content="website" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Xesco Mercé" />
        <meta name="twitter:description" content={t('metadata.description')} />
        <meta name="twitter:image" content="https://www.xescomerce.com/thumbnail.jpg" />
      </Helmet>
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
        <LandPage 
          setIsLandPage={setIsLandPage}
          returnLandPage={returnLandPage}
          setReturnLandPage={setReturnLandPage}
        />

        <Header 
          setActiveTab={setActiveTab} 
          activeTab={activeTab}
          setGoToTab={setGoToTab}
        />

        <Main
          setActiveTab={setActiveTab}
          goToTab={goToTab}
          setOpenPopup={setOpenPopup}
        />

        {/* <Footer/> */}

        {openPopup && 
          <ArtworkPopup
            onClose={togglePopup}
            id={openPopup}
          />
        }
      </div>
    </>
  );
}

export default App;
