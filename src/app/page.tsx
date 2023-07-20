"use client";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import {
  RxHamburgerMenu as HamburgerIcon,
  RxCross2 as CrossIcon,
} from "react-icons/rx";

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
      <header className="flex items-center justify-between p-4">
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
          {openMenu && (
            <div
              ref={menuRef}
              className={`flex flex-col justify-between bg-white fixed top-0 right-0 h-screen w-full ${
                closing
                  ? "animate-slide-out-right-to-left"
                  : "animate-slide-in-right-to-left"
              }`}
            >
              <div className="flex items-center justify-between p-4">
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
              <div className="flex flex-col items-center justify-center h-full">
                <div className="text-gray-700">Item 1</div>
                <div className="text-gray-700">Item 2</div>
              </div>
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
        </nav>
      </header>
    </main>
  );
}
