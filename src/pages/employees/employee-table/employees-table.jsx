import React from 'react';

import TableInstance from './table-instance';
import PropTypes from 'prop-types';
import { GetEmployees } from '../../../hooks/get-employees-data';

function EmployeesTable({ daysLeft }) {
  const [tableData, setTableData] = React.useState(null);

  const { data: employees, isLoading } = GetEmployees(daysLeft);

  React.useEffect(() => {
    // const newTableData = employees?.data?.data?.rows.map((employee) => {
    //   return {
    //     ...employee,
    //     daysLeft: Math.floor(
    //       (new Date(employee.endDate) - new Date()) / (1000 * 60 * 60 * 24) + 2
    //     ),
    //   };
    // });

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
    <>
      <TableInstance tableData={tableData} />
    </>
  );
}

export default EmployeesTable;

EmployeesTable.propTypes = {
  changeRightBarOpen: PropTypes.func,
  daysLeft: PropTypes.number
};
