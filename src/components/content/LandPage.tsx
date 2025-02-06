import heartImage from "../../assets/heart.png";
import "./LandPage.css";

interface LandPageProps {
  setIsLandPage: React.Dispatch<React.SetStateAction<boolean>>;
  initialScale: number;
  setInitialScale: React.Dispatch<React.SetStateAction<number>>;
}

const LandPage: React.FC<LandPageProps> = ({setIsLandPage, initialScale, setInitialScale}) => {
    const minZoom = 1.7;
    const maxZoom = 20;
  
    const handleWheel = (event: React.WheelEvent) => {
        const newScale = Math.max(minZoom, Math.min(maxZoom, initialScale - event.deltaY * -0.01));
        if (newScale >= maxZoom) setIsLandPage(false)
        setInitialScale(newScale);
    };
  
    const fadeAmount = Math.min((initialScale - minZoom) / (maxZoom - 1), minZoom);
  
    return (
      <div 
        className="background-container" 
        onWheel={handleWheel} 
        style={{ 
          backgroundColor: `rgba(0, 0, 0, ${fadeAmount})`,
          filter: `brightness(${1 - fadeAmount})`
        }}
      >
        <img
          src={heartImage}
          alt="Floating Center Image"
          className="heart-image"
          style={{ 
            transform: `translate(-50%, -50%) scale(${initialScale})`,
            transition: "transform 0.3s ease-in-out, filter 0.5s ease-in-out",
            filter: `brightness(${1 - fadeAmount})`
          }}
        />
      </div>
    );
};

export default LandPage;