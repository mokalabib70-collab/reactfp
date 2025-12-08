
 import NavigationSection from "../DoctorProfile/sections/NavigationSection";

import "./EmptyExam.css";
import { Link } from "react-router-dom";


export default function EmptyExam() {
  return (
    <div className="empty-exam">
      <header className="header">
        <div className="header-content">
          <div className="logo-section fade-in" style={{ animationDelay: "0ms" }}>
            <img
              className="logo-image"
              alt="TruthEye Logo"
              src="https://c.animaapp.com/mid1fetqfRgb3R/img/unnamed-photoroom-1.png"
            />
            <div className="logo-text">
              <span className="logo-truth">Truth</span>
              <span className="logo-eye">Eye</span>
            </div>
          </div>

          <div className="user-section fade-in" style={{ animationDelay: "200ms" }}>
            <div className="avatar">
              <img
                src="https://c.animaapp.com/mid1fetqfRgb3R/img/rectangle.png"
                alt="Dr. Ahmed"
                className="avatar-image"
              />
            </div>
            <div className="user-name">Dr . Ahmed</div>
          </div>
        </div>
      </header>

      <div className="main-container">
        
        <aside className="sidebar fade-in" style={{ animationDelay: "400ms" }}>
          <NavigationSection />
        </aside>

        <main className="content">
          <div className="content-header">
            <h1 className="page-title fade-in" style={{ animationDelay: "600ms" }}>
              Exam Management
            </h1>
           <Link 
           to="/createexams"
            className="create-button fade-in" 
  style={{ animationDelay: "800ms" }}
>
              Create Exam
            </Link>
          </div>
        </main>
      </div>
    </div>
  );
}
