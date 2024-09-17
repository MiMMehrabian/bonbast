import type { Metadata } from "next";
import localFont from "next/font/local";

import Navbar from "@/components/navbar";

import "./globals.css";

// Define local fonts with the appropriate configurations
const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900", // Specifies the weight range supported by the font
});

const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900", // Specifies the weight range supported by the font
});

// Metadata for the document, setting the title of the site
export const metadata: Metadata = {
  title: "Bonbast",
};

// Root layout component for the application
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {/* Include the Navbar component */}
        <Navbar />
        {/* Render child components */}
        {children}
      </body>
    </html>
  );
}
