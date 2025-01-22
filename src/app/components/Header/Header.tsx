// src/app/components/Header/Header.tsx

"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

interface HeaderProps {
  className?: string;
}

const Header: React.FC<HeaderProps> = ({ className = "" }) => {
  const headerBgClass = "bg-brown-500"; // Ensure this color is defined in tailwind.config.js
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <header
      className={`flex items-center justify-between ${headerBgClass} rounded-md p-4 ${className}`}
    >
      {/* Left Side: Logo and Title */}
      <div className="flex items-center pl-28">
        <Link href="/">
          <Image src="/icon.ico" alt="Logo" width={60} height={60} />
        </Link>
        <h1 className="ml-4 text-white text-3xl md:text-6xl">DevFest 2025</h1>
      </div>

      {/* Hamburger Menu Button - Visible on Mobile */}
      <button
        className="md:hidden text-white focus:outline-none"
        onClick={toggleMenu}
        aria-label="Toggle navigation menu"
        aria-expanded={isMenuOpen}
      >
        {/* Hamburger Icon */}
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          {isMenuOpen ? (
            // Close Icon
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          ) : (
            // Hamburger Icon
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          )}
        </svg>
      </button>

      {/* Navigation Links - Visible on Desktop */}
      <nav className="hidden md:flex space-x-6">
        <Link href="/HomePage" className="text-white hover:text-gray-300">
          Home
        </Link>
        <Link href="/ComputerPage" className="text-white hover:text-gray-300">
          Info
        </Link>
        <Link href="/CalendarPage" className="text-white hover:text-gray-300">
          Calendar
        </Link>
        <Link href="/PolaroidsPage" className="text-white hover:text-gray-300">
          People
        </Link>
      </nav>

      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <nav className="absolute top-20 left-0 w-full bg-brown-500 md:hidden flex flex-col space-y-4 p-4 rounded-md shadow-lg z-50 text-center">
          <Link
            href="/HomePage"
            className="text-white hover:text-gray-300 "
            onClick={() => setIsMenuOpen(false)}
          >
            Home
          </Link>
          <Link
            href="/ComputerPage"
            className="text-white hover:text-gray-300"
            onClick={() => setIsMenuOpen(false)}
          >
            Info
          </Link>
          <Link
            href="/CalendarPage"
            className="text-white hover:text-gray-300"
            onClick={() => setIsMenuOpen(false)}
          >
            Calendar
          </Link>
          <Link
            href="/PolaroidsPage"
            className="text-white hover:text-gray-300"
            onClick={() => setIsMenuOpen(false)}
          >
            People
          </Link>
        </nav>
      )}
    </header>
  );
};

export default Header;
