"use client";

import React, { useState } from "react";
import styles from "./ComputerPage.module.css";
import Blurb from "./Blurb"; // Adjust import path if needed

type Tab = "About" | "Tracks" | "FAQ";

const ComputerPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<Tab>("About");

  // -----------------------
  // About Tab Content
  // -----------------------
  const aboutContent = (
    <div className={styles.aboutContent}>
      <h2>About Us</h2>
      <p>
        ADI is a community for students in computer science and technology at
        Columbia University.
      </p>
      <p>
        The largest tech club at Columbia, ADI aims to foster a community of
        tech-loving students by providing access to educational resources,
        organizing workshops &amp; events, providing mentorship opportunities,
        sharing career resources, and more.
      </p>
    </div>
  );

  // -----------------------
  // FAQ Tab Content
  // -----------------------
  const faqContent = (
    <div className={styles.faqContent}>
      <h2>Frequently Asked Questions</h2>
      <ul>
        <li>
          <strong>Is the hackathon online or in-person?</strong>
          <p>
            DevFest will be held in-person, on Columbia University’s campus.
          </p>
        </li>
        <li>
          <strong>When is DevFest?</strong>
          <p>
            DevFest runs from January 29th to February 4th, with the hackathon
            portion going from Saturday morning to Sunday morning of that week.
            Workshops and talks will run in the evening during the week, in the
            spirit of our weeklong development festival :)
          </p>
        </li>
        <li>
          <strong>Who is eligible to participate?</strong>
          <p>DevFest is open to all college students.</p>
        </li>
        <li>
          <strong>Is DevFest sponsoring travel?</strong>
          <p>No, unfortunately this year we will not be sponsoring travel.</p>
        </li>
        <li>
          <strong>What are the hackathon tracks and what do they mean?</strong>
          <p>
            The tracks provide participants with specific topics or fields to
            focus on while working on their projects. Each track has specific
            prizes attached.
          </p>
        </li>
        <li>
          <strong>Do I have to follow a specific track?</strong>
          <p>
            No, you are welcome to submit a general project that does not belong
            to a specific track.
          </p>
        </li>
        <li>
          <strong>What is the team size limit?</strong>
          <p>
            Teams can be of 1-4 people. Individual participation is allowed.
          </p>
        </li>
        <li>
          <strong>
            Will there be mentorship or support available during the hackathon?
          </strong>
          <p>
            Yes, experienced students and industry professionals (ADI alumni!)
            will be in-person and online during the hackathon.
          </p>
        </li>
        <li>
          <strong>What should I do if I have a question or concern?</strong>
          <p>
            If you have any questions or concerns, please don’t hesitate to
            reach out to us via email at{" "}
            <a href="mailto:devfestorganizers@googlegroups.com">
              devfestorganizers@googlegroups.com
            </a>{" "}
            or via our Discord server where you can ping any of the organizers.
          </p>
        </li>
      </ul>
    </div>
  );

  // -----------------------
  // Tracks Tab Content
  // -----------------------
  const tracksContent = (
    <div className={styles.tracksContent}>
      <Blurb
        title="Software Development and Design"
        description={
          <>
            <p>
              The Software Development and Design Track focuses on designing
              user experiences that are both human-centered and aesthetically
              pleasing. Projects in this category should address the intricate
              balance between functionality and visual appeal, catering to those
              with interests in both coding and design. Projects in this
              category should have an awareness of the various ways different
              people interact with software.
            </p>
            <p>Within this track, the two primary areas are:</p>
            <ul>
              <li>
                <strong>Web Development and UI/UX Design:</strong> Projects in
                this category focus on creating websites and applications with
                emphasis on user experience and design. These projects contain
                both coding and design aspects in order to create human-centered
                digital products.
              </li>
              <li>
                <strong>Game Development:</strong> Projects in this category
                utilize platforms like Unity and Adobe to create interactive
                gaming experiences. These projects, requiring both programmers
                and designers, either make gaming or the process of game-making
                more streamlined.
              </li>
            </ul>
          </>
        }
      />
      <Blurb
        title="Data Management and Analysis"
        description={
          <>
            <p>
              The Data Management and Analysis technical track focuses on
              storing, processing, and using data to solve problems. Projects in
              this area should address today’s increasingly complex and
              data-driven world in some way, allowing users to better manage,
              analyze, and extrapolate information from large amounts of data.
            </p>
            <ul>
              <li>
                <strong>
                  Artificial Intelligence and Machine Learning (AI/ML):
                </strong>{" "}
                Projects within the AI/ML track should utilize artificial
                intelligence and machine learning technologies such as deep
                learning and neural networks to effectively utilize and process
                data to reach practical conclusions.
              </li>
              <li>
                <strong>Databases:</strong> Projects in the databases track will
                be particularly notable for their methodology of storing,
                processing, and handling data in order to be used in later
                processes. Data storage and retrieval can take many forms – how
                can information best be captured and refined for your project?
              </li>
            </ul>
          </>
        }
      />
      <Blurb
        title="Nutritional Security and Sustainability"
        description={
          <>
            <p>
              The Nutritional Security and Sustainability Track targets issues
              of nutritional insecurity and irresponsible use of natural
              resources. Participants will be inspired to create possible
              solutions to problems that threaten an increasing number of people
              yearly. This track encourages the creation of tools that allow
              users to take more responsibility for their global neighbors,
              promoting better-fed societies and sustainable practices that help
              either locally or internationally, and perhaps even future
              generations.
            </p>
            <ul>
              <li>
                <strong>Food Solutions:</strong> Apps in this category will
                deter global hunger and food insecurity by increasing the
                accessibility of local and nutritious options.
              </li>
              <li>
                <strong>Environmental Sustainability:</strong> Projects in this
                subsection will provide innovative ideas for improvements in
                farming, resource management, and environmental protection. It
                is perfect for individuals passionate about using technology to
                address climate change and advocate green living.
              </li>
            </ul>
          </>
        }
      />
      <Blurb
        title="Health and Accessibility"
        description={
          <>
            <p>
              This track encourages participants to use technology to bridge
              gaps in the healthcare sector and build a more inclusive world. By
              focusing on creating technologies that are universally accessible,
              especially to those with disabilities, this track merges technical
              innovation with a commitment to social good and emphasizes the
              social responsibilities of technology and developers.
            </p>
            <ul>
              <li>
                What innovative solutions can be developed to make complex
                health information more accessible and understandable to people
                with cognitive disabilities and barriers?
              </li>
              <li>
                How can health apps be designed with customizable interfaces to
                cater to the unique needs of different groups of users with
                disabilities?
              </li>
              <li>
                What features should be incorporated into mental health apps to
                make them more accessible to users with learning disabilities?
              </li>
            </ul>
          </>
        }
      />
      <Blurb
        title="Emerging Technologies"
        description={
          <>
            <p>
              The Emerging Technologies Track invites pioneers to showcase
              groundbreaking hardware and blockchain innovations. This category
              challenges participants to redefine technological boundaries and
              envision the future of digital and physical realms.
            </p>
            <ul>
              <li>
                <strong>Blockchain Technologies:</strong> Encompasses the use of
                blockchains, cryptocurrencies, and related technologies. This
                suits those interested in decentralized digital systems,
                financial technology, and applications beyond cryptocurrencies.
              </li>
            </ul>
          </>
        }
      />
    </div>
  );

  // -----------------------
  // Render the content based on the active tab
  // -----------------------
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
        src="/computer-screen.png"
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
