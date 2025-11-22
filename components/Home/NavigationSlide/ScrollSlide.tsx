"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import image1 from "../../../public/assets/slider1.png";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "./NvigationSlide.scss"

type BannerSlide = {
    id: number;
    image: string;
    title: string;
    subtitle: string;
    offer: string;
};

export default function HeroSlider() {


    const fakeBannerSlides: BannerSlide[] = [
        {
            id: 1,
            image: image1.src,
            title: "ENJOY PEACE IN SHOPPING",
            subtitle: "Best Deal Online on smart watches",
            offer: "UP to 80% OFF",
        },
        {
            id: 2,
            image: image1.src,
            title: "BIGGEST SALE OF THE YEAR",
            subtitle: "Exclusive Deals & Discounts",
            offer: "UP to 75% OFF",
        },
        {
            id: 3,
            image: image1.src,
            title: "BIGGEST SALE OF THE YEAR",
            subtitle: "Exclusive Deals & Discounts",
            offer: "UP to 50% OFF",
        },
    ];

    return (
        <div className="w-full h-48 sm:h-56 md:h-64 lg:h-72 overflow-hidden">
            <Swiper
                spaceBetween={2}
                slidesPerView={1}
                breakpoints={{
                    640: { slidesPerView: 1 },
                    1024: { slidesPerView: 1 },
                    1440: { slidesPerView: 1 },
                }}
                centeredSlides={true}
                loop={true}
                speed={1000}
                navigation={true}
                pagination={{ clickable: true }}
                autoplay={{
                    delay: 4000,
                    disableOnInteraction: false,
                }}




                modules={[Autoplay, Pagination, Navigation]}

                className="mySwiper h-full rounded-lg overflow-hidden"
            >
                {fakeBannerSlides.map((slide) => (
                    <SwiperSlide key={slide.id}>
                        <div className="  w-full h-full bg-cover bg-center  relative  flex flex-col justify-center  px-4 sm:px-8 md:px-14 lg:px-20  text-white "
                            style={{ backgroundImage: `url(${slide.image})` }}
                        >
                            <p className="text-xs sm:text-sm md:text-base opacity-90">{slide.title}</p>
                            <h1 className="text-lg sm:text-xl md:text-3xl lg:text-4xl font-bold my-2">
                                {slide.subtitle}
                            </h1>
                            <p className="text-sm sm:text-base md:text-lg opacity-90">{slide.offer}</p>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div >

    );
}
