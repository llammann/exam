import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./../assets/style/Swiper.scss";

// import required modules
import { Pagination } from "swiper/modules";

export default function Swipper() {
  return (
    <>
      <Swiper pagination={true} modules={[Pagination]} className="mySwiper">
        <SwiperSlide>
          <h1>Lorem, ipsum dolor.</h1>
          <button>Book a table</button>
        </SwiperSlide>
        <SwiperSlide className="second">
          {" "}
          <h1>Lorem, ipsum dolor.</h1>
          <button>Book a table</button>
        </SwiperSlide>
        <SwiperSlide className="third">
          {" "}
          <h1>Lorem, ipsum dolor.</h1>
          <button>Book a table</button>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
