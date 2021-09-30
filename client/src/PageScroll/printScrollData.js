import React from "react";
import { TableHeader } from "./ScrollTable/tableHeader";
import { TableRows } from "./ScrollTable/tableRows";

export const ScrollTable = ({ tableData, tableColumn }) => {
  return (
    <>
      <table>
        <TableHeader tableColumn={tableColumn} />
        <TableRows tableData={tableData} tableColumn={tableColumn} />
      </table>
    </>
  );
};
