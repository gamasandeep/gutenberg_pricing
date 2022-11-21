import React, { useMemo } from 'react';
import TableLayout from './table-layout';
import PropTypes from 'prop-types';
import { useTable } from 'react-table';

function TableInstance({ tableData, changeRightBarOpen }) {
  const [columns, data] = useMemo(() => {
    const columns = [
      {
        Header: 'Employee Code',
        accessor: 'empCode'
      },
      {
        Header: 'Name',
        accessor: 'name'
      },
      {
        Header: 'Annual CTC (INR)',
        accessor: 'annualCtc'
      },
      {
        Header: 'Designation',
        accessor: 'designation'
      },
      {
        Header: 'City',
        accessor: 'city'
      },
      {
        Header: 'Service Line',
        accessor: 'serviceLine'
      },
      {
        Header: 'Cost Per HR',
        accessor: 'costPerHr'
      },
      {
        Header: 'HR Rate',
        accessor: 'hrRate'
      }
    ];
    return [columns, tableData];
  }, [tableData]);
  // TODO:  Remove all console warnings

  const tableInstance = useTable({ columns, data });
  return (
    <>
      <TableLayout {...tableInstance} changeRightBarOpen={changeRightBarOpen} />
    </>
  );
}

export default TableInstance;

// props validation
TableInstance.propTypes = {
  tableData: PropTypes.array,
  changeRightBarOpen: PropTypes.func
};
