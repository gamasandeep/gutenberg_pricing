import React from 'react';
import {
  HiChartPie,
  HiViewBoards,
  HiInbox,
  HiUser,
  HiShoppingBag,
  HiArrowSmRight,
  HiTable
} from 'react-icons/hi';
import { NavLink } from 'react-router-dom';

function SidebarToggle() {
  const iconSize = `text-2xl`;
  const Items = [
    { name: 'Home', href: '/home', icon: <HiChartPie className={iconSize} /> },
    { name: 'Dashboard', href: '/dashboard', icon: <HiViewBoards className={iconSize} /> },
    { name: 'Inbox', href: '/inbox', icon: <HiInbox className={iconSize} /> },
    { name: 'Profile', href: '/profile', icon: <HiUser className={iconSize} /> },
    { name: 'Products', href: '/products', icon: <HiShoppingBag className={iconSize} /> }
  ];

  return (
    <div className="bg-white border-r h-full">
      <div className=" sticky mx-2 px-8 pt-10 w-[15vw] flex flex-col gap-4">
        {Items.map((item, index) => (
          <NavLink
            key={index}
            to={item.href}
            activeClassName="text-gray-900"
            className={(data) => {
              return !data.isActive
                ? 'flex items-center gap-2 text-gray-600 hover:text-white hover:bg-blue-700 rounded-md py-2 px-4'
                : 'bg-blue-700 rounded-md py-2 px-4 text-white';
            }}>
            <h3 className="text-xl flex items-center gap-3">
              {item.icon} {item.name}
            </h3>
          </NavLink>
        ))}
      </div>
    </div>
  );
}

export { SidebarToggle };
