import React from "react";
import {
  FaShoppingCart,
  FaStar,
  FaCartPlus,
  FaHeart,
  FaSearch,
} from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
const ProductCard = ({ data }) => {
  const navigate=useNavigate();
  return (
    <>
      {data && (
        <div 
          className=" text-white  text-center rounded-sm hover:bg-primaryColor group
           relative cursor-pointer"
           onClick={()=>navigate(`/products/${data.id}`)}
        >
          <div
            className=" text-lg  bg-black py-2  group-hover:bg-primaryColor 
            transition-all  duration-500 "
          >
            <p>{data.productTitle}</p>
            <div
              className=" flex items-center justify-center gap-2 py-3 text-xl
               text-primaryColor group-hover:text-white transition-all  duration-500"
            >
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
            </div>
          </div>
          <div className="overflow-hidden">
            <div className="group-hover:bg-primaryColor opacity-80 " >
              <img
                className=" w-full h-[200px] object-cover group-hover:scale-[1.2] transition-all 
                  duration-500 overflow-hidden"
                src={data.productImg}
                alt=""
              />
            </div>
          </div>
          <div
            className=" flex items-center justify-between px-3 py-3 bg-black 
            group-hover:bg-primaryColor transition-all  duration-500"
          >
            <h3 className=" text-base font-semibold ">
              {data.price}
              <span className=" text-2xl font-bold font-myfont mx-[2px]">
                tk
              </span>
            </h3>
            <a
              className="my-2 flex items-center gap-1 px-4 py-2 bg-primaryColor rounded-md
               text-white group-hover:bg-white group-hover:text-primaryColor 
               transition-all  duration-500
               cursor-pointer  "
              href="/"
            >
              <FaShoppingCart size={20} />
              <span> Buy Now</span>
            </a>
          </div>
          <div
            className=" hidden group-hover:flex items-center justify-center gap-2 h-full absolute
             inset-0 opacity-100 transition-all  duration-500  "
          >
            <Link
              to="/"
              className=" p-2 border bg-primaryColor text-white text-lg 
              rounded hover:bg-white hover:text-primaryColor
               hover:border-primaryColor transition-all  duration-500 "
            >
              <FaCartPlus />
            </Link>
            <Link
              to="/"
              className=" p-2 border bg-primaryColor text-white text-lg 
              rounded hover:bg-white hover:text-primaryColor 
              hover:border-primaryColor transition-all  duration-500"
            >
              <FaHeart />
            </Link>
            <Link
              to="/"
              className=" p-2 border bg-primaryColor text-white text-lg 
              rounded hover:bg-white hover:text-primaryColor 
              hover:border-primaryColor transition-all  duration-500"
            >
              <FaSearch />
            </Link>
          </div>
         
        </div>
      )}
    </>
  );
};

export default ProductCard;
