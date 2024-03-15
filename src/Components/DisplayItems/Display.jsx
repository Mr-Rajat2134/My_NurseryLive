import React from "react";
import "./Display.css";
import Product from "../images/Img3Card.jpg";
import Product_two from "../images/Img4Card.jpg";
import animation from "../images/animation.png";

import { Box, Button, Divider } from "@mui/material";



import { Link } from "react-router-dom";

export default function Display() {
  return (
    <div id="Framed">
      <div className="Texts">
        <h1>
          {" "}
          NurseryTree Products <br /> Offer Now
        </h1>
        <p>
          Pick from 100+ beautiful Plants. Perfect keepsake gifts for Nature.
        </p>

        <h2 className="MRP">
          {" "}
          Starts at Rs. <span>250</span>
        </h2>
        <Link to="/Products">
          <Button
            className="animationbtn"
            sx={{ bgcolor: "#0BB00C" }}
            variant="contained"
          >
            {" "}
            More{" "}
          </Button>
        </Link>
      </div>

      <div className="Framed_IMG">
        <img src={Product} alt="Products" className="poster" />
      </div>
      <div className="Framed_IMG">
        <img src={animation} alt="Products" className="poster" />
      </div>
      <div className="Framed_IMG">
        <img src={Product_two} alt="Products" className="poster" />
      </div>
    </div>
  );
}
