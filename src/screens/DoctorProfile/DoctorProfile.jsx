import React from "react";
import "./DoctorProfile.css";
import HeaderSection from "./sections/HeaderSection";
import NavigationSection from "./sections/NavigationSection";
import ProfileDetailsSection from "./sections/ProfileDetailsSection";
import SidebarSection from "./sections/SidebarSection";

export default function DoctorProfile() {
  return (
    <div className="doctor-profile" data-model-id="169:3889">
      <SidebarSection />

      <div className="doctor-profile-content">
        <NavigationSection />

        <div className="doctor-profile-main">
          <HeaderSection />
          <ProfileDetailsSection />
        </div>
      </div>
    </div>
  );
}
