import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import ProductCard from "../Card/ProductCard";
import { newProduct, productData } from "../DemoData";

import ReactPaginate from "react-paginate";
import RightSideItem from "./RightSideItem";

// import "swiper/css";
// import "swiper/css/bundle";
// import "swiper/css/navigation";
// import "swiper/css/pagination";
const Products = () => {
  const [data, setData] = useState(productData);
  const [newdata, setNewData] = useState(newProduct);
  return (
    <div className=" container">
      <div className=" grid grid-cols-12 gap-4">
        <div className=" col-span-8 ">
          <div className=" bg-white flex items-center gap-4 justify-around py-8 px-3 my-8 rounded">
            <div
              className=" flex items-center justify-between  border 
            border-primaryColor h-[38px] rounded"
            >
              <input
                className=" border-none outline-none text-base text-gray-600 
                    basis-[90%] h-full px-4"
                type="text"
                placeholder="Search"
              />
              <button className="text-lg hover:bg-primaryColor h-full px-4 group ">
                <FaSearch className="text-lg text-primaryColor group-hover:text-white " />
              </button>
            </div>
            <div
              className=" flex items-center justify-between  border 
            border-primaryColor h-[38px] rounded basis-1/3"
            >
              <select
                className=" w-full h-full px-4 cursor-pointer text-gray-600 hover:text-primaryColor
                 bg-white"
              >
                <option className="">Product sort by</option>
                <option value="new" className=" ">
                  Newest
                </option>
                <option value="popular" className="">
                  Popular
                </option>
                <option value="mostsale" className="">
                  Most sale
                </option>
              </select>
            </div>
            <div
              className=" flex items-center justify-between  border 
            border-primaryColor h-[38px] rounded basis-1/3"
            >
              <select
                className=" w-full h-full px-4 cursor-pointer text-gray-600 hover:text-primaryColor
                 bg-white"
              >
                <option className="">Product sort price range</option>

                <option value="new" className=" ">
                  0 tk to 100 tk
                </option>
                <option value="popular" className="">
                  100 tk to 500 tk
                </option>
                <option value="mostsale" className="">
                  501 tk to 1000 tk
                </option>
                <option value="mostsale" className="">
                  1000 tk to 2000 tk
                </option>
                <option value="mostsale" className="">
                  2001 tk to 5000 tk
                </option>
                <option value="mostsale" className="">
                  5001 tk to 10000tk
                </option>
                <option value="mostsale" className="">
                  10001 tk to 15000 tk
                </option>
                <option value="mostsale" className="">
                  15001 tk to 30000 tk
                </option>
                <option value="mostsale" className="">
                  50000 up
                </option>
              </select>
            </div>
          </div>
          <div className=" grid grid-cols-3 items-center gap-4 ">
            {data?.map((item, i) => (
              <ProductCard data={item} key={i} />
            ))}
            {newdata?.map((item, i) => (
              <ProductCard data={item} key={i} />
            ))}
          </div>
          <div className=" my-4 ml-4 ">
            <ReactPaginate
              breakLabel="..."
              previousLabel="<< Prev "
              nextLabel=" Next >>"
              //  onPageChange={handlePageClick}
              containerClassName=" flex item-center gap-2 justify-center w-fit"
              pageClassName=" px-3 py-1 text-xl  border border-primaryColor rounded bg-primaryColor
              hover:bg-black hover:text-white "
              pageLinkClassName="cursor-pointer "
              activeClassName=" bg-black text-white  "
              previousClassName=" text-lg  px-2 bg-primaryColor hover:bg-black
               hover:text-white border border-primaryColor rounded "
              nextClassName=" text-lg  px-2 bg-primaryColor hover:bg-black
              hover:text-white border border-primaryColor rounded"
              breakClassName=" text-lg text-primaryColor"
              pageRangeDisplayed={2}
              pageCount={10}
              //  pageCount={Math.ceil(count/perpage)}
              marginPagesDisplayed={2}
            />
          </div>
        </div>
        <div className=" col-span-4 ml-4 my-8">
          <RightSideItem data={newdata}/>
        </div>
      </div>
    </div>
  );
};

export default Products;
