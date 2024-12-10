// src/app/components/BackgroundWrapper.tsx

"use client";

import React from "react";
import { usePathname } from "next/navigation";

interface BackgroundWrapperProps {
  children: React.ReactNode;
  className?: string;
}

export default function BackgroundWrapper({
  children,
  className = "",
}: BackgroundWrapperProps) {
  const pathname = usePathname();
  const isHome = pathname === "/" || pathname === "/HomePage";

  const backgroundClass = isHome ? "bg-[#1E1A20]" : "bg-background";

  return (
    <div
      className={`${backgroundClass} min-h-screen w-full flex flex-col ${className}`}
    >
      {children}
    </div>
  );
}
