import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

import "./Slider.css";

import { Autoplay, Navigation } from "swiper/modules";
import { silder } from "../../Dummydata";
// import { Box } from "@mui/material";

export default function Slider() {
  return (
    <>
      <Swiper
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        navigation={true}
        modules={[Navigation, Autoplay]}
        className="mySwiper"
      >
        {silder.map((item) => (
          <SwiperSlide key={item.id}>
            <img src={item.img} alt="slider" />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
