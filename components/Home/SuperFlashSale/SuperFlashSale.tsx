// import MainProductCard from "@/como/ProductCards/MainProductCard";
import Link from "next/link";
import { useEffect } from "react";
import { RiArrowLeftSLine, RiArrowRightSLine } from "react-icons/ri";
// import { Navigation, Scrollbar } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
// import { getProduct } from "../../../Redux/AllProductsSlice/AllProductsSlice";
// import { useAppDispatch, useAppSelector } from "../../../Redux/app/hooks";
import PreLoader from "../../Spinner/PreLoader";
import moment from "moment";
import { Navigation, Scrollbar } from "swiper/modules";


const SuperFlashSale = () => {
  // const { isLoading, products, error } = useAppSelector((state) => state.allProducts);
  // const dispatch = useAppDispatch();

  const month = moment().format('MMMM')

  // useEffect(() => {
  //   dispatch(getProduct());
  // }, [dispatch]);

  // if (isLoading) {
  //   return <PreLoader />;
  // }

  // if (error) {
  //   return (
  //     <h1 className="text-center text-red-500 text-xl py-10">
  //       {" "}
  //       Products not found. check your connection{" "}
  //     </h1>
  //   );
  // }
  return (
    <section className="easierToChoose container mx-auto my-10 md:mb-12 lg:mb-16">
      <div className="easierToChooseHeading font-roboto">
        <div className="heading_area select-none">
          <h2>
            {month} Super Flash Sale <span className="text-lg">⚡</span>
          </h2>
          {/* <RiFlashlightFill className='text-2xl rotate-[20deg] text-yellow-600' /> */}
          <div className="flex gap-1 md:gap-2 items-center ml-1 md:ml-5">
            {" "}
            Ends in
            <p className="p-1 bg-aide-primary text-white leading-5 rounded-sm">  04</p>
            {" "}
            :
            <p className="p-1 bg-aide-primary text-white leading-5 rounded-sm">
              24
            </p>{" "}
            :
            <p className="p-1 bg-aide-primary text-white leading-5 rounded-sm">
              39
            </p>
          </div>
        </div>
        <div className="heading_right_side">
          <Link href="/">See all</Link>
          <div className="slider_navigation ">
            <div className="prev_flashSale">
              <RiArrowLeftSLine className="slider_next_prev_btn" />
            </div>
            <div className="next_flashSale">
              <RiArrowRightSLine className="slider_next_prev_btn" />
            </div>
          </div>
        </div>
      </div>
      <div className="offers_slider font-inter">
        <div className=" product_grid_area">
          {/* {products.length === 0 && (
            <h4 className="text-secondary-text text-2xl text-center my-3">
              {" "}
              Super Flash Sale Product is Empty
            </h4>
          )} */}
          <Swiper
            navigation={{
              prevEl: ".prev_flashSale",
              nextEl: ".next_flashSale",
            }}
            slidesPerView={1}
            spaceBetween={10}
            breakpoints={{
              576: {
                slidesPerView: 2,
              },
              768: {
                slidesPerView: 3,
              },
              992: {
                slidesPerView: 5,
              },
              1920: {
                slidesPerView: 6,
              },
            }}
            modules={[Scrollbar, Navigation]}
            className="mySwiper"
          >
            {/* {products?.map((product: any) => ( */}
            <SwiperSlide >
              {/* <MainProductCard product={product} /> */}
            </SwiperSlide>
            {/* ))} */}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default SuperFlashSale;
