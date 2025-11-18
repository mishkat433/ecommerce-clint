"use client"

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import Image from 'next/image';
import image1 from "../../../public/assets/slider1.png"



const ScrollSlide = () => {

    return (

        <div className='full-slider'>
            <div className={`slider-parts bg-[${image1}] bg-cover bg-no-repeat bg-center`}>
                {/* <div> */}
                <Swiper
                    spaceBetween={30}
                    centeredSlides={true}
                    autoplay={{
                        delay: 4000,
                        disableOnInteraction: false,
                    }}
                    loop={true}
                    pagination={{
                        clickable: true,
                    }}
                    navigation={true}
                    modules={[Autoplay, Pagination, Navigation]}
                    className="swiper-slide"
                >

                    {/* {
                        homeBanner[0]?.sliderImages?.map((slide: any, i: any) => (
                            <SwiperSlide key={i}>
                                <ScrollSlide slide={slide} />
                            </SwiperSlide>
                        ))
                    } */}

                    <SwiperSlide className={`swiper-slider bg-[../../../public/assets/slider1.png] bg-cover bg-no-repeat bg-center`}>
                        <div className='inner-slider bg-[../../../public/assets/slider1.png] bg-cover bg-no-repeat bg-center' data-aos="fade-down">
                            <p className='slide-title'>Best Deal Online on Mishkat</p>
                            <h1 className='slide-heading'>ENJOY PEACE IN SHOPPING</h1>
                            <p className='slide-title'>UP to 80% OFF</p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className='swiper-slider'>
                        <div className='inner-slider' data-aos="fade-down">
                            <p className='slide-title'>Best Deal Online on Mishkat</p>
                            <h1 className='slide-heading'>ENJOY PEACE IN SHOPPING</h1>
                            <p className='slide-title'>UP to 70% OFF</p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className='swiper-slider'>
                        <div className='inner-slider' data-aos="fade-down">
                            <p className='slide-title'>Best Deal Online on Mishkat</p>
                            <h1 className='slide-heading'>ENJOY PEACE IN SHOPPING</h1>
                            <p className='slide-title'>UP to 75% OFF</p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className='swiper-slider' >
                        <div className='inner-slider' data-aos="fade-down">
                            <p className='slide-title'>Best Deal Online on Mishkat</p>
                            <h1 className='slide-heading'>ENJOY PEACE IN SHOPPING</h1>
                            <p className='slide-title'>UP to 80% OFF</p>
                        </div>
                    </SwiperSlide>
                </Swiper>
                {/* <Image src={sliderSide} className="side-image" alt="side" /> */}
                {/* </div>
                <div>
                    <img src={sliderSide} alt="side" />
                </div> */}
            </div>

        </div>

    );
};



export default ScrollSlide;