import React from "react";
import logo from "../../Assets/images/img/logo.png";
import { BiSearch } from "react-icons/bi";
import { BsHeartFill } from "react-icons/bs";
import { FaShoppingCart } from "react-icons/fa";
import { NavLink } from "react-router-dom";
const ButtomBar = () => {
  return (
    <div className=" bg-whiteColor">
      <div className=" container flex items-center justify-between">
        <img src={logo} alt="" className=" w-[90px]" />
        <div
          className=" flex border border-primaryColor items-center justify-between
         px-3 py-1.5 rounded-md basis-2/5"
        >
          <input type="text" placeholder=" search" className=" outline-none" />
          <a href="/" className=" p-1">
            <BiSearch className=" text-xl text-primaryColor" />
          </a>
        </div>
        <div className=" flex gap-3">
          <NavLink to={"/cart"}
            className=" flex items-center gap-1 py-1 px-4 rounded-md border
           border-primaryColor text-primaryColor hover:bg-primaryColor hover:text-white"
          >
            {" "}
            <BsHeartFill className="  text-lg" />
            <span className=" text-xl">(0)</span>
          </NavLink>
          <NavLink to={"/cart"}
            className=" flex items-center gap-1 py-1 px-4 rounded-md border
           border-primaryColor text-primaryColor hover:bg-primaryColor hover:text-white"
          >
            {" "}
            <FaShoppingCart className="  text-lg" />
            <span className=" text-xl">(0)</span>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default ButtomBar;
