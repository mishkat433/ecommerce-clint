
const ToBeReviewedIcons = ({ moreClass }: { moreClass?: string }) => {
    return (
        <svg className={`${moreClass}`} viewBox="0 0 31 30" fill="" xmlns="http://www.w3.org/2000/svg">
            <path d="M15.5 1L11.5 10.5L1 11.5L9 18.5L6.5 29L15.5 23.5" stroke="" strokeLinecap="square" strokeLinejoin="round" />
            <path d="M16 1L20 10.5L30.5 11.5L22.5 18.5L25 29L16 23.5" stroke="" strokeLinecap="round" strokeLinejoin="round" strokeDasharray="2 2" />
        </svg>

    );
};

export default ToBeReviewedIcons;