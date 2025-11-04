import { EyeIcon } from "lucide-react";
import { Button, Input, Checkbox, Select, Card } from "../../components";
import { Link } from "react-router-dom";
import "./SignUp.css";
import React, { useState } from "react";



const steps = [
  { number: "STEP 1", description: "Lorem ipsum dolor sit amet, consectetur.", completed: true },
  { number: "STEP 2", description: "Lorem ipsum dolor sit amet, consectetur.", completed: false },
  { number: "STEP 3", description: "Lorem ipsum dolor sit amet, consectetur.", completed: false },
  { number: "STEP 4", description: "Lorem ipsum dolor sit amet, consectetur.", completed: false },
  { number: "FINAL STEP", description: "Lorem ipsum dolor sit amet, consectetur.", completed: false },
];



export const SignUp=()=> {
  const [showPassword, setShowPassword] = useState(false);

   return (
   <div className="signup-container">
      <img
        className="signup-polygon"
        alt="Polygon"
        src="https://c.animaapp.com/mhgskgcfgjoiQD/img/polygon-4.svg"
      />
        <div className="steps-container">
          {steps.map((step, index) => (
            <div
              key={index}
              className="step-item"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              {step.checked ? (
                <img
                  className="step-checkbox checked"
                  alt="Checked"
                  src="https://c.animaapp.com/mhflix27xtzd1K/img/checked.png"
                />
              ) : (
                <div className="step-checkbox unchecked">
                  {index === 1 && <div className="step-checkbox-dot" />}
                </div>
              )}

              <div className="step-content">
                <div className="step-number">{step.number}</div>
                <div className={`step-description ${step.checked ? "checked" : ""}`}>
                  {step.description}
                </div>
              </div>
            </div>
          ))}
        
      </div>

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
      
              <nav className="signup-nav">
               <div className="signup-nav-text">Already have an account?</div>
              <Link to="/login">
              <button className="sign-up-button">Login</button>
               </Link>    
              </nav>
            </header>

      <main className="main-content signup-page">
        <Card className="signup-card">
          <div className="card-content">
            <div className="welcome-section">
              <h1 className="welcome-title">
                Welcome to <span className="logo-turth">Truth</span>
                <span className="logo-eye">Eye</span>! Please log in or
                create a new account.
              </h1>
              <h2 className="trial-title">
                Start Your 14-Day Free Trial Today.
              </h2>
              <p className="trial-subtitle">NO CREDIT CARD REQUIRED!</p>
            </div>

            <form className="form">
              <Input type="text" placeholder="Enter your first name" />

              <Input type="text" placeholder="Enter your last name" />

              <div className="phone-input-group">
                <Select
                  options={[{ value: "eg", label: "+20 🇪🇬" }]}
                  defaultValue="eg"
                />
                <Input type="tel" placeholder="+20" className="phone-input" />
              </div>

              <Input type="email" placeholder="Enter your university email" />

              <div className="password-input-wrapper">
                <Input
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter your password"
                  className="password-input"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="password-toggle"
                >
                  {showPassword ? (
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24" />
                      <line x1="1" y1="1" x2="23" y2="23" />
                    </svg>
                  ) : (
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                      <circle cx="12" cy="12" r="3" />
                    </svg>
                  )}
                </button>
              </div>

              <div className="password-requirements">
                <ul className="requirements-list">
                  <li>• Use 8 or more characters</li>
                  <li>• One special character</li>
                  <li>• One Uppercase letter</li>
                </ul>
                <ul className="requirements-list">
                  <li>• One lowercase character</li>
                  <li>• One number</li>
                </ul>
              </div>

              <label htmlFor="marketing" className="checkbox-label">
            <Checkbox id="marketing" />
            <span>I want to receive emails about the product, feature updates, events, and marketing promotions.</span>
              </label>
              <p className="terms-text">
                By creating an account, I agree to our{" "}
                <a href="#" className="terms-link">
                  Privacy Policy
                </a>{" "}
                and{" "}
                <a href="#" className="terms-link">
                  Terms of Service
                </a>
              </p>

              <Button type="submit" variant="primary" className="submit-button">
                Sign Up
              </Button>
            </form>
          </div>
        </Card>
      </main>
    </div>
  );
};

