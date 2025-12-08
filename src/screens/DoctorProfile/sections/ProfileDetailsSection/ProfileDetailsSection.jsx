import { CalendarIcon, Edit2Icon } from "lucide-react";
import React from "react";
import "./ProfileDetailsSection.css";

const personalInfoFields = [
  { label: "First Name", value: "Mohammad", width: "w-full md:w-[278px]" },
  { label: "Last Name", value: "Ahmed", width: "w-full md:w-[276px]" },
  { label: "Date of Birth", value: "9/8/1980", width: "w-full md:w-[275px]", hasCalendar: true },
];

const academicDetailsFields = [
  { label: "Department", value: "Computer Science", width: "w-full md:w-[422px]" },
  { label: "Academic Rank", value: "Ph.D. in Computer Science", width: "w-full md:w-[423px]" },
  { label: "University", value: "Beni-Suef University", width: "w-full md:w-[422px]", fullWidth: true },
];

const contactInfoFields = [
  { label: "Primary Email", value: "ahmedmohammad@university.edu", width: "w-full md:w-[422px]" },
  { label: "Office Location", value: "Building A, Room 301", width: "w-full md:w-[423px]" },
  { label: "Phone Number", value: "+20 112 124 0126", width: "w-full md:w-[422px]" },
  { label: "Office Hours", value: "Monday & Wednesday, 2:00 PM - 4:00 PM", width: "w-full md:w-[423px]" },
];

const researchInterests = ["Machine Learning", "Computer Vision", "Neural Networks", "NLP"];

