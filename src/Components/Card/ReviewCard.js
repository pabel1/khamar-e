import React from "react";
import { FaStar } from "react-icons/fa";

const ReviewCard = ({ data }) => {
  return (
    <>
      {
      data && (
        <div className=" flex items-center gap-5 px-3 py-3">
          <div className=" p-3">
            <img
              className=" p-[2px] w-24 rounded-full ring ring-secondary"
              src={data.reviewImg}
              alt=""
            />
          </div>
          <div className=" bg-white py-3 px-6 rounded ">
            <h1 className=" my-3 text-xl font-bold">{data.reviewerName}</h1>
            <p className=" text-sm py-1 ">{data.reviewerDesignation}</p>
            <p className=" flex items-center gap-2 text-primaryColor">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
            </p>
            <p className=" text-sm my-1">
              {data.reviewDes}
            </p>
          </div>
        </div>
      )}
    </>
  );
};

export default ReviewCard;
