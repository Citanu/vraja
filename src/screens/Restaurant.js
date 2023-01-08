import React from 'react'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import Restaurante from '../components/Restaurante'

const Restaurant = () => {
  return (
    <div>
        <Navbar/>
        <div className='relative h-[86px] w-full  bg-[#3E1900] '></div>
        <h1 className='text-[#2F1200] text-5xl text-center pt-10 font-extrabold'>-RESTAURANTE-</h1>
        <div className="h-[590px]">
        <Restaurante />
      </div>        <Footer/>
    </div>
  )
}

export default Restaurant