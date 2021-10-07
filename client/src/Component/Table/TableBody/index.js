import React from "react";

export const TableBody = ({ userData, tableColumn = [] }) => {
  return (
    <>
      {userData.map((data, index) => {
        return (
          <tr key={`${index}`}>
            {tableColumn.map((column, indexCol) => {
              return (
                <td key={`${indexCol}`}>
                  {indexCol === 0 ? index + 1 : data[column.key]}
                </td>
              );
            })}
          </tr>
        );
      })}
    </>
  );
};
