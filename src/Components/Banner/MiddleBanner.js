import React from "react";
import sliderImg1 from "../../Assets/images/img/slider-1.jpg";
import { FaShoppingCart } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/bundle";
import "swiper/css/navigation";
import "swiper/css/pagination";

const MiddleBanner = () => {
  return (
    <>
    
      <Swiper
        modules={[Navigation, Pagination,Autoplay]}
        spaceBetween={1}
        slidesPerView={1}
        loop={true}
        // centeredSlides={true}
        speed={1000}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        navigation
        
        pagination={{ clickable: true }}
        // onSwiper={(swiper) => console.log(swiper)}
        // onSlideChange={() => console.log("slide change")}
        className=" h-full w-[50%] bg-primaryColor show"
        
      >
        <SwiperSlide  >
          <div className="    basis-1/2">
            <div className="h-full  relative">
              <img
                src={sliderImg1}
                alt="Slider_Image"
                className=" object-cover "
              />
              <div
                className="w-[60%] h-[60%] absolute inset-x-0 bg-darkPrimary flex flex-col
           items-center justify-center top-[20%] left-[20%] z-10 text-white transition"
              >
                <p className=" text-center text-2xl font-myfont font-bold mb-4">
                  Fresh from garden
                </p>
                <a
                  className="  flex gap-2 items-center bg-white px-4 text-primaryColor
             py-2 rounded-sm text-base whitespace-pre hover:bg-primaryColor hover:text-white
             hover:ring-1 ring-white transition"
                  href="/"
                >
                  <FaShoppingCart className=" text-lg" />
                  Shop Now
                </a>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide >
          <div className="  basis-1/2">
            <div className="h-full  relative">
              <img
                src={sliderImg1}
                alt="Slider_Image"
                className=" cover w-full h-full"
              />
              <div
                className="w-[60%] h-[60%] absolute inset-x-0 bg-darkPrimary flex flex-col
           items-center justify-center top-[20%] left-[20%] z-10 text-white transition"
              >
                <p className=" text-center text-2xl font-myfont font-bold mb-4">
                  Fresh from garden
                </p>
                <a
                  className="  flex gap-2 items-center bg-white px-4 text-primaryColor
             py-2 rounded-sm text-base whitespace-pre hover:bg-primaryColor hover:text-white
             hover:ring-1 ring-white transition"
                  href="/"
                >
                  <FaShoppingCart className=" text-lg" />
                  Shop Now
                </a>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
   
    </>
  );
};

export default MiddleBanner;
