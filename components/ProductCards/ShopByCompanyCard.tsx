import { modalOpenClose } from '@/Redux/ModalSlice/ModalSlice';
import { useAddFavoriteMutation, useRemoveFavoriteMutation } from '@/Redux/api/apiSlice';
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from 'react';
import { toast } from 'react-hot-toast';
import { MdFavoriteBorder } from "react-icons/md";
import { useAppDispatch, useAppSelector } from '../../Redux/app/hooks';
import notFoundImage from "../../public/assets/notFoundImage.png";
import FavoriteFillIcon from "../Icons/FavoriteFillIcon";
import SpinnerRsize from '../Spinner/SpinnerRsize';

const ShopByCompanyCard = ({ company, shadow }: any) => {
    const [addFavorite, { data: addFavoriteResponse, isLoading }] = useAddFavoriteMutation()
    const [removeFavorite, { data: removeFavoriteResponse, isLoading: removeLoading }] = useRemoveFavoriteMutation()
    const { logo, name, seo_tag, _id, brands } = company;
    const { authentication } = useAppSelector(state => state)
    const { loginUserInfo } = authentication
    const dispatch = useAppDispatch()

    const [loading, setLoading] = useState(false)

    //toast message handleing-
    useEffect(() => {
        if (addFavoriteResponse?.success) {
            toast.success("Add to favorite", { id: "favorite" })
            setLoading(false)
        }
    }, [isLoading])

    useEffect(() => {
        if (removeFavoriteResponse?.success) {
            toast.success("Remove from favorite", { id: "favorite" })
            setLoading(false)
        }
    }, [removeLoading])


    const addToFavourite = (_id: any, userUid: any,) => {
        const token = localStorage?.getItem('aide-auth-token')
        if (token && userUid) {
            setLoading(true)
            addFavorite({ _id, userUid, from: 'companies' })
        }
        else {
            dispatch(modalOpenClose('authentication'))
        }
    }


    // UnFevourite function
    const removeFromFavourite = (_id: any, userUid: any,) => {
        const token = localStorage?.getItem('aide-auth-token')
        if (token && userUid) {
            setLoading(true)
            removeFavorite({ _id, userUid, from: 'companies' })
        }
        else {
            dispatch(modalOpenClose('authentication'))
        }
    }

    // Favourite Check
    const findFav = loginUserInfo?.favorites?.companies?.find((pr: any) => pr.id === company?._id)

    return (
        company?.visibility &&
        <div className={`group relative bg-white ${shadow && "shadow-sm"} p-2 rounded-lg min-w-min  border-[1px] border-border-color`}>
            <Link href={`/allCompany/${_id}`} className="flex gap-4 items-center">
                <div className="w-[85px] h-[85px] flex items-center border-[1px] border-border-color rounded-xl">
                    <Image className="w-full" src={logo ? logo : notFoundImage} alt='Square' priority={true} width='85' height='85' />
                </div>
                <div className="space-y-1">
                    {
                        name ? <h2 className="text-[13px] font-medium leading-[18px] text-primary-text">{name.length > 45 ? name.slice(0, 45) + "..." : name}</h2> :
                            <h4 className="text-[13px] font-medium leading-[18px] text-red-500"> Not Found</h4>
                    }
                    <div className='flex items-center gap-1'>
                        {
                            brands?.length > 0 &&
                            brands?.slice(0, 4)?.map((brand: any) => (
                                <p key={brand?._id} className="font-normal text-xs text-secondary-text leading-4 xxl:text-xs xxl:pr-16">{brand?.name}</p>
                            ))
                        }
                    </div>
                </div>
            </Link>
            {findFav?.id === _id ?
                <div className="w-[27px] duration-100 h-[27px] p-[5px] bg-white border-1 border-[#f0f0f0] shadow-fev-icon-box-shadow absolute right-4 bottom-4 rounded-full text-[#EDA464]">
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
                            removeFromFavourite(_id, loginUserInfo?.uid)
                        }}><FavoriteFillIcon /> </span>}
                </div>
                :
                <div className=" p-1 group-hover:scale-100 scale-0 duration-100 h-[27px] bg-white border-1 border-[#f0f0f0] shadow-fev-icon-box-shadow absolute right-4 bottom-4 rounded-full text-[#EDA464]">
                    {loading ? <SpinnerRsize h={4} w={4} /> :
                        <p onClick={(e) => addToFavourite(_id, loginUserInfo?.uid)}><MdFavoriteBorder className="text-lg " /></p>
                    }
                </div>
            }
        </div>
    );
};

export default ShopByCompanyCard;

