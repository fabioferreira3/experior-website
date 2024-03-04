import {
  FaRobot as RobotIcon,
  FaCrop as CropIcon,
  FaInstagram as InstagramIcon,
  FaSquareFacebook as FacebookIcon,
  FaLinkedinIn as LinkedinIcon,
  FaTwitter as TwitterIcon,
} from "react-icons/fa6";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="md:max-w-6xl m-auto p-8 md:px-12 md:py-4">
      <div className="flex justify-center border-b border-gray-500 pb-8">
        <div className="flex flex-col">
          <Image
            alt="Experior logo"
            width={180}
            height={50}
            src={"/logo.png"}
          />
          <div className="flex items-center ml-6 mt-4 gap-4">
            <Link
              target="_blank"
              href="https://linkedin.com/company/experior-ai"
            >
              <LinkedinIcon className="text-gray-400 text-2xl" />
            </Link>
            {/* <FacebookIcon className="text-gray-400 text-2xl" /> */}
            <Link target="_blank" href="https://twitter.com/experior_ai">
              <TwitterIcon className="text-gray-400 text-2xl" />
            </Link>
            <Link target="_blank" href="https://www.instagram.com/experior.ai/">
              <InstagramIcon className="text-gray-400 text-2xl" />
            </Link>
          </div>
        </div>
      </div>
      <div className="flex justify-between py-4 font-bold text-sm">
        <div>© 2023 Experior. All rights reserved. A Talendor,LLC company.</div>
        <Link target="_blank" href="/terms-of-use">Terms of Service</Link>
      </div>
    </footer>
  );
};

export default Footer;
