import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import DataTable from "./dataTable/dataTable";
import PageScroll from "./PageScroll/index";

ReactDOM.render(
  <React.StrictMode>
    <App />
    {/* <DataTable /> */}
    {/* <PageScroll /> */}
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
