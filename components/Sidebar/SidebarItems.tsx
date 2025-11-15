
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
            <div className="sidebar_menu_list_wrapper  font-roboto text-3xl text-gray-700">
                {sideMenuItems.map((item, index) => (
                    <div className={`navbar_item `} >
                        {item.icon}
                        <p className="menu-text ">{item.name}</p>
                    </div>
                ))}
            </div >
        </div>
    );
};

export default SidebarItems;