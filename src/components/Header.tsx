import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import {
  RxHamburgerMenu as HamburgerIcon,
  RxCross2 as CrossIcon,
} from "react-icons/rx";

export const Header = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const [closing, setClosing] = useState(false);
  const menuRef = useRef<any>(null);

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
    <>
      <header className="flex items-center justify-between p-8">
        <div className="">
          <Image
            alt="Experior logo"
            width={180}
            height={50}
            src={"/logo.png"}
          />
        </div>
        <nav>
          <div className="hidden md:flex items-center gap-8">
            <a href="/blog" className="font-bold">
              Blog
            </a>
            <a href="/contact" className="font-bold">
              Contact
            </a>
            <a href={"https://go.experior.ai"} className="font-bold">
              Sign-in
            </a>
          </div>
          <HamburgerIcon
            className="text-3xl cursor-pointer block md:hidden"
            onClick={() => setOpenMenu(true)}
          />
        </nav>
      </header>
      {openMenu && (
        <div
          ref={menuRef}
          className={`p-8 flex flex-col justify-between bg-white fixed top-0 right-0 inset-0 w-full z-40 ${
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
                className="text-gray-700 text-3xl cursor-pointer"
                onClick={handleCloseMenu}
              />
            </div>
          </div>
          <div className="flex flex-col items-center justify-center">
            <a href="/blog" className="text-gray-700">
              Blog
            </a>
            <a href="/" className="text-gray-700">
              Contact
            </a>
            {/* <div className="text-gray-700">Item 2</div> */}
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
    </>
  );
};
