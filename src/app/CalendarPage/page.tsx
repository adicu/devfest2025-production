"use client";

import React, { useState } from "react";
import styles from "./CalendarPage.module.css";
import DayView from "../components/DayView";

type Weekday = "Mon" | "Tue" | "Wed" | "Thu" | "Fri";

// Define the structure for an event
type Event = {
  time: string;
  location: string;
  name: string;
};

// Define the structure for a day's events
type DayEvents = {
  speaker: Event;
  workshop: Event;
};

const weekdays: Weekday[] = ["Mon", "Tue", "Wed", "Thu", "Fri"];

// Sample schedule data
const schedule: Record<Weekday, DayEvents> = {
  Mon: {
    speaker: {
      time: "time tbd",
      location: "location tbd",
      name: "name tbd",
    },
    workshop: {
      time: "time tbd",
      location: "location tbd",
      name: "name tbd",
    },
  },
  Tue: {
    speaker: {
      time: "time tbd",
      location: "location tbd",
      name: "name tbd",
    },
    workshop: {
      time: "time tbd",
      location: "location tbd",
      name: "name tbd",
    },
  },
  Wed: {
    speaker: {
      time: "time tbd",
      location: "location tbd",
      name: "name tbd",
    },
    workshop: {
      time: "time tbd",
      location: "location tbd",
      name: "name tbd",
    },
  },
  Thu: {
    speaker: {
      time: "time tbd",
      location: "location tbd",
      name: "name tbd",
    },
    workshop: {
      time: "time tbd",
      location: "location tbd",
      name: "name tbd",
    },
  },
  Fri: {
    speaker: {
      time: "time tbd",
      location: "location tbd",
      name: "name tbd",
    },
    workshop: {
      time: "time tbd",
      location: "location tbd",
      name: "name tbd",
    },
  },
};

const CalendarPage: React.FC = () => {
  const [activeDay, setActiveDay] = useState<Weekday>("Mon");

  return (
    <main className={styles.mainContainer}>
      <h1 className={styles.pageTitle}>Calendar Page</h1>
      <div className={styles.calendarContainer}>
        {/* Side Tabs */}
        <div className={styles.sideTabs}>
          {weekdays.map((day) => (
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
