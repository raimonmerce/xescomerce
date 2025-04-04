import { useEffect, useState } from "react";
import heartImage from "../../assets/heart.png";
import "./LandPage.css";

interface LandPageProps {
  setIsLandPage: React.Dispatch<React.SetStateAction<boolean>>;
  returnLandPage: boolean;
  setReturnLandPage: React.Dispatch<React.SetStateAction<boolean>>;
}

const LandPage: React.FC<LandPageProps> = ({ setIsLandPage, returnLandPage, setReturnLandPage }) => {
  const [scale, setScale] = useState(returnLandPage ? 10 : 1);

  const handleOnClick = () => {
    setScale(10);
    setTimeout(() => {
      setScale(10);
      setIsLandPage(false);
    }, 2000);
  };

  useEffect(() => {
    console.log("returnLandPage", returnLandPage, scale);
    if (!returnLandPage) return;

    setScale(1);
    const timeoutId = setTimeout(() => {
      setReturnLandPage(false);
    }, 2000);

    return () => clearTimeout(timeoutId);
  }, [returnLandPage]);

  return (
    <div
      className="background-container"
      style={{
        backgroundColor: `rgba(0, 0, 0, ${scale / 10})`,
        filter: `brightness(${1 - scale / 10})`,
        transition: "background-color 2s ease-in-out, filter 2s ease-in-out",
      }}
    >
      <img
        src={heartImage}
        alt="Floating Center Image"
        className={`heartImage
          ${scale === 1 ? "pulseAnimation" : ""}
          ${!returnLandPage && scale === 10 ? "scaleUpAnimation" : ""}
          ${returnLandPage ? "scaleDownAnimation" : ""}
        `}
        onClick={handleOnClick}
      />
    </div>
  );
};

export default LandPage;
