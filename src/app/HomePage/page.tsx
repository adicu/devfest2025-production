// src/app/HomePage/page.tsx

"use client"; // Ensure this component is treated as a client component

import React, { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";

export default function HomePage() {
  const router = useRouter();

  // Handler functions for navigation
  const navigateToComputer = () => {
    router.push("/ComputerPage");
  };

  const navigateToCalendar = () => {
    router.push("/CalendarPage");
  };

  const navigateToPolaroids = () => {
    router.push("/PolaroidsPage");
  };

  // State for typing animation
  const [displayedText, setDisplayedText] = useState("");
  const fullText =
    "Hii, I'm Roaree the lion! I'm here to help you navigate your DevFest 2025 Home. To see information about the schedule, click the calendar. For information about the judges and sponsors, click the polaroids. For information about the hackathon, click the computer.";

  // State to trigger bounce animations
  const [bounceCalendar, setBounceCalendar] = useState(false);
  const [bouncePolaroids, setBouncePolaroids] = useState(false);
  const [bounceComputer, setBounceComputer] = useState(false);

  // State to control visibility of the text box
  const [showTextBox, setShowTextBox] = useState(true);

  // Refs for draggable functionality
  const textBoxRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  // State to track if typing is in progress
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    setIsTyping(true); // Typing starts
    let index = 0;
    const typingSpeed = 50; // Milliseconds per character

    const typeInterval = setInterval(() => {
      setDisplayedText((prev) => prev + fullText.charAt(index));
      index++;
      if (index === fullText.length) {
        clearInterval(typeInterval);
        setIsTyping(false); // Typing ends
      }

      // Trigger bounce animations at specific points
      if (
        index ===
        fullText.indexOf("click the calendar") + "click the calendar".length
      ) {
        setBounceCalendar(true);
        setTimeout(() => setBounceCalendar(false), 1000); // Reset after 1s
      }

      if (
        index ===
        fullText.indexOf("click the polaroids") + "click the polaroids".length
      ) {
        setBouncePolaroids(true);
        setTimeout(() => setBouncePolaroids(false), 1000); // Reset after 1s
      }

      if (
        index ===
        fullText.indexOf("click the computer") + "click the computer".length
      ) {
        setBounceComputer(true);
        setTimeout(() => setBounceComputer(false), 1000); // Reset after 1s
      }
    }, typingSpeed);

    return () => clearInterval(typeInterval);
  }, [fullText]);

  // Event handlers for dragging
  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (textBoxRef.current) {
      const rect = textBoxRef.current.getBoundingClientRect();
      setOffset({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      });
      setIsDragging(true);
    }
  };

  const handleMouseMove = (e: MouseEvent) => {
    if (isDragging && textBoxRef.current) {
      const parentRect =
        textBoxRef.current.parentElement?.getBoundingClientRect();
      if (parentRect) {
        let newX = e.clientX - parentRect.left - offset.x;
        let newY = e.clientY - parentRect.top - offset.y;

        // Prevent the text box from moving outside the parent container
        newX = Math.max(
          0,
          Math.min(newX, parentRect.width - textBoxRef.current.offsetWidth)
        );
        newY = Math.max(
          0,
          Math.min(newY, parentRect.height - textBoxRef.current.offsetHeight)
        );

        textBoxRef.current.style.left = `${newX}px`;
        textBoxRef.current.style.top = `${newY}px`;
      }
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  useEffect(() => {
    if (isDragging) {
      document.addEventListener("mousemove", handleMouseMove);
      document.addEventListener("mouseup", handleMouseUp);
    } else {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
    }

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
    };
  }, [isDragging]);

  return (
    <div className="w-[1200px] h-[665px] relative mx-auto overflow-hidden">
      {/* Base Image */}
      <img src="/Home.png" alt="Home" className="w-full h-full object-cover" />

      {/* Overlay Images */}

      {/* Computer.png - Positioned at (left: 560px, top: 280px) */}
      <img
        src="/computer.png"
        alt="Computer"
        className={`absolute cursor-pointer transition-transform duration-300 hover:scale-105 
        top-[280px] left-[560px] w-[150px] h-[100px] ${
          bounceComputer ? "animate-bounce-element" : ""
        }`}
        onClick={navigateToComputer}
      />

      {/* Calendar.png - Positioned at (left: 300px, top: 120px) */}
      <img
        src="/calendar.png"
        alt="Calendar"
        className={`absolute cursor-pointer transition-transform duration-300 hover:scale-105 
        top-[120px] left-[300px] w-[220px] h-[180px] ${
          bounceCalendar ? "animate-bounce-element" : ""
        }`}
        onClick={navigateToCalendar}
      />

      {/* Polaroids.png - Positioned at (left: 475px, top: 50px) */}
      <img
        src="/polaroids.png"
        alt="Polaroids"
        className={`absolute cursor-pointer transition-transform duration-300 hover:scale-105 
        top-[50px] left-[475px] w-[280px] h-[80px] ${
          bouncePolaroids ? "animate-bounce-element" : ""
        }`}
        onClick={navigateToPolaroids}
      />

      {/* Animated Roaree.png */}
      <img
        src="/roaree.png"
        alt="Roaree"
        className={`absolute ${
          isTyping
            ? "top-[200px] left-[500px] h-[100px] animate-roaree-bounce"
            : "bottom-0 left-[400px] h-[100px] animate-roaree-walk"
        } transition-all duration-1000 ease-in-out cursor-pointer`}
        onClick={() => router.push("/HomePage")} // Optional: Make Roaree clickable
      />

      {/* Typing Text Box - Custom Draggable Implementation */}
      {showTextBox && (
        <div
          ref={textBoxRef}
          className={`absolute bg-gray-800 bg-opacity-90 text-white p-6 
                      rounded-lg border-2 border-gray-600 shadow-lg w-[250px] h-[400px] pixelated pop-up overflow-y-auto cursor-move`}
          style={{ top: "50px", right: "180px", position: "absolute" }}
          onMouseDown={handleMouseDown}
        >
          {/* Close Button */}
          <button
            className="absolute top-2 right-2 text-white font-bold text-xl focus:outline-none"
            onClick={() => setShowTextBox(false)}
            aria-label="Close Text Box"
          >
            &times;
          </button>

          {/* Message Content */}
          <p>{displayedText}</p>
        </div>
      )}

      {/* Custom Styles for Animation and Pixelated Text Box */}
      <style jsx>{`
        /* Typing Text Box Styles */
        .pixelated {
          font-family: "Press Start 2P", cursive;
          font-size: 12px;
          line-height: 1.5;
          position: relative;
        }

        /* Close Button Styles */
        .pixelated button {
          background: none;
          border: none;
          cursor: pointer;
        }

        /* Bounce Animation for Elements */
        @keyframes bounce-element {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-15px);
          }
        }

        .animate-bounce-element {
          animation: bounce-element 1s ease-in-out;
        }

        /* Roaree Walk Animation */
        @keyframes roareeWalk {
          0% {
            transform: translateX(0) translateY(0) rotate(0deg);
          }
          10% {
            transform: translateX(40px) translateY(-10px) rotate(5deg);
          }
          20% {
            transform: translateX(80px) translateY(0) rotate(0deg);
          }
          30% {
            transform: translateX(120px) translateY(-10px) rotate(-5deg);
          }
          40% {
            transform: translateX(160px) translateY(0) rotate(0deg);
          }
          50% {
            transform: translateX(160px) translateY(-10px) rotate(5deg);
          }
          60% {
            transform: translateX(120px) translateY(0) rotate(0deg);
          }
          70% {
            transform: translateX(80px) translateY(-10px) rotate(-5deg);
          }
          80% {
            transform: translateX(40px) translateY(0) rotate(0deg);
          }
          90% {
            transform: translateX(20px) translateY(-5px) rotate(2.5deg);
          }
          100% {
            transform: translateX(0) translateY(0) rotate(0deg);
          }
        }

        .animate-roaree-walk {
          animation: roareeWalk 10s ease-in-out infinite;
        }

        /* Roaree Bounce Animation */
        @keyframes roareeBounce {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-20px);
          }
        }

        .animate-roaree-bounce {
          animation: roareeBounce 1s ease-in-out infinite;
        }

        /* Typing Effect */
        @keyframes blink-caret {
          from,
          to {
            border-color: transparent;
          }
          50% {
            border-color: white;
          }
        }

        .pixelated p {
          white-space: pre-wrap;
          word-break: break-word;
          border-right: 2px solid white;
          animation: blink-caret 0.75s step-end infinite;
        }

        /* Pop-Up Animation for Text Box */
        @keyframes pop-up {
          0% {
            opacity: 0;
            transform: scale(0.8);
          }
          100% {
            opacity: 1;
            transform: scale(1);
          }
        }

        .pop-up {
          animation: pop-up 0.5s ease-out forwards;
        }

        /* Reduced Motion Support */
        @media (prefers-reduced-motion: reduce) {
          .animate-roaree-walk {
            animation: none;
            transform: translateX(0) translateY(0) rotate(0deg);
          }
          .animate-roaree-bounce {
            animation: none;
          }
          .animate-bounce-element {
            animation: none;
          }
          .pixelated p {
            animation: none;
            border-right: none;
          }
          .pop-up {
            animation: none;
          }
        }
      `}</style>

      {/* Importing Pixel Font */}
      <link
        href="https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap"
        rel="stylesheet"
      />
    </div>
  );
}
