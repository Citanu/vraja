import React from 'react'
import bigimage from '../assets/a/IMG_0397.JPG'
import img1 from '../assets/a/IMG_0571.JPG'
import img2 from '../assets/a/IMG_0792.JPG'
import img3 from '../assets/a/IMG_8587.jpg'
import img4 from '../assets/a/IMG_0800.JPG'

const Destinations = () => {
  return (
    <div className='max-w-[1240px] mx-auto py-16 px-4'>
        <div className='grid grid-rows-none md:grid-cols-5 py-4 gap-2 md:gap-4'>
            <img className='w-full h-full object-cover col-span-2 md:col-span-3 row-span-2' src={bigimage} alt="/" />
            <img className='w-full h-full object-cover' src={img1} alt="/" />
            <img className='w-full h-full object-cover' src={img2} alt="/" />
            <img className='w-full h-full object-cover' src={img3} alt="/" />
            <img className='w-full h-full object-cover' src={img4} alt="/" />
        </div>
    </div>
  )
}

export default Destinations