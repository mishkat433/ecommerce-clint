"use client"

import ScrollSlide from "../NavigationSlide/ScrollSlide"
import FadeSlide from "./FadeSlide/FadeSlide"

const MainSlide = ({ }) => {
    return <section className="flex flex-row gap-3 ml-2 h-72 ">
        <div className="w-10/12">
            <ScrollSlide />
        </div>

        <div className="w-2/12 h-full ">
            <FadeSlide />
        </div>
    </section>

}

export default MainSlide