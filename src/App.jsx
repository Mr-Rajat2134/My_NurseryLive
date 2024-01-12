import React from "react";
import Navbar from "./Components/Navbar/Navbar";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";

import Routing from "./Components/Routing";
import Homesection from "./Components/Homesection/Homesection";
import Slider from "./Components/Slider/Slider";
const App = () => {
  return (
    <>
      <Navbar />
      <Header />

      <Routing />
      <Footer />
    </>
  );
};

export default App;
