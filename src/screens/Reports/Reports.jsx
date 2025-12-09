import React from "react";
import NavigationSection from "../DoctorProfile/sections/NavigationSection/NavigationSection";
import SidebarSection from "../DoctorProfile/sections/SidebarSection/SidebarSection";
import { ReportsTable } from "./components/ReportsTable/ReportsTable";
import { Navigation } from "./components/Navigation/Navigation";
import "./Reports.css";

export const Reports = () => {
  return (
    <div className="reports-container">
      <SidebarSection />
      <div className="reports-content">
        <NavigationSection />
        <main className="reports-main">
          <Navigation />
          <ReportsTable />
        </main>
      </div>
    </div>
  );
};
