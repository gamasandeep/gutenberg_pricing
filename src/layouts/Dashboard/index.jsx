import React from 'react';
import { Outlet } from 'react-router-dom';
import { Sidebar, TopBar } from './components';

function DashBoard() {
  return (
    <div className="flex">
      <div className="sticky top-0 h-screen">
        <Sidebar />
      </div>
      <div className="flex-grow">
        <div className="sticky top-0">
          <TopBar />
        </div>
        <div className="h-[200vh] bg-gray-100">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export { DashBoard };
