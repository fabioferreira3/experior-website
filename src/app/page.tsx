"use client";
import Typewriter from "@/components/Typewriter";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import {
  RxHamburgerMenu as HamburgerIcon,
  RxCross2 as CrossIcon,
} from "react-icons/rx";
import { FaRobot as RobotIcon } from "react-icons/fa6";
import Carousel from "@/components/Carousel";
import FadeInSection from "@/components/FadeInSection";

export default function Home() {
  const [openMenu, setOpenMenu] = useState(false);
  const [closing, setClosing] = useState(false);
  const menuRef = useRef(null);

  useEffect(() => {
    if (menuRef.current) {
      menuRef.current.addEventListener("animationend", () => {
        if (closing) {
          setOpenMenu(false);
          setClosing(false);
        }
      });
    }
  }, [closing]);

  const handleCloseMenu = () => {
    setClosing(true);
  };

  return (
    <main className="bg-gradient-to-r from-main to-[#22267a] min-h-screen flex flex-col">
      <header className="flex items-center justify-between p-8">
        <div className="">
          <Image
            alt="Experior logo"
            width={250}
            height={50}
            src={"/logo.png"}
          />
        </div>
        <nav>
          <HamburgerIcon
            className="text-3xl"
            onClick={() => setOpenMenu(true)}
          />
        </nav>
      </header>
      <div className="flex flex-col gap-2 justify-center items-center p-8">
        <div className="text-3xl font-bold">Hero 1</div>
        <div className="text-4xl font-bold h-8">
          <Typewriter words={["Hello", "World"]} />
        </div>
        <div>
          <div className="text-gray-100 mt-6">Eita peste</div>
        </div>
        <div className="w-full">
          <button className="w-full md:w-1/3 bg-secondary rounded-full flex items-center md:justify-center gap-6 py-3 px-5">
            <RobotIcon className="text-4xl md:text-2xl" />
            <div className="text-2xl md:text-xl font-bold font-avenir">
              Try Experior Free
            </div>
          </button>
        </div>
      </div>
      <div className="w-full mt-4">
        <div className="hidden md:block">
          <Carousel
            title="Trusted by"
            images={[
              "/brands/algolia-logo.webp",
              "/brands/ineco-logo.webp",
              "/brands/iqvia-logo.webp",
              "/brands/nhs-logo.webp",
              "/brands/philips-logo.webp",
            ]}
          />
        </div>
      </div>
      {/* <div className="mt-32 space-y-12">
        <FadeInSection>
          <div className="h-64 w-full bg-blue-500">Content 1</div>
        </FadeInSection>
        <FadeInSection>
          <div className="h-64 w-full bg-red-500">Content 2</div>
        </FadeInSection>
        <FadeInSection>
          <div className="h-64 w-full bg-green-500">Content 3</div>
        </FadeInSection>
      </div> */}

      {openMenu && (
        <div
          ref={menuRef}
          className={`p-8 flex flex-col justify-between bg-white fixed top-0 right-0 inset-0 w-full ${
            closing
              ? "animate-slide-out-right-to-left"
              : "animate-slide-in-right-to-left"
          }`}
        >
          <div className="flex items-center justify-between">
            <div>
              <Image
                alt="Experior logo"
                width={250}
                height={50}
                src={"/logo-black.png"}
              />
            </div>
            <div>
              <CrossIcon
                className="text-gray-700 text-3xl"
                onClick={handleCloseMenu}
              />
            </div>
          </div>
          {/* <div className="flex flex-col items-center justify-center">
            <div className="text-gray-700">Item 1</div>
            <div className="text-gray-700">Item 2</div>
          </div> */}
          <div className="flex items-center justify-between gap-4 p-4">
            <div className="bg-main py-2 px-8 rounded-lg w-1/2 text-center">
              Sign in
            </div>
            <div className="bg-secondary py-2 px-8 rounded-lg w-1/2 text-center">
              Sign up
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
