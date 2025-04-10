import { useEffect, useState } from "react";
import heartImage from "../../assets/heart.png";
import backgroundImage from "../../assets/taller.jpg";

interface LandPageProps {
  setIsLandPage: React.Dispatch<React.SetStateAction<boolean>>;
  returnLandPage: boolean;
  setReturnLandPage: React.Dispatch<React.SetStateAction<boolean>>;
}

const LandPage: React.FC<LandPageProps> = ({
  setIsLandPage,
  returnLandPage,
  setReturnLandPage,
}) => {
  const [scale, setScale] = useState(returnLandPage ? 10 : 1);

  const handleOnClick = () => {
    setScale(10);
    setTimeout(() => {
      setScale(10);
      setIsLandPage(false);
    }, 2000);
  };

  useEffect(() => {
    if (!returnLandPage) return;

    setScale(1);
    const timeoutId = setTimeout(() => {
      setReturnLandPage(false);
    }, 2000);

    return () => clearTimeout(timeoutId);
  }, [returnLandPage]);

  const backgroundStyles = {
    backgroundImage: `url(${backgroundImage})`,
    backgroundColor: `rgba(0, 0, 0, ${scale / 10})`,
    filter: `brightness(${1 - scale / 10})`,
    transition: "background-color 2s ease-in-out, filter 2s ease-in-out",
  };

  const animationClass = returnLandPage
    ? "animate-scaledown"
    : scale === 10
    ? "animate-scaleup"
    : "animate-pulseheart";

  return (
    <div
      className="relative h-screen bg-cover bg-center overflow-hidden flex justify-center items-center"
      style={backgroundStyles}
    >
      <img
        src={heartImage}
        alt="Floating Center Image"
        className={`object-contain ${animationClass}`}
        onClick={handleOnClick}
      />
    </div>
  );
};

export default LandPage;
