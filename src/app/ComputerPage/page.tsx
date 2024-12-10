"use client";

import React, { useState } from "react";
import styles from "./ComputerPage.module.css";
import Blurb from "./Blurb"; // Ensure the path is correct

// Define possible tab names using a TypeScript union type
type Tab = "About" | "Tracks" | "FAQ";

const ComputerPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<Tab>("About");

  // Sample content for About and FAQ tabs
  const aboutContent = (
    <div className={styles.aboutContent}>
      <h2>About Us</h2>
      <p>Welcome to our Computer Page! More about ADI here.</p>
    </div>
  );

  const faqContent = (
    <div className={styles.faqContent}>
      <h2>Frequently Asked Questions</h2>
      <ul>
        <li>
          <strong>Question</strong> Answer
        </li>
        <li>
          <strong>Question</strong> Answer
        </li>
        <li>
          <strong>Question</strong> Answer
        </li>
      </ul>
    </div>
  );

  // Content for Tracks tab with 4 blurbs
  const tracksContent = (
    <div className={styles.tracksContent}>
      <Blurb title="Software Development and Design" description="TBD" />
      <Blurb title="Emerging Technologies" description="TBD" />
      <Blurb title="Data Management and Analysis" description="TBD" />
      <Blurb
        title="Nutritional Security and Sustainability"
        description="TBD"
      />
    </div>
  );

  // Function to render content based on active tab
  const renderContent = () => {
    switch (activeTab) {
      case "About":
        return aboutContent;
      case "Tracks":
        return tracksContent;
      case "FAQ":
        return faqContent;
      default:
        return aboutContent;
    }
  };

  return (
    <div className={styles.wrapper}>
      {/* Background Image */}
      <img
        src="/computer-screen.png" // Ensure the image is placed in the public folder
        alt="Computer Screen"
        className={styles.backgroundImage}
      />

      {/* Mock Browser */}
      <div className={styles.browser}>
        {/* Browser Header with Tabs */}
        <div className={styles.browserHeader} role="tablist">
          <div
            className={`${styles.tab} ${
              activeTab === "About" ? styles.activeTab : ""
            }`}
            onClick={() => setActiveTab("About")}
            role="tab"
            aria-selected={activeTab === "About"}
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === "Enter") setActiveTab("About");
            }}
          >
            About
          </div>
          <div
            className={`${styles.tab} ${
              activeTab === "Tracks" ? styles.activeTab : ""
            }`}
            onClick={() => setActiveTab("Tracks")}
            role="tab"
            aria-selected={activeTab === "Tracks"}
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === "Enter") setActiveTab("Tracks");
            }}
          >
            Tracks
          </div>
          <div
            className={`${styles.tab} ${
              activeTab === "FAQ" ? styles.activeTab : ""
            }`}
            onClick={() => setActiveTab("FAQ")}
            role="tab"
            aria-selected={activeTab === "FAQ"}
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === "Enter") setActiveTab("FAQ");
            }}
          >
            FAQ
          </div>
        </div>

        {/* Browser Content */}
        <div className={styles.browserContent} role="tabpanel">
          {renderContent()}
        </div>
      </div>
    </div>
  );
};

export default ComputerPage;
