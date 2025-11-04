import React from "react";
import { Button , Input , Card } from "../../components";
import { Link } from "react-router-dom";
import "./Verify3.css";

const verificationBoxes = [
  { value: "", hasGradient: false },
  { value: "", hasGradient: false },
  { value: "", hasGradient: false },
  { value: "", hasGradient: false },
  { value: "", hasGradient: false },
  { value: "", hasGradient: false },
];

export const Verify3 = () => {
  return (
    <div className="verify3-container">
      <img
        className="verify3-polygon"
        alt="Polygon"
        src="https://c.animaapp.com/mhgskgcfgjoiQD/img/polygon-4.svg"
      />

      <img
        className="verify3-photo"
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

        <nav className="verify3-nav">
          <div className="verify3-nav-text">No Account yet?</div>
              <Link to="/signup">
                         <Button className="verify3-button">Sign Up</Button>
                       </Link>       
        </nav>
      </header>

      <main className="verify3-main">
        <div className="verify3-card-wrapper">
        <Card className="verify3-card">
              <div className="verify3-card-content">
                <div className="form3-container">
                  <div className="form3-inner">
                    <h1 className="verify3-title">Verify your account</h1>

                  <p className="verify3-description">
                    Enter the passcode you just received on your email <br />
                    address ending with ********in@gmail.com
                  </p>
                </div>

                <div className="verification-boxes">
                  {verificationBoxes.map((box, index) => (
                    <div key={index} className="input-wrapper">
                      {box.hasGradient ? (
                        <div className="gradient-input-container">
                          <Input
                            type="text"
                            maxLength={1}
                            defaultValue={box.value}
                            className="verification-input gradient-input"
                          />
                        </div>
                      ) : (
                        <Input
                          type="text"
                          maxLength={1}
                          defaultValue={box.value}
                          className="verification-input"
                        />
                      )}
                    </div>
                  ))}
                </div>
              </div>

              <Button className="verify3x-button">Verify</Button>
            </div>
            </Card>
          </div>
      </main>
      </div>
   
  );
};
