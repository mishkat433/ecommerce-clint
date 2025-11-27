
import Image from "next/image";
import Link from "next/link";
import { useState } from 'react';
import chooseOption from '../../public/assets/chooseOption.svg';
import notfoundImage from "../../public/assets/notFoundImage2.png";
import DeliveryTrack from "../Icons/DeliveryTrack";
import GiftCartIcon from "../Icons/GiftCartIcon";
import ScheduleTimeIcon from "../Icons/ScheduleTimeIcon";
import { RiEyeLine, RiQuestionLine } from "react-icons/ri";


type product = {
    _id: any,
    name: string,
    thumbnailImage: any,
    itemName: any,
    websiteVisibilityStatus: {
        status: string,
    },
    weightAndSize: any,
    pricing: any,
    discountable: any,
    brandAndCompany: {
        company: string,
        brand: string
    },
}

const MainProductCard = ({ product }: { product: product }) => {

    console.log(product)
    const [loading, setLoading] = useState(false)
    // const [cart, setCart] = useState([]);
    // const [refetch, setRefetch] = useState(true);
    // const [wait, setWait] = useState(false)

    // console.log(product);

    // const addToFavourite = (id: any, uid: any,) => {

    // UnFevourite function
    // const removeFromFavourite = (id: any, uid: any,) => {
    //     const token = localStorage?.getItem('aide-auth-token')
    //     if (token && uid) {
    //         setLoading(true)
    //         fetch(`https://aide-api.vercel.app/favorite/products/${id}?uid=${uid}`, { method: "DELETE", headers: { authorization: `Bearer ${token}` } })
    //             .then(res => res.json())
    //             .then(data => {
    //                 if (data?.success) {
    //                     dispatch(userLogin(token));
    //                     setLoading(false);
    //                 }
    //             })
    //             .catch(err => {
    //                 console.log(err.message)
    //                 setLoading(false)
    //             })
    //     }
    //     else {
    //         dispatch(modalOpenClose('authentication'))
    //     }
    // }
    // console.log(loginUserInfo?.carts);
    // Favourite Check
    // const findFav = loginUserInfo?.favorites?.products?.find((pr: any) => pr.id === product?._id)

    // already add to cart check Check
    // const addTocartCheck: any = cart?.cart?.find((pr: any) => pr._id === product?._id)

    // const addToCartHandle = (item: any) => {
    //     dispatch(addToCart(item))
    //     addToDb(item._id);
    //     toast.success("added a product")
    //     if (loginUserInfo?.uid) {
    //         const token = localStorage?.getItem('aide-auth-token')
    //         axios.put(`/add-cart/${loginUserInfo.uid}`, { productId: item?._id, quantity: 1 }, { headers: { 'content-type': 'application/json', authorization: `Bearer ${token}` } })
    //             .then(res => console.log(res?.data))
    //             .catch(err => console.log(err.message))
    //     }
    // }

    // const increaseQuantityHandle = (cartProduct: any) => {
    //     dispatch(addToCart(cartProduct))
    //     addToDb(cartProduct?._id)
    //     if (loginUserInfo?.uid) {
    //         const token = localStorage?.getItem('aide-auth-token')
    //         axios.patch(`/cart/increase-quantity/${cartProduct?._id}?uid=${loginUserInfo?.uid}`, {}, { headers: { 'content-type': 'application/json', authorization: `Bearer ${token}` } })
    //             .then(res => {
    //                 // console.log(res?.data)
    //                 // dispatch(userLogin(token));

    //             })
    //             .catch(err => { console.log(err.message) })
    //     }
    // }

    // const decreaseQuantityHandle = (cartProduct: any) => {
    //     dispatch(decreaseFromCart(cartProduct));
    //     decreaseFromCartDb(cartProduct?._id);
    //     if (loginUserInfo?.uid && cartProduct?.quantity > 1) {
    //         const token = localStorage?.getItem('aide-auth-token')
    //         axios.patch(`/cart/decrease-quantity/${cartProduct?._id}?uid=${loginUserInfo?.uid}`, {}, { headers: { 'content-type': 'application/json', authorization: `Bearer ${token}` } })
    //             .then(res => {
    //                 dispatch(userLogin(token));
    //                 // console.log(res?.data);
    //             })
    //             .catch(err => { console.log(err.message) })
    //     }
    //     // console.log(cartProduct);
    // }

    // const removeCartFromDb = (cartProduct: any) => {
    //     setWait(true)
    //     setTimeout(() => {
    //         dispatch(removeFromCart(cartProduct))
    //         removeFromDb(cartProduct?._id)
    //         if (loginUserInfo?.uid) {
    //             const token = localStorage?.getItem('aide-auth-token')
    //             axios.delete(`/delete-cart/${cartProduct?._id}?uid=${loginUserInfo?.uid}`, { headers: { 'content-type': 'application/json', authorization: `Bearer ${token}` } })
    //                 .then(res => {
    //                     // console.log(res?.data)
    //                 })
    //                 .catch(err => { console.log(err.message) })
    //         }
    //         setWait(false)
    //     }, 500)
    // }

    return (
        <section className=" product_grid_area group ">
            <div className="product_card" >
                <div className='product_image'>
                    <div className="product_name_and_image gap-3  ">

                        {
                            product?.thumbnailImage &&
                            <Image src={product?.thumbnailImage?.url ? product?.thumbnailImage?.url : notfoundImage} alt="not found" priority width='300' height='300' decoding="async" />
                        }

                        <div className='product_name '>
                            <Link href={`/productDetails/${product?._id}`} >
                                {
                                    product?.websiteVisibilityStatus?.status === "published" && product?.itemName ? <p>{product?.itemName.length > 40 ? product?.itemName.slice(0, 35) + "..." : product?.itemName} </p> :
                                        <h4 className="text-red-500"> Not Found</h4>
                                }
                            </Link>
                            <p className="size">5 Liter</p>
                        </div>
                        {/* {
                            findFav?.id === product?._id ?
                                <p
                                    onClick={() => {
                                        Swal.fire({
                                            title: "Are you sure?",
                                            text: `Do You want to Un Favorite "${product?.overview?.itemName}"?`,
                                            icon: "warning",
                                            showCancelButton: true,
                                            confirmButtonColor: "#00AF9E",
                                            cancelButtonColor: "#F43F5E",
                                            confirmButtonText: "Yes, remove it!",
                                        }).then((result) => {
                                            if (result.isConfirmed) {
                                                removeFromFavourite(product?._id, loginUserInfo?.uid)
                                            }
                                        });
                                    }}
                                    title="un Favorite"
                                    className="w-4 h-4  absolute right-[2px] top-[10px] group-hover:text-[#ffffff] delay-300  text-[#EDA464]"> <FavoriteFillIcon />
                                </p> :
                                <div className='tooltip block md:hidden' onClick={() => addToFavourite(product?._id, loginUserInfo?.uid)}>
                                    {undefined}
                                </div>
                        } */}


                    </div>
                    <div className='icon_list flex flex-col items-center mb-0.5 absolute top-2.5 -right-10 duration-300'>
                        {/* {
                                findFav?.id === product?._id ?
                                    <div>
                                        {loading ? <SpinnerRsize h={4} w={4} /> :
                                            <p
                                                title="Un favorite"
                                                onClick={() => {
                                                    Swal.fire({
                                                        title: "Are you sure?",
                                                        text: `Do You want to Un Favorite "${product?.overview?.itemName}"?`,
                                                        icon: "warning",
                                                        showCancelButton: true,
                                                        confirmButtonColor: "#00AF9E",
                                                        cancelButtonColor: "#F43F5E",
                                                        confirmButtonText: "Yes, remove it!",
                                                    }).then((result) => {
                                                        if (result.isConfirmed) {
                                                            removeFromFavourite(product?._id, loginUserInfo?.uid)
                                                        }
                                                    });
                                                }}

                                                className="w-4 h-4  delay-300  text-[#EDA464]"> <FavoriteFillIcon /></p>}
                                    </div> :
                                    <div>
                                        {loading ? <SpinnerRsize h={4} w={4} /> :
                                            <div className='tooltip hover:bg-none' onClick={() => addToFavourite(product?._id, loginUserInfo?.uid)}>
                                                <FavoritesIcon />
                                                <span className="tooltiptext">Add-to-favourite</span>
                                            </div>}
                                    </div>
                            } */}

                        <div
                            // onClick={() => {
                            //     dispatch(modalOpenClose("mainProductCardToAddToSchedule"))
                            //     dispatch(statePassData({ data: { _id: product?._id, price: product?.pricing?.unitSellPrice }, dataFrom: "mainCartAddToSchedule" }))
                            // }}
                            className='tooltip'>
                            <ScheduleTimeIcon />
                            <span className="tooltiptext">Schedule-shopping</span>
                        </div>
                        <div className='tooltip'>
                            <GiftCartIcon />
                            <span className="tooltiptext">Add-to-gift-cart</span>
                        </div>
                        {/* {addTocartCheck?._id !== product?._id && <div className='tooltip bg-aide-primary rounded-sm' onClick={() => addToCartHandle(product)}>
                                <label htmlFor="addToCartModal">
                                    <AddToCartIcon />
                                    <span className="tooltiptext">Add-to-cart</span>
                                </label>
                            </div>} */}
                    </div>
                </div>

                {/* {addTocartCheck?._id === product?._id &&
                        <div className="wrapper  mt-3 group-hover:right-14 text-white">
                            <div className="widthButton  group flex items-center gap-3 p-1 w-8 h-8 bg-aide-primary rounded-lg box-border duration-300 group-hover:w-[85px] ">
                                <p onClick={() => { addTocartCheck?.quantity > 1 ? decreaseQuantityHandle(product) : removeCartFromDb(addTocartCheck) }} className="hidden group-hover:flex w-5 h-5   justify-center items-center"><MinusButtonIcon moreClass="w-[1.6rem] h-[2rem] " /></p>
                                <p className="hidden group-hover:flex w-4 h-5  justify-center items-center">{addTocartCheck?.quantity}</p>
                                <p onClick={() => increaseQuantityHandle(product)} className="hidden group-hover:flex w-5 h-5  justify-center items-center"><PlusButtonIcon moreClass="w-[1.6rem] h-[2rem]" /></p>
                                <p className="flex group-hover:hidden w-7 h-7  justify-center items-center">{addTocartCheck?.quantity}</p>
                            </div>
                        </div>
                    } */}

                <div className="card_details">
                    {
                        product?.websiteVisibilityStatus?.status === "published" && product?.itemName ? <h1 className="product_title">{product?.itemName}</h1> :
                            <span className="text-red-500"> Not Found</span>
                    }
                    <h5>{product?.weightAndSize?.weight} {product?.weightAndSize?.unitOfMeasure?.name}</h5>
                    <div className='card_footer'>
                        <h1>৳{product?.pricing?.unitSellPrice} <del>৳{product?.pricing?.msrp}</del> </h1>
                        {
                            product?.discountable &&
                            <div className="discount">
                                <p>- {product?.discountable?.discount}%</p>
                            </div>
                        }
                    </div>
                </div>

                <div>
                    <div className="card_details_content">
                        <p className="product_details_text"><span className='font-medium text-primary-text'>Product of : {product?.brandAndCompany?.company} </span>
                            {/* {
                                    product?.brandAndCompany?.company ? <Link href={`/allCompany/${product?.brandAndCompany?.company?._id}`} className="product_details_text_link">{product?.brandAndCompany?.company?.name} </Link> :
                                        <span className="text-red-500"> Not Found</span>
                                } */}

                        </p>
                        <p className="product_details_text"><span className='font-medium text-primary-text'>Brand : {product?.brandAndCompany?.brand} </span>
                            {/* {
                                    product?.brandAndCompany?.brand ? <Link href={`/allBrands/${product?.brandAndCompany?.brand?._id}`} className="product_details_text_link"> {product?.brandAndCompany?.brand?.name}</Link> :
                                        <span className="text-red-500">Not found</span>
                                } */}
                        </p>
                        {/* <p className="product_details_text"><span className='font-medium text-primary-text'>Tag : </span>
                            {
                                product?.brandAndCompany?.brandTag ? product?.brandAndCompany?.brandTag?.map((tag: any, i: number) => <Link key={i} href='/' className="product_details_text_link"> {tag} </Link>) :
                                    <span className="text-red-500">Not found</span>
                            }
                        </p> */}
                        <p className="product_details_text"><span className='font-medium text-primary-text'> Available in : </span>
                            <Link href='/' className="product_details_text_link"> 8 Sizes,</Link>
                            <Link href='/' className="product_details_text_link"> 4 Flavour,</Link>
                            <Link href='/' className="product_details_text_link"> 2 Peaking Variant</Link>
                        </p>
                        <div className='flex justify-between items-center'>
                            <p className="flex gap-1 items-center">
                                <span>
                                    <Image src={chooseOption} alt="Choose Option Icon" />
                                </span>
                                Choose Option
                            </p>
                            <p className="flex gap-1 items-center">
                                <span className="w-6">
                                    <DeliveryTrack />
                                </span>
                                30 min
                            </p>
                        </div>
                    </div>
                    <div className="view_details_hide ">
                        <div className="flex justify-between items-center border-t border-[#CECDCD]">
                            <Link href={`/productDetails/${product?._id} `} className="view_details hover:text-teal-600 flex flex-col items-center text-gray-600">
                                <RiEyeLine className="text-center text-xl" />
                                <span>View Details</span>
                            </Link>
                            <Link href={'/'} className="view_details  flex flex-col items-center text-gray-600 hover:text-blue-400 question_icon_style ">
                                <RiQuestionLine className="text-xl" />
                                <span>Ask Question</span>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section >
    );
}
export default MainProductCard;