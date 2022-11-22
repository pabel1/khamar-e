import React from "react";
import category1 from '../../Assets/images/img/category-1.jpg'
import category2 from '../../Assets/images/img/category-2.jpg'
const RightBanner = () => {
  return (
    <div className="  basis-1/4">
      <div className=" h-full">
        <div className="">
          <div className=" relative">
            <img src={category1} alt="" className=" cover w-full h-full" />
            <a className=" absolute top-0 left-0 flex items-center justify-center
             w-full h-full bg-darkPrimary text-white transition opacity-0
              hover:opacity-90" href="/">
              <p>Today's vegetable price list</p>
            </a>
          </div>
          <div className=" relative">
            <img src={category2} alt="" className=" cover w-full h-full" />
            <a className=" absolute top-0 left-0 flex items-center justify-center
             w-full h-full bg-darkPrimary text-white transition opacity-0
              hover:opacity-90" href="/">
              <p>Today's beef price list</p>
            </a>
          </div>
         
        </div>
      </div>
    </div>
  );
};

export default RightBanner;
