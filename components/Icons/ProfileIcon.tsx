import React from 'react';

const ProfileIcon2 = ({ color }: { color: string }) => {
    return (
        <svg viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg" className={`w-[20px] mb-1 ${color} `}>
            <path d="M1 7.66667V2.6C1 1.71634 1.71634 1 2.6 1H7.66667" stroke="currentColor" strokeWidth="2" />
            <path d="M18.3333 1H23.3999C24.2836 1 24.9999 1.71634 24.9999 2.6V7.66667" stroke="currentColor" strokeWidth="2" />
            <path d="M7.66667 24.9999H2.6C1.71634 24.9999 1 24.2836 1 23.3999V18.3333" stroke="currentColor" strokeWidth="2" />
            <path d="M24.9999 18.3333V23.3999C24.9999 24.2836 24.2836 24.9999 23.3999 24.9999H18.3333" stroke="currentColor" strokeWidth="2" />
            <circle cx="13" cy="9" r="4" stroke="currentColor" strokeWidth="2" />
            <path d="M5 20.976C5 20.976 7.66667 17 13 17C18.3333 17 21 21 21 21" stroke="currentColor" strokeWidth="2" />
        </svg>
    );
};

export default ProfileIcon2;