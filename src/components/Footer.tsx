import {
  FaXTwitter as TwitterIcon,
  FaInstagram as InstagramIcon,
  FaSquareFacebook as FacebookIcon,
  FaLinkedinIn as LinkedinIcon,
} from "react-icons/fa6";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="md:max-w-6xl m-auto p-8 md:px-12 md:py-4">
      <div className="flex justify-center border-b border-gray-300 pb-8">
        <div className="flex flex-col gap-4">
          <Image
            alt="Experior logo"
            width={180}
            height={50}
            src={"/logo.png"}
          />
          <div className="flex justify-center items-center gap-4">
            <Link
              target="_blank"
              href="https://linkedin.com/company/experior-ai"
            >
              <LinkedinIcon className="text-gray-500 text-2xl hover:text-secondary" />
            </Link>
            <Link target="_blank" href="https://www.facebook.com/experiorai/">
              <FacebookIcon className="text-gray-500 text-2xl hover:text-secondary" />
            </Link>
            <Link target="_blank" href="https://twitter.com/experior_ai">
              <TwitterIcon className="text-gray-500 text-2xl hover:text-secondary" />
            </Link>
            <Link target="_blank" href="https://www.instagram.com/experior.ai/">
              <InstagramIcon className="text-gray-500 text-2xl hover:text-secondary" />
            </Link>
          </div>
        </div>
      </div>
      <div className="flex justify-between py-4 font-bold text-sm text-gray-600">
        <div>© 2024 Experior. All rights reserved. A Talendor,LLC company.</div>
        <Link target="_blank" href="/terms-of-use">Terms of Service</Link>
      </div>
    </footer>
  );
};

export default Footer;
