import React, { useState } from "react";
import {
  AppBar,
  Badge,
  IconButton,
  InputBase,
  Toolbar,
  Typography,
  styled,
  alpha,
  Box,
  Drawer,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import LocalGroceryStoreIcon from "@mui/icons-material/LocalGroceryStore";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import PersonIcon from "@mui/icons-material/Person";
import { Link } from "react-router-dom";
import { useCart } from "../Functionality/snackbars";
import Login from "../../pages/LoginModal/Login";
import HeaderLOGO from "../images/LOGO.jpg";
import Theme from "../../Theme";
import Searchbar from "./Searchbar";

const { palette } = Theme;
const Navbar = styled(AppBar)(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  [theme.breakpoints.up("sm")]: {
    paddingLeft: theme.spacing(10),
  },
}));

const Header = () => {
  const { palette } = Theme;
  const { cartItems } = useCart();
  const [isModalOpen, setModalOpen] = useState(false);
  const [isDrawerOpen, setDrawerOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const toggleDrawer = () => {
    setDrawerOpen(!isDrawerOpen);
  };

  const handleDrawerItemClick = () => {
    setDrawerOpen(false);
  };

  return (
    <Box>
      <Navbar
        sx={{
          backgroundColor: palette.primary.main,
          color: "initial",
        }}
        position="sticky"
      >
        <Toolbar
          sx={{
            display: "flex",
            justifyContent: {
              md: "space-between",
              sm: "flex-end",
              xs: "flex-end",
            },
          }}
        >
          {/* Hamburger Button */}
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={toggleDrawer}
            sx={{ display: { md: "none", sm: "flex", xs: "flex" } }}
          >
            <MenuIcon />
          </IconButton>

          <Typography
            variant="h"
            component="div"
            sx={{
              display: { md: "block", sm: "block", xs: "block" },
              "& img": {
                width: "100%",
                maxWidth: "150px",
                height: "auto",
              },
            }}
          >
            <Link to="/">
              <img src={HeaderLOGO} alt="" />
            </Link>
          </Typography>

          <Box
            sx={{
              display:'flex',
              justifySelf:'right',
              width: "100%",
              marginLeft: "3rem",
              maxWidth: 300,
            }}
          >
            <Searchbar />
          </Box>



          <div style={{ display: "flex", alignItems: "center", gap: "2rem" }}>
            <Typography
              onClick={openModal}
              sx={{
                ":hover": { color: palette.primary.light },
                display: { md: "flex", sm: "flex", xs: "none" },
                alignItems: "center",
                cursor: "pointer",
              }}
            >
              <IconButton color="inherit">
                <PersonIcon sx={{ marginBottom: "2px" }} />
              </IconButton>
              Login
            </Typography>
            <Login isOpen={isModalOpen} onClose={closeModal} />

            <Link
              style={{ textDecoration: "none", color: "initial" }}
              to="/AddCart"
            >
              <Typography
                sx={{
                  cursor: "pointer",
                  ":hover": { color: palette.primary.light },
                  display: { md: "flex", sm: "none", xs: "none" },
                  alignItems: "center",
                }}
              >
                <IconButton color="inherit">
                  <Badge badgeContent={cartItems} color="primary">
                    <LocalGroceryStoreIcon />
                  </Badge>
                </IconButton>
                Cart
              </Typography>
            </Link>
          </div>
        </Toolbar>
      </Navbar>

      <Drawer anchor="left" open={isDrawerOpen} onClose={toggleDrawer}>
        <List sx={{ display: "flex", flexDirection: "column", width: "10rem" }}>
          <ListItem button onClick={handleDrawerItemClick}>
            <Link to="" style={{ textDecoration: "none", color: "inherit" }}>
              <ListItemText onClick={openModal} primary="Login" />
            </Link>
          </ListItem>
          <ListItem button onClick={handleDrawerItemClick}>
            <Link
              to="/AddCart"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <ListItemText primary="Cart" />
            </Link>
          </ListItem>
          {/* Add more items as needed... */}
        </List>
      </Drawer>
    </Box>
  );
};

export default Header;
