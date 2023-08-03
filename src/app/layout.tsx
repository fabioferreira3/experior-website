import type { Metadata } from "next";
import localFont from "next/font/local";
import { Suspense } from "react";

import Analytics from "@/components/Analytics";
import "./globals.css";

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
      <body className={`${avenir.variable} font-sans`}>
        <Suspense>
          <Analytics />
        </Suspense>
        {children}
      </body>
    </html>
  );
}
