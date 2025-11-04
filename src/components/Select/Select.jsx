import React from "react";
import "./Select.css";

export const Select = ({ options, className = "", ...props }) => {
  return (
    <select className={`select ${className}`} {...props}>
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
};
