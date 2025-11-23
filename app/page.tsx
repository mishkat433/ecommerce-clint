import ShopByBrandCard from "@/components/Cards/ShopByBrandCard"; import AfterSlide from "@/components/Home/AfterSlide/AfterSlide";
import DealOfTheDaySection from "@/components/Home/DealOfTheDaySection/DealOfTheDaySection";
import EasierToChoose from "@/components/Home/EasierToChoose/EasierToChoose";
import Category from "@/components/Home/ExploreByCategory/Category";
import HomeBanner from "@/components/Home/HomeBanner/HomeBanner";
import DeliveryInfo from "@/components/Home/InstallAppInfo/DeliveryInfo";
import InstallAppInfo from "@/components/Home/InstallAppInfo/InstallAppInfo";
import ShopByBrand from "@/components/Home/ShopByBrand/ShopByBrand";
import SpecialPackage from "@/components/Home/SpecialPackage/SpecialPackage";


export default function Home() {
  return (
    <div className="flex flex-col gap-6">
      <HomeBanner />
      <AfterSlide />
      <EasierToChoose />
      <Category />
      <DealOfTheDaySection />
      <ShopByBrand />
      <SpecialPackage />
      <InstallAppInfo />
    </ div>
  );
}
