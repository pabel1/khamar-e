import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import ReviewCard from "../Card/ReviewCard";
import { reviewData } from "../DemoData";

import { Autoplay, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/bundle";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Review = () => {
  const [data, setData] = useState(reviewData);
  return (
    <div className=" container my-8 ">
      <Swiper
        modules={[Navigation,  Autoplay]}
        spaceBetween={5}
        slidesPerView={2}
        loop={true}
        // centeredSlides={true}
        speed={1000}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        navigation
        // pagination={{ clickable: true }}
        // onSwiper={(swiper) => console.log(swiper)}
        // onSlideChange={() => console.log("slide change")}
        className=" h-full w-full "
      >
        {data?.map((item, i) => (
          <SwiperSlide key={i}>
            <ReviewCard data={item} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Review;
