"use client";

import React, { useState } from "react";
import styles from "./CalendarPage.module.css";
import DayView from "../components/DayView";

// Define all days we have data for
type Day = "Mon" | "Tue" | "Wed" | "Thu" | "Fri" | "Sat" | "Sun";

// Define the structure for each event
type Event = {
  time: string;
  name: string;
  location?: string; // optional if you want a dedicated location field
};

// List of days (for your side tabs)
const days: Day[] = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

/**
 * Full schedule data, Monday (2/3) to Sunday (2/9).
 * Each "Day" property has an array of events.
 */
const schedule: Record<Day, Event[]> = {
  Mon: [
    {
      time: "7:00 - 8:00 PM",
      name: "Health & Accessibility Track Talk (Kristin M. Myers)",
    },
    {
      time: "8:00 - 10:00 PM",
      name: "Workshop: Tooling + Git (Nigel, David)",
    },
  ],
  Tue: [
    {
      time: "7:00 - 8:00 PM",
      name: "Software Development & Design Track Talk (Nirvaan Iyer)",
    },
    {
      time: "8:00 - 10:00 PM",
      name: "Workshop: Backend (David, Adheesh)",
    },
  ],
  Wed: [
    {
      time: "7:00 - 8:00 PM",
      name: "Emerging Technologies Track Talk (Ronghui Gu)",
    },
    {
      time: "8:00 - 10:00 PM",
      name: "Workshop: Frontend (Hellen, James)",
    },
  ],
  Thu: [
    {
      time: "7:00 - 8:00 PM",
      name: 'Nutrition & Sustainability Track Talk: "Innovating for Sustainability: Bridging Nutrition Security and Technology" (Dimple Bhanushali)',
    },
    {
      time: "8:00 - 10:00 PM",
      name: "Workshop: AI/ML (Nigel, Hellen)",
    },
  ],
  Fri: [
    {
      time: "7:00 - 8:00 PM",
      name: 'Data Management and Analysis Track Talk: "Building Impactful Products: Lessons from Meta Ads" (Lily Ke)',
    },
    {
      time: "8:00 - 10:00 PM",
      name: "Workshops: Hackathon Strategy (James)",
    },
  ],
  Sat: [
    {
      time: "9:00 - 10:00 AM",
      name: "Check-in",
    },
    {
      time: "10:00 - 10:10 AM",
      name: "Welcome",
    },
    {
      time: "10:00 - 10:35 AM",
      name: "Opening Ceremony + MLH Speech + Groq promo (Christopher H. Wiggins)",
    },
    {
      time: "10:35 - 10:45 AM",
      name: "MLH",
    },
    {
      time: "10:45 - 10:55 AM",
      name: "Groq",
    },
    {
      time: "10:55 - 11:00 AM",
      name: "Final Announcements",
    },
    {
      time: "11:00 AM",
      name: "Hacking begins!",
    },
    {
      time: "11:00 - 11:30 AM",
      name: "Team Formation",
    },
    {
      time: "12:00 - 1:00 PM",
      name: "Lunch",
    },
    {
      time: "1:00 - 2:00 PM",
      name: "Modal Sponsor Workshop",
    },
    {
      time: "2:00 - 3:00 PM",
      name: "MLH GitHub Copilot",
    },
    {
      time: "3:00 - 4:00 PM",
      name: "Warp Sponsor Workshop",
    },
    {
      time: "4:00 - 5:00 PM",
      name: "AI Panel (Natan Vidra, Abhishek Chaudhary, Lily Ke)",
    },
    {
      time: "5:00 - 6:00 PM",
      name: "Starting a Startup: From Idea to Exit (Eliam Medina)",
    },
    {
      time: "6:00 - 7:00 PM",
      name: "Careers Across Tech Panel (Dhwani Khatter, Ellen Guo, Nikita Chepuri, Eliam)",
    },
    {
      time: "7:00 - 8:00 PM",
      name: "Dinner",
    },
    {
      time: "8:00 - 9:00 PM",
      name: "MLH Mini Event",
    },
    {
      time: "12:00 AM",
      name: "* Fun activity 2: Speed dating\nFun activity 3: Cornhole (if we have the cornhole set)",
    },
    {
      time: "12:00 AM",
      name: "Project Submission Check-In Form Due",
    },
  ],
  Sun: [
    {
      time: "10:00 AM",
      name: "Breakfast",
    },
    {
      time: "11:00 AM",
      name: "Hacking ends!",
    },
    {
      time: "11:00 AM - 12:00 PM",
      name: "Lunch",
    },
    {
      time: "12:00 PM - 3:00 PM",
      name: "Judging",
    },
    {
      time: "3:00 - 4:00 PM",
      name: "Professional Development Panel (Morgan Young, Michelle Lawson, Ciara Cade, Rian Corcino)",
    },
    {
      time: "4:00 - 5:00 PM",
      name: "Closing Ceremony",
    },
  ],
};

const CalendarPage: React.FC = () => {
  const [activeDay, setActiveDay] = useState<Day>("Mon");

  return (
    <main className={styles.mainContainer}>
      <div className={styles.calendarContainer}>
        {/* Side Tabs */}
        <div className={styles.sideTabs}>
          {days.map((day) => (
            <button
              key={day}
              className={`${styles.tabButton} ${
                activeDay === day ? styles.activeTab : ""
              }`}
              onClick={() => setActiveDay(day)}
              aria-selected={activeDay === day}
            >
              {day}
            </button>
          ))}
        </div>

        {/* Calendar Content */}
        <div className={styles.calendarContent}>
          <DayView day={activeDay} events={schedule[activeDay]} />
        </div>
      </div>
    </main>
  );
};

export default CalendarPage;
