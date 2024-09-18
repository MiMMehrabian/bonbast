import type { Metadata } from "next";
import Navbar from "@/components/navbar";

import "../globals.css";

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
    <>
      <Navbar />
      {children}
    </>
  );
}
