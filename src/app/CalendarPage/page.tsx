"use client";

import React, { useState } from "react";
import styles from "./CalendarPage.module.css";
import DayView from "../components/DayView";

type Weekday = "Mon" | "Tue" | "Wed" | "Thu" | "Fri";

const weekdays: Weekday[] = ["Mon", "Tue", "Wed", "Thu", "Fri"];

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
          <DayView day={activeDay} />
        </div>
      </div>
    </main>
  );
};

export default CalendarPage;
