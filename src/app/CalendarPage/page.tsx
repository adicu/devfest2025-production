"use client";

import React, { useState } from "react";
import styles from "./CalendarPage.module.css";
import DayView from "../components/DayView";

// Define all days we have data for
type Day = "Mon" | "Tue" | "Wed" | "Thu" | "Fri" | "Sat" | "Sun";

// Define the structure for each event with the additional fields
type Event = {
  time: string;
  room: string;
  eventType: string;
  eventName: string;
  description: string;
};

// List of days (for your side tabs)
const days: Day[] = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

/**
 * Full schedule data, Monday (3-Feb-2025) to Sunday (9-Feb-2025).
 */
const schedule: Record<Day, Event[]> = {
  Mon: [
    {
      time: "7:00 PM - 8:00 PM",
      room: "CEPSR 750",
      eventType:
        "Health & Accessibility Track Talk (Speaker: Kristin M. Myers, Associate Professor of Mechanical Engineering @ Columbia University)",
      eventName:
        "Engineering Innovation in Maternal and Fetal Health: The Biomechanics of High-Risk Pregnancies",
      description:
        "Discover the hidden mechanics of pregnancy in this eye-opening talk. Learn how extreme tissue remodeling—and the forces acting on the uterus, fetal membranes, and cervix—may regulate labor timing and spark preterm birth. Backed by computational models and real cervical stiffness data, this session offers fresh insights that could reshape our understanding of maternal health.",
    },
    {
      time: "8:00 PM - 10:00 PM",
      room: "CEPSR 750",
      eventType: "Workshop led by Nigel and David",
      eventName: "Tooling + Github",
      description:
        "Supercharge your development workflow in this hands-on Tooling + GitHub workshop! Come and learn some of the basics! Learn how to use Git for version control to collaborate on software projects. We’ll also recommend tools that can help you develop your hackathon or personal project.",
    },
  ],
  Tue: [
    {
      time: "7:00 PM - 8:00 PM",
      room: "CEPSR 414",
      eventType:
        "Software Development & Design Track Talk (Speaker: Victor Wang, Sr. User Experience Designer @ JPMorganChase)",
      eventName:
        "Less is Not More: Embracing Thoughtful Complexities for Better User Experience",
      description:
        "Join product designer Victor Wang as he challenges the “less is more” mantra in user experience. Discover how thoughtfully implemented complexities can elevate both visual appeal and functionality, based on his work in responsive design, data visualization, and design systems.",
    },
    {
      time: "8:00 PM - 10:00 PM",
      room: "CEPSR 414",
      eventType: "Workshop led by David and Adheesh",
      eventName: "Backend",
      description:
        "Join David and Adheesh for a beginner-friendly look at the hidden side of websites. Learn how to develop a back end for a web application with Python (FastAPI) and MongoDB.",
    },
  ],
  Wed: [
    {
      time: "7:00 PM - 8:00 PM",
      room: "CEPSR 750",
      eventType:
        "Emerging Technologies Track Talk (Speaker: Ronghui Gu, Co-founder of @ CertiK, Associate Professor at Columbia University)",
      eventName: "Web3 Cybersecurity",
      description:
        "Get a firsthand look at the cutting edge of decentralized security from Dr. Gu—the inaugural Tang Family Associate Professor of Computer Science at Columbia and co-creator of the first verified concurrent OS kernel (CertiKOS). He co-founded CertiK, a Web3 cybersecurity unicorn valued at over $2 billion, securing $360 billion+ in crypto assets. Discover how rigorous research meets real-world impact.",
    },
    {
      time: "8:00 PM - 10:00 PM",
      room: "CEPSR 750",
      eventType: "Workshop led by Hellen and James",
      eventName: "Frontend",
      description:
        "Join Hellen and James to explore the essentials of front-end development. Learn how to develop a front end and user interface with React/Next.js (JavaScript) and HTML/CSS.",
    },
  ],
  Thu: [
    {
      time: "7:00 PM - 8:00 PM",
      room: "CEPSR 750",
      eventType:
        "Nutrition & Sustainability Track Talk (Speaker: Dimple Bhanushali, Doctoral AI-Fashion Supply Chain Scientist)",
      eventName:
        "Innovating for Sustainability: Bridging Nutrition Security and Technology",
      description:
        "Learn how tech can tackle two critical challenges—sustainability and nutritional security—from industry expert Dimple Bhanushali. Discover strategies for reducing waste, boosting efficiency, and driving real-world impact through innovations in resource optimization, wearable tech, and more.",
    },
    {
      time: "8:00 PM - 10:00 PM",
      room: "CEPSR 750",
      eventType: "Workshop led by Nigel and Naythan",
      eventName: "AI/Machine Learning",
      description:
        "Join Nigel and Naythan for a hands-on dive into AI and ML fundamentals—no previous experience necessary. Learn about fundamental AI/ML concepts like Rule-based AI, Computer Vision, and NLP. You will also learn how to build and deploy your own models (with HuggingFace), and use APIs.",
    },
  ],
  Fri: [
    {
      time: "7:00 PM - 8:00 PM",
      room: "CEPSR 750",
      eventType:
        "Data Management and Analysis Track Talk (Speaker: Lily Ke, Software Engineer @ Meta)",
      eventName: "Building Impactful Products: Lessons from Meta Ads",
      description:
        "Join Lily Ke as she shares insights from her experience working on high-impact product development at Meta, where she has shipped over 20 features that enhanced user engagement and revenue across Meta's key platforms. She will break down how to balance technical excellence with business goals, highlight lessons from working on large-scale machine learning systems, and explore the importance of collaboration and user insights in building meaningful products. Whether you're a developer, researcher, or product thinker, this talk will offer valuable strategies for building scalable, impactful solutions.",
    },
    {
      time: "8:00 PM - 10:00 PM",
      room: "CEPSR 750",
      eventType: "Workshop led by James and Adheesh",
      eventName: "Hackathon Strategy",
      description:
        "Join James and Adheesh for insider tips on hackathon success!! Learn tips and tricks to make the most of your hackathon experience (and hopefully win prizes too!).",
    },
  ],
  Sat: [
    {
      time: "9:00 AM - 10:00 AM",
      room: "Uris Library",
      eventType: "Welcome!",
      eventName: "Check-in",
      description:
        "Meet fellow participants as you get ready for a full day of hacking and innovation.",
    },
    {
      time: "10:00 AM - 10:10 AM",
      room: "Uris Library",
      eventType: "Welcome!",
      eventName: "Welcome",
      description:
        "Kick off the event with a brief introduction and other presentations.",
    },
    {
      time: "10:05 AM - 11:00 AM",
      room: "Uris Library",
      eventType:
        "Welcome led by Lydia Chilton (Assistant Professor @ Columbia University)",
      eventName: "Opening Ceremony",
      description:
        "Generative AI has fundamentally changed the way programmers work. It has also changed how the entire design, development, and business lifecycles work. We will introduce two new paradigms for how app design and programming will be in a future powered by generative AI and AI agents.",
    },
    {
      time: "11:00 AM",
      room: "Uris Library",
      eventType: "Good Luck!",
      eventName: "Hacking begins!",
      description:
        "Time to start building! Form your teams, brainstorm your ideas, and dive into coding your next big project.",
    },
    {
      time: "11:00 AM - 11:30 AM",
      room: "N/A",
      eventType: "Socialize :D",
      eventName: "Team Formation",
      description:
        "Still searching for teammates or the perfect project idea? Use this time to connect with others, pitch concepts, and build your dream team.",
    },
    {
      time: "12:00 PM - 1:00 PM",
      room: "Carleton Commons",
      eventType: "Food",
      eventName: "Lunch",
      description:
        "Refuel and recharge. Grab a bite to eat while sharing progress and fresh ideas with your fellow hackers.",
    },
    {
      time: "1:00 PM - 2:00 PM",
      room: "Mudd 524 (45)",
      eventType: "Modal Sponsor Workshop led by Charles Frye",
      eventName: "Simple Scalable Serverless Services in Python, with Modal",
      description:
        "Building an application on the cloud doesn't have to suck. Even if it uses GPUs. In this talk, I'll present Modal, the serverless Python infrastructure you didn't know you always wanted.",
    },
    {
      time: "2:00 PM - 3:00 PM",
      room: "Mudd 545 (75)",
      eventType: "Event led by Ryan Lahlou",
      eventName: "MLH Github Event",
      description:
        "Ready to level up your version control skills? Learn collaborative tricks, best practices, and GitHub hacks!",
    },
    {
      time: "3:00 PM - 4:00 PM",
      room: "Mudd 524 (45)",
      eventType: "Workshop",
      eventName: "How to become a Command Line Connoisseur",
      description:
        "In this workshop, we'll dive deep into terminal tips and tricks to increase your developer productivity, with awesome CLI tools. From beginners to terminal veterans, we'll have something for everyone. We'll also cover how the terminal interacts with the shell/PTY and some cool terminal history! This workshop is brought to you by the terminal experts at Warp, a blazingly-fast terminal app for the 21st century (warp.dev). Bring your laptops!",
    },
    {
      time: "4:00 PM - 5:00 PM",
      room: "Mudd 545 (75)",
      eventType:
        "Panel (Speakers: Natan Vidra, Abhishek Chaudhary, and Lily Ke)",
      eventName: "AI",
      description:
        "Artificial intelligence has taken over the tech industry, and is increasingly relevant -- join us as we sit down with experts working with AI in a number of unique ways as they share their insights on trends, a deep dive into the industry, the future, opportunities, and anything else you might be curious about!",
    },
    {
      time: "5:00 PM - 6:00 PM",
      room: "Mudd 524 (45)",
      eventType:
        "Start up Talk (Speaker: Eliam Medina, Cofounder of Willing, Telora)",
      eventName: "Starting a Startup: From Idea to Exit",
      description:
        "Thinking about starting a startup? Already started it? Then, you should come to this talk. You'll learn why you need cofounders, what makes a good startup idea, and how to get your first customers.",
    },
    {
      time: "6:00 PM - 7:00 PM",
      room: "Mudd 545 (75)",
      eventType:
        "Panel (Speakers: Dhwani Khatter (cyber), Ellen Guo (SWE/finance), Nikita Chepuri (PM), and Eliam (entrepreneurship))",
      eventName: "Careers Across Tech",
      description:
        "Join us as experts in industries across technology share their insights! Featuring panelists working in cybersecurity, software engineering, finance/trading, product management, entrepreneurship, pre-sales, and more, this will be a fantastic exploration into some of the numerous industries that technology spans.",
    },
    {
      time: "7:00 PM - 8:00 PM",
      room: "Carleton Commons",
      eventType: "Food/event",
      eventName: "Dinner + MLH Typeracer Mini-Event",
      description:
        "Refuel with a tasty meal, then test your typing speed in an adrenaline-pumping Typeracer challenge hosted by MLH. Great food, friendly competition—what more could you want?",
    },
    {
      time: "11:59 PM",
      room: "N/A",
      eventType: "Form submission",
      eventName: "Project Submission Check-In Form Due",
      description: "Submit your form by midnight.",
    },
  ],
  Sun: [
    {
      time: "9:00 AM",
      room: "Carleton Commons",
      eventType: "Food",
      eventName: "Breakfast",
      description:
        "Fuel up and get ready for the final stretch of the hackathon!",
    },
    {
      time: "11:00 AM",
      room: "N/A",
      eventType: "Yayyy! Good Job!",
      eventName: "Hacking ends!",
      description: "Time’s up—congratulations on reaching the finish line!",
    },
    {
      time: "11:00 AM - 12:00 PM",
      room: "Carleton Commons",
      eventType: "Food",
      eventName: "Lunch",
      description:
        "Refuel after a busy morning! Use this time to connect with fellow hackers.",
    },
    {
      time: "12:00 PM - 3:00 PM",
      room: "N/A",
      eventType: "Good Luck!!",
      eventName: "Judging",
      description: "Our judges will review your projects.",
    },
    {
      time: "3:00 PM - 4:00 PM",
      room: "David Auditorium",
      eventType:
        "Panel (Speakers: Morgan Young, Michelle Lawson, Ciara Cade, and Rian Corcino)",
      eventName: "Professional Development",
      description:
        "Expand your career horizons with insights from industry pros and content creators. Learn how to grow your skill set, stand out on social media, and thrive in tech. Bring your questions and be ready for fresh perspectives!",
    },
    {
      time: "4:00 PM - 5:00 PM",
      room: "Davis Auditorium",
      eventType: "Good Bye :D",
      eventName: "Closing Ceremony",
      description:
        "Celebrate the end of a successful hackathon! Winners will be announced, prizes awarded, and parting words shared—wrap up your hackathon experience on a high note.",
    },
  ],
};

const CalendarPage: React.FC = () => {
  const [activeDay, setActiveDay] = useState<Day>("Mon");

  return (
    <main className={styles.mainContainer}>
      <div className={styles.calendarContainer}>
        {/* Side Tabs */}
        <div className={styles.sideTabs}>
          {days.map((day) => (
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
