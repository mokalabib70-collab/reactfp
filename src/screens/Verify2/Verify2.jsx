import { EyeIcon } from "lucide-react";
import React, { useState } from "react";
import { Button , Input , Card } from "../../components";
import { Link } from "react-router-dom";
import "./Verify2.css";

export const Verify2 = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  return (
   <div className="verify2-container">
      <img
        className="verify2-polygon"
        alt="Polygon"
        src="https://c.animaapp.com/mhgskgcfgjoiQD/img/polygon-4.svg"
      />

      <img
        className="verify2-photo"
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

        <nav className="verify2-nav">
          <div className="verify2-nav-text">No Account yet?</div>
              <Link to="/signup">
                         <button className="verify2-button">Sign Up</button>
                       </Link>       

        </nav>
      </header>

       <main className="verify2-main">
             <div className="verify2-card-wrapper">
                <Card className="verify2-card">
        <div className="verify2-card-content">
          <div className="form-container">
            <div className="form-inner">
              <h1 className="verify2-title">Create New Password</h1>

              <p className="password-strength-text">
               Type your new strong password, Your password must include: One capital letter & one small letter at least, one special character & Minimum 8 digits long.
                  </p>

              <div className="input-group">
                <div className="input-wrapper">
                  <Input
                    type={showPassword ? "text" : "password"}
                    placeholder="Enter password"
                    className="input-field"
                  />
                  <Button
                    type="button"
                    className="eye-button"
                    onClick={() => setShowPassword(!showPassword)}
                    aria-label="Toggle password visibility"
                  >
                    <EyeIcon className="eye-icon" />
                  </Button>
                </div>

                <div className="input-wrapper">
                  <Input
                    type={showConfirmPassword ? "text" : "password"}
                    placeholder="Confirm password"
                    className="input-field"
                  />
                  <Button
                    type="button"
                    className="eye-button"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    aria-label="Toggle password visibility"
                  >
                    <EyeIcon className="eye-icon" />
                  </Button>
                </div>
              </div>
            </div>

           <Link to="/verify3">
          <Button className="confirm-button">
         <span className="confirm-button-text">Confirm Changes</span>
         </Button>
         </Link>
          </div>
        </div>
      </Card>
     </div>
    </main>
    </div>
    
  );
};

