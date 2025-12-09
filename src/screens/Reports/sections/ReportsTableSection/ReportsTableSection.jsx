import { FilterIcon, MoreHorizontalIcon, SearchIcon } from "lucide-react";
import React from "react";
import { Button } from "../../../../components/ui/button";
import { Input } from "../../../../components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../../../../components/ui/table";

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
    student: "Mai Ali Alaa",
    email: "mai.a@university.edu",
    exam: "Data Structures Final",
    date: "10/24/2025",
    violations: 1,
    score: "35/50",
    status: "Suspected",
  },
];

const pageNumbers = [1, 2, 3, 4, 5, 6, 7, 8];

export const ReportsTableSection = () => {
  return (
    <section className="w-full bg-[#fffafa] rounded-[15px] overflow-hidden shadow-[0px_0px_10px_#00000040] p-4">
      <h2 className="h-[30px] flex items-center justify-center [font-family:'Poppins',Helvetica] font-semibold text-[#1c2933] text-xl text-center tracking-[0] leading-[normal] mb-4">
        Session Reports
      </h2>

      <div className="flex gap-4 mb-4">
        <div className="flex-1 max-w-[823px] bg-[#fcfcfc] rounded-[10px] shadow-[inset_0px_0px_5px_#9e9e9e] px-4 py-2.5">
          <div className="flex items-center gap-1">
            <SearchIcon className="w-6 h-6 text-[#8c8c8c]" />
            <span className="[font-family:'Poppins',Helvetica] font-normal text-[#8c8c8c] text-[15px] text-center tracking-[0] leading-[normal]">
              SearchIcon by student name. email, or exam title...
            </span>
          </div>
        </div>

        <div className="w-[281px] bg-[#fcfcfc] rounded-[10px] shadow-[inset_0px_0px_5px_#9e9e9e] px-4 py-2.5">
          <div className="flex items-end justify-between">
            <div className="inline-flex items-center gap-1">
              <FilterIcon className="w-4 h-4 text-[#1c2933]" />
              <span className="[font-family:'Poppins',Helvetica] font-normal text-[#1c2933] text-[15px] text-center tracking-[0] leading-[normal]">
                All Status
              </span>
            </div>
            <img
              className="w-6 h-6"
              alt="Gridicons dropdown"
              src="https://c.animaapp.com/mixq7mlf6wfiHo/img/gridicons-dropdown.svg"
            />
          </div>
        </div>
      </div>

      <div className="shadow-[0px_0px_10px_#9e9e9e] mb-4">
        <Table>
          <TableHeader>
            <TableRow className="bg-[#fcfcfc] border-b border-[#9e9e9e]">
              <TableHead className="w-[140px] text-center p-1 border-r border-[#9e9e9e] rounded-tl-[10px]">
                <span className="[font-family:'Poppins',Helvetica] font-medium text-[#1c2933] text-sm text-center tracking-[0] leading-[normal]">
                  Student
                </span>
              </TableHead>
              <TableHead className="w-[140px] text-center p-1 border-r border-[#9e9e9e]">
                <span className="[font-family:'Poppins',Helvetica] font-medium text-[#1c2933] text-sm text-center tracking-[0] leading-[normal]">
                  Email
                </span>
              </TableHead>
              <TableHead className="w-[140px] text-center p-1 border-r border-[#9e9e9e]">
                <span className="[font-family:'Poppins',Helvetica] font-medium text-[#1c2933] text-sm text-center tracking-[0] leading-[normal]">
                  Exam
                </span>
              </TableHead>
              <TableHead className="w-[140px] text-center p-1 border-r border-[#9e9e9e]">
                <span className="[font-family:'Poppins',Helvetica] font-medium text-[#1c2933] text-sm text-center tracking-[0] leading-[normal]">
                  Date
                </span>
              </TableHead>
              <TableHead className="w-[140px] text-center p-1 border-r border-[#9e9e9e]">
                <span className="[font-family:'Poppins',Helvetica] font-medium text-[#1c2933] text-sm text-center tracking-[0] leading-[normal]">
                  Violations
                </span>
              </TableHead>
              <TableHead className="w-[140px] text-center p-1 border-r border-[#9e9e9e]">
                <span className="[font-family:'Poppins',Helvetica] font-medium text-[#1c2933] text-sm text-center tracking-[0] leading-[normal]">
                  Score
                </span>
              </TableHead>
              <TableHead className="w-[140px] text-center p-1 border-r border-[#9e9e9e]">
                <span className="[font-family:'Poppins',Helvetica] font-medium text-[#1c2933] text-sm text-center tracking-[0] leading-[normal]">
                  Status
                </span>
              </TableHead>
              <TableHead className="w-[140px] text-center p-1 rounded-tr-[10px]">
                <span className="[font-family:'Poppins',Helvetica] font-medium text-[#1c2933] text-sm text-center tracking-[0] leading-[normal]">
                  Actions
                </span>
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {tableData.map((row, index) => (
              <TableRow
                key={index}
                className="bg-[#fcfcfc] border-b border-[#9e9e9e]"
              >
                <TableCell className="w-[140px] text-center p-1 border-r border-[#9e9e9e]">
                  <span className="[font-family:'Poppins',Helvetica] font-normal text-[#616161] text-[10px] text-center tracking-[0] leading-[normal]">
                    {row.student}
                  </span>
                </TableCell>
                <TableCell className="w-[140px] text-center p-1 border-r border-[#9e9e9e]">
                  <span className="[font-family:'Poppins',Helvetica] font-normal text-[#616161] text-[10px] text-center tracking-[0] leading-[normal]">
                    {row.email}
                  </span>
                </TableCell>
                <TableCell className="w-[140px] text-center p-1 border-r border-[#9e9e9e]">
                  <span className="[font-family:'Poppins',Helvetica] font-normal text-[#616161] text-[10px] text-center tracking-[0] leading-[normal]">
                    {row.exam}
                  </span>
                </TableCell>
                <TableCell className="w-[140px] text-center p-1 border-r border-[#9e9e9e]">
                  <div className="inline-flex items-center gap-1">
                    <img
                      className="w-[15px] h-[15px]"
                      alt="Uit calender"
                      src="https://c.animaapp.com/mixq7mlf6wfiHo/img/uit-calender.svg"
                    />
                    <span className="[font-family:'Poppins',Helvetica] font-normal text-[#616161] text-[10px] text-center tracking-[0] leading-[normal]">
                      {row.date}
                    </span>
                  </div>
                </TableCell>
                <TableCell className="w-[140px] text-center p-1 border-r border-[#9e9e9e]">
                  {row.violations > 0 ? (
                    <div className="flex items-center justify-center gap-0">
                      <img
                        className="w-[15px] h-[15px]"
                        alt="Bx error"
                        src="https://c.animaapp.com/mixq7mlf6wfiHo/img/bx-error.svg"
                      />
                      <span className="[font-family:'Poppins',Helvetica] font-normal text-[#616161] text-[10px] text-center tracking-[0] leading-[normal]">
                        {row.violations}
                      </span>
                    </div>
                  ) : (
                    <span className="[font-family:'Poppins',Helvetica] font-normal text-[#616161] text-[10px] text-center tracking-[0] leading-[normal]">
                      {row.violations}
                    </span>
                  )}
                </TableCell>
                <TableCell className="w-[140px] text-center p-1 border-r border-[#9e9e9e]">
                  <span className="[font-family:'Poppins',Helvetica] font-normal text-[#616161] text-[10px] text-center tracking-[0] leading-[normal]">
                    {row.score}
                  </span>
                </TableCell>
                <TableCell className="w-[140px] text-center p-1 border-r border-[#9e9e9e]">
                  <span className="[font-family:'Poppins',Helvetica] font-normal text-[#616161] text-[10px] text-center tracking-[0] leading-[normal]">
                    {row.status}
                  </span>
                </TableCell>
                <TableCell className="w-[140px] text-center p-1">
                  <button className="inline-flex items-start gap-1">
                    <img
                      className="w-[15px] h-[15px]"
                      alt="Lets icons view"
                      src="https://c.animaapp.com/mixq7mlf6wfiHo/img/lets-icons-view-light.svg"
                    />
                    <span className="[font-family:'Poppins',Helvetica] font-normal text-[#616161] text-[10px] text-center tracking-[0] leading-[normal]">
                      View Details
                    </span>
                  </button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      <div className="flex flex-wrap items-center gap-[8px_23px] justify-center">
        <div className="inline-flex items-start gap-1.5">
          <Button
            variant="outline"
            size="sm"
            className="h-9 gap-1 px-3 py-2 bg-[#fcfcfc] border-[#9e9e9e] opacity-30"
            disabled
          >
            <img
              className="w-4 h-4"
              alt="Icon heroicons mini"
              src="https://c.animaapp.com/mixq7mlf6wfiHo/img/icon--heroicons-mini--https---heroicons-com--2.svg"
            />
            <span className="font-text-text-base font-[number:var(--text-text-base-font-weight)] leading-[var(--text-text-base-line-height)] whitespace-nowrap text-[#1c2933] text-[length:var(--text-text-base-font-size)] tracking-[var(--text-text-base-letter-spacing)] [font-style:var(--text-text-base-font-style)]">
              Back
            </span>
          </Button>

          <Button
            variant="default"
            size="sm"
            className="w-[33px] h-9 p-2 bg-[#1c5332] hover:bg-[#1c5332]/90"
          >
            <span className="font-text-text-base-bold font-[number:var(--text-text-base-bold-font-weight)] text-[#fcfcfc] text-[length:var(--text-text-base-bold-font-size)] leading-[var(--text-text-base-bold-line-height)] tracking-[var(--text-text-base-bold-letter-spacing)] [font-style:var(--text-text-base-bold-font-style)]">
              1
            </span>
          </Button>

          {pageNumbers.slice(1).map((num) => (
            <Button
              key={num}
              variant="outline"
              size="sm"
              className="h-9 px-3 py-2 bg-[#fcfcfc] border-[#e9e9e9]"
            >
              <span className="font-text-text-base font-[number:var(--text-text-base-font-weight)] text-[#1c5332] text-[length:var(--text-text-base-font-size)] tracking-[var(--text-text-base-letter-spacing)] leading-[var(--text-text-base-line-height)] [font-style:var(--text-text-base-font-style)]">
                {num}
              </span>
            </Button>
          ))}

          <Button
            variant="outline"
            size="sm"
            className="w-[31px] h-9 px-3 py-2 bg-[#fcfcfc] border-[#e9e9e9]"
          >
            <MoreHorizontalIcon className="w-4 h-4" />
          </Button>

          <Button
            variant="outline"
            size="sm"
            className="h-9 gap-1 px-3 py-2 bg-[#fcfcfc] border-[#e9e9e9]"
          >
            <span className="font-text-text-base font-[number:var(--text-text-base-font-weight)] text-[#1c5332] text-[length:var(--text-text-base-font-size)] tracking-[var(--text-text-base-letter-spacing)] leading-[var(--text-text-base-line-height)] [font-style:var(--text-text-base-font-style)]">
              Next
            </span>
            <img
              className="w-4 h-4"
              alt="Icon heroicons mini"
              src="https://c.animaapp.com/mixq7mlf6wfiHo/img/icon--heroicons-mini--https---heroicons-com--1.svg"
            />
          </Button>
        </div>

        <div className="inline-flex items-center gap-2">
          <span className="font-text-text-base font-[number:var(--text-text-base-font-weight)] text-[#1c5332] text-[length:var(--text-text-base-font-size)] tracking-[var(--text-text-base-letter-spacing)] leading-[var(--text-text-base-line-height)] [font-style:var(--text-text-base-font-style)]">
            Page
          </span>
          <Input
            type="text"
            defaultValue="0"
            className="w-[51px] h-9 px-2 py-1 bg-[#fcfcfc] border-[#bfd5de] [font-family:'Inter',Helvetica] font-normal text-[#1c5332] text-sm leading-5"
          />
          <Button
            variant="ghost"
            size="sm"
            className="h-auto p-0 [font-family:'Inter',Helvetica] font-bold text-[#1c5332] text-sm"
          >
            Go
          </Button>
        </div>

        <span className="font-text-text-base font-[number:var(--text-text-base-font-weight)] text-[#1c5332] text-[length:var(--text-text-base-font-size)] text-right tracking-[var(--text-text-base-letter-spacing)] leading-[var(--text-text-base-line-height)] [font-style:var(--text-text-base-font-style)]">
          110-120 of 1,250
        </span>
      </div>
    </section>
  );
};
