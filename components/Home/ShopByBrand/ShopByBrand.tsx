'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import PreLoaderMedium from '../../Spinner/PreLoaderMedium';
import { Navigation, Scrollbar } from 'swiper/modules';
import ShopByBrandCard from '@/components/Cards/ShopByBrandCard';
import image1 from '../../../public/assets/square.png'
import image2 from '../../../public/assets/companyPageProfile.png'
import image3 from '../../../public/assets/nestle.png'
import image4 from '../../../public/assets/brandPageProfile.png'
import Link from 'next/link';
import { RiArrowLeftSLine, RiArrowRightSLine } from 'react-icons/ri';

const ShopByBrand = () => {
    const isBrandLoading = false;


    if (isBrandLoading) {
        return <PreLoaderMedium />
    }

    // if (brandDataError) {
    //     return <h1 className="text-center text-red-500 text-xl py-10"> {brandDataError}, Check your connection</h1>
    // }

    const fakeBrandData = [
        {
            'name': 'Brand Name',
            'logo': image1,
            '_id': 1
        },
        {
            'name': 'Brand Name',
            'logo': image2,
            '_id': 2
        },
        {
            'name': 'Brand Name',
            'logo': image3,
            '_id': 3
        },
        {
            'name': 'Brand Name',
            'logo': image4,
            '_id': 4
        },
        {
            'name': 'Brand Name',
            'logo': image2,
            '_id': 5
        },
        {
            'name': 'Brand Name',
            'logo': image1,
            '_id': 6
        },
        {
            'name': 'Brand Name',
            'logo': image3,
            '_id': 7
        },
        {
            'name': 'Brand Name',
            'logo': image2,
            '_id': 8
        },
        {
            'name': 'Brand Name',
            'logo': image2,
            '_id': 9
        },
        {
            'name': 'Brand Name',
            'logo': image3,
            '_id': 10
        },
        {
            'name': 'Brand Name',
            'logo': image4,
            '_id': 11
        },
        {
            'name': 'Brand Name',
            'logo': image2,
            '_id': 12
        },
        {
            'name': 'Brand Name',
            'logo': image1,
            '_id': 13
        },
    ]

    return (
        <section className='  mb-10 md:mb-12 lg:mb-16 bg-gray-200 rounded-lg p-2'>
            <div className=' p-2 border-3 border-white rounded-lg '>
                <div className='bg-gray-200'>
                    <div className='easierToChooseHeading font-roboto'>
                        <div className='heading_area select-none '>
                            <h2 >Shop By Brand</h2>
                        </div>
                        <div className="heading_right_side">
                            <Link href='/allBrands'>See all</Link>
                            <div className="slider_navigation">
                                <div className='prev_brand'>
                                    <RiArrowLeftSLine className='slider_next_prev_btn' />
                                </div>
                                <div className='next_brand'>
                                    <RiArrowRightSLine className='slider_next_prev_btn' />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className=' py-2 select-none rounded mt-2'>
                        <Swiper
                            navigation={{
                                prevEl: '.prev_brand',
                                nextEl: '.next_brand',
                            }}
                            spaceBetween={13}
                            breakpoints={{
                                414: {
                                    slidesPerView: 2,
                                },
                                768: {
                                    slidesPerView: 5.5,
                                },
                                992: {
                                    slidesPerView: 10.5,
                                },
                            }}
                            modules={[Navigation, Scrollbar]}
                            className="mySwiper" >
                            {
                                fakeBrandData.map((brands: any, i) => (
                                    <SwiperSlide key={i}>
                                        <ShopByBrandCard brand={brands} />
                                    </SwiperSlide>
                                ))
                            }
                        </Swiper>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ShopByBrand;