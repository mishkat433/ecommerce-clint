import Image from "next/image";
import Link from "next/link";
import soybeanOil from '../../public/assets/soybeanOil.png'
import AddToCartIcon from "../Icons/AddToCartIcon";
import FavoritesIcon from "../Icons/FavoritesIcon";
import GiftCartIcon from "../Icons/GiftCartIcon";
import ScheduleTimeIcon from "../Icons/ScheduleTimeIcon";

const ListViewCard = ({ product }: any) => {
    return (
        <div className="bg-white py-[15px] pr-8 pl-5 border-1 border-[#cdcdcd] flex items-center justify-between gap-[15px]">
            <div className="w-[110px]">
                <Image className='w-[110px] h-[162px] mx-auto' src={soybeanOil} height='300' width='300' alt='Soybean Oil' priority={true} />
            </div>
            <div className="w-[260px]">
                <h1 className="product_title_style">Rupchanda Fortified Pure Soybean Oil for Cooking</h1>
                <h5 className="product_size">5 Liter</h5>
                <p className="product_details_text">Product of:
                    <Link href='/' className="product_details_text_link"> Bangladesh Edible Oils Ltd</Link>
                </p>
                <p className="product_details_text">Brand:
                    <Link href='/' className="product_details_text_link"> Rupchanda</Link>
                </p>
                <p className="product_details_text">Tag:
                    <Link href='/' className="product_details_text_link"> Cooking Oil,</Link>
                    <Link href='/' className="product_details_text_link"> Soybean Oil,</Link>
                    <Link href='/' className="product_details_text_link"> Edible Oil,</Link>
                </p>
                <p className="product_details_text">Available in:
                    <Link href='/' className="product_details_text_link"> 8 Sizes,</Link>
                    <Link href='/' className="product_details_text_link"> 4 Flavour,</Link>
                    <Link href='/' className="product_details_text_link"> 2 Peaking Variant</Link>
                </p>
            </div>
            <div>
                <div className='product_price_wrapper'>
                    <h2 className="product_price_text">৳422.75 <del className="text-[#828282] font-medium">৳86.40</del></h2>
                    <div className="bg-error-bg rounded py-1 px-[6px]">
                        <p className="product_price_discount">- 58%</p>
                    </div>
                </div>
                <div className="list_view_card_icon group">
                    <div className="list_view_card_icon_hover group-hover:text-white group-hover:bg-aide-primary">
                        <span><AddToCartIcon /></span>
                    </div>
                    <span className="group-hover:text-aide-primary">Add to Cart</span>
                </div>
                <div className="list_view_card_icon group">
                    <div className="list_view_card_icon_hover group-hover:text-white group-hover:bg-aide-primary">
                        <span><FavoritesIcon /></span>
                    </div>
                    <span className="group-hover:text-aide-primary">Add to Favorite</span>
                </div>
                <div className="list_view_card_icon group">
                    <div className="list_view_card_icon_hover group-hover:text-white group-hover:bg-aide-primary">
                        <span><ScheduleTimeIcon /></span>
                    </div>
                    <span className="group-hover:text-aide-primary">Schedule Shopping</span>
                </div>
                <div className="list_view_card_icon group">
                    <div className="list_view_card_icon_hover group-hover:text-white group-hover:bg-aide-primary">
                        <span><GiftCartIcon /></span>
                    </div>
                    <span className="group-hover:text-aide-primary">Add to Gift Cart</span>
                </div>
            </div>
        </div>
    );
};

export default ListViewCard;