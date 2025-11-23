'use client';

import { useState } from 'react';
import CategoryCart from './CategoryCart/CategoryCart';
// import PreLoader from '../../Spinner/PreLoader';


const Category = () => {
    const [selectCategory, setSelectCategory] = useState<number>(1)
    // const [allCategory, setAllCategory] = useState([])
    const [searchQuery, setSearchQuery] = useState('')


    // useEffect(() => {
    //     axios.get(`https://aide-api.vercel.app/category?search=${searchQuery}`)
    //         .then(data => setAllCategory(data.data));
    // }, [searchQuery])



    // if (isCategoryLoading) {
    //     return <PreLoader />
    // }

    // if (categoryError) {
    //     return <p className="text-center font-roboto text-error-color text-xl py-10">{categoryError} </p>
    // }


    return (
        <section className='fullCategory container mx-auto'>
            <h1 className='CategoryHeading font-Player-Display font-bold text-[4rem] text-[#07484A] text-center mb-17 select-none'>Explore by Category</h1>
            <div className='mainCategory'>
                <div className='leftSide'>
                    <div className='max-w-md mx-auto  '>
                        <div className="relative flex items-center w-full h-[50px] rounded-lg focus-within:shadow-lg bg-[#F0F0F0] overflow-hidden">
                            <div className="grid place-items-center h-full w-12 text-gray-400">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                </svg>
                            </div>
                            <input onChange={(e) => setSearchQuery(e.target.value)} className="peer h-[75px] w-full outline-none text-lg text-gray-700 pr-2 bg-[#F0F0F0]" type="text" id="search" placeholder="Search..." />
                        </div>
                    </div>
                    {/* <div className='allButton '>
                        <Swiper
                            // navigation={{
                            //     prevEl: '.prev_easyChose',
                            //     nextEl: '.next_easyChose',
                            // }}
                            direction={"vertical"}
                            mousewheel={true}
                            spaceBetween={0}
                            scrollbar={true}
                            breakpoints={{
                                576: {
                                    slidesPerView: 2,
                                },
                                768: {
                                    slidesPerView: 3,
                                },
                                992: {
                                    slidesPerView: 8,
                                },
                            }}
                            modules={[Navigation, Scrollbar, Mousewheel]}
                            className="categorySwiper"
                        >
                            {
                                [...Array(15)].map((slide: any, i) => (
                                    <SwiperSlide key={i} className="slideHeight" >
                                        <button onClick={() => setSelectCategory(i)} className={selectCategory === i ? 'active' : undefined}>Category {i}</button>
                                    </SwiperSlide>
                                ))
                            }
                        </Swiper>
                    </div> */}
                    <div className='allButton font-roboto text-6'>
                        <p>Coming Sooooooooooon</p>
                        {/* {
                            allCategory?.map((category: any) => (
                                <button key={category?._id} className={`active`} onClick={() => categoryLoadById(category?._id)}>{category?.name}</button>
                            ))
                        } */}

                        {/* <button onClick={() => setSelectCategory(1)} className={selectCategory === 1 ? 'active' : undefined}>Category1</button> */}
                        {/* <button onClick={() => setSelectCategory(2)} className={selectCategory === 2 ? 'active' : undefined}>Category2</button>
                        <button onClick={() => setSelectCategory(3)} className={selectCategory === 3 ? 'active' : undefined}>Category3</button>
                        <button onClick={() => setSelectCategory(4)} className={selectCategory === 4 ? 'active' : undefined}>Category4</button>
                        <button onClick={() => setSelectCategory(5)} className={selectCategory === 5 ? 'active' : undefined}>Category5</button>
                        <button onClick={() => setSelectCategory(6)} className={selectCategory === 6 ? 'active' : undefined}>Category6</button>
                        <button onClick={() => setSelectCategory(7)} className={selectCategory === 7 ? 'active' : undefined}>Category7</button>
                        <button onClick={() => setSelectCategory(8)} className={selectCategory === 8 ? 'active' : undefined}>Category8</button>
                        <button onClick={() => setSelectCategory(9)} className={selectCategory === 9 ? 'active' : undefined}>Category9</button>
                        <button onClick={() => setSelectCategory(10)} className={selectCategory === 10 ? 'active' : undefined}>Category10</button>
                        <button onClick={() => setSelectCategory(11)} className={selectCategory === 11 ? 'active' : undefined}>Category11</button>
                        <button onClick={() => setSelectCategory(12)} className={selectCategory === 12 ? 'active' : undefined}>Category12</button> */}
                    </div>
                </div>
                {/* {
                    isCategoryByIdLoading && <div className='flex justify-center items-center'><Spinner /></div>
                } */}
                {/* <div className="w-full md:w-3/4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-2.5 h-[70vh]  md:h-[80vh] lg:h-[70vh] overflow-y-auto px-3" > */}
                {/* {
                        allCategory.length === 0 && <p className="text-center text-red-500 text-xl"> Not Product found of this category </p>
                    } */}
                {/* {!isCategoryByIdLoading && categoryById.length === 0 ?
                        (
                            allCategory?.map((category: any) => (
                                <CategoryCart key={category?._id} selectCategory={category} />

                            ))
                        ) : (
                            categoryById?.map((category: any) => (
                                <CategoryCart key={category?._id} selectCategory={category} />

                            ))
                        )
                    } */}

                {/* </div> */}
            </div>
        </section >
    );
};

export default Category;
