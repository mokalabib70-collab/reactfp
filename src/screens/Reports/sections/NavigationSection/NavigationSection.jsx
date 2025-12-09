import { DownloadIcon } from "lucide-react";
import React from "react";
import { Button } from "../../../../components/ui/button";

export const NavigationSection = () => {
  return (
    <header className="flex w-full items-start justify-between gap-8 opacity-0 animate-fade-in">
      <div className="flex flex-col items-start gap-2 flex-1 max-w-[517px]">
        <h1 className="self-stretch font-semibold text-xl [font-family:'Poppins',Helvetica] text-[#1c2933] tracking-[0] leading-[normal]">
          Exam Reports
        </h1>

        <p className="self-stretch [font-family:'Poppins',Helvetica] font-medium text-[#616161] text-[15px] tracking-[0] leading-[normal]">
          View and analyze exam session and violations and Cheating reports
        </p>
      </div>

      <Button className="h-12 gap-1 px-2.5 bg-[#1c5332] hover:bg-[#1c5332]/90 rounded-[10px] transition-colors">
        <DownloadIcon className="w-6 h-6" />
        <span className="[font-family:'Poppins',Helvetica] font-semibold text-[#fffafa] text-xl">
          Export All Reports
        </span>
      </Button>
    </header>
  );
};
