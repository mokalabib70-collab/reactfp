import React from "react";
import "./Navigation.css";

export const Navigation = () => {
  return (
    <div className="navigation fade-in">
      <div className="navigation-info">
        <h1 className="navigation-title">Exam Reports</h1>
        <p className="navigation-description">
          View and analyze exam session and violations and Cheating reports
        </p>
      </div>

      <button className="export-button">
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
          <polyline points="7 10 12 15 17 10"></polyline>
          <line x1="12" y1="15" x2="12" y2="3"></line>
        </svg>
        <span>Export All Reports</span>
      </button>
    </div>
  );
};
