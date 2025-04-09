import React, { useState } from "react";
import { GalleryManager } from "../../data/GalleryManager";
import diapo from "../../assets/diapositiva.png";

interface FrameThumbnailProps {
  id: string;
  setOpenPopup: React.Dispatch<React.SetStateAction<string | null>>;
}

const FrameThumbnail: React.FC<FrameThumbnailProps> = ({ id, setOpenPopup }) => {
  const galleryManager = GalleryManager.getInstance();
  const artwork = galleryManager.getById(id);
  const [hovered, setHovered] = useState(false);

  if (!artwork) {
    return <div>Artwork not found</div>;
  }

  const handleClick = () => {
    setOpenPopup(id);
  };

  return (
    <div
      className="relative w-[250px] h-[250px] bg-cover bg-center cursor-pointer"
      style={{ backgroundImage: `url(${diapo})` }}
      onClick={handleClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Image container */}
      <div className="absolute top-[27%] left-1/2 -translate-x-1/2 z-10">
        <img
          src={artwork.thumbnail}
          alt={artwork.name}
          className={`w-[172px] h-[115px] max-w-[172px] object-cover object-center transition-all duration-300 ${
            hovered ? "filter brightness-150" : ""
          }`}
        />
      </div>

      {/* Text element */}
      <h2
        className={`absolute top-[190px] left-1/2 -translate-x-1/2 z-20 text-lg text-center max-w-[90%] max-h-[3.6em] overflow-hidden pointer-events-auto transition-colors duration-300 ${
            hovered ? "text-gray-500" : "text-black"
        }`}
        style={{
          textShadow: "1px 1px 2px rgba(0, 0, 0, 0.7)",
          fontFamily: "'Indie Flower', cursive",
          display: "-webkit-box",
          WebkitLineClamp: 2,
          WebkitBoxOrient: "vertical"
        }}
      >
        {artwork.name}
      </h2>
    </div>
  );
};

export default FrameThumbnail;
