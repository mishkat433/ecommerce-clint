'use client';

import Link from 'next/link';
import { RiArrowLeftSLine, RiArrowRightSLine } from 'react-icons/ri';
import { Swiper, SwiperSlide } from 'swiper/react';
import ShopByCompanyCard from '@/components/Cards/ShopByCompanyCard';
import { Navigation } from 'swiper/modules';

import img1 from "../../../public/assets/square.png"
import img2 from "../../../public/assets/nestle.png"
import img3 from "../../../public/assets/companyPageProfile.png"

const ShopByCompany = () => {


    // useEffect(() => {
    //     dispatch(getAllCompany())
    // }, [dispatch])

    // if (isCompanyLoading) {
    //     return <PreLoaderMedium />
    // }

    // if (compnayError) {
    //     return <div className=' text-red-500 text-xl flex justify-center items-center gap-2 pb-default'>
    //         <p className=" ">{compnayError}, Check your connection </p>
    //         <button className='underline text-aide-primary' onClick={() => dispatch(getAllCompany())}>retry</button>
    //     </div>
    // }


    const fakeCompany = [
        {
            logo: img1,
            name: 'Square',
            seo_tag: " ",
            _id: 1,
            brands: [
                { name: 'Rupchanda' },
                { name: 'Rupchanda' },
                { name: 'Olompyc' },
                { name: 'Rupchanda' },
                { name: 'Olompyc' },
                { name: 'Rupchanda' },
                { name: 'Olompyc' },
                { name: 'Rupchanda' }
            ],
            visibility: true
        },
        {
            logo: img2,
            name: 'Square',
            seo_tag: " ",
            _id: 2,
            brands: [
                { name: 'Rupchanda' }
            ],
            visibility: true
        },
        {
            logo: img3,
            name: 'Nestle',
            seo_tag: " ",
            _id: 3,
            brands: [
                { name: 'Rupchanda' }
            ],
            visibility: true
        },
        {
            logo: img3,
            name: 'Rupchanda',
            seo_tag: " ",
            _id: 4,
            brands: [
                { name: 'Rupchanda' }
            ],
            visibility: true
        },
        {
            logo: img1,
            name: 'Square',
            seo_tag: " ",
            _id: 5,
            brands: [
                { name: 'Rupchanda' }
            ],
            visibility: true
        },
        {
            logo: img1,
            name: 'Square',
            seo_tag: " ",
            _id: 6,
            brands: [
                { name: 'Rupchanda' }
            ],
            visibility: true
        },
        {
            logo: img1,
            name: 'Square',
            seo_tag: " ",
            _id: 7,
            brands: [
                { name: 'Rupchanda' }
            ],
            visibility: true
        },
        {
            logo: img1,
            name: 'Square',
            seo_tag: " ",
            _id: 8,
            brands: [
                { name: 'Rupchanda' }
            ],
            visibility: true
        },
        {
            logo: img1,
            name: 'Square',
            seo_tag: " ",
            _id: 9,
            brands: [
                { name: 'Rupchanda' }
            ],
            visibility: true
        },
        {
            logo: img1,
            name: 'Square',
            seo_tag: " ",
            _id: 10,
            brands: [
                { name: 'Rupchanda' }
            ],
            visibility: true
        },
        {
            logo: img1,
            name: 'Square',
            seo_tag: " ",
            _id: 11,
            brands: [
                { name: 'Rupchanda' }
            ],
            visibility: true
        },
    ]

    return (

        <section className='easierToChoose  mb-10 md:mb-12 lg:mb-16'>
            <div className='p-2'>
                <div className='easierToChooseHeading font-roboto'>
                    <div className='heading_area select-none'>
                        <h2 >Shop By Company</h2>
                    </div>
                    <div className="heading_right_side">
                        <Link href='/allCompany'>See all</Link>
                        <div className="slider_navigation">
                            <div className='prev_company'>
                                <RiArrowLeftSLine className='slider_next_prev_btn' />
                            </div>
                            <div className='next_company'>
                                <RiArrowRightSLine className='slider_next_prev_btn' />
                            </div>
                        </div>
                    </div>
                </div>
                <div className='py-2 select-none rounded mt-2'>
                    <Swiper
                        navigation={{
                            prevEl: '.prev_company',
                            nextEl: '.next_company',
                        }}
                        // slidesPerView={}
                        spaceBetween={13}
                        // scrollbar={true}
                        breakpoints={{
                            576: {
                                slidesPerView: 1,
                            },
                            768: {
                                slidesPerView: 2,
                            },
                            992: {
                                slidesPerView: 5.3,
                            },
                        }}
                        modules={[Navigation]}
                        className="mySwipers"
                    >
                        {
                            fakeCompany.map((companys: any, i) => (
                                <SwiperSlide >
                                    <ShopByCompanyCard company={companys} />
                                </SwiperSlide>
                            ))
                        }

                    </Swiper>
                </div>
            </div>
        </section>
    );
};

export default ShopByCompany;