import React from "react";
import brandimg1 from "../../Assets/images/img/brand-1.png";
import brandimg2 from "../../Assets/images/img/brand-2.png";
import brandimg3 from "../../Assets/images/img/brand-3.png";
import brandimg4 from "../../Assets/images/img/brand-4.png";
import brandimg5 from "../../Assets/images/img/brand-5.png";
import brandimg6 from "../../Assets/images/img/brand-6.png";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/bundle";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Brand = () => {
  return (
    <div className="my-8 bg-white py-4">
      <div className="container">
        {/* <div className=" flex items-center gap-3 py-4"> */}
        <Swiper
          modules={[Navigation, Autoplay]}
          // spaceBetween={5}
          slidesPerView={5}
          loop={true}
          rewind={true}
          // centeredSlides={true}
          speed={5000}
          autoplay={{
            delay: 5,
            // disableOnInteraction: false,
          }}
          watchSlidesProgress={true}
          // navigation
          // pagination={{ clickable: true }}
          // onSwiper={(swiper) => console.log(swiper)}
          // onSlideChange={() => console.log("slide change")}
          className="flex items-center gap-3"
        >
          <SwiperSlide>
            <div className=" w-full object-cover my-4">
              <img src={brandimg1} alt="" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className=" w-full object-cover my-4 ">
              <img src={brandimg2} alt="" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className=" w-full object-cover my-4">
              <img src={brandimg3} alt="" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className=" w-full object-cover my-4">
              <img src={brandimg4} alt="" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className=" w-full object-cover my-4">
              <img src={brandimg5} alt="" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className=" w-full object-cover my-4">
              <img src={brandimg6} alt="" />
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Brand;
