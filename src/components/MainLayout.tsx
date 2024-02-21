import localFont from "next/font/local";

//import Analytics from "@/components/Analytics";
import "../assets/globals.css";
import { Header } from "./Header";
import Footer from "./Footer";

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

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <div className={`${avenir.variable} font-sans`}>
        <main className="bg-main min-h-screen flex flex-col">
          <div>
            <Header />
            {children}
            <Footer />
          </div>
        </main>
      </div>
    </>
  );
}
