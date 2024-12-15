// src/app/components/Header/Header.tsx

"use client";

import Image from "next/image";
import Link from "next/link";

export default function Header() {
  const headerBgClass = "bg-brown-500"; // Use defined shade

  return (
    <header
      className={`flex items-center justify-between ${headerBgClass} rounded-md p-4`}
    >
      {/* Left Side: Logo and Title */}
      <div className="flex items-center">
        <Link href="/">
          <Image src="/icon.ico" alt="Logo" width={60} height={60} />
        </Link>
        <h1 className="ml-4 text-white text-6xl">DevFest 2025</h1>
      </div>

      {/* Right Side: Navigation Links */}
      <nav className="flex space-x-6">
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
    </header>
  );
}
