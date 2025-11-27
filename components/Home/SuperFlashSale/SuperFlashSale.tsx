'use client';

import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import moment from "moment";
import { Navigation, Scrollbar } from "swiper/modules";
import { RiArrowLeftSLine, RiArrowRightSLine, RiFlashlightFill } from "react-icons/ri";
import MainProductCard from "@/components/Cards/MainProductCard";
import productImage1 from "../../../public/assets/soybeanOil.png";
import productImage2 from "../../../public/assets/milk.jpg";
import productImage3 from "../../../public/assets/ChilliPowder.png";
import productImage4 from "../../../public/assets/everyDay.png";
import '../../Cards/MainProductCard.scss'

const SuperFlashSale = () => {


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

  const fakeProduct = [
    {
      _id: '1',
      itemName: 'Ultra Level Soyabin Oil 5 Litter',
      price: 100,
      thumbnailImage: {
        url: productImage1
      },
      weightAndSize: {
        unitOfMeasure: {
          name: 'product'
        },
        weight: '34kg'
      },
      pricing: {
        unitSellPrice: 512,
        msrp: 112
      },
      discountable: {
        discount: 5
      },
      brandAndCompany: {
        company: 'Nestly',
        brand: "Rupchanda"
      },
      websiteVisibilityStatus: {
        status: 'published'
      }
    },
    {
      _id: '2',
      itemName: 'Ultra Level Soyabin Oil 5 Litter',
      price: 100,
      thumbnailImage: {
        url: productImage2
      },
      weightAndSize: {
        unitOfMeasure: {
          name: 'product'
        },
        weight: '34kg'
      },
      pricing: {
        unitSellPrice: 512,
        msrp: 112
      },
      discountable: {
        discount: 5
      },
      brandAndCompany: {
        company: 'Nestly',
        brand: "Rupchanda"
      },
      websiteVisibilityStatus: {
        status: 'published'
      }
    },
    {
      _id: '3',
      itemName: 'Ultra Level Soyabin Oil 5 Litter',
      price: 100,
      thumbnailImage: {
        url: productImage4
      },
      weightAndSize: {
        unitOfMeasure: {
          name: 'product'
        },
        weight: '34kg'
      },
      pricing: {
        unitSellPrice: 512,
        msrp: 112
      },
      discountable: {
        discount: 5
      },
      brandAndCompany: {
        company: 'Nestly',
        brand: "Rupchanda"
      },
      websiteVisibilityStatus: {
        status: 'published'
      }
    },
    {
      _id: '4',
      itemName: 'Ultra Level Soyabin Oil 5 Litter',
      price: 100,
      thumbnailImage: {
        url: productImage4
      },
      weightAndSize: {
        unitOfMeasure: {
          name: 'product'
        },
        weight: '34kg'
      },
      pricing: {
        unitSellPrice: 512,
        msrp: 112
      },
      discountable: {
        discount: 5
      },
      brandAndCompany: {
        company: 'Nestly',
        brand: "Rupchanda"
      },
      websiteVisibilityStatus: {
        status: 'published'
      }
    },
    {
      _id: '5',
      itemName: 'Ultra Level Soyabin Oil 5 Litter',
      price: 100,
      thumbnailImage: {
        url: productImage3
      },
      weightAndSize: {
        unitOfMeasure: {
          name: 'product'
        },
        weight: '34kg'
      },
      pricing: {
        unitSellPrice: 512,
        msrp: 112
      },
      discountable: {
        discount: 5
      },
      brandAndCompany: {
        company: 'Nestly',
        brand: "Rupchanda"
      },
      websiteVisibilityStatus: {
        status: 'published'
      }
    },
    {
      _id: '6',
      itemName: 'Ultra Level Soyabin Oil 5 Litter',
      price: 100,
      thumbnailImage: {
        url: productImage3
      },
      weightAndSize: {
        unitOfMeasure: {
          name: 'product'
        },
        weight: '34kg'
      },
      pricing: {
        unitSellPrice: 512,
        msrp: 112
      },
      discountable: {
        discount: 5
      },
      brandAndCompany: {
        company: 'Nestly',
        brand: "Rupchanda"
      },
      websiteVisibilityStatus: {
        status: 'published'
      }
    },
    {
      _id: '7',
      itemName: 'Ultra Level Soyabin Oil 5 Litter',
      price: 100,
      thumbnailImage: {
        url: productImage2
      },
      weightAndSize: {
        unitOfMeasure: {
          name: 'product'
        },
        weight: '34kg'
      },
      pricing: {
        unitSellPrice: 512,
        msrp: 112
      },
      discountable: {
        discount: 5
      },
      brandAndCompany: {
        company: 'Nestly',
        brand: "Rupchanda"
      },
      websiteVisibilityStatus: {
        status: 'published'
      }
    },
  ]

  return (
    <section className=" p-2">
      <div className="easierToChooseHeading font-roboto my-10">
        <div className="heading_area select-none mb-2">
          <h2>
            {month} Super Flash Sale <span className="text-lg">⚡</span>
          </h2>
          <div className="flex gap-1 md:gap-2 items-center ml-1 md:ml-5">  {" "}  Ends in
            <p className="p-1 bg-teal-600 text-white leading-5 rounded-sm"> 04</p>  {" "}  :
            <p className="p-1 bg-teal-600 text-white leading-5 rounded-sm"> 24  </p>{" "}  :
            <p className="p-1 bg-teal-600 text-white leading-5 rounded-sm"> 39  </p>
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
            className="mySwiper" >
            {fakeProduct?.map((product: any) => (
              <SwiperSlide key={product._id}>
                <MainProductCard product={product} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default SuperFlashSale;
