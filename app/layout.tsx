import type { Metadata } from "next";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v14-appRouter";
import Navbar from "@/components/navbar";

import "./globals.css";

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
      <body>
        <AppRouterCacheProvider options={{ key: "css" }}>
          {/* Include the Navbar component */}
          <Navbar />
          {/* Render child components */}
          {children}
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
