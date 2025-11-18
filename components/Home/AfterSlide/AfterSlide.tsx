'use client'

import { NextPage } from 'next'
import { useState } from 'react'
import { FaArrowRight } from 'react-icons/fa'


interface Props { }

const AfterSlide: NextPage<Props> = ({ }) => {



    return <div className='after-slider bg-[#009788]  flex flex-row items-center justify-center py-2 rounded'>

        <div className='w-4/6 text-center text-white '>
            <h4 className={`text-xl `}>SIGN UP AND GET YOUR FIRST 5 DELIVERY FREE </h4>
        </div>

        <form className="relative w-2/6" >
            <input type="text" placeholder="Your Mobile number" className="w-2/3 bg-white rounded-xl p-3 pr-12" />
            <button className="absolute top-1/2 -translate-y-1/2 right-[35%] text-xl" type="submit"> <FaArrowRight /> </button>
        </form>
    </div >

}

export default AfterSlide