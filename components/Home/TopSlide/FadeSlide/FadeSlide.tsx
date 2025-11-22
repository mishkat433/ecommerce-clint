import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import image1 from "../../../../public/assets/slider2.jpg"
import image2 from "../../../../public/assets/slider3.jpg"
import image4 from "../../../../public/assets/advertiseImage.png"
import { Autoplay, EffectFade, Navigation, Pagination } from 'swiper/modules';
import Image from 'next/image';

const FadeSlide = () => {

    const fakeSlide = [
        { id: 1, image: image4 },
        { id: 2, image: image2 },
        { id: 3, image: image1 },
    ]


    return (
        <div className="fadeSlide w-full h-full ">
            <Swiper effect={'fade'} loop={true}
                autoplay={{
                    delay: 5000,
                    disableOnInteraction: false,
                }}
                modules={[Autoplay, EffectFade, Navigation, Pagination]}
                className="mySwiper w-full h-full" >
                {
                    fakeSlide.map((data: any, id) => (
                        <SwiperSlide key={id}>
                            <Image src={data.image} alt={`Slide ${data.id}`} className="w-full h-full object-cover rounded-xl" />
                        </SwiperSlide>
                    ))
                }
            </Swiper>
        </div>
    );
};

export default FadeSlide;
