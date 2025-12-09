import React from "react";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "../../../../components/ui/avatar";

export const SidebarNavigationSection = () => {
  return (
    <header className="w-full bg-[#fffafa] shadow-[0px_0px_10px_#00000040] translate-y-[-1rem] animate-fade-in opacity-0">
      <nav className="flex items-center justify-between px-14 py-4 max-w-[1440px] mx-auto">
        <div className="inline-flex items-center gap-2">
          <img
            className="w-[75px] h-[74px]"
            alt="TruthEye Logo"
            src="https://c.animaapp.com/mixq7mlf6wfiHo/img/unnamed-photoroom-1.png"
          />

          <div className="[font-family:'Poppins',Helvetica] font-normal text-5xl tracking-[0] leading-[normal]">
            <span className="font-bold text-[#1c5332]">Truth</span>
            <span className="font-bold text-[#f3b300]">Eye</span>
          </div>
        </div>

        <div className="inline-flex items-center gap-4">
          <Avatar className="w-[68px] h-[68px]">
            <AvatarImage
              src="https://c.animaapp.com/mixq7mlf6wfiHo/img/rectangle.png"
              alt="Dr . Ahmed"
            />
            <AvatarFallback className="text-xl">DA</AvatarFallback>
          </Avatar>

          <div className="[font-family:'Poppins',Helvetica] font-semibold text-[#1c5332] text-2xl text-center tracking-[0] leading-[normal]">
            Dr . Ahmed
          </div>
        </div>
      </nav>
    </header>
  );
};
