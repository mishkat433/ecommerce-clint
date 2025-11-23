import React from 'react';
import AddToCartIcon from '../Icons/AddToCartIcon';
import everyDay from '../../public/assets/everyDay.png'
import Image from 'next/image';
import DealOfTheTimer from '../OfferTimer/DealOfTheTimer';

const DealOfTheDayCard = () => {
    return (
        <div className="rounded-[10px] w-full  border border-[#D0D0D0] bg-white py-6 px-8 font-roboto container mx-auto">
            <div className="mb-2 flex items-center justify-between">
                <div>
                    <a href="#" className="rounded-[14px] bg-aide-primary py-2.5 px-6 text-base font-bold leading-5 text-white">HOT DEALS</a>
                </div>
                <div className="rounded-[5px] bg-aide-primary p-2.5 text-white w-10">
                    <AddToCartIcon />
                </div>
            </div>
            <div className="flex flex-col md:flex-row justify-between">
                <div className='flex flex-col justify-between'>
                    <div>
                        <div>
                            <h1 className="text-xl font-normal leading-6 mb-3 text-[#222]">Nestle Rveryday  Full Cream Milk Powder</h1>
                            <h5 className="text-xl font-normal leading-6 text-[#4a5568] mb-5">500g</h5>
                            <div className='flex justify-start items-center mb-5 gap-5'>
                                <h2 className="product_price_text">৳422.75 <del className="text-[#828282] font-medium">৳86.40</del></h2>
                                <div className="bg-error-bg rounded py-1 px-1.5">
                                    <p className="product_price_discount">- 58%</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="text-xl font-normal leading-6 text-black">
                        <div className="mb-5 h-5 w-full rounded-full bg-[#E9ECEF]">
                            <div className="h-5 rounded-full bg-[#0E947A]" style={{ width: '45%' }}></div>
                        </div>
                        <div>
                            <h3 className="mb-2.5 text-xl font-normal leading-6 text-[#4A5568]">Sold: <span className="text-[#222222]">30 Items</span></h3>
                            <p className="mb-7 text-xl font-normal leading-6 text-[#4A5568]">Hurry up offer ends in</p>
                        </div>
                        <DealOfTheTimer bgColor='bg-[#ECECEC]' />
                    </div>
                </div>
                <div className='mx-auto'>
                    <Image src={everyDay} alt='Every Day' />
                </div>
            </div>
        </div>
    );
};

export default DealOfTheDayCard;