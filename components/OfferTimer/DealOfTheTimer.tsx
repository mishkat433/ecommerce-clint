type timerColor = {
    bgColor: string
}
const DealOfTheTimer = ({ bgColor }: timerColor) => {
    return (
        <div className='flex items-center gap-2 text-base leading-5 md:text-xl font-normal md:leading-6 text-black'>
            <span className={`rounded ${bgColor} p-3 md:p-5`}>14</span>
            :
            <span className={`rounded ${bgColor} p-3 md:p-5`}>23</span>
            :
            <span className={`rounded ${bgColor} p-3 md:p-5`}>55</span>
            :
            <span className={`rounded ${bgColor} p-3 md:p-5`}>26</span>
        </div>
    );
};

export default DealOfTheTimer;