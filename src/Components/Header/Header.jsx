



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
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import LocalGroceryStoreIcon from "@mui/icons-material/LocalGroceryStore";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import PersonIcon from "@mui/icons-material/Person";
import Logo from "../../images/LOGO.jpg";
import { Link } from "react-router-dom";
import { useCart } from "../Functionality/snackbars";
import Theme from "../../Theme";
import Dropdown from "../DropdownNavbar/Dropdown";
import Login from '../../pages/LoginModal/Login'
// import Login from "../Functionality/LoginModal/Login";

const Navbar = styled(AppBar)(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  [theme.breakpoints.up("sm")]: {
    paddingLeft: theme.spacing(10),
  },
}));

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.black, 0.1),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.black, 0.14),
  },
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(4),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  top: 0,
  left: 0,
  backgroundColor: theme.palette.primary.light,
  color: theme.palette.primary.main,
  [theme.breakpoints.up("sm")]: {
    left: theme.spacing('12rem'),
  },
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  width: "100%",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
  },
}));

const Header = () => {
  const {primary} = Theme
  const { cartItems } = useCart();



  const [isModalOpen, setModalOpen] = useState(false);


  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };



  return (
<Box  >

    <Navbar  sx={{backgroundColor:primary.main  ,color:'initial',   }}  position='sticky'>
     
     <Toolbar  sx={{display:"flex",  justifyContent:'space-between'}}>
        <Typography variant="h" component="div" sx={{display:{ md:'block'    ,xs:'none' }}}>
          <Link to="/">
            <img src={Logo} alt="" width={150} />
          </Link>
        </Typography>
      
        <Search    >
          <StyledInputBase
            placeholder="Search…"
            inputProps={{ "aria-label": "search" }}
          />
          {/* <SearchIconWrapper>
            <SearchIcon />
          </SearchIconWrapper> */}
        </Search>

        <div style={{display:"flex"  ,        alignItems:'center',      gap:'2rem'}}  >
          {/* <IconButton color="inherit">
            <SupportAgentIcon />
          </IconButton>
          <Typography    sx={{ ":hover": { color:primary.light   , } }}>
             Support 
          </Typography> */}
        {/* </div> */}

        {/* <div> */}
          
          <Typography  onClick={openModal}      sx={{ ":hover": { color:primary.Light },     display:'flex', alignItems:'center',cursor:'pointer' }}>
          <IconButton color="inherit">
            <PersonIcon       sx={{marginBottom:'2px'}}  />
           
          </IconButton>
            Login
          </Typography>
          <Login isOpen={isModalOpen} onClose={closeModal}     />

        {/* </div> */}

        {/* <div   style={{display:"flex"  ,alignItems:'center' }} > */}
        
          <Link
            style={{ textDecoration: "none", color: "initial" }}
            to="/AddCart"
          >
            <Typography
              sx={{
                cursor: "pointer",
                ":hover": { color:primary.Light },
                display:'flex', alignItems:'center' 
              }}
            >



<IconButton color="inherit">
            <Badge badgeContent={cartItems} color="primary">
                 {/* <Button  startIcon={<LocalGroceryStoreIcon/>}  >heo</Button> */}
                 <LocalGroceryStoreIcon />
            </Badge>
          </IconButton>
              Cart
            </Typography>
          </Link>
        </div>
     
      </Toolbar>
 {/* <Dropdown/> */}
    </Navbar>
    </Box>
  );
};

export default Header;
