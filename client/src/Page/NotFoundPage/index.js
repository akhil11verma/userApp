import React from "react";
import { Link } from "react-router-dom";
import "./index.css";

export const NotFoundPage = () => {
  return (
    <div className="NotFoundStyle">
      <h1>404 Page NotFound</h1>
      <Link to="/">Back to DashBoard</Link>
    </div>
  );
};
