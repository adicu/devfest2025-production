import React from "react";
import styles from "./DayView.module.css";

interface DayViewProps {
  day: "Mon" | "Tue" | "Wed" | "Thu" | "Fri";
}

const DayView: React.FC<DayViewProps> = ({ day }) => {
  // Sample events data for demonstration
  const events: { time: string; title: string; description: string }[] = [
    {
      time: "09:00 AM",
      title: "TBD title",
      description: "Description",
    },
    {
      time: "11:00 AM",
      title: "TBD title",
      description: "Description",
    },
    {
      time: "02:00 PM",
      title: "TBD title",
      description: "Description",
    },
    {
      time: "04:00 PM",
      title: "TBD title",
      description: "Description",
    },
  ];

  return (
    <div className={styles.dayView}>
      <h2>{day} Schedule</h2>
      <ul className={styles.eventList}>
        {events.map((event, index) => (
          <li key={index} className={styles.eventItem}>
            <span className={styles.eventTime}>{event.time}</span>
            <div className={styles.eventDetails}>
              <h3 className={styles.eventTitle}>{event.title}</h3>
              <p className={styles.eventDescription}>{event.description}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DayView;
