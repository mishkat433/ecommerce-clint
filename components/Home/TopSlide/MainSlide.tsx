"use client"
import { Swiper } from "swiper/react"
import MuteSlide from "../MuteSlide/MuteSlide"
import ScrollSlide from "../NavigationSlide/ScrollSlide"
import { Autoplay, Navigation, Pagination } from "swiper/modules"
import image1 from "../../../public/assets/slider1.png"

const MainSlide = ({ }) => {
    return <section className="">
        <div className={``}>
            <ScrollSlide />

        </div>
        <div>
            <MuteSlide />
        </div>
    </section >
}

export default MainSlide