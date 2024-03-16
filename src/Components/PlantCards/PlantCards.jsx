// import React, { useState, useEffect } from 'react';
// import { Box, Button, Card, CardMedia, Snackbar, Typography } from '@mui/material';
// import Rating from '@mui/material/Rating';
// import { Link } from 'react-router-dom';
// import CloseIcon from '@mui/icons-material/Close';
// import IconButton from '@mui/material/IconButton';
// import Theme from '../../Theme';
// import { Carddata } from '../../Dummydata';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import 'swiper/css';
// import 'swiper/css/navigation';
// import 'swiper/css/pagination';
// import { Autoplay, Navigation } from 'swiper/modules';

// import './PlantCards.css';
// import { useCart } from '../Functionality/snackbars';

// const PlantCards = () => {
//   const { palette } = Theme;
//   const { addToCart } = useCart();
//   const [openSnackbar, setOpenSnackbar] = React.useState(false);
//   const [snackbarMessage, setSnackbarMessage] = React.useState('');
//   const theme = Theme; // You may need to adjust this depending on how your Theme is structured

//   const [swiperSlidesPerView, setSwiperSlidesPerView] = useState(3);

//   useEffect(() => {
//     const handleResize = () => {
//       if (window.innerWidth < theme.breakpoints.values.sm) {

//         setSwiperSlidesPerView(2);
//       } else {
//         setSwiperSlidesPerView(5);
//       }
//     };

//     handleResize();

//     window.addEventListener('resize', handleResize);

//     return () => {
//       window.removeEventListener('resize', handleResize);
//     };
//   }, [theme.breakpoints.values.sm]);

//   const handleSnackbarClose = (event, reason) => {
//     if (reason === 'clickaway') {
//       return;
//     }
//     setOpenSnackbar(false);
//   };

//   const showSnackbar = (message) => {
//     setSnackbarMessage(message);
//     setOpenSnackbar(true);
//   };

//   return (

// <>

// <Snackbar
//         open={openSnackbar}
//         autoHideDuration={3000}
//         onClose={handleSnackbarClose}
//         message={snackbarMessage}
//         action={
//           <React.Fragment>
//             <IconButton
//               size="small"
//               aria-label="close"
//               color="inherit"
//               onClick={handleSnackbarClose}
//             >
//               <CloseIcon fontSize="small" />
//             </IconButton>
//           </React.Fragment>
//         }
//       />

//     <Box className="Box">
//             <Snackbar
//         open={openSnackbar}
//         autoHideDuration={3000}
//         onClose={handleSnackbarClose}
//         message={snackbarMessage}
//         action={
//           <React.Fragment>
//             <IconButton
//               size="small"
//               aria-label="close"
//               color="inherit"
//               onClick={handleSnackbarClose}
//             >
//               <CloseIcon fontSize="small" />
//             </IconButton>
//           </React.Fragment>
//         }
//       />

//       <Swiper
//         spaceBetween={6}
//         slidesPerView={swiperSlidesPerView}
//         // navigation={true}
//         autoplay={{
//           delay: 2000,
//           disableOnInteraction: false,
//         }}
//         className="swiper-container"
//         modules={[Navigation, Autoplay]}
//       >
//         {Carddata.map((product) => (
//           <SwiperSlide key={product.id}>

//             <Card  sx={{width:'190px', padding:'1rem'}}>
//             <Link  style={{textDecoration:'none'}}   to={`/singleproducts/${product.id}`}>
//               <CardMedia
//               sx={{borderRadius:'10px'}}
//                 component="img"
//                 image={product.img}
//                 alt={product.Title}
//               />
//                  </Link>
// {/* <Box    sx={{height:'23vh',  }}> */}
// <Typography

// sx={{display:'flex', color: palette.primary.light,fontSize:'18px',mt:'1rem'}}
//  >{product.Name}</Typography>
//               <Typography
//                 // className="Ret"
//                 sx={{
//                   mt: '0.4rem',
//                   display:'flex',
//                   lineHeight:'19px',
//                   // justifyContent:'left',
//                   fontWeight: 500,
//                   color: palette.primary.light,
//                   fontSize: '18px',
//                 }}
//               >
//                <Typography sx={{ fontWeight: 500,fontSize: '18px',color:palette.primary.light,}}    >₹</Typography>
//                  {product.price}
//               </Typography>

//               <Typography sx={{fontSize:'10px',textAlign:'left'}}>{product.Title}</Typography>
//               <Typography>
//                 <Rating
//                 sx={{ display:'flex',mt:'1rem'}}
//                   size="small"
//                   name="simple-controlled"
//                   value={product.Value}
//                 />
//               </Typography>
//               {/* </Box> */}
//               <Box
//                 display={'flex'}
//                 justifyContent={'space-between'}

//               >
//                 <Link to={`/singleproducts/${product.id}`}>
//                   <Button
//                 variant='contained'                    className="View"
//                     sx={{
//                       mt: '0.1rem',
//                       bgcolor: palette.primary.light
//                     }}
//                     size="small"
//                   >
//                     View
//                   </Button>
//                 </Link>
//                 <Button
//       variant='contained'

//                   className="AddToCart"
//                   onClick={() => {
//                     addToCart();
//                     showSnackbar(`${product.Title} added to cart`);
//                   }}
//                   sx={{
//                     mt: '0.1rem',
//                     bgcolor: palette.primary.light
//                   }}
//                   // variant="contained"
//                   size="small"
//                 >
//                   Add to Cart
//                 </Button>
//               </Box>
//             </Card>

//           </SwiperSlide>
//         ))}
//       </Swiper>
//     </Box>

//     </>
//   );
// };

// export default PlantCards;

import React from "react";
import { Carddata, Plant } from "../../Dummydata";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Box, Chip, Rating } from "@mui/material";
import Theme from "../../Theme";
import "./PlantCards.css";

export default function PlantCards() {
  return (
    <div>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          gap: "1.5rem",
          justifyContent: "center",
          marginBottom: "3rem",
        }}
      >
        {Plant.map((item, index) => (
          <div key={index} className="container">
            <div className="card">
              <img src={item.img} alt="" />
              <div className="card-body">
                <div className="row">
                  <div className="card-title">
                    <h4>{item.Name}</h4>
                    <h3>₹{item.price}</h3>
                    <p
                      style={{
                        position: "absolute",
                        top: "2rem",
// right:'3rem',
fontWeight:'600',
                        backgroundColor: "gold",
                        border: "",
                        borderRadius: "5rem",
                        padding: "0.3rem",
                      }}
                    >
                      {item.Offer} off 
                    </p>
                    <Rating
                      name="rating"
                      value={item.Value}
                      precision={0.5}
                      readOnly
                    />
                  </div>
                  <div className="view-btn">
                    <a href="#">View Details</a>
                  </div>
                </div>
                <hr />
                <p>
                  {item.description.length > 10
                    ? `${item.description.slice(0, 40)}...`
                    : item.description}
                </p>
                <div className="btn-group">
                  <div className="btn">
                    <a href="#">Add Card</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Box>
    </div>
  );
}
