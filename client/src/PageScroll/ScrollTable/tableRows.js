import React from "react";
import { column } from "../tableColumn";

export const TableRows = ({ tableData, tableColumn }) => {
  return (
    <>
      {tableData.map((data, index) => {
        return (
          <>
            <tr key={`${index}`}>
              {tableColumn.map((column, indexCol) => {
                return (
                  <>
                    <td key={`${indexCol}`}>{data[column.key]}</td>
                  </>
                );
              })}
            </tr>
          </>
        );
      })}
    </>
  );
};
