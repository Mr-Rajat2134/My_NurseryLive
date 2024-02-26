import React from "react";
import Navbar from "./Components/Navbar/Navbarr";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";

import Routing from "./Components/Routing";
import Homesection from "./Components/Homesection/Homesection";
import Slider from "./Components/Slider/Slider";
import { Box, Grid } from "@mui/material";
import Banners from "./Components/Banner/Banners";
const App = () => {
  return (
    <>




    
  <Navbar />
  {/* <Box  sx={{marginTop:'5rem'}} > */}
  <Header />
  {/* </Box> */}
      <Routing />
      <Banners/>
      <Footer />
    </>
  );
};

export default App;
