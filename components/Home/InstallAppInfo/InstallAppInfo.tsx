import Image from "next/image";
import appInfo from '../../../public/assets/app.png'
import playstore from '../../../public/assets/playstore.png'
import apple from '../../../public/assets/apple.png'
import Link from "next/link";
import DeliveryInfo from "./DeliveryInfo";
import apinfoBg from "../../../public/assets/appinfo_bg.png"

const InstallAppInfo = () => {
    return (
        <div className=" bg-cover bg-bottom bg-no-repeat pt-[130px] font-roboto  px-[15px]" style={{ backgroundImage: `url(${apinfoBg.src})` }}>
            <div className="max-w-7xl mx-auto px-[15px] md:px-0 ">
                <DeliveryInfo />
                <div className="pt-[61px] flex flex-col-reverse lg:flex-row justify-between items-center">
                    <Image src={appInfo} alt='app info' />
                    <div className="">
                        <h3 className="text-[68px] leading-[106%] font-bold text-[#009788] mb-4 mt-5 md:mt-0">Install the app</h3>
                        <p className="text-[#827E7E] text-lg leading-[140%] font-normal mb-10">It &apos; s never been easier to order your daily needs. Look for the finest discounts and you &apos; ll be lost in a world of delectable store.</p>
                        <div className="flex gap-2 items-center">
                            <Link href='/'>
                                <Image src={playstore} alt='play store' />
                            </Link>
                            <Link href='/'>
                                <Image src={apple} alt='apple store' />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default InstallAppInfo;