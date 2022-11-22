import React from 'react'
import MiddleBanner from './MiddleBanner'
import RightBanner from './RightBanner'
import SidbarBanner from './SidbarBanner'

const Banner = () => {
  return (
    <div className=' container my-6 flex   gap-6'>
        <SidbarBanner/>
        <MiddleBanner/>
        <RightBanner/>
    </div>
  )
}

export default Banner