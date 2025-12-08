import {
  BarChart3Icon,
  ChevronRightIcon,
  FileTextIcon,
  LayoutDashboardIcon,
  MessageSquareIcon,
  UsersIcon,
} from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";
import "./NavigationSection.css";

const navigationItems = [
  { icon: LayoutDashboardIcon, label: "Dashboard" },
  { icon: FileTextIcon, label: "Exams", path: "/exams" },
  { icon: BarChart3Icon, label: "Reports" },
  { icon: UsersIcon, label: "Courses" },
  { icon: MessageSquareIcon, label: "Chat" },
];

export default function NavigationSection() {
  return (
    <nav className="navigation-section">
      <div className="navigation-menu">
        {navigationItems.map((item, index) => {
          const ItemContent = (
            <>
              <ChevronRightIcon className="navigation-chevron" />
              <div className="navigation-content">
                <item.icon className="navigation-icon" />
                <span className="navigation-label">{item.label}</span>
              </div>
            </>
          );

          return item.path ? (
            <Link
              key={item.label}
              to={item.path}
              className="navigation-item"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {ItemContent}
            </Link>
          ) : (
            <button
              key={item.label}
              className="navigation-item"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {ItemContent}
            </button>
          );
        })}
      </div>
    </nav>
  );
}
