import React from "react";

const CardSummary = () => {
  return (
    <div className=" px-4">
      <div className=" flex items-center justify-between gap-4 w-full ">
        <input
          className=" outline-none border border-primaryColor py-2 px-3 rounded"
          type="text"
          placeholder="Coupon Code"
        />
        <button className="py-2 bg-primaryColor px-2 text-white rounded">
          Apply Code
        </button>
      </div>
      <div className=" bg-gray-100 my-4 px-4 py-5 text-textDark">
        <h1 className=" text-2xl font-myfont text-gray-700">Cart Summary</h1>
        <p className=" flex justify-between py-3 text-base">
          Sub Total<span>99tk</span>
        </p>
        <p className=" flex justify-between py-3 text-base">
          Shipping Cost<span>1tk</span>
        </p>
        <h2 className=" flex justify-between py-3 text-base border-t-2 border-black">
          Grand Total<span>100tk</span>
        </h2>
      </div>
      <div className=" flex items-center gap-4 justify-around mt-5">
        <button
          className="my-2 flex items-center gap-1 px-4 py-2 border border-primaryColor bg-white rounded-md
               text-primaryColor hover:bg-primaryColor hover:text-white 
               transition-all  duration-500 cursor-pointer  "
        >
          Update Cart
        </button>
        <button
          className="my-2 flex items-center gap-1 px-4 py-2 bg-primaryColor rounded-md
               text-white hover:bg-white hover:text-primaryColor border hover:border-primaryColor 
               transition-all  duration-500 cursor-pointer  "
        >
          Checkout
        </button>
      </div>
    </div>
  );
};

export default CardSummary;
