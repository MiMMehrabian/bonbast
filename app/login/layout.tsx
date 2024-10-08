import type { Metadata } from "next";

import "../globals.css";
// Metadata for the document, setting the title of the site
export const metadata: Metadata = {
  title: "Bonbast Login",
};

// Root layout component for the application
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
