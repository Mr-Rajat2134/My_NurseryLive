import React from "react";
import SingleProducts from "../pages/SingleProducts/SingleProducts";
import { Route, Routes } from "react-router-dom";
import Allmodules from "../common/Allmodules";

import AddCart from "../pages/AddCart/AddCart";
import Cart from "../pages/AddCart/AddCart";

const Routing = () => {
  return (
    <>
      <Routes>
      <Route path="/" element={<Allmodules />} />
      <Route path="/singleproducts/:productId" element={<SingleProducts />} />

       
        {/* <Route path="/addcart" element={} /> */}
      
        <Route path="/addCart" element={<Cart />} />
    
       
      </Routes>
    </>
  );
};

export default Routing;
