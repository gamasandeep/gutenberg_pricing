import React from 'react';
import PropTypes from 'prop-types';

function TableLayout({ getTableProps, getTableBodyProps, headerGroups, rows, prepareRow }) {
  return (
    <div>
      <table key="future-orders-1" {...getTableProps()} className="w-full mt-4 border-y">
        <thead>
          {headerGroups.map((headerGroup, id) => (
            <tr key={`tr${id}`} {...headerGroup.getHeaderGroupProps()} className="text-left h-20 ">
              {headerGroup.headers.map((column, id) => (
                <th className="text-left" key={`th${id}`} {...column.getHeaderProps()}>
                  {column.render('Header')}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map((row, rowIndex) => {
            prepareRow(row);
            return (
              <tr
                onClick={() => {}}
                {...row.getRowProps()}
                className="border-y hover:bg-slate-200 text-left"
                key={`Row ${rowIndex}`}>
                {row.cells.map((cell, cellIndex) => {
                  return (
                    <React.Fragment key={cellIndex}>
                      <td
                        {...cell.getCellProps()}
                        className="py-4  text-left"
                        key={`${cell.render('Cell')}${cellIndex}`}>
                        {cell.render('Cell')}
                      </td>
                    </React.Fragment>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default TableLayout;

// props validation
TableLayout.propTypes = {
  getTableProps: PropTypes.any,
  getTableBodyProps: PropTypes.func,
  headerGroups: PropTypes.arrayOf(PropTypes.object),
  rows: PropTypes.arrayOf(PropTypes.object),
  prepareRow: PropTypes.func,
  visibleColumns: PropTypes.arrayOf(PropTypes.object),
  changeRightBarOpen: PropTypes.func
};
