import React from "react";
import {
  Box,
  Button,
  Card,
  CardMedia,
  Snackbar,
  Typography,
} from "@mui/material";
import Rating from "@mui/material/Rating";
import { Link } from "react-router-dom";
import CloseIcon from "@mui/icons-material/Close";
import IconButton from "@mui/material/IconButton";
import Theme from "../../Theme";
import { Carddata } from "../../Dummydata";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay, Navigation } from "swiper/modules";
// import SwiperCore, { Navigation, Pagination, Autoplay } from 'swiper/core';
import "./PlantCards.css";
import { useCart } from "../Functionality/snackbars";

// SwiperCore.use([Navigation, Pagination, Autoplay]);

const PlantCards = () => {
  const { primary } = Theme;
  const { addToCart } = useCart();
  const [openSnackbar, setOpenSnackbar] = React.useState(false);
  const [snackbarMessage, setSnackbarMessage] = React.useState("");

  const handleSnackbarClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpenSnackbar(false);
  };

  const showSnackbar = (message) => {
    setSnackbarMessage(message);
    setOpenSnackbar(true);
  };

  return (
    <Box className="Box">
      <Snackbar
        open={openSnackbar}
        autoHideDuration={3000}
        onClose={handleSnackbarClose}
        message={snackbarMessage}
        action={
          <React.Fragment>
            <IconButton
              size="small"
              aria-label="close"
              color="inherit"
              onClick={handleSnackbarClose}
            >
              <CloseIcon fontSize="small" />
            </IconButton>
          </React.Fragment>
        }
      />
      <Typography className="Text">Value For Money - Upto 35% Off</Typography>

      <Swiper
        spaceBetween={10}
        slidesPerView={"auto"} // Set to 'auto' for responsive slides
        navigation={true}
        // pagination={{ clickable: true }}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        className="swiper-container"
        modules={[Navigation, Autoplay]}
      >
        {Carddata.map((product) => (
          <SwiperSlide key={product.id}>
            <Card className="Card">
              <CardMedia
                component="img"
                image={product.img}
                alt={product.Title}
              />
              <Typography
                className="Ret"
                sx={{
                  mt: "0.4rem",
                  fontWeight: 500,
                  color: primary.Light,
                  fontSize: "1.3rem",
                }}
              >
                ₹ {product.price}
              </Typography>
              <Typography variant="body">{product.Title}</Typography>
              <Typography>
                <Rating
                  size="small"
                  name="simple-controlled"
                  value={product.Value}
                />
              </Typography>
              <Typography display={"flex"} justifyContent={"space-between"}>
                <Link to={`/singleproducts/${product.id}`}>
                  <Button
                    className="View"
                    sx={{
                      mt: "0.1rem",
                    }}
                    size="small"
                  >
                    View
                  </Button>
                </Link>
                <Button
                  className="AddToCart"
                  onClick={() => {
                    addToCart();
                    showSnackbar(`${product.Title} added to cart`);
                  }}
                  sx={{
                    mt: "0.1rem",
                  }}
                  variant="contained"
                  size="small"
                >
                  Add to Cart
                </Button>
              </Typography>
            </Card>
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
};

export default PlantCards;
