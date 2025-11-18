'use client'

import { NextPage } from 'next'
import { useForm } from "react-hook-form"
import { FaArrowRight } from 'react-icons/fa'
import './AfterSlide.scss';

type FormData = {
    mobileNumber: string
}

const AfterSlide: NextPage = () => {

    const { register, handleSubmit, reset, formState: { errors } } = useForm<FormData>()

    const onSubmit = (data: FormData) => {
        console.log("mobile number is-", parseInt(data.mobileNumber))
        window.alert("This feature is under development. coming soon!`")
        reset()
    }

    return (
        <div className='after-slider bg-[#009788] flex flex-row items-center justify-center py-2 rounded'>

            <div className='w-4/6 text-center text-white '>
                <h4 className='text-xl'>SIGN UP AND GET YOUR FIRST 5 DELIVERY FREE</h4>
            </div>

            <form onSubmit={handleSubmit(onSubmit)} className="relative w-2/6 after-slider-form">
                <input
                    type="number"
                    placeholder="Your Mobile number"
                    {...register("mobileNumber", {
                        required: "Phone Number is required",
                        pattern: {
                            value: /^01[0-9]{9}$/,
                            message: "Phone number must start with 01 and be 11 digits"
                        }
                    })}
                    className={`w-2/3 bg-white rounded-xl p-3 pr-12 ${errors.mobileNumber ? 'focus:outline-red-500' : 'focus:outline-teal-700'}`}
                />

                <button
                    type='submit'
                    className="absolute top-1/2 -translate-y-1/2 right-[35%] text-xl bg-teal-600 p-2 text-white rounded-md"
                >
                    <FaArrowRight />
                </button>
            </form>
        </div>
    )
}

export default AfterSlide
