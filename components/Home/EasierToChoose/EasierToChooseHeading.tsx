import React from 'react';
import Link from 'next/link';
import { RiArrowLeftSLine, RiArrowRightSLine } from 'react-icons/ri';



const EasierToChooseHeading = ({ prevRef, nextRef }: any) => {
    return (
        <div className='easierToChooseHeading font-roboto mb-2'>
            <div className='heading_area select-none '>
                <h2>Now Easier to Choose</h2>
                <h4>Special Features</h4>
            </div>

            <div className="heading_right_side">
                <Link href='/offerZone'>See all</Link>

                <div className="slider_navigation">
                    <div className='prev_easyChose' ref={prevRef}>
                        <RiArrowLeftSLine className='slider_next_prev_btn' />
                    </div>
                    <div className='next_easyChose' ref={nextRef}>
                        <RiArrowRightSLine className='slider_next_prev_btn' />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EasierToChooseHeading;