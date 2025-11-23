'use client'

import Image from "next/image";
import { RiArrowLeftSLine, RiArrowRightSLine } from "react-icons/ri";
import backgroundImage from '../../../public/assets/spacial-package-bg-image.png'
import productImage from '../../../public/assets/spacial-package-product-image.png'
import { RiStarFill } from "react-icons/ri";
import ZoomIcon from "@/components/Icons/ZoomIcon";
import TopProductCard from "@/components/Cards/TopProductCard";

const SpecialPackage = () => {
    return (
        <section className='container mx-auto '>
            <div className="px-4 pb-5 ">
                {/* title-text */}
                <div className="flex items-center space-x-2 font-roboto">
                    <div>
                        <h2 className="text-[#07484A] font-semibold text-2xl lg:text-3xl">Special Package</h2>
                    </div>
                    <div className='flex items-center'>
                        <RiArrowLeftSLine className='text-2xl text-icon-color hover:text-aide-primary cursor-pointer' />
                        <RiArrowRightSLine className='text-2xl text-icon-color hover:text-aide-primary cursor-pointer' />
                    </div>
                </div>
                {/* content */}
                <div className="mt-5 flex flex-col lg:flex-row lg:justify-between gap-12 lg:gap-[4.3rem]">
                    {/* left-content */}
                    <div className="lg:flex-1">
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
                    </div>
                    {/* Right-content */}
                    <div className="lg:flex-1 text-[#07484A]">
                        <div>
                            <span>Cast Aluminum Outdoor Chaise Lounge As an elegant and classic touch to your outdoor space, this cast Aluminum Chaise Lounge combines the appearance, </span>
                        </div>
                        {/* card-slider */}
                        <div className="mt-4 lg:mt-6 flex flex-col gap-2 overflow-y-auto h-108 scrollbar-design pr-2">
                            {
                                [...Array(7)].map((_, i) => (
                                    <TopProductCard key={i} />
                                ))
                            }
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
};

export default SpecialPackage;