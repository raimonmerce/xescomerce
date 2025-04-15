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
      className="relative w-[150px] h-[150px] md:w-[220px] md:h-[220px] bg-cover bg-center cursor-pointer mx-auto"
      style={{ backgroundImage: `url(${diapo})` }}
      onClick={onClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="absolute top-[27%] left-1/2 -translate-x-1/2 z-10">
        <img
          src={imageUrl}
          alt={name}
          className={`w-[103px] h-[70px] max-w-[103px] md:w-[153px] md:h-[100px] md:max-w-[153px] object-cover object-center transition-all duration-300 ${
            hovered ? "filter brightness-150" : ""
          }`}
        />
      </div>

      <h2
        className={`absolute top-[120px] text-[15px] md:text-[20px] md:top-[165px] left-1/2 -translate-x-1/2 z-20 text-center w-[90%] max-h-[3.6em] overflow-hidden pointer-events-auto transition-colors duration-300 ${
            hovered ? "text-gray-500" : "text-black"
        }`}
        style={{
          textShadow: "1px 1px 2px rgba(0, 0, 0, 0.7)",
          fontFamily: "'Indie Flower', cursive",
          display: "-webkit-box",
          WebkitLineClamp: 1,
          WebkitBoxOrient: "vertical"
        }}
      >
        {name}
      </h2>
    </div>
  );
};

export default FrameThumbnail;
