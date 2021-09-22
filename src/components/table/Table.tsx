import React, { Fragment } from 'react';
import {
  useFilters,
  useFlexLayout,
  usePagination,
  useResizeColumns,
  useTable,
} from "react-table";
import { columns } from './TableListColumn';

import TableStyle from './Table.module.css'

export interface TableProps {
  fakeData: any;
  handelDelete: (val: string) => void,
}
const Table: React.FC<TableProps> = ({fakeData , handelDelete}) => {
      const { getTableProps, getTableBodyProps, headerGroups, page, prepareRow }:any =
    useTable(
        {
          //@ts-ignore
        columns,
        data: fakeData
      },
      useResizeColumns,
      useFilters,
      usePagination,
      useFlexLayout
    );
    return (<Fragment>
                <table
                    className={`${TableStyle["table-box"]} my-3 hover responsive rounded position-relative overflow-hidden border-1`}
                >
                            <thead className={`${TableStyle["table-header"]} border-1 d-flex row-reverse`} dir="rtl">
     <thead className={`${TableStyle["table-header"]} `}>
            {headerGroups.map((headerGroup:any) => (
              <tr
                className={`${TableStyle["table-header-tr"]} `}
                {...headerGroup.getHeaderGroupProps()}
              >
                {headerGroup.headers.map((column:any, index:number) => (
                  <th className=" py-3" {...column.getHeaderProps()}>
                    <div className="d-flex justify-content-center align-items-center">
                      {column.render("Header")}
                    </div>
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          
          </thead>
                            <tbody
            className={`${TableStyle["table-body"]} position-relative overflow-hidden`}
            {...getTableBodyProps()}
          >
            {page.map((row:any) => {
              prepareRow(row);
              return (
                <tr
                  {...row.getRowProps()}
                  className={`${TableStyle["table-body-tr"]} font-black d-flex `}
                >
                  {row.cells.map((cell:any) => {
                    return (
                      <td
                        {...cell.getCellProps()}
                        className={`text-center ${TableStyle["table-body-td"]}  d-flex justify-content-center py-4 `}
                      >
                        {cell.render("Cell", {handelDelete:handelDelete})}
                      </td>
                    );
                  })}
                </tr>
              );
            })}
          </tbody>
       
        
                </table>
    </Fragment> );
}
 
export default Table;
