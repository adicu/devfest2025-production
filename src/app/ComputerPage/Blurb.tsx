"use client";

import styles from "./ComputerPage.module.css"; // Ensure the path is correct
import React, { ReactNode } from "react";

// Define the props interface
interface BlurbProps {
  title: string;
  description: ReactNode;
}

// Define the Blurb component with typed props
const Blurb: React.FC<BlurbProps> = ({ title, description }) => (
  <div className={styles.blurb}>
    <h2>{title}</h2>
    <p>{description}</p>
  </div>
);

export default Blurb;
