import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "./Slider.css";
import { Autoplay, Navigation } from "swiper/modules";
import { silder } from "../../Dummydata";

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
        breakpoints={{
          // When window width is <= 768px, set slidesPerView to 1
          768: {
            slidesPerView: 1,
          },
          // When window width is <= 992px, set slidesPerView to 2
          992: {
            slidesPerView:1,
          },
          // When window width is <= 1200px, set slidesPerView to 3
          1200: {
            slidesPerView: 1,
          },
        }}
      >
        {silder.map((item) => (
          <SwiperSlide key={item.id}>
            <img src={item.img} alt={`slider ${item.id}`} className="swiper-img" />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
