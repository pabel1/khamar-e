import React from "react";
import { AiFillHome } from "react-icons/ai";
import {
  FaShoppingBag,
  FaWater,
  FaCloudMeatball,
  FaFish,
  FaCarrot,
  FaMicrochip,
} from "react-icons/fa";
import { MdAddBox } from "react-icons/md";
const SidbarBanner = () => {
  return (
    <div className=" bg-white basis-1/4">
      <ul className=" space-y-2  my-2">
        <li className=" group border-b  px-6 py-3">
          <a
            className="flex items-center gap-2 text-base text-primaryText
           group-hover:text-primaryColor "
            href="/"
          >
            <AiFillHome className="text-xl text-primaryColor group-hover:text-primaryText" />
            Home
          </a>
        </li>
        <li className=" group border-b  px-6 py-2">
          <a
            className="flex items-center gap-2 text-base text-primaryText
           group-hover:text-primaryColor "
            href="/"
          >
            <FaShoppingBag className="text-xl text-primaryColor group-hover:text-primaryText" />{" "}
            Best Selling
          </a>
        </li>
        <li className="group border-b  px-6 py-2">
          <a
            className="flex items-center gap-2 text-base text-primaryText
           group-hover:text-primaryColor "
            href="/"
          >
            <MdAddBox className="text-xl text-primaryColor group-hover:text-primaryText" />
            Fresh from farm
          </a>
        </li>
        <li className="group border-b  px-6 py-2">
          <a
            className="flex items-center gap-2 text-base text-primaryText
           group-hover:text-primaryColor "
            href="/"
          >
            <FaWater className="text-xl text-primaryColor group-hover:text-primaryText" />
            Dairy products
          </a>
        </li>
        <li className="group border-b  px-6 py-2">
          <a
            className="flex items-center gap-2 text-base text-primaryText
           group-hover:text-primaryColor "
            href="/"
          >
            <FaCloudMeatball className="text-xl text-primaryColor group-hover:text-primaryText" />
            Meat
          </a>
        </li>
        <li className="group border-b  px-6 py-2">
          <a
            className="flex items-center gap-2 text-base text-primaryText
           group-hover:text-primaryColor"
            href="/"
          >
            <FaFish className="text-xl text-primaryColor group-hover:text-primaryText" />
            Fish
          </a>
        </li>
        <li className="group border-b  px-6 py-2">
          <a
            className="flex items-center gap-2 text-base text-primaryText
           group-hover:text-primaryColor "
            href="/"
          >
            <FaCarrot className="text-xl text-primaryColor group-hover:text-primaryText" />
            Vegetables and Fruits
          </a>
        </li>
        <li className="group border-b  px-6 py-2">
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
    </div>
  );
};

export default SidbarBanner;
