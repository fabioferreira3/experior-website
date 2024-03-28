import Image from "next/image";
import Link from "next/link";
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
      <header className="flex items-center justify-between p-8 md:max-w-6xl m-auto">
        <Link href="/">
          <Image
            alt="Experior logo"
            width={180}
            height={50}
            src={"/logo.png"}
          />
        </Link>
        <nav>
          <div className="hidden text-gray-800 text-xl md:flex items-center gap-8">
            <Link href="/blog" className="font-bold hover:text-secondary">
              Blog
            </Link>
            <Link href="/pricing" className="font-bold hover:text-secondary">
              Pricing
            </Link>
            <Link href={"https://go.experior.ai"} className="font-bold hover:text-secondary">
              Sign-in
            </Link>
          </div>
          <HamburgerIcon
            className="text-3xl cursor-pointer block md:hidden text-gray-800"
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
                src={"/logo.png"}
              />
            </div>
            <div>
              <CrossIcon
                className="text-gray-700 text-3xl cursor-pointer"
                onClick={handleCloseMenu}
              />
            </div>
          </div>
          <div className="flex flex-col w-2/3 items-center justify-center gap-4 m-auto">            
            <Link href="/pricing" className="w-full bg-gray-100 text-center text-gray-700 font-bold border border-gray-300 rounded-xl py-3">
              Pricing
            </Link>
            <Link href="/blog" className="w-full bg-gray-100 text-center text-gray-700 font-bold border border-gray-300 rounded-xl py-3">
              Blog
            </Link>
            <Link
              href="https://go.experior.ai"
              className="w-full bg-main py-3 rounded-lg text-center rounded-xl"
            >
              Sign in
            </Link>
            <Link
              href="https://go.experior.ai/register"
              className="w-full bg-secondary py-3 rounded-lg text-center rounded-xl"
            >
              Sign up
            </Link>
          </div>
          <div className="flex items-center justify-between gap-4 p-4">
            
          </div>
        </div>
      )}
    </>
  );
};
