import React from "react";
import Homesection from "../Components/Homesection/Homesection";
import MainSlider from "../Components/Slider/MainSlider";
import Available from "../Components/AvailablePlaystore/Available";
import PlantCards from "../Components/PlantCards/PlantCards";
import Trending from "../Components/TrendingSection/Trending";
import GridFor from "../Components/GridFor/GridFor";
import Slider from "../Components/Slider/Slider";
const Allmodules = () => {
  return (
    <>
      <Homesection />
    
      <Slider/>

      <Available />
      <PlantCards />
      <Trending />
      <GridFor />
    </>
  );
};

export default Allmodules;
