import React, { useState } from "react";

import { FaArrowRight, FaStar,FaRegStar } from "react-icons/fa";

const ProductReview = () => {

  const [tab,setTab]=useState(1);


  return (
    <>
    {/* // <div className=" bg-white my-8"> */}
    <div className=" grid grid-cols-3 items-center text-center w-full">
         
         <div
           className={ `px-4 py-2 bg-black text-primaryColor hover:text-white cursor-pointer 
            hover:bg-primaryColor border-r-2 border-white ${tab===1?"active__tab":""}`}
          
           onClick={()=>setTab(1)}
         >
           Description
         </div>
       
       
         <div
           className={` px-4 py-2 bg-black text-primaryColor hover:text-white 
            hover:bg-primaryColor border-r-2 border-white cursor-pointer
            ${tab===2?"active__tab":""}`}
           
          
           onClick={()=>setTab(2)}
         >
           Specification
         </div>
     
      
         <div
           className={` px-4 py-2 bg-black text-primaryColor hover:text-white  
           hover:bg-primaryColor cursor-pointer ${tab===3?"active__tab":""}`}
           
          
           onClick={()=>setTab(3)}
         >
           Reviews (1)
         </div>
    
     </div>
      <div className='my-5 px-8' hidden={tab!==1}>
        <h3 className=" py-5 text-2xl  font-myfont text-gray-700">
          Product description
        </h3>
        <p className="  text-base  text-justify">
          These straws are collected from the Kalijira rice. It's freshly
          harvested and ready to be transported to your location.
        </p>
      </div>
      <div className=" my-5 px-8" hidden={tab!==2}>
        <h3 className="  py-5 text-2xl  font-myfont text-gray-700">
          Product specification
        </h3>
        <ul className="  space-y-2">
          <li className="flex items-center gap-1">
            <FaArrowRight className=" text-primaryColor" /> Kalijira rice
          </li>
          <li className="flex items-center gap-1">
            <FaArrowRight className=" text-primaryColor" /> Golden straw
          </li>
          <li className="flex items-center gap-1">
            <FaArrowRight className=" text-primaryColor" /> Recently harvested
          </li>
        </ul>
      </div>
      <div className=" px-8 py-2" hidden={tab!==3}>
        <h2 className=" py-1 text-2xl  font-myfont text-primaryColor">
          Pabel Ahmed- <span className=" text-base text-textDark">01-Jan-2022</span>
        </h2>
        <p className=" flex item-center gap-2 text-lg text-primaryColor">
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStar />
        </p>
        <p className=" py-3 text-lg text-textDark"> Quality is good</p>
        <div className=" my-5 ">
          <h1 className=" py-1 text-2xl">Give your Review:</h1>
          <p className="my-2 flex item-center gap-2 text-xl text-primaryColor">
            <FaRegStar />
            <FaRegStar />
            <FaRegStar />
            <FaRegStar />
            <FaRegStar />
          </p>
          <div className=" ">
            <div className=" flex item-center gap-4 ">
            <div className="basis-1/2 flex flex-col gap-1">
              <label htmlFor="">Name <span className="text-primaryColor text-xl">*</span></label>
              <input className=" border px-3 py-2 rounded outline-none" type="text" placeholder="name" />
            </div>

            <div  className="basis-1/2 flex flex-col gap-1">
              <label htmlFor="">Email <span className="text-primaryColor text-xl">*</span></label>
              <input className=" border px-3 py-2 rounded outline-none" type="email" placeholder="email" />
            </div>
            </div>
            
            <div className="flex flex-col gap-2 my-3">
              <label htmlFor="">Your Comment <span className="text-primaryColor text-xl">*</span></label>
              <textarea className=" border px-3 py-2 rounded outline-none"
               placeholder="Comment" name="" id="" cols="5" rows="5"></textarea>
            </div>
            <a
              className="my-2 flex items-center gap-1 px-5 py-2 bg-primaryColor rounded-md
               text-white hover:bg-white hover:text-primaryColor border hover:border-primaryColor 
               transition-all  duration-500 cursor-pointer w-fit  "
              href="/"
            >
             
              <span>Submit</span>
            </a>
          </div>
        </div>
      </div>
     {/* </div> */}
    </>
  );
};

export default ProductReview;
