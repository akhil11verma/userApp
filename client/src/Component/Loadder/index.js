import React from "react";
import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

export const Loadder = () => {
  return (
    <Loader
      style={{ textAlign: "center" }}
      type="TailSpin"
      color="#00BFFF"
      height={100}
      width={50}
      timeout={3000} //3 secs
    />
  );
};
