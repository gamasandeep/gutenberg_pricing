import React from 'react';
import EmployeesTable from './employee-table/employees-table';

function Employees() {
  return (
    <div className="p-3 w-full">
      {/* Search Box Here */}
      <div className="flex flex-col flex-grow-0">
        <div className=" overflow-x-auto">
          <input
            type="text"
            placeholder="Search"
            className="border-2 border-gray-300 bg-white w-full h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none"
          />
        </div>
      </div>
      <EmployeesTable />
    </div>
  );
}

export { Employees };
