import { Dropdown } from 'flowbite-react';
import React from 'react';
import { GetEmployees } from '../../hooks/get-employees-data';
import TableInstance from './employee-table/table-instance';

function Employees() {
  const [tableData, setTableData] = React.useState(null);
  const { data: employees, isLoading } = GetEmployees();
  const [filtering, setFiltering] = React.useState([]);

  React.useEffect(() => {
    // const newTableData = employees?.data?.data?.rows.map((employee) => {
    //   return {
    //     ...employee,
    //     daysLeft: Math.floor(
    //       (new Date(employee.endDate) - new Date()) / (1000 * 60 * 60 * 24) + 2
    //     ),
    //   };
    // });

    let filters = [];
    employees?.data.forEach((employee) => {
      filters.push(employee.serviceLine);
    });
    filters = [...new Set(filters)];
    setFiltering(filters);

    setTableData(employees?.data);
  }, [employees]);

  if (isLoading) {
    return (
      <div className="flex w-full h-[50vh] justify-center items-center">
        <h1 className="font-semibold">Loading...</h1>
      </div>
    );
  }

  if (tableData?.length === 0 || tableData === null || !tableData) {
    return (
      <div className="flex w-full h-[50vh] justify-center items-center">
        <h1 className="font-semibold">No Records Found</h1>
      </div>
    );
  }

  return (
    <div className="p-3 w-full">
      {/* Search Box Here */}
      <div className="flex flex-col flex-grow-0">
        <div className=" overflow-x-auto flex gap-4">
          <input
            type="text"
            placeholder="Search"
            className="border-2 border-gray-300 bg-white  h-auto px-5 pr-16 rounded-lg text-sm focus:outline-none flex-grow"
          />
          <Dropdown label="Dropdown button" dismissOnClick={false}>
            {filtering.map((filter, key) => (
              <Dropdown.Item key={key}>
                <div class="flex items-center">
                  <input
                    id={key}
                    type="checkbox"
                    onChange={() => {}}
                    defaultChecked={true}
                    class="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                  />
                  <label
                    for={key}
                    class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                    {filter}
                  </label>
                </div>
              </Dropdown.Item>
            ))}
          </Dropdown>
        </div>
      </div>
      <TableInstance tableData={tableData} />
    </div>
  );
}

export { Employees };
