
import React, { useState } from "react";
import { EyeOffIcon } from "lucide-react";
import { Link } from "react-router-dom";
import "./Login.css";

export const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // handle form submission
  };

  return (
    <div className="login-container">
      <img
        className="login-polygon"
        alt="Polygon"
        src="https://c.animaapp.com/mhgskgcfgjoiQD/img/polygon-4.svg"
      />

      <img
        className="login-photo"
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
            <span className="verify-logo-text-truth">Truth</span>
             <span className="verify-logo-text-eye">Eye</span>
           </div>
         </div>
           
                   <nav className="login-nav">
                    <div className="login-nav-text">No Account yet?</div>
                      <Link to="/signup">
                      <button className="login-button">Sign Up</button>
                    </Link>  
                   </nav>
                 </header>

      <main className="main-content login-page">
        <div className="login-card">
          <div className="logincard-content">
            <h1 className="login-title">
              <span className="title-welcome">Welcome to </span>
              <span className="title-turth">Truth</span>
              <span className="title-eye">Eye</span>
              <span className="title-exclamation">!</span>
              <br />
              <span className="title-subtitle">Log in into your account</span>
            </h1>

            <form className="loginform" onSubmit={handleSubmit}>
              <div className="form-fields">
                <input
                  type="email"
                  placeholder="Enter your university email"
                  className="input"
                  required
                />

                <input
                  type="text"
                  placeholder="Enter your student ID"
                  className="input"
                  required
                />

                <div className="password-container">
                  <input
                    type={showPassword ? "text" : "password"}
                    placeholder="Enter your password"
                    className="input password-input"
                    required
                  />
                  <button
                    type="button"
                    className="password-toggle"
                    onClick={() => setShowPassword(!showPassword)}
                    aria-label="Toggle password visibility"
                  >
                    <EyeOffIcon className="eye-icon" />
                  </button>
                </div>
              </div>

              <div className="form-footer">
                <div className="form-options">
                  <label className="checkbox-label">
                    <input
                      type="checkbox"
                      className="checkbox"
                      checked={rememberMe}
                      onChange={(e) => setRememberMe(e.target.checked)}
                    />
                    <span className="checkbox-text">Remember Me</span>
                  </label>

                  <Link to="/verification" className="forgot-link">
                      Forgot Password?
                    </Link>
                  </div>

                <p className="loginterms-text">
                  By Creating an Account, it means you agree to our{" "}
                  <a href="#" className="terms-link">Privacy Policy</a> and{" "}
                  <a href="#" className="terms-link">Terms of Service</a>
                </p>
              </div>

              <button type="submit" className="submit-button">
                Log In
              </button>
            </form>
          </div>
        </div>
      </main>
    </div>
  );
};
