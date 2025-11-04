
import React from "react";
import "./Checkbox.css";

export const Checkbox = ({ className = "", ...props }) => {
  return (
    <input
      type="checkbox"
      className={`checkbox ${className}`}
      {...props}
    />
  );
};
