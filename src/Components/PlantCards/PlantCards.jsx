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
//     <Box className="Box">
//       <Snackbar
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
//       {/* <Typography className="Text">Value For Money - Upto 35% Off</Typography> */}

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
//              <Link  style={{textDecoration:'none'}}   to={`/singleproducts/${product.id}`}>
//             <Card  sx={{width:'200px', padding:'1rem'}}>
//               <CardMedia
//                 component="img"
//                 image={product.img}
//                 alt={product.Title}
//               />

// <Typography  sx={{display:'flex', color: palette.primary.light,fontSize:'18px',mt:'1rem'}}  >{product.Name}</Typography>
//               <Typography
//                 // className="Ret"
//                 sx={{
//                   mt: '0.4rem',
//                   display:'flex',
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
//               {/* <Box
//                 display={'flex'}
//                 justifyContent={'space-between'}
//               >
//                 <Link to={`/singleproducts/${product.id}`}>
//                   <Button
//                     className="View"
//                     sx={{
//                       mt: '0.1rem',
//                     }}
//                     size="small"
//                   >
//                     View
//                   </Button>
//                 </Link>
//                 <Button

//                   className="AddToCart"
//                   onClick={() => {
//                     addToCart();
//                     showSnackbar(`${product.Title} added to cart`);
//                   }}
//                   sx={{
//                     mt: '0.1rem',
//                   }}
//                   // variant="contained"
//                   size="small"
//                 >
//                   Add to Cart
//                 </Button>
//               </Box> */}
//             </Card>
//             </Link>
//           </SwiperSlide>
//         ))}
//       </Swiper>
//     </Box>
//   );
// };

// export default PlantCards;




import React from 'react';
import { Carddata } from '../../Dummydata';
import './PlantCards.css'; // Importing CSS file for styling

export default function PlantCards() {
  return (
    <div className="card-container"> {/* Container for all product cards */}
      {Carddata.map((product) => (
        <div className="product-card" key={product.id}> {/* Individual product card */}
          <div className="product-image-container">
            <img src={product.img} alt={product.Name} className="product-image" /> {/* Product image */}
          </div>
          <div className="product-info">
            <h2 className="product-name">{product.Name}</h2> {/* Product name */}
            <h4 className="product-price">${product.price}</h4> {/* Product price */}
            {/* <p className="product-description">{product.description}</p> Product description */}
            <button className="add-to-cart-button">Add to Cart</button> {/* Add to cart button */}
          </div>
        </div>
      ))}
    </div>
  );
}








