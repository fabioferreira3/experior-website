import localFont from "next/font/local";
import { Suspense } from "react";

import Analytics from "@/components/Analytics";
import "../../app/globals.css";
import { Header } from "../Header";
import Footer from "../Footer";

const avenir = localFont({
  src: [
    {
      path: "../../../public/fonts/avenir-light.ttf",
      weight: "200",
    },
    {
      path: "../../../public/fonts/avenir-regular.ttf",
      weight: "400",
    },
    {
      path: "../../../public/fonts/avenir-black.ttf",
      weight: "700",
    },
  ],
  variable: "--font-avenir",
});

export default function PostView({ children }: { children: React.ReactNode }) {
  return (
    <html>
      <body className={`${avenir.variable} font-sans px-24`}>
        <Suspense>
          <Analytics />
        </Suspense>
        <main>
          <Header />
          <div className="p-12">{children}</div>
          <Footer />
        </main>
      </body>
    </html>
  );
}
