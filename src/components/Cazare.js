import React from 'react'
import PENSIUNEA1 from '../assets/p1/fundal.jpg'
import PENSIUNEA2 from '../assets/p2/fundal.JPG'
import PENSIUNEA3 from '../assets/p3/fundal.JPG'
import CABANA1 from '../assets/c1/fundal.JPG'
import CABANA2 from '../assets/c2/fundal.JPG'
import VILA from '../assets/pv/fundal.jpg'
import SelectsCard from './SelectsCard'

const Cazare = () => {
  return (
    <div className='max-w-[1240px] mx-auto px-4 py-16 grid md:grid-cols-2 lg:grid-cols-3 gap-4 '>
        <SelectsCard link="/pensiunea1" bg={PENSIUNEA1} text='PENSIUNEA 1'/>
        <SelectsCard link="/pensiunea2" bg={PENSIUNEA2} text='PENSIUNEA 2'/>
        <SelectsCard link="/pensiunea3" bg={PENSIUNEA3} text='PENSIUNEA 3'/>
        <SelectsCard link="/cabana1" bg={CABANA1} text='CABANA 1'/>
        <SelectsCard link="/vila" bg={VILA} text='VILA'/>
        <SelectsCard link="/cabana2" bg={CABANA2} text='CABANA 2'/>

    </div>
  )
}

export default Cazare