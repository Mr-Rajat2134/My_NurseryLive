import { Box, Typography } from "@mui/material";
import React from "react";
import "./Trending.css";
import imG from "../../Images/Bcircle1.webp";
import { Bcircledata } from "../../Dummydata";
import Theme from "../../Theme";

const Trending = () => {
  const { primary } = Theme;
  return (
    <>
      <Box className="Trending">
        <Box className="box">
          <p className="Heading">Trending</p>
        </Box>
        <Box className="InerBox">
          {Bcircledata.map((item) => (
            <Box>
              <img src={item.Image} alt="" />
              <Typography color={primary.Light}>{item.Title}</Typography>
            </Box>
            ))}
        </Box>
      </Box>
    </>
  );
};

export default Trending;
