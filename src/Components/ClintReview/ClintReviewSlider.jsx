











import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/swiper-bundle.css";
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';  // Add import for autoplay CSS
import './ClintReviewSlider.css'

import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { Customers } from "../../Dummydata";

const ClintReviewSlider = () => {
  return (
    <Swiper
      spaceBetween={10}
      slidesPerView={4}
      autoplay={{ delay: 3000 }}
      modules={[Autoplay, Pagination, Navigation]}
      breakpoints={{
        0: {
          slidesPerView: 1,
        },
        576: {
          slidesPerView: 3,
        },
        768: {
          slidesPerView: 4,
        },
      }}
    >
      {Customers.map((customer) => (
        <SwiperSlide key={customer.id}>
          <div className="customerFeedbackCard">
            {/* Add your card content here */}
            <div className="customerRating">
              {Array.from({ length: Number(customer.Rating) }).map((_, index) => (
                <span key={index} className="star">★</span>
              ))}
            </div>
            <div className="customerName">{customer.Name}</div>
            <div className="customerComments">{customer.Comments}</div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default ClintReviewSlider;








