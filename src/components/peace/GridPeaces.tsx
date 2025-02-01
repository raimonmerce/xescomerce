import React from "react";
import TempPeaceThumbnail from "./TempPeaceThumbnail";

interface GridPeacesProps {
  rows: number;
  columns: number;
  setOpenPeace: React.Dispatch<React.SetStateAction<string>>;
}

const GridPeaces: React.FC<GridPeacesProps> = ({ rows, columns, setOpenPeace }) => {
  const totalItems = rows * columns;

  return (
    <div
      style={{
        display: "grid",
        gridTemplateRows: `repeat(${rows}, 1fr)`,
        gridTemplateColumns: `repeat(${columns}, 1fr)`,
        gap: "2rem",
        justifyItems: "center",
        alignItems: "center",
        maxWidth: "fit-content",
        maxHeight: "fit-content",
        margin: "auto",
      }}
    >
      {Array.from({ length: totalItems }, (_, index) => (
        <TempPeaceThumbnail key={index} setOpenPeace={setOpenPeace}/>
      ))}
    </div>
  );
};

export default GridPeaces;
