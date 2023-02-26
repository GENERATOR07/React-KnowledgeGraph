import React, { useEffect, useMemo } from "react";
import { useTable, usePagination } from "react-table";
import Button from "../Button";
import Columns from "./column";
import { useNavigate } from "react-router-dom";

import { nodes } from "./data";
// import { nodes } from "../../data/Node";
// import { edges } from "../../data/Edges";
export default function Table({ className }) {
  const columns = useMemo(() => Columns, []);
  const data = useMemo(() => nodes, []);
  const nav = useNavigate();

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    page,
    prepareRow,
    nextPage,
    previousPage,
    pageOptions,
    state: { pageIndex },
    setPageSize,
  } = useTable(
    {
      columns,
      data,
    },
    usePagination
  );
  useEffect(() => {
    setPageSize(14);
  }, []);

  return (
    <div className={`${className} mr-1`}>
      <table {...getTableProps()} className="w-full divide-y-2 divide-black">
        <thead>
          {headerGroups.map((headerGroup) => {
            return (
              <tr
                {...headerGroup.getHeaderGroupProps()}
                className="bg-green-400 divide-x-2 divide-black text-lg"
              >
                {headerGroup.headers.map((column) => {
                  return (
                    <th {...column.getHeaderProps()} className="p-2">
                      {column.render("Header")}
                    </th>
                  );
                })}
              </tr>
            );
          })}
        </thead>
        <tbody {...getTableBodyProps()} className="divide-y-2 divide-gray-300">
          {page.map((row) => {
            prepareRow(row);
            return (
              <tr
                {...row.getRowProps()}
                className="bg-gray-100 divide-x-2 divide-black"
              >
                {row.cells.map((cell) => {
                  console.log(cell);
                  if (cell.column.Header === "Actions") {
                    return (
                      <td {...cell.getCellProps()} className="text-center">
                        <div className="flex gap-1 justify-center divide-x-2 divide-gray-400">
                          <button
                            className="p-1"
                            onClick={() => {
                              console.log("edit", cell.row.id);
                              nav("table/edit");
                            }}
                          >
                            edit
                          </button>
                          <button
                            className=" p-1"
                            onClick={() => {
                              console.log("remove", cell.row.id);
                            }}
                          >
                            remove
                          </button>
                        </div>
                      </td>
                    );
                  }
                  return (
                    <td {...cell.getCellProps()} className="text-center">
                      {cell.render("Cell")}
                    </td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
      <div className="flex justify-end gap-2 mt-1 mx-2 items-center">
        <button
          className="p-1 bg-slate-400 rounded-md"
          onClick={() => previousPage()}
        >
          previous
        </button>
        <span>
          page{" "}
          <strong>
            {pageIndex + 1} of {pageOptions.length}
          </strong>
        </span>
        <button
          className="p-1 bg-slate-400 rounded-md"
          onClick={() => nextPage()}
        >
          Next
        </button>
      </div>
    </div>
  );
}
