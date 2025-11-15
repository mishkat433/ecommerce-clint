"use client"

import ShoppingBagIcon from "@/components/Icons/ShoppingBagIcon";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { RiArrowDownSLine, RiMenuFoldFill, RiMenuFoldLine, RiMenuUnfoldFill, RiMenuUnfoldLine, RiMoonClearLine, RiNotification3Line, RiSearchLine, RiSunLine } from "react-icons/ri";
import Logo from './../../../public/Logo.png'



const NavBar = () => {
    // const { sidemenuControler, location, modalShowClose, authentication, cart } = useAppSelector((state) => state)
    // const { sideMenu, sideMenu2 } = sidemenuControler;
    // const { address } = location;
    // const { modalControl } = modalShowClose;
    // const { loginUserInfo } = authentication;
    const [sideMenu, setSideMenu] = useState(true);

    // const dispatch = useAppDispatch()
    const [darkMode, setDartMode] = useState(false)
    const [show, setShow] = useState(false);
    // const router = useRouter()
    // Navbar hide and show with Scroll
    // useEffect(() => {
    //     let previousScrollPosition = 0;
    //     let currentScrollPosition = 0;

    //     window.addEventListener('scroll', function (e) {
    //         currentScrollPosition = window.scrollY;
    //         if (previousScrollPosition - currentScrollPosition < 0) {
    //             setShow(false);
    //         } else if (previousScrollPosition - currentScrollPosition > 20) {
    //             setShow(true);
    //         }
    //         if (currentScrollPosition === 0) {
    //             setShow(false);
    //         }
    //         previousScrollPosition = currentScrollPosition;
    //     });
    // }, []);

    // const logoutHandle = () => {
    //     toast.success("Logout Successful")
    //     localStorage.removeItem("aide-auth-token")
    //     // localStorage.removeItem("aide-shopping-cart")
    //     dispatch(reset())
    //     dispatch(sidebar2Control(''))
    //     router.push('/')
    // }

    const myProfileHandle = () => {
        // dispatch(sidebarControl({ sideMenu: !sideMenu, sideMenu2: '' }))
    }


    // useEffect(() => {
    // navigator.geolocation.getCurrentPosition((position) => {
    // })
    //     ss()
    // }, [])

    // const ss = async () => {
    //     const url = 'https://geolocation-db.com/json/'
    // cadb1bb96cf32aaed577c477908beddf\
    //     const res = await axios.get(url)
    //     if (res.data.IPv4) {
    //         const ress = await axios.get(`https://geolocation-db.com/jsonp/a5f3c240-7310-11ed-8abc-5520d31fdee7/${res.data.IPv4}`)
    //     }
    // }

    {/* <RiMenuUnfoldFill />  */ }

    return (
        <header className={`py-3 mb-4 font-inter bg-white shadow-md duration-300 ${sideMenu && show ? 'w-full lg:w-[94%] duration-200' : 'w-full'} ${show ? "  duration-300" : ' duration-300 z-0'}`}>
            <div className={`mx-auto px-5 flex justify-between gap-2 items-center`}>
                {
                    !sideMenu ?
                        <div className=' cursor-pointer absolute top-50%  hover:text-aide-primary duration-300  ' onClick={() => setSideMenu(!sideMenu)} >
                            <RiMenuFoldFill className="text-2xl" />
                        </div> :
                        <div className=' cursor-pointer absolute top-50%  hover:text-aide-primary duration-300 ' onClick={() => setSideMenu(!sideMenu)} >
                            <RiMenuUnfoldFill className="text-2xl" />
                        </div>
                }
                <div className='ml-10'>
                    <Link href='/' className='flex gap-1 items-center '>
                        <Image priority={true} className={"h-10 w-[45px]"} src={Logo} alt="Aide-Logo" />
                        <h1 className='text-[20px] text-aide-primary font-poppins font-semibold'>ASFEM STORE</h1>
                    </Link>
                </div>

                {/* location start */}
                <div className='hidden md:flex flex-col lg:flex-row items-center'>
                    <span className='text-[15px] font-medium text-secondary-text'>Delivered to: </span>
                    <div className='flex items-center gap-1 ml-1'>
                        <div className='text-[#00AF9E]'><HiOutlineLocationMarker /></div>
                        <span className='text-[15px] font-medium text-secondary-text'> Current Location </span>
                        <span className='text-[15px] font-medium text-aide-primary'>Pekua </span>
                        <div className='relative'>
                            <RiArrowDownSLine className='navbarIconDesign' />
                        </div>
                    </div>
                </div>
                {/* location end */}

                <div className=''>
                    <ul className='flex gap-3 md:gap-6 items-center relative'>
                        <li className='navbarIconDesign' >
                            <RiSearchLine className='' />
                        </li>
                        <li className='text-xl text-icon-color  cursor-pointer relative group'><RiNotification3Line className='hover:text-aide-primary duration-300' />
                            <div className='h-2 w-2 bg-[#FF0000]  duration-300 rounded-full absolute top-[1px] right-[1px]'><span className='h-2 w-2 bg-[#FF0000] animate-ping duration-300 rounded-full absolute top-0 right-0'></span></div>
                            <div className='  fixed right-[5%] hidden group-hover:block  bg-white p-4 z-10 shadow-md rounded-md duration-300'>
                                <p className='text-error-color'>Notification empty</p>
                            </div>
                        </li>
                        <li className=' text-icon-color  cursor-pointer relative group hover:text-aide-primary duration-300' title='shopping bag' >
                            <ShoppingBagIcon />
                            <div className='bg-error-color absolute -top-[6px] -right-2 w-3 h-3 flex items-center justify-center text-bg-white text-[10px] rounded-full'>
                                {/* {cart?.cart?.length ? cart?.cart?.length : 0} */}
                            </div>
                        </li>
                        <li className='text-xl text-icon-color cursor-pointer hover:text-aide-primary duration-300 ml-1 md:ml-0 '>
                            {
                                darkMode ? <RiMoonClearLine onClick={() => setDartMode(!darkMode)} title="Dark mode" /> : <RiSunLine onClick={() => setDartMode(!darkMode)} title="Light mode" />
                            }
                        </li>
                        {/* {
                            loginUserInfo?.uid ?
                                <li className='flex items-center gap-[10px] cursor-pointer group'>
                                    <Image className='h-[35px] w-[35px] rounded-full' src={loginUserInfo?.imgUrl ? loginUserInfo?.imgUrl : notFoundImage} alt="Login User icon" height='300' width='300' />
                                    <div>
                                        {
                                            loginUserInfo?.name?.length >= 15 ?
                                                <h3 title={loginUserInfo?.name} className='text-sm'>{loginUserInfo?.name ? loginUserInfo?.name.slice(0, 15) + "..." : 'not found'}</h3> :
                                                <h3 className='text-sm'>{loginUserInfo?.name ? loginUserInfo?.name : 'not found'}</h3>
                                        }
                                        <OnlineOffline />
                                    </div>
                                    <ul className='absolute top-9 -right-5 md:-right-3 bg-white shadow-md  rounded-md show-child hidden group-hover:block text-body-text z-30'>
                                        <li onClick={() => sideMenu2 === 'myProfile' ? dispatch(sidebar2Control("")) : dispatch(sidebarControl({ sideMenu: true, sideMenu2: 'myProfile' }))} className='pl-4 pr-16 py-3 cursor-pointer hover:bg-[#EDF2F6] hover:text-aide-primary rounded-md duration-300'> <p className='flex gap-4 items-center'><ProfileIcon color="black" /> My Profile</p></li>
                                        <li onClick={logoutHandle} className='pl-4 pr-16 py-3 cursor-pointer hover:bg-[#EDF2F6] hover:text-aide-primary rounded-md duration-300'><p className='flex gap-4 items-center'><RiUpload2Line className='text-2xl rotate-90' /> Sign Out </p></li>
                                    </ul>
                                </li> :
                                <li onClick={() => dispatch(modalOpenClose('authentication'))} className='bg-aide-primary py-[6px] px-5 rounded-3xl text-sm cursor-pointer font-bold text-white border-1 hover:border-aide-primary hover:bg-white hover:text-aide-primary duration-300 font-roboto'>
                                    <button className=''>Sign-in</button>
                                </li>
                        } */}
                    </ul>
                </div>
            </div>
        </header>
    );
};

export default NavBar;
