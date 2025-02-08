import { useEffect, useRef } from "react";
import heartImage from "../../assets/heart.png";
import useDevice from "../../hooks/useDevice";
import "./LandPage.css";

interface LandPageProps {
  setIsLandPage: React.Dispatch<React.SetStateAction<boolean>>;
  initialScale: number;
  setInitialScale: React.Dispatch<React.SetStateAction<number>>;
}

const LandPage: React.FC<LandPageProps> = ({ setIsLandPage, initialScale, setInitialScale }) => {
  const minZoom = 1.7;
  const maxZoom = 20;
  const touchStartRef = useRef<number | null>(null);
  const initialScaleRef = useRef<number>(initialScale);
  const isPhone = useDevice();

  const handleWheel = (event: React.WheelEvent) => {
    const newScale = Math.max(minZoom, Math.min(maxZoom, initialScale - event.deltaY * -0.01));
    if (newScale >= maxZoom) setIsLandPage(false);
    setInitialScale(newScale);
  };

  useEffect(() => {
    const handleTouchMove = (event: TouchEvent) => {
      if (event.touches.length === 1 && touchStartRef.current !== null) {
        event.preventDefault();

        const touchY = event.touches[0].clientY;
        const deltaY = touchStartRef.current - touchY;

        const sensitivity = 0.01;
        const newScale = Math.max(minZoom, Math.min(maxZoom, initialScaleRef.current + deltaY * sensitivity));

        if (newScale >= maxZoom) setIsLandPage(false);
        setInitialScale(newScale);
      }
    };

    document.addEventListener("touchmove", handleTouchMove, { passive: false });

    return () => {
      document.removeEventListener("touchmove", handleTouchMove);
    };
  }, [setIsLandPage, setInitialScale, initialScale]);

  const handleTouchStart = (event: React.TouchEvent) => {
    if (event.touches.length === 1) {
      touchStartRef.current = event.touches[0].clientY;
      initialScaleRef.current = initialScale;
    }
  };

  const handleTouchEnd = () => {
    touchStartRef.current = null;
  };

  const fadeAmount = Math.min((initialScale - minZoom) / (maxZoom - 1), minZoom);

  return (
    <div
      className="background-container"
      onWheel={handleWheel}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      style={{
        backgroundColor: `rgba(0, 0, 0, ${fadeAmount})`,
        filter: `brightness(${1 - fadeAmount})`,
      }}
    >
      <img
        src={heartImage}
        alt="Floating Center Image"
        className="heart-image"
        style={{
          transform: `translate(-50%, -50%) scale(${initialScale})`,
          transition: isPhone?"transform 0.1s linear, filter 0.5s ease-in-out" : "transform 0.3s ease-in-out, filter 0.5s ease-in-out",
          filter: `brightness(${1 - fadeAmount})`,
        }}
      />
    </div>
  );
};

export default LandPage;