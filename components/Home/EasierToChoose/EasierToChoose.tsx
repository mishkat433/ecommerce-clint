'use client';

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/scrollbar";
import { Swiper, SwiperSlide } from "swiper/react";
import '../../CommonSCSS/CommonScss.scss';
import OfferZoneCard from '@/components/ProductCards/OfferZoneCard';
import { Navigation, Pagination, Scrollbar } from "swiper/modules";
import { useRef } from "react";
import EasierToChooseHeading from "./EasierToChooseHeading";

import offer1 from "../../../public/assets/demo-category-image.png"
import offer3 from "../../../public/assets/offer3.jpg"
import offer4 from "../../../public/assets/Offer4.jpg"


const EasierToChoose = () => {

    const prevRef = useRef(null);
    const nextRef = useRef(null);


    const fakeOffers = [
        { id: 1, image: offer1 },
        { id: 2, image: offer4 },
        { id: 3, image: offer3 },
        { id: 4, image: offer4 },
        { id: 5, image: offer1 },
        { id: 6, image: offer4 },
        { id: 7, image: offer3 },
        { id: 8, image: offer1 },
        { id: 9, image: offer4 },
        { id: 10, image: offer3 }
    ];

    return (
        <section className='easierToChoose p-2 md:p-4'>
            <EasierToChooseHeading prevRef={prevRef} nextRef={nextRef} />

            <div className='offers_slider'>
                <Swiper
                    modules={[Navigation, Scrollbar, Pagination]}
                    slidesPerView={1}
                    spaceBetween={13}
                    breakpoints={{
                        576: { slidesPerView: 2 },
                        768: { slidesPerView: 4 },
                        992: { slidesPerView: 6.5 },
                    }}
                    onBeforeInit={(swiper: any) => {
                        swiper.params.navigation.prevEl = prevRef.current;
                        swiper.params.navigation.nextEl = nextRef.current;
                    }}
                    onSwiper={(swiper: any) => { swiper.navigation.init(); swiper.navigation.update(); }}

                    navigation={{ prevEl: prevRef.current, nextEl: nextRef.current, }}
                    pagination={{ type: 'progressbar' }}

                    className="mySwiper"
                >
                    {fakeOffers.map((data: any, id) => (
                        <SwiperSlide key={id}>
                            <OfferZoneCard data={data} fromSidebar={false} fromHomepage={true} />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    );
};

export default EasierToChoose;
