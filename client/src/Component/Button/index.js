import React from "react";
import "./style.css";

export const CustomButton = ({ onClick, buttonName }) => {
  return (
    <button onClick={onClick} className="buttonStyle">
      {buttonName}
    </button>
  );
};
