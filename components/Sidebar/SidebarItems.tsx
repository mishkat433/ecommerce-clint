
import './Sidebar.scss';
import { BiCategoryAlt, BiSolidOffer } from 'react-icons/bi';
import { HiOutlineCalendar, HiOutlineChartBar, HiOutlineChat, HiOutlineFilter, HiOutlineUser } from 'react-icons/hi';
import { FiPhoneCall, FiShoppingCart } from 'react-icons/fi';
import { MdFavoriteBorder } from 'react-icons/md';

const SidebarItems = () => {

    const sideMenuItems = [
        {
            name: 'Category',
            icon: <HiOutlineChartBar />
        },
        {
            name: 'Filter',
            icon: <HiOutlineFilter />
        },
        {
            name: 'Offer Zone',
            icon: <BiSolidOffer />
        },
        {
            name: 'My Cart',
            icon: <FiShoppingCart />
        },
        {
            name: 'Contact Us',
            icon: <FiPhoneCall />
        },
        {
            name: 'Live Chat',
            icon: <HiOutlineChat />
        },
        {
            name: 'More Services',
            icon: <BiCategoryAlt />
        },
        {
            name: 'My Favorite',
            icon: <MdFavoriteBorder />
        },
        {
            name: 'Schedule Shopping',
            icon: <HiOutlineCalendar />
        },
        {
            name: 'My Profile',
            icon: <HiOutlineUser />
        }
    ]

    return (
        <div className={`sidebar_content  top-0 lg:sticky duration-500 z-20  `} >
            <div className="sidebar_menu_list_wrapper font-roboto text-3xl text-gray-700">
                <div className={`navbar_item `} >
                    < HiOutlineChartBar />
                    <p className="menu-text">Category</p>
                </div>
                <div className={`navbar_item `}>
                    <HiOutlineFilter />
                    <p className="menu-text">Filter</p>
                </div>
                <div className={`navbar_item `} >
                    <BiSolidOffer />
                    <p className="menu-text">Offer Zone</p>
                </div >
                <div className={`navbar_item `} >
                    <FiShoppingCart />
                    <p className="menu-text">My Cart</p>
                </div>
                <div className={`navbar_item `}   >
                    <FiPhoneCall />
                    <p className="menu-text">Contact Us</p>
                </div>
                <div className={`navbar_item   `}>
                    <HiOutlineChat />
                    <p className="menu-text">Live Chat</p>
                </div >
                <div className={`navbar_item `}   >
                    < BiCategoryAlt />
                    <p className="menu-text">More Services</p>
                </div >
                <div className={`navbar_item `}  >
                    <MdFavoriteBorder />
                    <p className="menu-text">My Favorite</p>
                </div >
                <div className={`navbar_item  `}  >
                    < HiOutlineCalendar />
                    <p className="menu-text">Schedule Shopping</p>
                </div >
                <div className={`navbar_item `}>
                    < HiOutlineUser />
                    <p className="menu-text">My Profile</p>
                </div >
            </div >
        </div>
    );
};

export default SidebarItems;