"use client"

import ScrollSlide from "./NavigationSlide/ScrollSlide"
import FadeSlide from "./FadeSlide/FadeSlide"

const HomeBanner = ({ }) => {
    return <section className=" md:flex lg:flex-row md:gap-3 md:ml-2 md:h-72 ">
        <div className="w-full md:w-[82%] h-full ">
            <ScrollSlide />
        </div>

        <div className="w-full lg:w-[17%] h-full hidden md:block ">
            <FadeSlide />
        </div>
    </section>

}

export default HomeBanner;