import React from "react";
import { ToastContainer as AlertContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const Alert = () => {
  return (
    <AlertContainer
      position="top-right"
      autoClose={2000}
      theme="dark"
      hideProgressBar
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
    />
  );
};
