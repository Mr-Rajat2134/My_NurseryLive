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
      <Route path="/singleproducts/:productId" element={<SingleProducts />} />
        <Route path="/" element={<Allmodules />} />
        {/* <Route path="/addcart" element={} /> */}
      
        <Route exact path="/addCart" element={() => <AddCart cartItems={<Cart />} />} />
    
       
      </Routes>
    </>
  );
};

export default Routing;
