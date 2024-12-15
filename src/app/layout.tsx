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
        {/* Scaling Wrapper */}
        <div className="transform scale-90 md:scale-100 origin-top-left md:origin-center">
          <BackgroundWrapper className="flex flex-col h-[850px]">
            {/* Header */}
            <Header />

            {/* Sidebar and Main Content */}
            <div className="flex flex-row flex-1">
              {/* Sidebar */}
              <Sidebar />

              {/* Main Content Area */}
              <main className="flex-1 overflow-auto p-4">{children}</main>
            </div>
          </BackgroundWrapper>
        </div>
      </body>
    </html>
  );
}
