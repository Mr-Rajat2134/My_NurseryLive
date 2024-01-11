import React from "react";
import './Navbar.css';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { Box } from "@mui/material";

const Navbar = () => {
  return (
    <div className="Navbar"    >
      <div className="Right">
        <button className="btnReward">Reward</button>
        <ul>
          <li>Help</li>
          <li>Track Order</li>
          <li>Order</li>
          <li>WhisList</li>
          <li>Offers</li>
          <li>Corporate</li>
        </ul>
      </div>
      <div className="left">
        <div className="contacts">
          <ul>
            <li><FacebookIcon fontSize="small" /></li>
            <li><TwitterIcon fontSize="small" /></li>
            <li><YouTubeIcon fontSize="small" /></li>
            <li><LinkedInIcon fontSize="small" /></li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
