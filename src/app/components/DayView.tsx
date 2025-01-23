import React from "react";
import styles from "./DayView.module.css";

// Reuse the Day and Event types from CalendarPage
type Day = "Mon" | "Tue" | "Wed" | "Thu" | "Fri" | "Sat" | "Sun";
type Event = {
  time: string;
  name: string;
  location?: string;
};

interface DayViewProps {
  day: Day;
  events: Event[];
}

// Dictionary mapping days to specific dates
const dayToDate: Record<Day, string> = {
  Mon: "2/3",
  Tue: "2/4",
  Wed: "2/5",
  Thu: "2/6",
  Fri: "2/7",
  Sat: "2/8",
  Sun: "2/9",
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
            <strong>Event:</strong> {event.name}
          </p>
          {event.location && (
            <p>
              <strong>Location:</strong> {event.location}
            </p>
          )}
        </div>
      ))}
    </div>
  );
};

export default DayView;
