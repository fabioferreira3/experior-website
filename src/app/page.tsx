"use client";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import {
  RxHamburgerMenu as HamburgerIcon,
  RxCross2 as CrossIcon,
} from "react-icons/rx";
import { FaRobot as RobotIcon } from "react-icons/fa6";
import { FaPencilAlt as PencilIcon } from "react-icons/fa";
import { AiFillAudio as FillAudioIcon } from "react-icons/ai";
import { BsChatRightTextFill as ChatIcon } from "react-icons/bs";
import { FaHashtag as HashIcon } from "react-icons/fa";
import { TbSwitch2 as SwitchIcon } from "react-icons/tb";

import FadeInSection from "@/components/FadeInSection";
import TrustedBrands from "@/components/TrustedBrands";
import Typewriter from "@/components/Typewriter";
import SlideInFromBottom from "@/components/SlideInFromBottom";
import Feature from "@/components/Feature";

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
    <main className="bg-main min-h-screen flex flex-col">
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
      <div className="flex flex-col p-8">
        <h1 className="text-6xl font-bold text-start md:text-center">
          Enhancing Your Digital
        </h1>
        <div className="text-5xl md:text-5xl font-bold h-12 my-6 md:mt-4 md:text-center text-secondary">
          <Typewriter
            words={["Presence", "Impact", "Reach", "Engagement", "Voice"]}
          />
        </div>
        <div className="text-5xl font-bold text-start md:text-center md:mt-4">
          With AI
        </div>
        <div>
          <div className="text-center text-xl text-gray-100 my-12">
            Your one-stop AI tool for SEO-optimized content creation and text
            transformation.
          </div>
        </div>
        <div className="w-full md:m-auto md:w-1/3 flex justify-center ">
          <button className="w-full bg-secondary rounded-full md:rounded-2xl flex items-center md:justify-center gap-6 py-3 px-5 md:py-5">
            <RobotIcon className="text-4xl md:text-3xl" />
            <div className="text-xl md:text-2xl font-bold font-avenir">
              Try Experior for Free
            </div>
          </button>
        </div>
      </div>
      <div className="w-full mt-4">
        <div className="">
          <TrustedBrands />
        </div>
      </div>
      <div className="">
        <FadeInSection>
          <div className="w-full gap-4 flex flex-col items-center justify-center p-12">
            <SlideInFromBottom>
              <div className="text-3xl text-gray-100 text-center font-bold">
                Experience the Power of AI in Content Creation
              </div>
            </SlideInFromBottom>
            <SlideInFromBottom>
              <div className="text-center text-xl">
                From SEO optimized blog posts to engaging social media content,
                Experior takes your ideas and transforms them into captivating
                narratives.
              </div>
            </SlideInFromBottom>
            <div className="flex flex-col md:grid md:grid-cols-3 items-center space-y-12 md:space-y-0 md:gap-12 mt-8">
              <FadeInSection duration="2000ms">
                <Feature icon={PencilIcon} title="Blog Post">
                  text
                </Feature>
              </FadeInSection>
              <FadeInSection duration="2000ms">
                <Feature icon={HashIcon} title="Social Media">
                  text
                </Feature>
              </FadeInSection>
              <FadeInSection duration="2000ms">
                <Feature icon={FillAudioIcon} title="Text to Audio">
                  text
                </Feature>
              </FadeInSection>
              <FadeInSection duration="2000ms">
                <Feature icon={SwitchIcon} title="Paraphraser">
                  text
                </Feature>
              </FadeInSection>
              <FadeInSection duration="2000ms">
                <Feature icon={ChatIcon} title="Text Transcription">
                  text
                </Feature>
              </FadeInSection>
            </div>
          </div>
        </FadeInSection>
        <FadeInSection>
          <div className="w-full flex items-center justify-center p-12">
            <div className="flex flex-col items-center">
              <SlideInFromBottom>
                <h2 className="text-gray-100 text-4xl md:text-7xl font-bold">
                  Text to Audio
                </h2>
              </SlideInFromBottom>
              <SlideInFromBottom>
                <div className="text-3xl text-gray-100 text-center">
                  Transform Texts to Audios Instantly
                </div>
              </SlideInFromBottom>
              <div>
                Elevate your content strategy. Turn your texts into high-quality
                audio with Experior&apos;s AI-powered text-to-speech
                capabilities.
              </div>
            </div>
          </div>
        </FadeInSection>
        <FadeInSection>
          <div className="w-full flex items-center justify-center p-12">
            <div className="flex flex-col items-center">
              <SlideInFromBottom>
                <h2 className="text-gray-100 text-4xl md:text-7xl font-bold">
                  Transform
                </h2>
              </SlideInFromBottom>
              <SlideInFromBottom>
                <div className="text-3xl text-gray-100 text-center">
                  Rephrase, Transcribe, and Engage Better
                </div>
              </SlideInFromBottom>
              <div>
                Experior is not just about creating content; it&apos;s about
                refining it. Paraphrase texts, transcribe YouTube videos, and
                engage your audience like never before.
              </div>
            </div>
          </div>
        </FadeInSection>
      </div>

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
          <div className="flex flex-col items-center justify-center">
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
    </main>
  );
}
