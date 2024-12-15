import React from "react";
import styles from "./DayView.module.css";

type Event = {
  time: string;
  location: string;
  name: string;
};

type DayEvents = {
  speaker: Event;
  workshop: Event;
};

interface DayViewProps {
  day: "Mon" | "Tue" | "Wed" | "Thu" | "Fri";
  events: DayEvents;
}

const DayView: React.FC<DayViewProps> = ({ day, events }) => {
  return (
    <div className={styles.dayView}>
      <h2>{day} Schedule</h2>
      <div className={styles.eventCard}>
        <h3 className={styles.eventType}>Speaker</h3>
        <p>
          <strong>Time:</strong> {events.speaker.time}
        </p>
        <p>
          <strong>Location:</strong> {events.speaker.location}
        </p>
        <p>
          <strong>Name:</strong> {events.speaker.name}
        </p>
      </div>

      <div className={styles.eventCard}>
        <h3 className={styles.eventType}>Workshop</h3>
        <p>
          <strong>Time:</strong> {events.workshop.time}
        </p>
        <p>
          <strong>Location:</strong> {events.workshop.location}
        </p>
        <p>
          <strong>Name:</strong> {events.workshop.name}
        </p>
      </div>
    </div>
  );
};

export default DayView;
