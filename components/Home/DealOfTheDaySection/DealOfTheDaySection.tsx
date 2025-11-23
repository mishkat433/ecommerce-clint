'use client';

import ArrowLeft from '@/components/Icons/ArrowLeft';
import ArrowRight from '@/components/Icons/ArrowRight';
import DealOfTheTimer from '@/components/OfferTimer/DealOfTheTimer';
import { Navigation, Pagination } from 'swiper/modules';
import { SwiperSlide, Swiper } from 'swiper/react';
import dealOfTheDayBG from '../../../public/assets/deal_of_the_day_bg.png'
import DealOfTheDayCard from '@/components/Cards/DealOfTheDayCard';



const DealOfTheDaySection = () => {

    const fakeData = [
        { id: 1 },
        { id: 2 },
        { id: 3 },
        { id: 4 },
        { id: 5 },
        { id: 6 },

    ]

    return (
        <section
            className='bg-no-repeat bg-top bg-cover p-10 md:py-20 font-roboto mb-default' style={{ backgroundImage: `url(${dealOfTheDayBG.src})` }}>
            <div className=" flex flex-col-reverse lg:flex-row justify-between items-center gap-2.5 container mx-auto px-[15px] xl:max-w-[1182px]">
                <div className="flex flex-col md:flex-row lg:flex-col justify-start gap-2.5 lg:gap-0 mt-10 lg:mt-0 w-full">
                    <div>
                        <h1 className="text-[40px] leading-[120.6%] font-bold text-aide-primary mb-[17px]">Deal <br />of the day</h1>
                        <div className="flex gap-[13px]">
                            <div className="cursor-pointer text-[#07484A] w-10 h-10 bg-[#E0EFF6] flex justify-center items-center rounded-full next_dealOfTheDay">
                                <span className="w-3">
                                    <ArrowRight />
                                </span>
                            </div>
                            <div className="text-[#07484A] w-10 h-10 bg-[#F9D9DA] flex justify-center items-center rounded-full cursor-pointer prev_dealOfTheDay">
                                <span className="w-3">
                                    <ArrowLeft />
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className="mt-10 lg:mt-[91px]">
                        <p className="font-normal text-xl leading-6 text-[#4A556] mb-5">Hurry up offer ends in</p>
                        <DealOfTheTimer bgColor="bg-[#D1D1D1]" />
                    </div>
                </div>
                <div className='w-full md:w-full lg:max-w-2xl xl:max-w-[792px]'>
                    <Swiper
                        spaceBetween={10}
                        centeredSlides={true}
                        effect={"fade"}
                        navigation={{
                            prevEl: '.prev_dealOfTheDay',
                            nextEl: '.next_dealOfTheDay',
                        }}
                        loop={true}
                        speed={1000}
                        modules={[Pagination, Navigation]}
                        className="mySwiper"
                    >
                        {
                            fakeData.map((slide: any, i) => (
                                <SwiperSlide key={i}>
                                    <DealOfTheDayCard />
                                </SwiperSlide>
                            ))
                        }
                    </Swiper>
                </div>
            </div>
        </section>
    );
};

export default DealOfTheDaySection;