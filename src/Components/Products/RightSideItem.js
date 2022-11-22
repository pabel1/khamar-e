import React from "react";
import { newProduct, productData } from "../DemoData";
import {
  FaWater,
  FaCloudMeatball,
  FaFish,
  FaCarrot,
  FaMicrochip,
} from "react-icons/fa";
import {
  MdOutlineDoubleArrow,
  MdOutlineKeyboardArrowRight,
} from "react-icons/md";

import { Swiper, SwiperSlide } from "swiper/react";

import { Autoplay, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/bundle";
import "swiper/css/navigation";
import "swiper/css/pagination";
import ProductCard from "../Card/ProductCard";
const RightSideItem = ({data}) => {
  return (
    <>
      <div className=" bg-white py-4 px-5 ">
        <h1 className=" text-2xl font-bold text-gray-700 pb-4 font-myfont ">
          Category
          <ul className=" space-y-2  my-2 ">
            <li className="group border-b  px-4 py-2">
              <a
                className="flex items-center gap-2 text-base text-primaryText
           group-hover:text-primaryColor "
                href="/"
              >
                <FaWater className="text-xl text-primaryColor group-hover:text-primaryText" />
                Dairy products
              </a>
            </li>
            <li className="group border-b  px-4 py-2">
              <a
                className="flex items-center gap-2 text-base text-primaryText
           group-hover:text-primaryColor "
                href="/"
              >
                <FaCloudMeatball className="text-xl text-primaryColor group-hover:text-primaryText" />
                Meat
              </a>
            </li>
            <li className="group border-b  px-4 py-2">
              <a
                className="flex items-center gap-2 text-base text-primaryText
           group-hover:text-primaryColor"
                href="/"
              >
                <FaFish className="text-xl text-primaryColor group-hover:text-primaryText" />
                Fish
              </a>
            </li>
            <li className="group border-b  px-4 py-2">
              <a
                className="flex items-center gap-2 text-base text-primaryText
           group-hover:text-primaryColor "
                href="/"
              >
                <FaCarrot className="text-xl text-primaryColor group-hover:text-primaryText" />
                Vegetables and Fruits
              </a>
            </li>
            <li className="group   px-4 py-2">
              <a
                className="flex items-center gap-2 text-base text-primaryText
           group-hover:text-primaryColor "
                href="/"
              >
                <FaMicrochip className="text-xl text-primaryColor group-hover:text-primaryText" />
                Equipments
              </a>
            </li>
          </ul>
        </h1>
      </div>

      <div className="bg-white my-8">
        <Swiper
          modules={[Navigation, Autoplay]}
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
          // onSwiper={(swiper) => console.log(swiper)}
          // onSlideChange={() => console.log("slide change")}
          className=" h-full w-full bg-primaryColor show"
        >
          {data?.map((item, i) => (
            <SwiperSlide key={i}>
              <ProductCard data={item} key={i} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="bg-white my-8  py-4 px-5">
        <h2 className=" text-2xl font-bold text-gray-700 pb-4 font-myfont ">
          Our Brands
        </h2>
        <ul className=" space-y-2  my-2">
          <li className="group border-b  px-4 py-2 flex justify-between items-center">
            <a
              className=" flex items-center group-hover:translate-x-1 transition
                 duration-400 group-hover:text-primaryColor"
              href="/"
            >
              <MdOutlineKeyboardArrowRight className="group-hover:hidden text-xl " />
              <MdOutlineDoubleArrow className=" hidden group-hover:block text-lg " />
              Mahindra
            </a>

            <span>(45)</span>
          </li>
          <li className="group border-b  px-4 py-2 flex justify-between items-center">
            <a
              className=" flex items-center group-hover:translate-x-1 transition
                 duration-400 group-hover:text-primaryColor"
              href="/"
            >
              <MdOutlineKeyboardArrowRight className="group-hover:hidden text-xl " />
              <MdOutlineDoubleArrow className=" hidden group-hover:block text-lg " />
              TATA
            </a>
            <span>(34)</span>
          </li>
          <li className="group border-b  px-4 py-2 flex justify-between items-center">
            <a
              className=" flex items-center group-hover:translate-x-1 transition
                 duration-400 group-hover:text-primaryColor"
              href="/"
            >
              <MdOutlineKeyboardArrowRight className="group-hover:hidden text-xl " />
              <MdOutlineDoubleArrow className=" hidden group-hover:block text-lg " />
              Arong{" "}
            </a>
            <span>(67)</span>
          </li>
          <li className="group border-b  px-4 py-2 flex justify-between items-center">
            <a
              className=" flex items-center group-hover:translate-x-1 transition
                 duration-400 group-hover:text-primaryColor"
              href="/"
            >
              <MdOutlineKeyboardArrowRight className="group-hover:hidden text-xl " />
              <MdOutlineDoubleArrow className=" hidden group-hover:block text-lg " />
              Milkvita
            </a>
            <span>(74)</span>
          </li>
          <li className="group border-b  px-4 py-2 flex justify-between items-center">
            <a
              className=" flex items-center group-hover:translate-x-1 transition
                 duration-400 group-hover:text-primaryColor"
              href="/"
            >
              <MdOutlineKeyboardArrowRight className="group-hover:hidden text-xl " />
              <MdOutlineDoubleArrow className=" hidden group-hover:block text-lg " />
              Pran{" "}
            </a>
            <span>(89)</span>
          </li>
          <li className="group  px-4 py-2 flex justify-between items-center">
            <a
              className=" flex items-center group-hover:translate-x-1 transition
                 duration-400 group-hover:text-primaryColor"
              href="/"
            >
              <MdOutlineKeyboardArrowRight className="group-hover:hidden text-xl " />
              <MdOutlineDoubleArrow className=" hidden group-hover:block text-lg " />
              SK-F
            </a>
            <span>(28)</span>
          </li>
        </ul>
      </div>
    </>
  );
};

export default RightSideItem;
