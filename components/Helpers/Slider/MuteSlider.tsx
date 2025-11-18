import { NextPage } from 'next'

interface Props { }

const MuteSlider: NextPage<Props> = ({ }) => {
    return <div>
        <div className='slider_wrapper font-roboto bg-amber-200 h-2 w-2xl'>
            {/* <div className='slider_content'>
                <h1 data-aos="fade-down" data-aos-duration='1500'>{slide.text1}</h1>
                <h2 data-aos="fade-down" data-aos-duration='2000'>{slide.text2}</h2>
                <h4 data-aos="fade-down" data-aos-duration='2500'>{slide.text3}</h4>
            </div> */}
            <div className='slider_image '>
                {/* <Image className='rounded-md' src={slide} alt="" priority={true} height="800" width="1000" /> */}
            </div>
        </div>
    </div>
}

export default MuteSlider