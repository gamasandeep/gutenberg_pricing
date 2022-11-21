import PropTypes from 'prop-types';
import React from 'react';
import {
  HiChartPie,
  HiViewBoards,
  HiInbox,
  HiUser,
  HiShoppingBag,
  HiMenuAlt1
} from 'react-icons/hi';
import { NavLink } from 'react-router-dom';

function SidebarWrapper() {
  const [toggle, setToggle] = React.useState(false);
  const iconSize = `text-2xl`;
  const Items = [
    { name: 'Home', href: '/home', icon: <HiChartPie className={iconSize} /> },
    { name: 'Employees', href: '/dashboard', icon: <HiViewBoards className={iconSize} /> },
    { name: 'Inbox', href: '/inbox', icon: <HiInbox className={iconSize} /> },
    { name: 'Profile', href: '/profile', icon: <HiUser className={iconSize} /> },
    { name: 'Products', href: '/products', icon: <HiShoppingBag className={iconSize} /> }
  ];
  const classes = {
    small: 'sticky items-center px-[2vw] pt-10 w-[5vw] min-w-[75px] flex flex-col gap-4',
    large: 'sticky mx-2 px-8 pt-10 w-[15vw] flex flex-col gap-4 min-w-[250px]'
  };
  return (
    <div className="bg-white border-r h-full">
      <div className={toggle ? classes.small : classes.large}>
        <div
          className={
            toggle
              ? 'inline-flex text-gray-700 bg-primary-600 hover:bg-primary-800  focus:outline-none font-normal rounded-lg text-sm px-5 py-2 text-center hover:bg-blue-700 hover:text-white'
              : 'inline-flex text-gray-700 bg-primary-600 hover:bg-primary-800  focus:outline-none font-normal rounded-lg text-sm px-5 py-2 text-center hover:bg-blue-700 hover:text-white'
          }
          onClick={() => {
            console.log('Dashboard');
            setToggle(!toggle);
          }}>
          <div className={toggle ? 'text-xl' : 'text-xl flex items-center gap-3'}>
            <h2 className="">
              <HiMenuAlt1 className={iconSize} />
            </h2>
            <h3 className={toggle ? 'hidden' : ''}>Menu</h3>
          </div>
        </div>
        {Items.map((item, index) => (
          <SideBarItem key={index} {...item} toggle={toggle} />
        ))}
      </div>
    </div>
  );
}

const SideBarItem = ({ name, href, icon, action, toggle }) => {
  const classes = {
    activeSmall:
      'inline-flex text-gray-700 bg-primary-600 hover:bg-primary-800  focus:outline-none font-normal rounded-lg text-sm px-5 py-2 text-center bg-blue-700 text-white',
    activeLarge:
      'inline-flex text-white bg-primary-600 hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-normal rounded-lg text-sm px-5 py-2 text-center dark:focus:ring-primary-900  bg-blue-700',
    inactiveSmall:
      'inline-flex text-gray-700 bg-primary-600 hover:bg-primary-800  focus:outline-none font-normal rounded-lg text-sm px-5 py-2 text-center hover:bg-blue-700 hover:text-white',
    inactiveLarge:
      'inline-flex text-gray-700 bg-primary-600 hover:bg-primary-800  focus:outline-none font-normal rounded-lg text-sm px-5 py-2 text-center hover:bg-blue-700 hover:text-white'
  };
  return (
    <NavLink
      to={href ?? null}
      activeClassName="text-gray-900"
      onClick={action ?? null}
      className={(data) => {
        return !data.isActive
          ? toggle
            ? classes.inactiveSmall
            : classes.inactiveLarge
          : toggle
          ? classes.activeSmall
          : classes.activeLarge;
      }}>
      <div className={toggle ? 'text-xl' : 'text-xl flex items-center gap-3'}>
        <h2 className="">{icon}</h2>
        <h3 className={toggle ? 'hidden' : ''}>{name}</h3>
      </div>
    </NavLink>
  );
};

SideBarItem.propTypes = {
  action: PropTypes.any,
  href: PropTypes.any,
  icon: PropTypes.any,
  name: PropTypes.any,
  toggle: PropTypes.any
};

export { SidebarWrapper };
