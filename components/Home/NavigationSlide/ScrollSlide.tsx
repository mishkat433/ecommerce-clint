"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import image1 from "../../../public/assets/slider1.png";

export default function HeroSlider() {
    const slides = [
        {
            id: 1,
            image: { image1 },
            title: "ENJOY PEACE IN SHOPPING",
            subtitle: "Best Deal Online on smart watches",
            offer: "UP to 80% OFF",
        },
        {
            id: 2,
            image: { image1 },
            title: "BIGGEST SALE OF THE YEAR",
            subtitle: "Exclusive Deals & Discounts",
            offer: "UP to 75% OFF",
        },
    ];

    return (
        <div className="w-full px-4 border  h-60">
            {/* <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{ delay: 3500, disableOnInteraction: false }}
                loop={true}
                navigation
                pagination={{ clickable: true }}
                modules={[Autoplay, Navigation, Pagination]}
                className="w-full h-[280px] md:h-[350px] rounded-2xl overflow-hidden"
            >
                {slides.map((slide) => (
                    <SwiperSlide key={slide.id}>
                        <div className="w-full h-full bg-cover bg-center relative" style={{ backgroundImage: `url(${image1.src})` }}  >

                            <div className="relative z-10 flex flex-col justify-center h-full px-8 md:px-16 text-white">
                                <p className="text-sm md:text-base opacity-90">{slide.subtitle}</p>
                                <h1 className="text-2xl md:text-4xl font-bold my-2">{slide.title}</h1>
                                <p className="text-base md:text-lg opacity-90">{slide.offer}</p>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper> */}
        </div>
    );
}
