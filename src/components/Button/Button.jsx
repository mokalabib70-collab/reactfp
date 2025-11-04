import React from "react";
import "./Button.css";

export const Button = ({ variant = "default", children, className = "", ...props }) => {
  return (
    <button
      className={`button button--${variant} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};
