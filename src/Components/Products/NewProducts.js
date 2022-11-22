import React, { useState } from 'react'
import newProductIcon from '../../Assets/images/img/newicon.png'
import ProductCard from '../Card/ProductCard'
import { newProduct } from '../DemoData'
const NewProducts = () => {

    const [data,setData]=useState(newProduct)
  return (
    <div className=' container my-8'>
        <h1
        className=" flex items-center gap-2  text-3xl my-5 font-myfont font-bold 
        "
      >
        {/* <MdOutlineProductionQuantityLimits className=" text-primaryColor text-4xl" /> */}
        <img className='w-12' src={newProductIcon} alt="" />
        <span className="pb-2 border-b-4 border-primaryColor ">
          New Products
        </span>
      </h1>
      <div className=" grid grid-cols-4 gap-3 items-center mt-10">
      {
          data?.map((item,i)=>(
            <ProductCard data={item} key={i}/>
          ))
        }
       
      </div>
    </div>
  )
}

export default NewProducts