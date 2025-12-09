import { ChevronRightIcon } from "lucide-react";
import React from "react";
import { Button } from "../../../../components/ui/button";

const navigationItems = [
  {
    id: "dashboard",
    label: "Dashboard",
    icon: "https://c.animaapp.com/mixq7mlf6wfiHo/img/cuida-dashboard-outline.svg",
    isActive: false,
  },
  {
    id: "exams",
    label: "Exams",
    icon: "https://c.animaapp.com/mixq7mlf6wfiHo/img/healthicons-i-exam-multiple-choice-outline.svg",
    isActive: false,
  },
  {
    id: "reports",
    label: "Reports",
    icon: "https://c.animaapp.com/mixq7mlf6wfiHo/img/mdi-report-bar.svg",
    isActive: true,
  },
  {
    id: "courses",
    label: "Courses",
    icon: "https://c.animaapp.com/mixq7mlf6wfiHo/img/stash-people-group-light.svg",
    isActive: false,
  },
  {
    id: "chat",
    label: "Chat",
    icon: "https://c.animaapp.com/mixq7mlf6wfiHo/img/bi-chat-text.svg",
    isActive: false,
  },
];

export const HeaderSection = () => {
  return (
    <nav className="w-64 min-h-screen bg-[#1c5332] flex justify-center pt-32 translate-y-[-1rem] animate-fade-in opacity-0">
      <div className="flex flex-col items-start gap-10 w-44">
        {navigationItems.map((item, index) => (
          <Button
            key={item.id}
            variant="ghost"
            className={`w-full h-auto flex items-center justify-between px-1 py-2 hover:bg-transparent group transition-colors ${
              item.isActive
                ? "rounded-[5px] border-[none] shadow-[0px_0px_8px_#f3b300] before:content-[''] before:absolute before:inset-0 before:p-px before:rounded-[5px] before:[background:linear-gradient(270deg,rgba(243,179,0,1)_0%,rgba(28,83,50,1)_100%)] before:[-webkit-mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)] before:[-webkit-mask-composite:xor] before:[mask-composite:exclude] before:z-[1] before:pointer-events-none"
                : ""
            }`}
            style={{
              "--animation-delay": `${index * 100}ms`,
            }}
          >
            <div className="flex items-center gap-1 flex-1 justify-end">
              <img
                className="w-6 h-6"
                alt={`${item.label} icon`}
                src={item.icon}
              />
              <span className="[font-family:'Inter',Helvetica] font-medium text-[#fffafa] text-base tracking-[0] leading-[normal] whitespace-nowrap">
                {item.label}
              </span>
            </div>
            <ChevronRightIcon className="w-5 h-5 text-[#fffafa] flex-shrink-0" />
          </Button>
        ))}
      </div>
    </nav>
  );
};
