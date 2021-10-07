import React from "react";
import "./index.css";
import { Sidebar } from "./Sidebar";

export const Dashboard = () => {
  return (
    <div className="homeContainer">
      <Sidebar />
      <h1 style={{ textAlign: "center" }}>Dashboard</h1>
    </div>
  );
};
