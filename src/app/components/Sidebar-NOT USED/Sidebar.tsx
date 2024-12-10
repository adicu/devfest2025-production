// src/app/components/Sidebar/Sidebar.tsx

"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/HomePage", label: "Home Page" },
  { href: "/ComputerPage", label: "Computer Page" },
  { href: "/CalendarPage", label: "Calendar Page" },
  { href: "/PolaroidsPage", label: "Polaroids Page" },
];

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === "/" || pathname === "/HomePage";

  const sidebarBgClass = "bg-brown"; // Changed from bg-brown to a red shade

  const toggleSidebar = () => setIsOpen((prev) => !prev);

  // Prevent body scrolling when sidebar is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [isOpen]);

  // Corrected TypeScript Reference
  const sidebarRef = useRef<HTMLDivElement>(null); // Using HTMLDivElement instead of HTMLAsideElement
  const [isDragging, setIsDragging] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  // Handle mouse down on the sidebar header
  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (sidebarRef.current) {
      const rect = sidebarRef.current.getBoundingClientRect();
      setOffset({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      });
      setIsDragging(true);
    }
  };

  // Handle mouse move when dragging
  const handleMouseMove = (e: MouseEvent) => {
    if (isDragging && sidebarRef.current) {
      const parentRect =
        sidebarRef.current.parentElement?.getBoundingClientRect();
      if (parentRect) {
        let newX = e.clientX - parentRect.left - offset.x;
        let newY = e.clientY - parentRect.top - offset.y;

        // Prevent the sidebar from moving outside the viewport
        newX = Math.max(
          0,
          Math.min(newX, parentRect.width - sidebarRef.current.offsetWidth)
        );
        newY = Math.max(
          0,
          Math.min(newY, parentRect.height - sidebarRef.current.offsetHeight)
        );

        setPosition({ x: newX, y: newY });
      }
    }
  };

  // Handle mouse up to stop dragging
  const handleMouseUp = () => {
    setIsDragging(false);
  };

  // Add event listeners for mouse move and mouse up
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
    <>
      {/* Toggle Button - Visible Only When Sidebar is Closed */}
      {!isOpen && (
        <button
          className={`p-4 text-white ${
            isHome ? "bg-brown hover:bg-brown" : "bg-brown hover:bg-brown"
          } focus:outline-none rounded-lg shadow-lg z-40 fixed top-[200px] left-4`} // Adjusted top position for better spacing
          onClick={toggleSidebar}
          aria-label="Open Menu"
        >
          Menu
        </button>
      )}

      {/* Sidebar - Visible Only When isOpen is True */}
      {isOpen && (
        <aside
          ref={sidebarRef}
          className={`fixed top-[150px] left-0 h-[calc(100vh-300px)] w-64 ${sidebarBgClass} p-8 z-30 transform transition-transform duration-300 ease-in-out shadow-lg rounded-lg overflow-y-auto translate-x-0`} // Adjusted top and height, increased padding
          style={{ transform: `translate(${position.x}px, ${position.y}px)` }}
        >
          {/* Header - Drag Handle */}
          <div
            className="handle mb-4 cursor-move"
            onMouseDown={handleMouseDown}
            aria-label="Drag Sidebar"
            role="button"
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                handleMouseDown(e as any);
              }
            }}
          >
            {/* Visual Indicator */}
            <div className="w-16 h-1 bg-gray-300 rounded-full mx-auto"></div>
          </div>

          {/* Close Button for Accessibility */}
          <button
            className="mb-4 text-white hover:text-gray-300 focus:outline-none"
            onClick={toggleSidebar}
            aria-label="Close Menu"
          >
            &times; {/* 'X' Symbol */}
          </button>

          {/* Navigation Links */}
          <nav>
            <ul className="space-y-4">
              {links.map(({ href, label }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className={`block text-white text-lg hover:text-gray-300 ${
                      pathname === href ? "font-bold" : ""
                    }`}
                    aria-current={pathname === href ? "page" : undefined}
                    onClick={() => setIsOpen(false)} // Close sidebar on link click
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Additional Content */}
          <div className="mt-8">
            <p className="text-white">Who is ADI?</p>
          </div>
        </aside>
      )}

      {/* Custom Styles for Sidebar and Dragging */}
      <style jsx>{`
        /* Draggable Cursor Style */
        .handle {
          cursor: move;
        }

        /* Styling for the Drag Handle */
        .handle div {
          width: 64px;
          height: 4px;
          background-color: #cccccc;
          border-radius: 2px;
        }

        /* Smooth Transition for Dragging */
        aside {
          transition: transform 0.3s ease-in-out;
        }

        /* Optional: Adjust sidebar size for smaller screens */
        @media (max-width: 768px) {
          aside {
            width: 200px; /* Adjust width as needed */
          }
        }
      `}</style>
    </>
  );
}
