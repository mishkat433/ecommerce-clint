import Image from "next/image";
import daily_discounts from '../../../public/assets/daily_discounts.png'
import live_tracing from '../../../public/assets/live_tracking.png'
import quick_delivery from '../../../public/assets/quick_delivery.png'

const deliveryData = [
    {
        id: 1,
        image: daily_discounts,
        title: 'Daily Discounts',
    },
    {
        id: 2,
        image: live_tracing,
        title: 'Live Tracing',
    },
    {
        id: 3,
        image: quick_delivery,
        title: 'Quick Delivery',
    }
]

const DeliveryInfo = () => {
    return (
        <div className="flex flex-wrap md:flex-nowrap flex-col md:flex-row items-center gap-[50px] bg-white rounded-[20px] py-5 px-14 justify-between">
            {
                deliveryData.map(item => (
                    <div key={item.id} className='flex items-center gap-[30px] md:border-r-2 last:border-r-0'>
                        <Image src={item.image} alt={item?.title} />
                        <span className="text-4xl leading-[120%] font-bold text_gradient_style">{item?.title}</span>
                    </div>
                ))
            }
        </div>
    );
};

export default DeliveryInfo;