import React, { useEffect, useState } from "react";
import productImg1 from "../../Assets/images/img/product-1.jpg";
import productImg2 from "../../Assets/images/img/product-2.jpg";
import productImg3 from "../../Assets/images/img/product-3.jpg";
import productImg4 from "../../Assets/images/img/product-4.jpg";
import {
  FaStar,
  FaMinus,
  FaPlus,
  FaShoppingCart,
  FaShoppingBag,
} from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/bundle";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { useParams } from "react-router-dom";
import { productData } from "../DemoData";

const ProductDetails = () => {
  const [productItem, setProductData] = useState(productData);
  const [singleItem, setSingleItem] = useState();
  const { id } = useParams();
  // console.log(id)
  // console.log(productItem)

  // const singleProduct=productItem.filter((item)=>item.id===id);
  //   console.log(singleProduct[0])
  //   setSingleItem(singleProduct)

  useEffect(() => {
    const singleProduct = productItem.filter((item) => item.id === id);
    // console.log(singleProduct[0])
    setSingleItem(singleProduct[0]);
  }, [productItem, id]);

  // console.log(singleItem);

  // const { productImg, price, rating, productTitle } = singleItem;

  return (
    <>
      {singleItem && (
        <div className=" grid grid-cols-2 gap-5 p-4">
          <div className="">
            <img className=" w-full " src={singleItem.productImg} alt="" />
            <div
              className=" h-[110px]   flex item-center gap-3   my-12 border
            border-primaryColor p-1"
            >
              <Swiper
                modules={[Navigation, Autoplay]}
                spaceBetween={5}
                slidesPerView={4}
                loop={true}
                // centeredSlides={true}
                speed={1000}
                autoplay={{
                  delay: 2500,
                  disableOnInteraction: false,
                }}
                navigation
                //   onActiveIndexChange={index => setSwiperIndex(slideData[index.snapIndex])}
                //   pagination={{ clickable: true }}
                // onSwiper={(swiper) => console.log(swiper)}
                // onSlideChange={() => console.log("slide change")}
                className="w-full h-full "
              >
                <SwiperSlide>
                  <img
                    className=" w-full h-full object-cover border border-primaryColor"
                    src={singleItem.productImg}
                    alt=""
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <img
                    className=" w-full h-full object-cover border border-primaryColor"
                    src={singleItem.productImg}
                    alt=""
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <img
                    className=" w-full h-full object-cover border border-primaryColor"
                    src={singleItem.productImg}
                    alt=""
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <img
                    className=" w-full h-full object-cover border border-primaryColor"
                    src={singleItem.productImg}
                    alt=""
                  />
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
          <div className=" my-4 py-2 px-3">
            <h1 className=" text-2xl font-bold text-gray-700 pb-4 font-myfont">
            {singleItem.productTitle}
            </h1>
            <p className=" flex items-center gap-2 text-primaryColor text-lg">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
            </p>
            <div className=" my-3 flex items-center gap-4 ">
              <h2 className=" text-lg font-semibold  text-gray-700 ">
                {" "}
                Price:
              </h2>
              <p className=" text-3xl text-primaryColor font-bold font-myfont">
                {" "}
                {singleItem.price} tk{" "}
                <span className=" text-gray-500 line-through  decoration-4">
                  {singleItem.price} tk
                </span>
              </p>
            </div>
            <div className=" my-3 flex items-center gap-4 ">
              <h2 className=" text-lg font-semibold  text-gray-700 ">
                Quantity:
              </h2>
              <div
                className=" flex items-center text-white border border-primaryColor
             rounded  "
              >
                <button className=" p-2 bg-primaryColor text-base  ">
                  <FaMinus />{" "}
                </button>
                <p className=" py-1 px-3 bg-black text-base  "> 1</p>
                <button className=" p-2 bg-primaryColor text-base  ">
                  <FaPlus />{" "}
                </button>
              </div>
            </div>
            <div className=" my-3 flex items-center gap-4 ">
              <h2 className=" text-lg font-semibold  text-gray-700 ">Size:</h2>
              <div className=" flex  border border-primaryColor rounded text-lg  ">
                <button
                  className=" border-r border-primaryColor px-2 text-primaryColor
               hover:bg-primaryColor hover:text-white transition-all duration-300"
                >
                  S{" "}
                </button>
                <button
                  className=" border-r border-primaryColor px-2 text-primaryColor
               hover:bg-primaryColor hover:text-white transition-all duration-300"
                >
                  M{" "}
                </button>
                <button
                  className=" border-r border-primaryColor px-2 text-primaryColor
               hover:bg-primaryColor hover:text-white transition-all duration-300"
                >
                  L{" "}
                </button>
              </div>
            </div>
            <div className=" flex items-center gap-4 my-6">
              <a
                className="my-2 flex items-center gap-1 px-4 py-2 border border-primaryColor bg-white rounded-md
               text-primaryColor hover:bg-primaryColor hover:text-white 
               transition-all  duration-500 cursor-pointer  "
                href="/"
              >
                <FaShoppingCart size={20} />
                <span>Add to Cart</span>
              </a>
              <a
                className="my-2 flex items-center gap-1 px-4 py-2 bg-primaryColor rounded-md
               text-white hover:bg-white hover:text-primaryColor border hover:border-primaryColor 
               transition-all  duration-500 cursor-pointer  "
                href="/"
              >
                <FaShoppingBag size={20} />
                <span>Buy Now</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ProductDetails;
