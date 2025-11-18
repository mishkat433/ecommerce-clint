"use client"
import { Swiper } from "swiper/react"
import MuteSlide from "../MuteSlide/MuteSlide"
import ScrollSlide from "../NavigationSlide/ScrollSlide"
import { Autoplay, Navigation, Pagination } from "swiper/modules"
import image1 from "../../../public/assets/slider1.png"

const MainSlide = ({ }) => {
    return <section className=" flex flex-row gap-4 ">
        <div className="w-10/12">
            <ScrollSlide />
        </div>
        <div className="w-2/12">
            <MuteSlide />
        </div>

    </section >
}

export default MainSlide