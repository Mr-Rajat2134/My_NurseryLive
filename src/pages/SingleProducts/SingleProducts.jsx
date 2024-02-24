



// import React from "react";
// import { useParams } from "react-router-dom";
// import { Carddata } from "../../Dummydata";
// import { Box, Button, Container, Rating } from "@mui/material";
// import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
// import BoltIcon from "@mui/icons-material/Bolt";
// import Theme from "../../Theme";
// import './SingleProducts.css'
// import GridFor from "../../Components/GridFor/GridFor";
// import { useCart } from "../../Components/Functionality/snackbars";

// const SingleProducts = () => {
//   const { addToCart } = useCart();
//   const { primary } = Theme;
//   const { productId } = useParams();
//   const thisProduct = Carddata.find((prod) => prod.id === productId);

//   return (
//     <div>
//       <Container fixed>
//         <Box
//           className="product-container"
//           sx={{
//             bgcolor: primary.main,
//             minHeight: "80vh",
//             marginTop: "1rem",
//             padding: "5rem",
//             display: { xs: "block", md: "flex" },
//           }}
//         >
//           <Box className="product-image" sx={{ padding: "1rem" }}>
//             <img src={thisProduct.img} alt=""      />
//           </Box>

//           <Box className="product-details" sx={{ minWidth: "20vw", marginLeft: "3rem" }}>
//             <h1>{thisProduct.Name}</h1>
//             <Rating size="small" name="simple-controlled" value={thisProduct.Value} />
//             <h1 style={{ color: primary.Light }}> ₹ {thisProduct.price}</h1>
//             <h5> {thisProduct.Title}</h5>
//             <p> {thisProduct.description}</p>

//             <Box
//               className="button-container"
//               sx={{
//                 display: "flex",
//                 gap: "2rem",
//                 marginTop: "5rem",
//                 justifyContent: "flex-end",
//               }}
//             >
//               <Button
//                 onClick={() => {
//                   addToCart();
//                   showSnackbar(`${thisProduct.Title} added to cart`);
//                 }}
//                 startIcon={<ShoppingCartIcon />}
//                 sx={{
//                   mt: "0.1rem",
//                   color: primary.main,
//                   backgroundColor: primary.Light,
//                   ":hover": { bgcolor: "#ff6b6bc6" },
//                 }}
//                 variant="contained"
//               >
//                 Add Card
//               </Button>
//               <Button
//                 startIcon={<BoltIcon />}
//                 sx={{
//                   mt: "0.1rem",
//                   color: primary.main,
//                   backgroundColor: primary.Light,
//                   ":hover": { bgcolor: "#ff6b6bc6" },
//                 }}
//                 variant="contained"
//               >
//                 BUY NOW
//               </Button>
//             </Box>
//           </Box>
//         </Box>

//         <GridFor />
//       </Container>
//     </div>
//   );
// };

// export default SingleProducts;




// SingleProducts.js
// SingleProducts.jsx
import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';  // Import useNavigate instead of useHistory
import { Carddata } from '../../Dummydata';
import { Box, Button, Container, Rating } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import BoltIcon from '@mui/icons-material/Bolt';
import Theme from '../../Theme';
import GridFor from '../../Components/GridFor/GridFor';
import { useCart } from '../../Components/Functionality/snackbars';

const SingleProducts = () => {
  const { addToCart } = useCart();
  const { palette } = Theme;
  const { productId } = useParams();
  const thisProduct = Carddata.find((prod) => prod.id === productId);

  const [cartItems, setCartItems] = useState([]);
  const navigate = useNavigate();  // Use useNavigate instead of useHistory

  const handleAddToCart = () => {
    addToCart();
    setCartItems((prevItems) => [...prevItems, thisProduct]);
    showSnackbar(`${thisProduct.Name} added to cart`);
  };

  const handleGoToCart = () => {
    navigate('/addCart'); // Use navigate instead of history.push
  };

  return (
    <div>
      <Container fixed>
        <Box
          className="product-container"
          sx={{
            bgcolor: palette.primary.main,
            minHeight: '80vh',
            marginTop: '1rem',
            padding: '5rem',
            display: { xs: 'block', md: 'flex' },
          }}
        >
          <Box className="product-image" sx={{ padding: '1rem' }}>
            <img src={thisProduct.img} alt="" />
          </Box>

          <Box className="product-details" sx={{ minWidth: '20vw', marginLeft: '3rem' }}>
            <h1>{thisProduct.Name}</h1>
            <Rating size="small" name="simple-controlled" value={thisProduct.Value} />
            <h1 style={{ color: palette.primary.light }}> ₹ {thisProduct.price}</h1>
            <h5> {thisProduct.Title}</h5>
            <p> {thisProduct.description}</p>

            <Box
              className="button-container"
              sx={{
                display: 'flex',
                minWidth: '10rem',
                gap: '2rem',
                marginTop: '5rem',
                justifyContent: 'flex-end',
              }}
            >
              <Button
                onClick={handleAddToCart}
                startIcon={<ShoppingCartIcon />}
                sx={{
                  mt: '0.1rem',
                  color: palette.primary.main,
                  backgroundColor:palette. primary.light,
                  ':hover': { bgcolor: '#ff6b6bc6' },
                }}
                variant="contained"
              >
                Add Card
              </Button>
              <Button
                onClick={handleGoToCart}
                startIcon={<BoltIcon />}
                sx={{
                  mt: '0.1rem',
                  color: palette.primary.main,
                  backgroundColor:palette. primary.light,
                  ':hover': { bgcolor: '#ff6b6bc6' },
                }}
                variant="contained"
              >
                BUY NOW
              </Button>
            </Box>
          </Box>
        </Box>

        <GridFor />
      </Container>
    </div>
  );
};

export default SingleProducts;
