
const UserIcon = ({ moreClass }: { moreClass: string }) => {
    return (
        <svg className={`${moreClass}`} viewBox="0 0 14 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1 14.6973C1 11.3838 2.791 8.69727 5 8.69727H9C11.209 8.69727 13 11.3838 13 14.6973" stroke="" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M8.48116 2.07158C9.50629 3.09671 9.50629 4.75876 8.48116 5.78389C7.45603 6.80902 5.79398 6.80902 4.76885 5.78389C3.74372 4.75876 3.74372 3.09671 4.76885 2.07158C5.79398 1.04645 7.45603 1.04645 8.48116 2.07158" stroke="" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>

    );
};

export default UserIcon;