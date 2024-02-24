import React from "react";
import Homesection from "../Components/Homesection/Homesection";
import MainSlider from "../Components/Slider/MainSlider";
import Available from "../Components/AvailablePlaystore/Available";
import PlantCards from "../Components/PlantCards/PlantCards";
import Trending from "../Components/TrendingSection/Trending";
import GridFor from "../Components/GridFor/GridFor";
import Slider from "../Components/Slider/Slider";
import { Box, Typography } from "@mui/material";
const Allmodules = () => {
  return (
    <>
      <Homesection />
      <Slider />

      <Box sx={{ marginTop: "2rem", bgcolor: "" }}>
        <Typography sx={{ textAlign: "center", fontSize: "1.2rem" }}>
          {" "}
          Value For Money - Upto 35% Off
        </Typography>
        <PlantCards />
        <PlantCards />
      </Box>

      <Trending />

      <GridFor />
      <Available />
    </>
  );
};

export default Allmodules;
