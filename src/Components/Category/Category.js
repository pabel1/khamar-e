import React from "react";
import category3 from "../../Assets/images/img/category-3.jpg";
import category4 from "../../Assets/images/img/category-4.jpg";
import category5 from "../../Assets/images/img/category-5.jpg";
import category6 from "../../Assets/images/img/category-6.jpg";
import category7 from "../../Assets/images/img/category-7.jpg";
import category8 from "../../Assets/images/img/category-8.jpg";
import {MdCategory} from 'react-icons/md'
const Category = () => {
  return (
    <div className=" container my-8">
        <h1 className=" flex items-center gap-2 text-3xl my-5 font-myfont font-bold 
        ">
            <MdCategory className=" text-primaryColor text-4xl"/>
            <span className="pb-2 border-b-4 border-primaryColor ">Top Categories</span> 
        </h1>
      <div className=" grid grid-cols-4 mt-8 ">
        <div className=" h-full">
          <div className="h-full relative">
            <img
              src={category3}
              alt=""
              className="  object-cover w-full h-full"
            />
            <a
              className=" absolute top-0 left-0 flex items-center justify-center
             w-full h-full bg-darkPrimary text-white transition opacity-0
              hover:opacity-90"
              href="/"
            >
              <p className=" text-center text-base">
                Dates freshly imported from Saudi Arabia
              </p>
            </a>
          </div>
        </div>
        <div className=" h-full">
          <div className="h-[50%] relative">
            <img
              src={category4}
              alt=""
              className=" object-cover w-full h-full"
            />
            <a
              className=" absolute top-0 left-0 flex items-center justify-center
             w-full h-full bg-darkPrimary text-white transition opacity-0
              hover:opacity-90"
              href="/"
            >
              <p className=" text-center text-base">New rice</p>
            </a>
          </div>
          <div className="h-[50%] relative">
            <img
              src={category5}
              alt=""
              className=" object-cover w-full h-full"
            />
            <a
              className=" absolute top-0 left-0 flex items-center justify-center
             w-full h-full bg-darkPrimary text-white transition opacity-0
              hover:opacity-90"
              href="/"
            >
              <p className=" text-center text-base">
                Fresh cauliflower from farm
              </p>
            </a>
          </div>
        </div>

        <div className=" h-full">
          <div className="h-[50%] relative">
            <img
              src={category6}
              alt=""
              className=" object-cover w-full h-full"
            />
            <a
              className=" absolute top-0 left-0 flex items-center justify-center
             w-full h-full bg-darkPrimary text-white transition opacity-0
              hover:opacity-90"
              href="/"
            >
              <p className=" text-center text-base">All kind of seeds</p>
            </a>
          </div>
          <div className="h-[50%] relative">
            <img
              src={category7}
              alt=""
              className=" object-cover w-full h-full"
            />
            <a
              className=" absolute top-0 left-0 flex items-center justify-center
             w-full h-full bg-darkPrimary text-white transition opacity-0
              hover:opacity-90"
              href="/"
            >
              <p className=" text-center text-base">Mangoes from Rajshahi</p>
            </a>
          </div>
        </div>

        <div className=" h-full">
          <div className="h-full relative">
            <img
              src={category8}
              alt=""
              className=" object-cover w-full h-full"
            />
            <a
              className=" absolute top-0 left-0 flex items-center justify-center
             w-full h-full bg-darkPrimary text-white transition opacity-0
              hover:opacity-90"
              href="/"
            >
              <p className=" text-center text-base">Daal</p>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Category;
