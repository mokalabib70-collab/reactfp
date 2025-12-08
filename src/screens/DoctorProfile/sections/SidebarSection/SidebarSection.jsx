import React from "react";
import "./SidebarSection.css";

export default function SidebarSection() {
  return (
    <header className="sidebar-header">
      <div className="sidebar-header-content">
        <div className="sidebar-logo-container">
          <img
            className="sidebar-logo-image"
            alt="Unnamed photoroom"
            src="https://c.animaapp.com/mi94ynm7klZyRg/img/unnamed-photoroom-1.png"
          />
          <div className="sidebar-logo-text">
            <span className="sidebar-logo-truth">Truth</span>
            <span className="sidebar-logo-eye">Eye</span>
          </div>
        </div>

        <div className="sidebar-user-container">
          <div className="sidebar-avatar">
            <img
              src="https://c.animaapp.com/mi94ynm7klZyRg/img/rectangle-1.png"
              alt="Dr . Ahmed"
            />
          </div>
          <div className="sidebar-user-name">Dr . Ahmed</div>
        </div>
      </div>
    </header>
  );
}
