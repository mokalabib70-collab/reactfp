// src/screens/DoctorProfile/sections/HeaderSection/HeaderSection.jsx
import React from "react";
import "./HeaderSection.css";

export default function HeaderSection() {
  return (
    <header className="header-section">
      <h1 className="header-title">My Profile</h1>
      <button className="header-logout-button">Log Out</button>
    </header>
  );
}
