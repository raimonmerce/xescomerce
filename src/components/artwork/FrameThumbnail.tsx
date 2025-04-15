import React, { useState } from "react";
import diapo from "../../assets/diapositiva.png";

interface FrameThumbnailProps {
  name: string;
  imageUrl: string;
  onClick: () => void;
}

const FrameThumbnail: React.FC<FrameThumbnailProps> = ({ name, imageUrl, onClick }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="relative w-[220px] h-[220px] bg-cover bg-center cursor-pointer mx-auto my-4"
      style={{ backgroundImage: `url(${diapo})` }}
      onClick={onClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="absolute top-[27%] left-1/2 -translate-x-1/2 z-10">
        <img
          src={imageUrl}
          alt={name}
          className={`w-[153px] h-[100px] max-w-[153px] object-cover object-center transition-all duration-300 ${
            hovered ? "filter brightness-150" : ""
          }`}
        />
      </div>

      <h2
        className={`absolute top-[165px] left-1/2 -translate-x-1/2 z-20 text-center max-w-[90%] max-h-[3.6em] overflow-hidden pointer-events-auto transition-colors duration-300 ${
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
        {name}
      </h2>
    </div>
  );
};

export default FrameThumbnail;
