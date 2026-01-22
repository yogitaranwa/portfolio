import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll"; // Imports your updated component
import { Analytics } from "@vercel/analytics/next"

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Yogita Kumari | Portfolio",
  description: "UI/UX Designer & ML Engineer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>
        <SmoothScroll> 
          {children}
        </SmoothScroll> 

        <Analytics />
      </body>
    </html>
  );
}