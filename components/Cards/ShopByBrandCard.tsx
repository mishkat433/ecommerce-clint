// import { modalOpenClose } from '@/Redux/ModalSlice/ModalSlice';
// import { sidebar2Control } from '@/Redux/SideMenuControl/SideMenuControlSlice';
// import { useAddFavoriteMutation, useRemoveFavoriteMutation } from '@/Redux/api/apiSlice';
import Image from "next/image";
import Link from "next/link";
import { useState } from 'react';
// import { toast } from 'react-hot-toast';
import { MdFavoriteBorder } from 'react-icons/md';

import notFoundImage from "../../public/assets/notFoundImage.png";
import FavoriteFillIcon from "../Icons/FavoriteFillIcon";
import SpinnerRsize from '../Spinner/SpinnerRsize';

// type brandType = {
//     SEO_Tag: string;
//     name: string;
//     name_Bangla: string;
//     description: string;
//     logo: string
//     visibility: boolean;
//     _id: any
// }

const ShopByBrandCard = ({ brand, fromCategory }: any) => {
    const { name, logo, _id } = brand;


    const [loading, setLoading] = useState(false)


    //toast message handleing-
    // useEffect(() => {
    //     if (addFavoriteResponse?.success) {
    //         toast.success("Add to favorite", { id: "favorite" })
    //         const token = localStorage?.getItem('aide-auth-token')
    //         dispatch(userLogin(token));
    //         setLoading(false)
    //     }
    // }, [isLoading, addFavoriteResponse?.success, dispatch])

    // useEffect(() => {
    //     if (removeFavoriteResponse?.success) {
    //         toast.success("Remove from favorite", { id: "favorite" })
    //         const token = localStorage?.getItem('aide-auth-token')
    //         dispatch(userLogin(token));
    //         setLoading(false)
    //     }
    // }, [removeLoading, dispatch, removeFavoriteResponse?.success])


    // const addToFavourite = (_id: string, userUid: number,) => {
    //     setLoading(true)
    //     const token = localStorage?.getItem('aide-auth-token')
    //     if (token && userUid) {
    //         addFavorite({ _id, userUid, from: 'brands' })
    //     }
    //     else {
    //         dispatch(modalOpenClose('authentication'))
    //     }
    // }

    // // UnFevourite function
    // const removeFromFavourite = (_id: any, userUid: any,) => {
    //     setLoading(true)
    //     const token = localStorage?.getItem('aide-auth-token')
    //     if (token && userUid) {
    //         removeFavorite({ _id, userUid, from: 'brands' })
    //     }
    //     else {
    //         dispatch(modalOpenClose('authentication'))
    //     }
    // }

    // // Favourite Check
    // const findFav = loginUserInfo?.favorites?.brands?.find((pr: any) => pr.id === brand?._id)


    return (
        <div className="group relative bg-white rounded-lg shadow-md pt-2.5 text-center max-h-32 cursor-pointer ">
            {
                !fromCategory &&
                <Link href={`/allBrands/${_id}`} className="">
                    <div className="flex justify-center">
                        <Image className="w-[124px] h-[78px] object-contain" src={logo ? logo : notFoundImage} alt='BrandImage' width='500' height='500' />
                    </div>
                    <div className="mt-1.5 border-t border-[#f0f0f0] py-[7px] relative">
                        {
                            name ? <h2 className="font-normal text-sm leading-5 text-black">{name}</h2> :
                                <h4 className="text-red-500"> Not Found</h4>
                        }
                    </div>
                </Link>
            }
            {/* {
                <div onClick={() => {
                    router.push(`/allBrands/${_id}`)
                    dispatch(sidebar2Control(""))
                }} className="">
                    <div className="flex justify-center">
                        <Image className="w-[124px] h-[78px] object-contain" src={logo ? logo : notFoundImage} alt='BrandImage' width='500' height='500' />
                    </div>
                    <div className="mt-[6px] border-t-1 border-[#f0f0f0] py-[7px] relative">
                        {
                            name ? <h2 className="font-normal text-sm leading-5 text-black">{name}</h2> :
                                <h4 className="text-red-500"> Not Found</h4>
                        }
                    </div>
                </div>
            } */}

            {/* {findFav?.id === _id ? */}
            <div className="w-[27px] duration-100 h-[27px] p-[5px] bg-white border border-[#f0f0f0] shadow-fev-icon-box-shadow absolute right-1 bottom-5 rounded-full text-[#EDA464]">
                {loading ? <SpinnerRsize h={4} w={4} /> : <span
                    onClick={() => {
                        // Swal.fire({
                        //     title: "Are you sure?",
                        //     text: `Do You want to Un Favorite "${name}"?`,
                        //     icon: "warning",
                        //     showCancelButton: true, confirmButtonColor: "#00AF9E", cancelButtonColor: "#F43F5E", confirmButtonText: "Yes, remove it!",
                        // }).then((result) => {
                        //     if (result.isConfirmed) {
                        //     }
                        //     removeFromFavourite(_id, loginUserInfo?.uid)
                        // });
                        // removeFromFavourite(_id, loginUserInfo?.uid)
                    }}><FavoriteFillIcon /> </span>}
            </div>
            :
            <div className=" p-1 group-hover:scale-100 scale-0 duration-100 h-[27px] bg-white border border-[#f0f0f0] shadow-fev-icon-box-shadow absolute right-1 bottom-5 rounded-full text-[#EDA464]">
                {/* {loading ? <SpinnerRsize h={4} w={4} /> :
                        <p onClick={(e) => addToFavourite(_id, loginUserInfo?.uid)}><MdFavoriteBorder className="text-lg " /></p>
                    } */}
            </div>
            {/* } */}

        </div >
    );
};

export default ShopByBrandCard;