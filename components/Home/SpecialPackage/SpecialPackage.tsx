'use client'

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Image from "next/image";
import { RiArrowLeftSLine, RiArrowRightSLine } from "react-icons/ri";
import backgroundImage from '../../../public/assets/spacial-package-bg-image.png'
import productImage from '../../../public/assets/spacial-package-product-image.png'
import { RiStarFill } from "react-icons/ri";
import ZoomIcon from "@/components/Icons/ZoomIcon";
import TopProductCard from "@/components/Cards/TopProductCard";
import { Autoplay, FreeMode, Navigation, Scrollbar } from "swiper/modules";
import ArrowLeft from "@/components/Icons/ArrowLeft";
import ArrowRight from "@/components/Icons/ArrowRight";


const SpecialPackage = () => {

    const handleProgress = (progress: any) => {
        const proBar = document.getElementById("progressBar");
        if (!proBar) return;

        const maxHeight = 360;

        proBar.style.top = `${progress * (maxHeight - 80)}px`;
    };

    const fakeSpecialPackagesRight = [
        { id: 1, name: "Product 1", rating: 4.5, price: 29.99, discount: 10, sold: 50 },
        { id: 2, name: "Product 2", rating: 4.0, price: 39.99, discount: 15, sold: 30 },
        { id: 3, name: "Product 3", rating: 5.0, price: 19.99, discount: 5, sold: 80 },
        { id: 4, name: "Product 4", rating: 3.5, price: 49.99, discount: 20, sold: 20 },
        { id: 5, name: "Product 5", rating: 4.8, price: 59.99, discount: 25, sold: 60 },
    ]

    return (
        <section className='w-11/12 mx-auto '>
            <div className="px-4 pb-5 ">
                {/* title-text */}
                <div className="flex items-center space-x-2 font-roboto">
                    <div>
                        <h2 className="text-[#07484A] font-semibold text-2xl lg:text-3xl">Special Package</h2>
                    </div>

                    <div className='flex items-center '>
                        <div className="prev_sp">
                            <RiArrowLeftSLine className='text-2xl text-icon-color hover:text-aide-primary cursor-pointer hover:text-teal-600 duration-200' />
                        </div>

                        <div className="next_sp">
                            <RiArrowRightSLine className='text-2xl text-icon-color hover:text-aide-primary cursor-pointer hover:text-teal-600 duration-200' />
                        </div>
                    </div>
                </div>

                <div className="flex mt-4 lg:mt-6 gap-12 lg:gap-[4.3rem]">
                    <Swiper
                        navigation={{ prevEl: '.prev_sp', nextEl: '.next_sp', }}
                        spaceBetween={2}
                        loop={true}
                        speed={1000}
                        autoplay={{
                            delay: 4000,
                            disableOnInteraction: false,
                        }}
                        modules={[Autoplay, Navigation]}
                        className="mySwiper lg:flex-1">
                        {
                            fakeSpecialPackagesRight.map(packageItem => (
                                <SwiperSlide key={packageItem.id}>
                                    {/* top-image */}
                                    <div className="relative cursor-pointer special">
                                        <Image className='w-full' src={backgroundImage} alt="ads" priority={true} />
                                        <div className="absolute top-4 left-4 lg:top-8 lg:left-8 flex justify-between text-[#07484A]">
                                            <div className="md:flex-1">
                                                <h3 className="font-semibold text-xl lg:text-2xl">Special Package</h3>
                                                <h4 className="mt-2 lg:mt-4 text-lg lg:text-2xl">UP to 80% OFF</h4>
                                            </div>
                                            <Image className='md:flex-1' src={productImage} alt="ads" priority={true} />
                                        </div>
                                        <span className="absolute hidden special-hover:block bottom-4 right-4 lg:bottom-8 lg:right-8 p-2 bg-[#07484A] rounded-lg">
                                            <ZoomIcon />
                                        </span>
                                    </div>
                                    {/* bottom-content */}
                                    <div className="mt-3 lg:mt-6 flex flex-col gap-1 lg:gap-2 text-[#07484A]">
                                        <h2 className="text-xl lg:text-2xl font-semibold">Monthly Bazar Package</h2>
                                        <div className="flex item-center text-xl text-star-color gap-1">
                                            <RiStarFill />
                                            <RiStarFill />
                                            <RiStarFill />
                                            <RiStarFill />
                                            <RiStarFill />
                                        </div>
                                        <div className='flex justify-between items-center gap-5'>
                                            <h2 className="text-lg lg:text-xl font-bold leading-[18px] text-aide-primary">৳2015.75 <del className="text-[#828282] font-medium">৳2122.40</del></h2>
                                            <div className="bg-error-bg rounded py-1 px-1.5">
                                                <p className="product_price_discount">- 58%</p>
                                            </div>
                                        </div>
                                        <h3 className="text-lg">Save taka 105</h3>
                                        <div className="flex w-full items-center justify-between gap-3">
                                            <div className="h-2 w-[80%] md:w-[85%] rounded-full bg-[#E9ECEF]">
                                                <div className="h-2 rounded-full bg-[#0E947A]" style={{ width: '45%' }}></div>
                                            </div>
                                            <span className="text-icon-color inline-block">90 Sold</span>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            ))
                        }
                    </Swiper>

                    {/* Right-content */}
                    <div className="lg:flex-1  text-[#07484A] ">
                        <div>
                            <span>Cast Aluminum Outdoor Chaise Lounge As an elegant and classic touch to your outdoor space, this cast Aluminum Chaise Lounge combines the appearance, </span>
                        </div>

                        {/* card-slider */}
                        <div className="flex">
                            <div className="mt-4 lg:mt-6 flex flex-row gap-2 h-120 px-10 w-11/12">

                                <Swiper
                                    direction={'vertical'}
                                    slidesPerView={3}
                                    spaceBetween={10}
                                    onProgress={(swiper, progress) => handleProgress(progress)}
                                    navigation={{ prevEl: '.prev_sps', nextEl: '.next_sps' }}
                                    modules={[FreeMode, Scrollbar, Navigation]}
                                    className="mySwiper w-full"
                                >
                                    {[...Array(7)].map((_, i) => (
                                        <SwiperSlide key={i}><TopProductCard /></SwiperSlide>
                                    ))}
                                </Swiper>

                            </div>
                            <div className="flex flex-col justify-between mt-6 items-center">

                                <div className="h-full w-0.5 bg-gray-300 relative overflow-hidden">
                                    <span id="progressBar" className="h-20 w-2 bg-teal-600 absolute top-0 left-1/2 -translate-x-1/2 rounded"></span>
                                </div>

                                {/* Navigation bar*/}
                                <div className="flex flex-col gap-[13px] mb-2 py-2">
                                    <div className=" cursor-pointer text-[#07484A] w-10 h-10 bg-[#E0EFF6] flex justify-center items-center rounded-full prev_sps">
                                        <span className="w-3 rotate-90"><ArrowRight /></span>
                                    </div>
                                    <div className="cursor-pointer text-[#07484A] w-10 h-10 bg-[#F9D9DA] flex justify-center items-center rounded-full next_sps">
                                        <span className="w-3 rotate-90"><ArrowLeft /></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section >
    );
};

export default SpecialPackage;