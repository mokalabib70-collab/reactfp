import React from "react";
import "./ReportsTable.css";

const tableData = [
  {
    student: "Sara Ahmed Ali",
    email: "sara.a@university.edu",
    exam: "Data Structures Final",
    date: "10/24/2025",
    violations: 0,
    score: "45/50",
    status: "Passed",
  },
  {
    student: "Ali Ahmed Ali",
    email: "ali.a@university.edu",
    exam: "Data Structures Final",
    date: "10/24/2025",
    violations: 4,
    score: "26/50",
    status: "Suspected",
  },
  {
    student: "Sara Ahmed Ali",
    email: "sara.a@university.edu",
    exam: "Data Structures Final",
    date: "10/24/2025",
    violations: 0,
    score: "45/50",
    status: "Passed",
  },
  {
    student: "Ali Ahmed Ali",
    email: "ali.a@university.edu",
    exam: "Data Structures Final",
    date: "10/24/2025",
    violations: 4,
    score: "26/50",
    status: "Suspected",
  },
  {
    student: "Sara Ahmed Ali",
    email: "sara.a@university.edu",
    exam: "Data Structures Final",
    date: "10/24/2025",
    violations: 0,
    score: "45/50",
    status: "Passed",
  },
  {
    student: "Mai Ali Alaa",
    email: "mai.a@university.edu",
    exam: "Data Structures Final",
    date: "10/24/2025",
    violations: 1,
    score: "35/50",
    status: "Suspected",
  },
  {
    student: "Ali Ahmed Ali",
    email: "ali.a@university.edu",
    exam: "Data Structures Final",
    date: "10/24/2025",
    violations: 4,
    score: "26/50",
    status: "Suspected",
  },
  {
    student: "Sara Ahmed Ali",
    email: "sara.a@university.edu",
    exam: "Data Structures Final",
    date: "10/24/2025",
    violations: 0,
    score: "45/50",
    status: "Passed",
  },
  {
    student: "Alaa Ali Sami",
    email: "alaa.a@university.edu",
    exam: "Data Structures Final",
    date: "10/24/2025",
    violations: 3,
    score: "30/50",
    status: "Suspected",
  },
  {
    student: "Sara Ahmed Ali",
    email: "sara.a@university.edu",
    exam: "Data Structures Final",
    date: "10/24/2025",
    violations: 0,
    score: "45/50",
    status: "Passed",
  },
  // باقي البيانات كما هي ...
];

const pageNumbers = [1, 2, 3, 4, 5, 6, 7, 8];

export const ReportsTable = () => {
  return (
    <section className="reports-table-section">
      <h2 className="table-title">Session Reports</h2>

      <div className="table-filters">
        <div className="search-box">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="11" cy="11" r="8"></circle>
            <path d="m21 21-4.35-4.35"></path>
          </svg>
          <span>Search by student name, email, or exam title...</span>
        </div>

        <div className="filter-box">
          <div className="filter-content">
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"></polygon>
            </svg>
            <span>All Status</span>
          </div>
          <img
            className="dropdown-icon"
            alt="Dropdown"
            src="https://c.animaapp.com/mixq7mlf6wfiHo/img/gridicons-dropdown.svg"
          />
        </div>
      </div>

      <div className="table-wrapper">
        <table className="reports-table">
          <thead>
            <tr>
              <th>Student</th>
              <th>Email</th>
              <th>Exam</th>
              <th>Date</th>
              <th>Violations</th>
              <th>Score</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {tableData.map((row, index) => (
              <tr key={index}>
                <td>{row.student}</td>
                <td>{row.email}</td>
                <td>{row.exam}</td>
                <td>
                  <div className="date-cell">
                    <img
                      src="https://c.animaapp.com/mixq7mlf6wfiHo/img/uit-calender.svg"
                      alt="Calendar"
                    />
                    <span>{row.date}</span>
                  </div>
                </td>
                <td>
                  {row.violations > 0 ? (
                    <div className="violations-cell">
                      <img
                        src="https://c.animaapp.com/mixq7mlf6wfiHo/img/bx-error.svg"
                        alt="Error"
                      />
                      <span>{row.violations}</span>
                    </div>
                  ) : (
                    <span>{row.violations}</span>
                  )}
                </td>
                <td>{row.score}</td>
                <td>{row.status}</td>
                <td>
                  <button className="view-details-btn">
                    <img
                      src="https://c.animaapp.com/mixq7mlf6wfiHo/img/lets-icons-view-light.svg"
                      alt="View"
                    />
                    <span>View Details</span>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="pagination">
        <div className="pagination-controls">
          <button className="pagination-btn" disabled>
            <img
              src="https://c.animaapp.com/mixq7mlf6wfiHo/img/icon--heroicons-mini--https---heroicons-com--2.svg"
              alt="Back"
            />
            <span>Back</span>
          </button>

          <button className="pagination-btn active">1</button>

          {pageNumbers.slice(1).map((num) => (
            <button key={num} className="pagination-btn">
              {num}
            </button>
          ))}

          <button className="pagination-btn">
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="12" cy="12" r="1"></circle>
              <circle cx="19" cy="12" r="1"></circle>
              <circle cx="5" cy="12" r="1"></circle>
            </svg>
          </button>

          <button className="pagination-btn">
            <span>Next</span>
            <img
              src="https://c.animaapp.com/mixq7mlf6wfiHo/img/icon--heroicons-mini--https---heroicons-com--1.svg"
              alt="Next"
            />
          </button>
        </div>

        <div className="page-jump">
          <span>Page</span>
          <input type="text" defaultValue="0" />
          <button>Go</button>
        </div>

        <span className="pagination-info">110-120 of 1,250</span>
      </div>
    </section>
  );
};
