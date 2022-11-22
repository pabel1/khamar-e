import React, { useState } from 'react'

import { newProduct } from '../DemoData'
import ProductDetails from './ProductDetails'
import ProductReview from './ProductReview'
import RightSideItem from './RightSideItem'

const SingleProductLayout = () => {
    const [newData,setNewData] =useState(newProduct)
  return (
    <div className='container'> 
    <div className=" grid grid-cols-12 gap-4">
        <div className=" col-span-8  ">
            <div  className='bg-white my-8'>
            <ProductDetails/>
            </div>
            <div className='bg-white my-8'> 
            <ProductReview/>
            </div>
        </div>
        <div className="bg-white col-span-4 ml-4 my-8">
            <RightSideItem data={newData}/>
        </div>

    </div>

    </div>
  )
}

export default SingleProductLayout