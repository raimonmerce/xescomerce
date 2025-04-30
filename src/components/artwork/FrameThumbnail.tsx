import React, { useState } from "react";
import diapo from "../../assets/diapositiva.png";
import { useTranslation } from "react-i18next";

interface FrameThumbnailProps {
  name: string;
  imageUrl: string;
  onClick: () => void;
  isBig: boolean;
  date?: string;
}

const FrameThumbnail: React.FC<FrameThumbnailProps> = ({ name, imageUrl, onClick, isBig, date = null }) => {
  const [hovered, setHovered] = useState(false);
  const { t } = useTranslation();
  return (
    <div
      className={`relative bg-cover bg-center cursor-pointer mx-auto ${
        isBig ? "w-[290px] h-[290px] md:w-[290px] md:h-[290px]" : "w-[150px] h-[150px] md:w-[220px] md:h-[220px]"
      }`}
      style={{ backgroundImage: `url(${diapo})` }}
      onClick={onClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="absolute top-[27%] left-1/2 -translate-x-1/2 z-10">
        <img
          src={imageUrl}
          alt={name}
          className={`object-cover object-center transition-all duration-300
            ${hovered ? "filter brightness-150" : ""}
            ${isBig
              ? "w-[200px] h-[132px] max-w-[200px]"
              : "w-[103px] h-[70px] max-w-[103px] md:w-[153px] md:h-[100px] md:max-w-[153px]"}
          `}
        />
      </div>

      <h2
        className={`absolute left-1/2 -translate-x-1/2 z-20 text-center w-[90%] max-h-[3.6em] overflow-hidden pointer-events-auto transition-colors duration-300 ${
            hovered ? "text-gray-500" : "text-black"}
            ${isBig ? "top-[20px] text-[20px]" : "top-[120px] md:top-[165px] text-[15px] md:text-[20px]"}  
          `}
        style={{
          textShadow: "1px 1px 2px rgba(0, 0, 0, 0.7)",
          fontFamily: "'Courier New', Courier, monospace",
          display: "-webkit-box",
          WebkitLineClamp: 1,
          WebkitBoxOrient: "vertical"
        }}
      >
        {t(name)}
      </h2>
      {date && (
        <h2
          className={`absolute top-[240px] text-[20px] left-1/2 -translate-x-1/2 z-20 text-center w-[90%] max-h-[3.6em] overflow-hidden pointer-events-auto transition-colors duration-300
            ${hovered ? "text-gray-500" : "text-black"}
          `}
          style={{
            textShadow: "1px 1px 2px rgba(0, 0, 0, 0.7)",
            fontFamily: "'Courier New', Courier, monospace",
            display: "-webkit-box",
            WebkitLineClamp: 1,
            WebkitBoxOrient: "vertical"
          }}
        >
          {date}
        </h2>
      )}
    </div>
  );
};

export default FrameThumbnail;
