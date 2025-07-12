import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";

import { cn } from "@/lib/utils";

import "./globals.css";

const sans = Plus_Jakarta_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Tripnesia",
  description: "Tripnesia - Discover Your Next Adventure",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <body className={cn("antialiased", sans.variable)}>{children}</body>
    </html>
  );
}
