import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import localFont from "next/font/local";

const avenir = localFont({
  src: [
    {
      path: "../../public/fonts/avenir-light.ttf",
      weight: "200",
    },
    {
      path: "../../public/fonts/avenir-regular.ttf",
      weight: "400",
    },
    {
      path: "../../public/fonts/avenir-black.ttf",
      weight: "700",
    },
  ],
  variable: "--font-avenir",
});

export const metadata: Metadata = {
  title: "Experior AI",
  description: "The next step on content generation",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${avenir.variable} font-sans`}>{children}</body>
    </html>
  );
}
