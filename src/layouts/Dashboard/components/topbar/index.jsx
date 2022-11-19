import React from 'react';

function TopBar() {
  return (
    <div className="bg-white p-3 py-4">
      <div className="flex justify-between items-center">
        <h1 className="font-medium">Hi, Deepanshu Goel</h1>
        <button className="bg-blue-700 text-white rounded-md px-4 py-2 hover:bg-blue-600">
          Logout
        </button>
      </div>
    </div>
  );
}

export { TopBar };