export default function ProfileDetailsSection() {
  return (
    <section className="profile-details-section">
      <header className="profile-header">
        <div className="profile-avatar-container">
          <div className="profile-avatar-edit">
            <Edit2Icon className="profile-avatar-edit-icon" />
          </div>
          <img
            className="profile-avatar"
            alt="Dr. Ahmed Kareem"
            src="https://c.animaapp.com/mi94ynm7klZyRg/img/rectangle-1.png"
          />
        </div>

        <div className="profile-info">
          <h1 className="profile-name">Dr. Ahmed Kareem</h1>
          <p className="profile-role">Professor</p>
          <p className="profile-department">Artificial Intelligence</p>
          <p className="profile-employee-id">
            <span>Employee ID:</span> EMP-2018CS-0042
          </p>
          <p className="profile-joined">Joined: September 2018</p>
          <button className="profile-edit-button">
            <img
              className="profile-edit-icon"
              alt="Edit"
              src="https://c.animaapp.com/mi94ynm7klZyRg/img/iconly-light-edit.svg"
            />
          </button>
        </div>
      </header>

      <div className="profile-content">
        <div className="profile-sections-container">
          <div className="profile-sections-wrapper">
            <div className="profile-sections">
              {/* Personal Info */}
              <div className="profile-section">
                <div className="profile-section-header">
                  <div className="profile-section-title-container">
                    <img
                      className="profile-section-icon"
                      alt="Personal Info"
                      src="https://c.animaapp.com/mi94ynm7klZyRg/img/vector.svg"
                    />
                    <h2 className="profile-section-title">Personal Info</h2>
                  </div>
                  <img
                    className="profile-section-divider"
                    alt="Divider"
                    src="https://c.animaapp.com/mi94ynm7klZyRg/img/line-6.svg"
                  />
                </div>

                <div className="profile-fields-row">
                  {personalInfoFields.map((field, index) => (
                    <div
                      key={index}
                      className={`profile-field ${
                        index === 0
                          ? "profile-field-small"
                          : index === 1
                          ? "profile-field-medium"
                          : "profile-field-large"
                      }`}
                    >
                      <label className="profile-label">{field.label}</label>
                      <div className="profile-input-container">
                        <input defaultValue={field.value} className="profile-input" />
                        {field.hasCalendar && <CalendarIcon className="profile-calendar-icon" />}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Academic Details */}
              <div className="profile-section">
                <div className="profile-section-header">
                  <div className="profile-section-title-container">
                    <img
                      className="profile-section-icon"
                      alt="Academic Details"
                      src="https://c.animaapp.com/mi94ynm7klZyRg/img/akar-icons-paper.svg"
                    />
                    <h2 className="profile-section-title">Academic Details</h2>
                  </div>
                  <img
                    className="profile-section-divider"
                    alt="Divider"
                    src="https://c.animaapp.com/mi94ynm7klZyRg/img/line-6.svg"
                  />
                </div>

                <div className="profile-fields">
                  <div className="profile-fields-row">
                    {academicDetailsFields.slice(0, 2).map((field, index) => (
                      <div
                        key={index}
                        className={`profile-field ${
                          index === 0
                            ? "profile-field-academic-small"
                            : "profile-field-academic-medium"
                        }`}
                      >
                        <label className="profile-label">{field.label}</label>
                        <input defaultValue={field.value} className="profile-input" />
                      </div>
                    ))}
                  </div>

                  <div className="profile-fields-row">
                    {academicDetailsFields.slice(2).map((field, index) => (
                      <div key={index} className="profile-field profile-field-academic-small">
                        <label className="profile-label">{field.label}</label>
                        <input defaultValue={field.value} className="profile-input" />
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Contact Info */}
              <div className="profile-section">
                <div className="profile-section-header">
                  <div className="profile-section-title-container">
                    <img
                      className="profile-section-icon"
                      alt="Contact Info"
                      src="https://c.animaapp.com/mi94ynm7klZyRg/img/fluent-mdl2-contact-card.svg"
                    />
                    <h2 className="profile-section-title">Contact Info</h2>
                  </div>
                  <img
                    className="profile-section-divider"
                    alt="Divider"
                    src="https://c.animaapp.com/mi94ynm7klZyRg/img/line-6.svg"
                  />
                </div>

                <div className="profile-fields">
                  <div className="profile-fields-row">
                    {contactInfoFields.slice(0, 2).map((field, index) => (
                      <div
                        key={index}
                        className={`profile-field ${
                          index === 0
                            ? "profile-field-academic-small"
                            : "profile-field-academic-medium"
                        }`}
                      >
                        <label className="profile-label">{field.label}</label>
                        <input defaultValue={field.value} className="profile-input" />
                      </div>
                    ))}
                  </div>
                  <div className="profile-fields-row">
                    {contactInfoFields.slice(2).map((field, index) => (
                      <div
                        key={index}
                        className={`profile-field ${
                          index === 0
                            ? "profile-field-academic-small"
                            : "profile-field-academic-medium"
                        }`}
                      >
                        <label className="profile-label">{field.label}</label>
                        <input defaultValue={field.value} className="profile-input" />
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Research Interests */}
              <div className="research-interests-card">
                <div className="research-interests-content">
                  <h3 className="research-interests-title">Research Interests</h3>
                  <div className="research-interests-list">
                    {researchInterests.map((interest, index) => (
                      <div key={index} className="research-interest-badge">
                        {interest}
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Security Settings */}
              <div className="profile-section security-section">
                <div className="profile-section-header">
                  <div className="profile-section-title-container">
                    <img
                      className="profile-section-icon"
                      alt="Security Settings"
                      src="https://c.animaapp.com/mi94ynm7klZyRg/img/solar-settings-linear.svg"
                    />
                    <h2 className="profile-section-title">Security Settings</h2>
                  </div>
                  <img
                    className="profile-section-divider"
                    alt="Divider"
                    src="https://c.animaapp.com/mi94ynm7klZyRg/img/line-6.svg"
                  />
                </div>

                <div className="profile-fields">
                  <div className="profile-fields-row">
                    <div className="profile-field profile-field-academic-small">
                      <label className="profile-label">Change Password</label>
                      <button className="security-button">Update Password</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <button className="profile-main-edit-button">
              <img
                className="profile-main-edit-icon"
                alt="Edit"
                src="https://c.animaapp.com/mi94ynm7klZyRg/img/iconly-light-edit.svg"
              />
            </button>
          </div>
        </div>

        <button className="profile-save-button">Save Changes</button>
      </div>
    </section>
  );
}
