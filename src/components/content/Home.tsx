import {useState} from "react";
import Peace from "../peace/Peace";
import PeaceThumbnail from "../peace/PeaceThumbnail";
import TempPeaceThumbnail from "../peace/TempPeaceThumbnail";
import GridPeaces from "../peace/GridPeaces";

interface HomeProps {
  setOpenPeace: React.Dispatch<React.SetStateAction<string>>;
}

const Home: React.FC<HomeProps> = ({setOpenPeace}) => {
  return (
    <section className="home-section">
      <GridPeaces rows={3} columns={3} setOpenPeace={setOpenPeace}/>
    </section>
  );
};

export default Home;
