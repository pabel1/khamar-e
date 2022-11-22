import React from 'react'
import {BsFillTelephonePlusFill} from 'react-icons/bs'
import {MdEmail} from 'react-icons/md'
const TopBar = () => {
  return (
    <div className='bg-black '>
    <div className='container  flex gap-2 md:justify-between py-1 '>
        <div className=' flex items-center  gap-3  font-semibold text-primaryColor'>
            <MdEmail className=' text-2xl '/>
            <h1 className=' whitespace-pre'>management@khamar-e.com.bd</h1>
        </div>
        <div className=' flex items-center  gap-3  font-semibold text-primaryColor'>
        <BsFillTelephonePlusFill/>
        <h1>+8801938639567</h1>
        </div>
    </div>
    </div>
  )
}

export default TopBar