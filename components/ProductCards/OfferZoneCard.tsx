import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

const OfferZoneCard = ({ data, fromSidebar, fromHomepage }: any) => {
    const router = useRouter();

    return (
        <div className="group relative h-[150px] rounded-lg overflow-hidden shadow border border-gray-200">

            <Image src={data?.image} alt="Offer" fill className="object-cover" />

            <div className=" absolute inset-0  opacity-0 group-hover:opacity-100  bg-black/70  flex items-center justify-center  transition-all duration-200 cursor-pointer ">
                {fromHomepage && (<Link href={`/offerZone/${data?._id}`} className="py-1 px-6 bg-white/80 font-medium rounded-md" > Explore </Link>)}

                {fromSidebar && (
                    <div
                        onClick={() => router.push(`/offerZone/${data?._id}`)}
                        className="py-1 px-6 bg-white/80 font-medium rounded-md"
                    >
                        Explore
                    </div>
                )}
            </div>
        </div>
    );
};

export default OfferZoneCard;
