// import React from "react";
// import Homesection from "../Components/Homesection/Homesection";
// import MainSlider from "../Components/Slider/MainSlider";
// import Available from "../Components/AvailablePlaystore/Available";
// import PlantCards from "../Components/PlantCards/PlantCards";
// import Trending from "../Components/TrendingSection/Trending";
// import GridFor from "../Components/GridFor/GridFor";
// import Slider from "../Components/Slider/Slider";
// import { Box, Typography } from "@mui/material";
// import Display from "../Components/DisplayItems/Display";
// const Allmodules = () => {
//   return (
//     <>

//       <Slider />
//       <Homesection />
//       <Display/>

//         <PlantCards />
//         <PlantCards />

//       <Trending />

//       <GridFor />
//       <Available />
//     </>
//   );
// };

// export default Allmodules;

import React from "react";
import Homesection from "../Components/Homesection/Homesection";
import MainSlider from "../Components/Slider/MainSlider";
import Available from "../Components/AvailablePlaystore/Available";
import PlantCards from "../Components/PlantCards/PlantCards";
import Trending from "../Components/TrendingSection/Trending";
import GridFor from "../Components/GridFor/GridFor";
import Slider from "../Components/Slider/Slider";
import { Box, Typography } from "@mui/material";
import Display from "../Components/DisplayItems/Display";
import Navbarr from "../Components/Navbar/Navbarr";
import Header from "../Components/Header/Header";
import ClintReview from "../Components/ClintReview/ClintReview";
import CareAdviser from "../Components/CareAdviser/careAdviser";

const Allmodules = () => {
  return (
    <>
      <Slider />
      <Homesection />
      <Display />

      <PlantCards />

      <Trending />

      <GridFor />
      <CareAdviser />
      <ClintReview />
      <Available />
    </>
  );
};

export default Allmodules;
