import React from "react";
import "./index.css";

import { TableBody } from "./TableBody";
import { TableHeader } from "./TableHeader";

export const Table = ({ tableColumn, userData }) => {
  return (
    <table>
      <TableHeader tableColumn={tableColumn} />
      <TableBody userData={userData} tableColumn={tableColumn} />
    </table>
  );
};
