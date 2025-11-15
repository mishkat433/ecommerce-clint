
import Image from "next/image";
import Link from "next/link";
//images-
import appStore from "../../../public/assets/footerImages/App Store - eng.png";
import googlePlay from "../../../public/assets/footerImages/Google Play - eng.png";
import phoneImage from "../../../public/assets/footerImages/Group 7555.png";
import visiteOurPhysicalStore from "../../../public/assets/footerImages/visite-our-physical-store.png";
//react-icons-
import {
  RiFacebookFill,
  RiInstagramLine,
  RiLinkedinFill,
  RiTwitterFill,
  RiYoutubeFill,
} from "react-icons/ri";

const Footer = () => {
  return (
    <footer className="footer container mx-auto py-[14px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 font-[roboto] px-[15px]">
      {/* ---------------------Sign Up for news part--------------------- */}
      <div className="">
        {/* icons */}
        <div className="flex items-center gap-[1.25rem]">
          <div className="">
            <div className="inline-block p-2 bg-gradient-to-b from-aide-primary/70 to to-aide-primary/100 rounded-lg">
              {/* <AideWhiteLogo /> */}
            </div>
            <p className="uppercase text-center ">shop</p>
          </div>
          <div>
            <div className="inline-block p-2 bg-gradient-to-b from-[#D5B89A]/70 to to-[#D5B89A] rounded-lg">
              {/* <AideWhiteLogo /> */}
            </div>
            <p className="uppercase text-center ">pos</p>
          </div>
          <div>
            <div className="inline-block p-2 bg-gradient-to-b from-[#7757BB]/70 to to-[#7757BB] rounded-lg">
              {/* <AideWhiteLogo /> */}
            </div>
            <p className="uppercase text-center ">erp</p>
          </div>
        </div>
        {/* bottom-content */}
        <div className="mt-6">
          <div>
            <Link
              href={"/"}
              className="flex items-center gap-2 text-[1.1rem] font-semibold text-aide-primary"
            >
              Become A Proud Owner of A aide Store{" "}
              <span className="w-4">
                {/* <ArrowLeft /> */}
              </span>
            </Link>
          </div>
          <div className="mt-6">
            <h3 className="text-2xl font-semibold mb-2">Sign up for news</h3>
            <span>
              Keep up to date with the latest product launches and news. Find
              out more about our brands and get special promo codes.
            </span>
            <div className="mt-6 space-y-5">
              <input
                className="w-full py-2 px-4 bg-white border-none outline-none text-secondary-text rounded-lg"
                type="email"
                name="email"
                placeholder="Your e-mail address"
              />
              <button
                className="text-white bg-[#1071FF] py-3 w-full rounded-full font-light"
                type="submit"
              >
                Sign up for newsletter
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* ---------------------Download our Mobile App--------------------- */}
      <div className="">
        {/* top icons */}
        <div className="flex justify-between gap-4">
          <Image
            className="max-w[74px]"
            src={phoneImage}
            alt="ads"
            priority={true}
          />
          <div className="text-secondary-text">
            <h3 className="text-lg font-semibold">Download our Mobile App</h3>
            <div className="mt-2 flex items-center gap-2 justify-between">
              <Image className="" src={googlePlay} alt="ads" priority={true} />
              <Image className="" src={appStore} alt="ads" priority={true} />
            </div>
          </div>
        </div>
        {/* bottom-content */}
        <div className="mt-6 flex justify-between">
          <div className="flex flex-col gap-2">
            <h3 className="text-[1.25rem] font-semibold">How to buy</h3>
            <Link href={"/"}>
              <span className="hover:text-aide-primary block">
                Payment methods
              </span>
            </Link>
            <Link href={"/"}>
              <span className="hover:text-aide-primary block">
                Order and pick up
              </span>
            </Link>
            <Link href={"/"}>
              <span className="hover:text-aide-primary block">
                Order with delivery
              </span>
            </Link>
            <Link href={"/"}>
              <span className="hover:text-aide-primary block">
                Delivery over the phone
              </span>
            </Link>
            <Link href={"/"}>
              <span className="hover:text-aide-primary block">Returns</span>
            </Link>
          </div>
          <div className="flex flex-col gap-2">
            <h3 className="text-[1.25rem] font-semibold">Help</h3>
            <Link href={"/"}>
              <span className="hover:text-aide-primary block">Contact</span>
            </Link>
            <Link href={"/"}>
              <span className="hover:text-aide-primary block">Online Help</span>
            </Link>
            <Link href={"/"}>
              <span className="hover:text-aide-primary block">
                Our Commitments
              </span>
            </Link>
          </div>
        </div>
      </div>
      {/* ---------------------You’re very close to us--------------------- */}
      <div className="">
        {/* top icons */}
        <div className="text-secondary-text md:text-center">
          <h3 className="text-lg font-semibold">You’re very close to us</h3>
          <Image
            className="mt-2 md:mx-auto"
            src={visiteOurPhysicalStore}
            alt="ads"
            priority={true}
          />
        </div>
        {/* bottom-content */}

        <div className="mt-6 md:mt-12 flex flex-col gap-2 items-center">
          <div>
            <h3 className="text-[1.25rem] font-semibold">About</h3>
            <Link href={"/"}>
              <span className="hover:text-aide-primary block">About us</span>
            </Link>
            <Link href={"/"}>
              <span className="hover:text-aide-primary block">
                Press Office
              </span>
            </Link>
            <Link href={"/"}>
              <span className="hover:text-aide-primary block">
                For suppliers
              </span>
            </Link>
            <Link href={"/"}>
              <span className="hover:text-aide-primary block">Regulations</span>
            </Link>
            <Link href={"/"}>
              <span className="hover:text-aide-primary block">
                Privacy Policy
              </span>
            </Link>
            <Link href={"/"}>
              <span className="hover:text-aide-primary block">Cookies</span>
            </Link>
            <Link href={"/"}>
              <span className="hover:text-aide-primary block">
                Personal Data Request
              </span>
            </Link>
          </div>
        </div>
      </div>
      {/* ---------------------JOIN US ON--------------------- */}
      <div className="md:col-span-2 lg:col-span-3 text-secondary-text py-[1rem] flex flex-col md:flex-row gap-4 md:gap-0 items-center justify-between border-t-2 border-[#cbcbcb]">
        <span>© 2021 aide Business Solution</span>
        <h4>JOIN US ON</h4>
        <div className="flex items-center gap-3">
          <Link href={"/"} className="flex flex-col items-center gap-1">
            <span className="h-6 w-6 flex items-center justify-center rounded-full bg-[#4267B2]">
              <RiFacebookFill className="text-white text-md" />
            </span>
            <small className="text-xs">Facebook</small>
          </Link>
          <Link href={"/"} className="flex flex-col items-center gap-1">
            <span className="h-6 w-6 flex items-center justify-center rounded-full bg-[#1DA1F2]">
              <RiTwitterFill className="text-white text-md" />
            </span>
            <small className="text-xs">Twitter</small>
          </Link>
          <Link href={"/"} className="flex flex-col items-center gap-1">
            <span className="h-6 w-6 flex items-center justify-center rounded-full bg-[#262626]">
              <RiInstagramLine className="text-white text-md" />
            </span>
            <small className="text-xs">Instagram</small>
          </Link>
          <Link href={"/"} className="flex flex-col items-center gap-1">
            <span className="h-6 w-6 flex items-center justify-center rounded-full bg-[#0077B5]">
              <RiLinkedinFill className="text-white text-md" />
            </span>
            <small className="text-xs">LinkedIn</small>
          </Link>
          <Link href={"/"} className="flex flex-col items-center gap-1">
            <span className="h-6 w-6 flex items-center justify-center rounded-full bg-[#FF0000]">
              <RiYoutubeFill className="text-white text-md" />
            </span>
            <small className="text-xs">Youtube</small>
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
