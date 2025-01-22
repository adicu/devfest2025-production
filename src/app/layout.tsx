// src/app/layout.tsx

import type { Metadata } from "next";
import "./globals.css";
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import localFont from "next/font/local";
import BackgroundWrapper from "./components/BackgroundWrapper";

const pixelifySans = localFont({
  src: "./fonts/pixelify-sans/Font/ttf/PixelifySans-Regular.ttf",
  variable: "--font-pixelify-sans",
});

export const metadata: Metadata = {
  title: "DevFest 2025",
  description:
    "Columbia's largest annual hackathon and week-long computer science festival.",
  icons: { icon: "/icon.ico" },
};

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" className={pixelifySans.variable}>
      <body className="font-sans text-foreground m-0 p-0">
        <a
          id="mlh-trust-badge"
          className="block fixed top-0 left-2 w-1/10 max-w-[100px] min-w-[60px] z-[10000]"
          href="https://mlh.io/na?utm_source=na-hackathon&amp;utm_medium=TrustBadge&amp;utm_campaign=2024-season&amp;utm_content=white"
          target="_blank"
        >
          <img
            src="https://s3.amazonaws.com/logged-assets/trust-badge/2025/mlh-trust-badge-2025-white.svg"
            alt="Major League Hacking 2024 Hackathon Season"
            className="w-full"
          />
        </a>

        <BackgroundWrapper className="flex flex-col h-[950px]">
          {/* Header */}
          <Header />

          {/* Sidebar and Main Content */}
          <div className="flex flex-col md:flex-row flex-1">
            {/* Sidebar */}
            <Sidebar />

            {/* Main Content Area */}
            <main className="flex-1 overflow-auto p-4">{children}</main>
          </div>
        </BackgroundWrapper>
      </body>
    </html>
  );
}
