import Image from 'next/image';
import React from 'react';
import demoCategoryImage from "../../../../public/assets/demo-category-image.png"

type props = {
    selectCategory: any;
}

const CategoryCart = ({ selectCategory }: props) => {
    // const { allCategory, categoryById } = useAppSelector((state) => state.category)
    // const dispatch = useAppDispatch()

    // const categoryLoadById = (e: any) => {
    //     if (categoryById.length === 0) {
    //         dispatch(getAllCategoryById(e))
    //     }
    //     else {
    //         dispatch(getSubCategoryById(e))
    //     }
    // }
    return (
        <div className="flex justify-center items-center h-[150px]  w-full rounded-lg relative">
            {/* <Image src={selectCategory?.image} onClick={() => categoryById.length === 0 ? categoryLoadById(selectCategory?._id) : categoryLoadById(selectCategory?.name)} alt="demoCategoryImage" className='w-full  h-[150px]' priority={true} height='300' width='300' /> */}
            {/* <h4 className='absolute text-3xl border-1 border-black h-[150px] font-bold '> {selectCategory?.name}</h4> */}
        </div>
    );
};

export default CategoryCart;