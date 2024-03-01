import { Box, Typography } from "@mui/material";
import React from "react";
import "./Trending.css";

import { Bcircledata } from "../../Dummydata";
import Theme from "../../Theme";

const Trending = () => {
  const { palette } = Theme;
  return (
    <>
      <Box className="Trending">
        <Box className="box">
        <p className="Heading">Trending  <span className="spn_Hover"   > Products</span>  </p>

          {/* <p className="Heading">Trending</p> */}
        </Box>
       

        <Box className="InerBox">
     
          {Bcircledata.map((item) => (
            <Box>
              <img src={item.Image} alt="" />
              <Typography color={palette.primary.light}>{item.Title}</Typography>
            </Box>
            ))}
        </Box>
      </Box>
    </>
  );
};

export default Trending;
