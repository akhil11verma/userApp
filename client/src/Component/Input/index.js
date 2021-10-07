import React from "react";
import  "./style.css";

export const Input = ({
  type,
  name,
  placeholder,
  handleChange,
  value,
  onBlur,
}) => {
  return (
    <input
    className="inputStyle"
      type={type}
      name={name}
      value={value}
      placeholder={placeholder}
      onChange={handleChange}
      onBlur={onBlur}
    ></input>
  );
};
