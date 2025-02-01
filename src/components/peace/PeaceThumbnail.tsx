import React, { useState } from "react";

interface PeaceThumbnailProps {
  thumbnail: string;
  title: string;
  setOpenPeace: React.Dispatch<React.SetStateAction<string>>;
}

const PeaceThumbnail: React.FC<PeaceThumbnailProps> = ({ thumbnail, title, setOpenPeace }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      style={{
        position: "relative",
        width: "8rem",
        height: "8rem",
        cursor: "pointer",
        overflow: "hidden", 
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => setOpenPeace(title)}
    >
      <img
        src={thumbnail}
        alt={title}
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          borderRadius: "0.5rem",
        }}
      />

      <div
        style={{
          position: "absolute",
          inset: 0,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "rgba(0, 0, 0, 0.6)",
          color: "white",
          fontWeight: "bold",
          fontSize: "1.125rem",
          textAlign: "center",
          borderRadius: "0.5rem",
          boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
          opacity: isHovered ? 1 : 0,
          transition: "opacity 0.3s ease-in-out",
          pointerEvents: "none",
        }}
        aria-label={title}
      >
        {title}
      </div>
    </div>
  );
};

export default PeaceThumbnail;
