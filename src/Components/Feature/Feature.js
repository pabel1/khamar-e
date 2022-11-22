import React from "react";
import { FaCcMastercard } from "react-icons/fa";
const Feature = () => {
  return (
    <div className=" container my-8">
      <div className=" grid grid-cols-4 gap-4">
        <div className=" bg-white flex flex-col items-center justify-center  py-5 px-6  ">
          <FaCcMastercard className=" text-primaryColor mb-5 " size={70} />
          <h2 className=" text-lg font-semibold">Secure Payment</h2>
          <p className=" mt-2 text-sm tracking-wide text-center leading-6">
            Products returnable within 7 days of receiving. *Conditions applied*
          </p>
        </div>
        <div className=" bg-white flex flex-col items-center justify-center  py-5 px-6  ">
          <FaCcMastercard className=" text-primaryColor mb-5 " size={70} />
          <h2 className=" text-lg font-semibold">Secure Payment</h2>
          <p className=" mt-2 text-sm tracking-wide text-center leading-6">
            Products returnable within 7 days of receiving. *Conditions applied*
          </p>
        </div>
        <div className=" bg-white flex flex-col items-center justify-center  py-5 px-6  ">
          <FaCcMastercard className=" text-primaryColor mb-5 " size={70} />
          <h2 className=" text-lg font-semibold">Secure Payment</h2>
          <p className=" mt-2 text-sm tracking-wide text-center leading-6">
            Products returnable within 7 days of receiving. *Conditions applied*
            
           
          </p>
        </div>
        <div className=" bg-white flex flex-col items-center justify-center  py-5 px-6  ">
          <FaCcMastercard className=" text-primaryColor mb-5 " size={70} />
          <h2 className=" text-lg font-semibold">Secure Payment</h2>
          <p className=" mt-2 text-sm tracking-wide text-center leading-6">
            Products returnable within 7 days of receiving. *Conditions applied*
          </p>
        </div>
      </div>
    </div>
  );
};

export default Feature;
