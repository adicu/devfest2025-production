// src/app/components/Sidebar/Sidebar.tsx

"use client";
import React from "react";
import { usePathname } from "next/navigation";

const Sidebar: React.FC = () => {
  const pathname = usePathname();
  const isHome = pathname === "/" || pathname === "/HomePage";

  // Set background based on the current page
  const sidebarBgClass = isHome ? "bg-black" : "bg-white";

  // Set text color based on background for better contrast
  const textColorClass = isHome ? "text-white" : "text-black";

  return (
    <aside
      className={`hidden md:block w-64 h-full ${sidebarBgClass} p-4 flex flex-col space-y-6 pt-4 overflow-y-auto`}
    >
      {/* Bubble 1 */}
      <div className={`bg-brown-400 p-4 rounded-lg ${textColorClass}`}>
        <h2 className="font-bold mb-2">
          <a
            href="https://docs.google.com/forms/u/0/d/e/1FAIpQLSfSpVlGgtFRA-W32fPYA1dbDeAYRk8pdXJq8OepS7jGtm6wYQ/viewform?usp=send_form&pli=1"
            className="underline"
          >
            REGISTER NOW
          </a>
        </h2>
        <h2 className="font-bold mb-2">DEVPOST</h2>
        <p>
          Checkout the{" "}
          <a href="https://devpost.com" className="underline">
            DevPost
          </a>{" "}
          for prizes and submissions.
        </p>

        <h2 className="font-bold mt-4 mb-2">SCHEDULE</h2>
        <p>
          <a
            href="https://calendar.google.com/calendar/u/0/embed?src=c_bf8838880bdfb0d4a6adca842d1c6d62ef52f3a6970c2f93b6c27086cc152ca6@group.calendar.google.com&ctz=America/New_York"
            className="underline"
          >
            Google Calendar
          </a>
        </p>

        <h2 className="font-bold mt-4 mb-2">DEVFEST DISCORD</h2>
        <p>
          Join our{" "}
          <a href="https://discord.gg/devfest" className="underline">
            DevFest Discord
          </a>{" "}
          community to ask questions, find teammates, and more!
        </p>
      </div>

      {/* Bubble 2 */}
      <div className={`bg-brown-400 p-4 rounded-lg ${textColorClass}`}>
        <h2 className="font-bold mb-2">WHO IS ADI?</h2>
        <p>
          {" "}
          <a href="https://www.adicu.com/" className="underline">
            ADI
          </a>{" "}
          (Application Development Initiative) is a student group at Columbia
          University that aims to foster a community of students interested in
          tech.
        </p>

        <p>
          <a
            href="https://www.instagram.com/adicolumbia/"
            className="underline"
          >
            Instagram
          </a>
          ,{" "}
          <a href="https://www.tiktok.com/@adicolumbia" className="underline">
            TikTok
          </a>
          ,{" "}
          <a href="https://discord.gg/" className="underline">
            Discord
          </a>
        </p>
      </div>
    </aside>
  );
};

export default Sidebar;
