import { AppBar, Box, Typography } from "@mui/material";
import "./Available.css";
import React from "react";
import ImgApple from "../images/ImgApplestore.jpg";
import ImgPlay from "../images/ImgPlaystore.jpg";


const Available = () => {
  return (
    <Box className="Textcontainer">
      <Box className="TextBox">
        <Typography className="Text">
          Happiness is availing great offers on Nurserylive App!
        </Typography>
        <Box className="Imagges">
          <img src={ImgApple} alt="" />
          <img src={ImgPlay} alt="" />
        </Box>
      </Box>
    </Box>
  );
};

export default Available;
