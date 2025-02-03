import React from "react";
import styles from "./DayView.module.css";

// Reuse the Day and Event types from CalendarPage
type Day = "Mon" | "Tue" | "Wed" | "Thu" | "Fri" | "Sat" | "Sun";
type Event = {
  time: string;
  room: string;
  eventType: string;
  eventName: string;
  description: string;
};

interface DayViewProps {
  day: Day;
  events: Event[];
}

// Dictionary mapping days to specific dates
const dayToDate: Record<Day, string> = {
  Mon: "3-Feb-2025",
  Tue: "4-Feb-2025",
  Wed: "5-Feb-2025",
  Thu: "6-Feb-2025",
  Fri: "7-Feb-2025",
  Sat: "8-Feb-2025",
  Sun: "9-Feb-2025",
};

const DayView: React.FC<DayViewProps> = ({ day, events }) => {
  const date = dayToDate[day];
  return (
    <div className={styles.dayView}>
      <h2>
        {day} ({date}) Schedule
      </h2>
      {events.map((event, index) => (
        <div key={index} className={styles.eventCard}>
          <p>
            <strong>Time:</strong> {event.time}
          </p>
          <p>
            <strong>Room:</strong> {event.room}
          </p>
          <p>
            <strong>Event Type:</strong> {event.eventType}
          </p>
          <p>
            <strong>Event Name:</strong> {event.eventName}
          </p>
          <p>
            <strong>Description:</strong> {event.description}
          </p>
        </div>
      ))}
    </div>
  );
};

export default DayView;
