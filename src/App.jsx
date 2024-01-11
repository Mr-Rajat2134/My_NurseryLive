import React from "react";
import Navbar from "./Components/Navbar/Navbar";
import Header from "./Components/Header/Header";


import Routing from "./Components/Routing";
import Footer from "./Components/Footer/Footer";
const App = () => {
  return (
    <>
      <Navbar />
      <Header />
      <Routing />
      <Footer/>
    </>
  );
};

export default App;
