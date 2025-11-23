"use client"

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { RiArrowDownSFill, RiArrowDownSLine } from 'react-icons/ri';

// import { useAppSelector } from '../../../Redux/app/hooks';


const Topbar = () => {
    const [language, setLanguage] = useState("English")
    const [languageClick, setLanguageClick] = useState(false)
    const [show, setShow] = useState(false);
    // const { sideMenu } = useAppSelector(state => state.sidemenuControler)
    useEffect(() => {
        let previousScrollPosition = 0;
        let currentScrollPosition = 0;

        window.addEventListener('scroll', function (e) {
            currentScrollPosition = window.scrollY;
            if (previousScrollPosition - currentScrollPosition < 0) {
                setShow(false);
            } else if (previousScrollPosition - currentScrollPosition > 20) {
                setShow(true);
            }
            if (currentScrollPosition === 0) {
                setShow(false);
            }
            previousScrollPosition = currentScrollPosition;
        });
    }, []);


    // 
    return (
        <div className=' md:mt-0 pb-0.5 font-inter transition-all bg-[#00AF9E] text-white text-[12px] w-full z-20  duration-200 '>
            <div className='flex md:flex-row justify-between items-center w-full mx-auto relative'>
                <div className='w-full px-5 mx-auto flex flex-col md:flex-row justify-between items-center'>
                    <ul className='flex gap-4 pt-1 md:py-2 flex-wrap'>
                        <li><Link href="/">Open Sponsorship</Link></li>
                        <li><Link href="/">Call Center</Link></li>
                        <li><Link href="/">Help</Link></li>
                        <li><Link href="/">Tutorial</Link></li>
                    </ul>
                    <div className=''>
                        <ul className='flex items-center  gap-4'>
                            <li><Link href="/">Be Partners</Link></li>
                            <li className=' z-10 cursor-pointer relative'>
                                <div className='flex items-center  duration-300 group'>
                                    <div className='flex gap-1'>
                                        <p className={` `}>{language}</p>
                                        <p className={` duration-300 group-hover:rotate-180`}> <RiArrowDownSLine className='text-xl' /> </p>
                                    </div>
                                    <ul className={`bg-[#00AF9E] px-4 scale-0 group-hover:scale-100 z-40 absolute -left-4 md:top-4 top-[50px] rounded  text-white `}>
                                        <li onClick={() => setLanguage("English")} className='hover:text-black mb-1 duration-300 mt-2'>English</li>
                                        <li onClick={() => setLanguage("Bangla")} className='hover:text-black duration-300 pb-1'>Bangla</li>
                                    </ul>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div >
            </div>
        </div>

    );
};

export default Topbar;