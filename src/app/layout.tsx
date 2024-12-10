import type { Metadata } from "next";
import "./globals.css";
import Header from "./components/Header/Header";
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
        <BackgroundWrapper className="pt-8">
          <div className="px-4">
            <Header />
          </div>
          <div className="flex pt-7">
            {/* Removed Sidebar */}
            <main className="flex-1 overflow-auto">{children}</main>
          </div>
        </BackgroundWrapper>
      </body>
    </html>
  );
}
