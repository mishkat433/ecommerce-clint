const AddressBookIcon = ({ moreClass }: { moreClass: string }) => {
    return (
        <svg className={`${moreClass}`} viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M17.414 5.48283V1H1V20.3106H12.5864" stroke="" strokeWidth="1.5" strokeLinejoin="round" />
            <path d="M4.37695 4.86295H14.0323" stroke="" strokeWidth="1.5" strokeLinecap="square" strokeLinejoin="round" />
            <path d="M4.37695 11.1383L9.27735 11.1383" stroke="" strokeWidth="1.5" strokeLinecap="square" strokeLinejoin="round" />
            <path d="M4.37695 14.0339L9.27735 14.0339" stroke="" strokeWidth="1.5" strokeLinecap="square" strokeLinejoin="round" />
            <path d="M4.37695 16.9313L9.27735 16.9313" stroke="" strokeWidth="1.5" strokeLinecap="square" strokeLinejoin="round" />
            <path d="M16.1736 14.1034C15.4149 14.1034 14.7942 13.4827 14.7942 12.7241C14.7942 11.9654 15.4149 11.3447 16.1736 11.3447C16.9322 11.3447 17.5529 11.9654 17.5529 12.7241C17.5529 13.4827 16.9322 14.1034 16.1736 14.1034ZM20.3116 12.862C20.3116 10.3585 18.484 8.58607 16.1736 8.58607C13.8632 8.58607 12.0356 10.3585 12.0356 12.862C12.0356 14.4758 13.3804 16.6138 16.1736 19.1655C18.9667 16.6138 20.3116 14.4758 20.3116 12.862ZM16.1736 7.20674C19.0702 7.20674 21.6909 9.42746 21.6909 12.862C21.6909 15.1517 19.8495 17.8621 16.1736 21C12.4977 17.8621 10.6562 15.1517 10.6562 12.862C10.6562 9.42746 13.277 7.20674 16.1736 7.20674Z" fill="" />
        </svg>

    );
};

export default AddressBookIcon;