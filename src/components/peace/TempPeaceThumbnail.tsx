import React, { useEffect, useState } from "react";
import PeaceThumbnail from "./PeaceThumbnail";
import { GalleryManager, GalleryPiece } from "../../managers/GalleryManager";

interface TempPeaceThumbnailProps {
  setOpenPeace: React.Dispatch<React.SetStateAction<string>>;
}

const TempPeaceThumbnail: React.FC<TempPeaceThumbnailProps>= ({ setOpenPeace }) => {
  const gallery = GalleryManager.getInstance();
  const [fade, setFade] = useState(false);

  const [currentValues, setCurrentValues] = useState<GalleryPiece | null>(gallery.getRandomPiece());
  const [nextValues, setNextValues] = useState<GalleryPiece | null>(gallery.getRandomPiece());
  
  const getRandomValue = (minValue: number, maxValue: number): number => {
    return Math.floor(Math.random() * (maxValue - minValue + 1)) + minValue;
  };
  
  useEffect(() => {
    const handleChange = () => {
      setFade(true);
      setTimeout(() => {
        setFade(false);
        setCurrentValues(nextValues);
        setNextValues(gallery.getRandomPiece());
      }, 2000);
    };
    const interval = setInterval(handleChange, getRandomValue(5000, 10000));

    return () => clearInterval(interval);
  }, [currentValues, nextValues]);

  if (!currentValues || !nextValues) {
    return null; // or you could return a loading state if desired
  }

  return (
    <div style={{ position: "relative", width: "8rem", height: "8rem", overflow: "hidden" }}>
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          opacity: fade ? 0 : 1,
          transition: fade ? "opacity 0.5s ease-in-out" : "",
          zIndex: fade ? 1 : 2,
        }}
      >
        <PeaceThumbnail
          thumbnail={currentValues.thumbnail}
          title={currentValues.name}
          setOpenPeace={setOpenPeace}
        />
      </div>

      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          opacity: fade ? 1 : 0,
          transition: fade ? "opacity 0.5s ease-in-out" : "",
          zIndex: fade ? 2 : 1,
        }}
      >
        <PeaceThumbnail
          thumbnail={nextValues.thumbnail}
          title={nextValues.name}
          setOpenPeace={setOpenPeace}
        />
      </div>
    </div>
  );
};

export default TempPeaceThumbnail;
