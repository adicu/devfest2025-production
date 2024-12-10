"use client";

import React from "react";
import styles from "./ComputerPage.module.css"; // Ensure the path is correct

// Define the props interface
interface BlurbProps {
  title: string;
  description: string;
}

// Define the Blurb component with typed props
const Blurb: React.FC<BlurbProps> = ({ title, description }) => (
  <div className={styles.blurb}>
    <h2>{title}</h2>
    <p>{description}</p>
  </div>
);

export default Blurb;
