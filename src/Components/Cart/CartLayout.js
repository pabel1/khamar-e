import React from 'react'
import CardSummary from './CardSummary'
import Cart from './Cart'

const CartLayout = () => {
  return (
    <div className=' container my-8 grid  grid-cols-12 gap-5'>
        <div className=' bg-white col-span-8 px-4 py-8 '>
            <Cart/>

        </div>
        <div className=' bg-white col-span-4 px-4 py-8'>
            <CardSummary/>

        </div>

    </div>
  )
}

export default CartLayout