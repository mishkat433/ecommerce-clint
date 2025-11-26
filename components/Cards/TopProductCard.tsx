import Image from 'next/image';
import smallProduct from '../../public/assets/smallProduct.png'
import CaptureIcon from '../Icons/CaptureIcon';


const TopProductCard = () => {
    return (
        <div className="mb-2.5 flex justify-between gap-4 bg-white p-[9px] shadow cursor-pointer">
            <div>
                <Image className='w-[104px] h-[120px] object-cover' src={smallProduct} alt='Top Product' priority={true} />
            </div>
            <div>
                <h3 className="mb-2 text-base font-normal leading-5 text-[#262626]">Fantastic 12-Stroke Engine With A Power of 1991 hp</h3>
                <p className="mb-3 text-[13px] font-normal leading-4 text-[#6c757d]">17 reviews</p>
                <p className="text-base font-medium leading-5 tracking-[-0.64px] text-[#262626]">$2579.00</p>
            </div>
            <div className="text-[#cccccc] hover:text-aide-primary cursor-pointer transition-all">
                <CaptureIcon />
            </div>
        </div>
    );
};

export default TopProductCard;