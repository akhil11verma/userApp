import React from "react";

export const TableHeader = ({ tableColumn }) => {
  return (
    <tr>
      {tableColumn.map((column, index) => {
        return <th key={`${index}`}>{column.header}</th>;
      })}
    </tr>
  );
};
