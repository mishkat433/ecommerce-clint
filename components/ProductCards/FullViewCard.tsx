import Image from "next/image";
import Link from "next/link";
import chooseOption from "../../public/assets/chooseOption.svg";
import soybeanOil from "../../public/assets/soybeanOil.png";
import AddToCartIcon from "../Icons/AddToCartIcon";
import DeliveryTrack from "../Icons/DeliveryTrack";
import EayIcon from "../Icons/EayIcon";
import FavoritesIcon from "../Icons/FavoritesIcon";
import GiftCartIcon from "../Icons/GiftCartIcon";
import QuestionIcon from "../Icons/QuestionIcon";
import ScheduleTimeIcon from "../Icons/ScheduleTimeIcon";

const FullViewCard = ({ product }: any) => {
  return (
    <div className="bg-white cursor-pointer relative full_view_card overflow-hidden">
      <div>
        <Image
          className="w-[110px] h-[162px] mx-auto"
          src={soybeanOil}
          alt="Soybean Oil"
          priority={true}
        />
        <div className="icon_list flex flex-col items-center mb-[2px] absolute top-[10px] -right-[40px] duration-300">
          <div className="tooltip">
            <FavoritesIcon />
            <span className="tooltiptext">Add-to-favorite</span>
          </div>
          <div className="tooltip">
            <ScheduleTimeIcon />
            <span className="tooltiptext">Schedule-shopping</span>
          </div>
          <div className="tooltip">
            <GiftCartIcon />
            <span className="tooltiptext">Add-to-gift-cart</span>
          </div>
          <div className="tooltip">
            <label htmlFor="addToCartModal">
              <AddToCartIcon />
              <span className="tooltiptext">Add-to-cart</span>
            </label>
          </div>
        </div>
      </div>
      <div className="mt-4 pt-[13px] px-3">
        <h1 className="product_title_style">
          Rupchanda Fortified Pure Soybean Oil for Cooking
        </h1>
        <h5 className="product_size">5 Liter</h5>
        <p className="product_details_text">
          Product of:
          <Link href="/" className="product_details_text_link">
            {" "}
            Bangladesh Edible Oils Ltd
          </Link>
        </p>
        <p className="product_details_text">
          Brand:
          <Link href="/" className="product_details_text_link">
            {" "}
            Rupchanda
          </Link>
        </p>
        <p className="product_details_text">
          Tag:
          <Link href="/" className="product_details_text_link">
            {" "}
            Cooking Oil,
          </Link>
          <Link href="/" className="product_details_text_link">
            {" "}
            Soybean Oil,
          </Link>
          <Link href="/" className="product_details_text_link">
            {" "}
            Edible Oil,
          </Link>
        </p>
        <p className="product_details_text">
          Available in:
          <Link href="/" className="product_details_text_link">
            {" "}
            8 Sizes,
          </Link>
          <Link href="/" className="product_details_text_link">
            {" "}
            4 Flavour,
          </Link>
          <Link href="/" className="product_details_text_link">
            {" "}
            2 Peaking Variant
          </Link>
        </p>
        <div className="flex justify-between items-center text-secondary-text text-xs font-bold leading-[14px] my-5">
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
        <div className="product_price_wrapper">
          <h2 className="product_price_text">
            ৳422.75 <del className="text-[#828282] font-medium">৳86.40</del>
          </h2>
          <div className="bg-error-bg rounded py-1 px-[6px]">
            <p className="product_price_discount">- 58%</p>
          </div>
        </div>
      </div>
      <div className="view_details_hide">
        <div className="flex justify-between items-center border-t-[0.5px] border-[#CECDCD] pb-[13px] px-3">
          <div className="view_details hover:text-aide-primary">
            <span className="w-4">
              <EayIcon />
            </span>
            <span>View Details</span>
          </div>
          <div className="view_details hover:text-aide-primary">
            <span className="w-4 question_icon_style">
              <QuestionIcon />
            </span>
            <span>Ask Question</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FullViewCard;
