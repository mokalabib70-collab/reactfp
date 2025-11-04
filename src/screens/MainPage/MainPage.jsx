import React from "react";
import "./MainPage.css";
import { Link } from "react-router-dom";


export const MainPage = () => {
  return (
    <div className="main-page">
      <header className="header">
        <div className="logo-container">
          <img
            className="logo-image"
            alt="TruthEye Logo"
            src="https://c.animaapp.com/mhcmxj5aY0OIWh/img/unnamed-photoroom-1.png"
          />
          <h1 className="logo-text">
            <span className="logo-truth">Truth</span>
            <span className="logo-eye">Eye</span>
          </h1>
        </div>

        <nav className="nav-buttons">
           <Link to="/login">
    <button className="btn btn-outline">Log in</button>
  </Link>
          <Link to="/signup">
    <button className="btn btn-primary">Sign up</button>
  </Link>
        </nav>
      </header>
    </div>
  );
};