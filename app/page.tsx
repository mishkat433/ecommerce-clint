import AfterSlide from "@/components/Home/AfterSlide/AfterSlide";
import EasierToChoose from "@/components/Home/EasierToChoose/EasierToChoose";
import EasierToChooseHeading from "@/components/Home/EasierToChoose/EasierToChooseHeading";
import MainSlide from "@/components/Home/TopSlide/MainSlide";


export default function Home() {
  return (
    <div className="flex flex-col gap-6">
      {/* <MainSlide /> */}
      <AfterSlide />
      <EasierToChoose />
    </ div>
  );
}
