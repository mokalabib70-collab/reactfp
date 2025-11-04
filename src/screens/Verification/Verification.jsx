import React from "react";
import { Button , Input , Card } from "../../components";
import { Link } from "react-router-dom";
import "./Verification.css";


export const Verification = () => {
  return (
    <div className="verify-container">
      <img
        className="verify-polygon"
        alt="Polygon"
        src="https://c.animaapp.com/mhgskgcfgjoiQD/img/polygon-4.svg"
      />

      <img
        className="verify-photo"
        alt="Unnamed photoroom"
        src="https://c.animaapp.com/mhgskgcfgjoiQD/img/unnamed-photoroom--2--1.png"
      />

      <header className="verify-header">
        <div className="verify-logo">
          <img
            className="verify-logo-image"
            alt="Unnamed photoroom"
            src="https://c.animaapp.com/mhgskgcfgjoiQD/img/unnamed-photoroom-1.png"
          />

          <div className="verify-logo-text">
            <span className="verify-logo-text-truth">Turth</span>
            <span className="verify-logo-text-eye">Eye</span>
          </div>
        </div>

        <nav className="verify-nav">
          <div className="verify-nav-text">No Account yet?</div>
              <Link to="/signup">
                         <Button className="verify-button">Sign Up</Button>
                       </Link>       

        </nav>
      </header>

      <main className="verify-main">
       <div className="verify-card-wrapper">
          <Card className="verify-card">
            <div className="verify-card-content">
              <h1 className="verify-title">Reset Password</h1>
              <p className="verify-description">
                Type your authorised email to receive reset <br />
                password link.
              </p>

              <Input
                type="email"
                placeholder="Enter your university email"
              />

             <Link to="/verify2" style={{ textDecoration: "none" }}>
             <Button className="verify-btn" variant="primary">
              <span className="confirm-button-text">Send Reset Password Link </span>
            </Button>
            </Link>
            </div>
          </Card>
        </div>
      </main>
    </div>
  );
};
