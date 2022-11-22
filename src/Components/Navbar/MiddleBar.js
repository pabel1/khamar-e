import React from "react";
import userImg from "../../Assets/images/img/profile.jpg";
import { BsFillCaretDownFill } from "react-icons/bs";
import { BiLogInCircle } from "react-icons/bi";
import { RiAccountPinCircleFill } from "react-icons/ri";
import { MdUpdate } from "react-icons/md";
import {NavLink} from 'react-router-dom'
const MiddleBar = () => {
  return (
    <div className=" bg-secondary">
      <div className=" container flex items-center justify-between  py-1 text-white">
        <ul className=" flex item gap-5 ">
          <li className=" uppercase p-1 hover:text-gray-400 transition">
            {" "}
            <NavLink to={"/"}>Home</NavLink>
          </li>
          <li className=" uppercase p-1 hover:text-gray-400 transition">
            {" "}
            <NavLink to={"/products"}>Products</NavLink>
          </li>
          <li className=" uppercase p-1 hover:text-gray-400 transition">
            {" "}
            <NavLink to={"/"}>Checkout</NavLink>
          </li>
          <li className=" uppercase p-1 hover:text-gray-400 transition">
            {" "}
            <NavLink to={"/"}>More Pages</NavLink>
          </li>
          <li className=" uppercase p-1 hover:text-gray-400 transition">
            {" "}
            <NavLink to={"/"}>About Us</NavLink>
          </li>
        </ul>
        <div className=" flex gap-2 items-center relative">
          <img src={userImg} alt="" className=" w-10 rounded-full ring-2" />

          <NavLink className=" p-1 hover:text-gray-400 transition group" to={"/"}>
            {" "}
            <BsFillCaretDownFill />
          </NavLink>

          <div className=" group-hover:block hidden bg-secondary w-60  absolute top-10 -right-10 z-10   rounded-sm ">
            <ul className=" space-y-3 uppercase ">
              <li className=" hover:bg-primaryColor py-2 px-4 rounded-sm">
                <NavLink className=" flex items-center gap-2" to={"/"}>
                  <span>
                    <RiAccountPinCircleFill className=" text-xl " />
                  </span>{" "}
                  My Account
                </NavLink>
              </li>
              <li className=" hover:bg-primaryColor py-2 px-4 rounded-sm">
                <NavLink to={"/"} className=" flex items-center gap-2" >
                  <span>
                    <MdUpdate className=" text-xl " />
                  </span>{" "}
                  Update Profile
                </NavLink>
              </li>

              <li className=" hover:bg-primaryColor py-2 px-4 rounded-sm">
                <NavLink to={"/"} className=" flex items-center gap-2" >
                  <BiLogInCircle className=" text-xl " /> Logout
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MiddleBar;
