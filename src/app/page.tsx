"use client";
import {
  FaRobot as RobotIcon,
  FaCrop as CropIcon,
  FaInstagram as InstagramIcon,
  FaSquareFacebook as FacebookIcon,
  FaLinkedinIn as LinkedinIcon,
  FaTwitter as TwitterIcon,
} from "react-icons/fa6";
import {
  FaHashtag as HashIcon,
  FaCalendarTimes as CalendarTimesIcon,
  FaPencilAlt as PencilIcon,
} from "react-icons/fa";
import { AiFillAudio as FillAudioIcon } from "react-icons/ai";
import {
  BsChatRightTextFill as ChatIcon,
  BsBookmarkXFill as BookmarkIcon,
} from "react-icons/bs";
import { TbSwitch2 as SwitchIcon } from "react-icons/tb";
import { IoLanguage as LanguageIcon } from "react-icons/io5";
import { MdMoneyOff as MoneyOffIcon } from "react-icons/md";

import FadeInSection from "@/components/FadeInSection";
import TrustedBrands from "@/components/TrustedBrands";
import Typewriter from "@/components/Typewriter";
import SlideInFromBottom from "@/components/SlideInFromBottom";
import { Header } from "@/components/Header";
import { PainPoint } from "@/components/PainPoint";
import { Solution } from "@/components/Solution";
import Image from "next/image";

export default function Home() {
  return (
    <main className="bg-main min-h-screen flex flex-col">
      <div>
        <Header />
        <div className="md:max-w-6xl m-auto flex flex-col p-8">
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
              <a
                href="https://go.experior.ai/login"
                className="text-xl lg:text-2xl font-bold font-avenir"
              >
                Join the private beta!
              </a>
            </button>
          </div>
        </div>
        <div className="2xl:max-w-6xl xl:m-auto mt-4">
          <TrustedBrands />
        </div>
        <div className="md:max-w-6xl m-auto">
          <FadeInSection>
            <div className="w-full flex items-center justify-center p-12">
              <div className="flex flex-col items-center">
                <SlideInFromBottom>
                  <div className="flex flex-col h-24 md:h-36 text-center text-5xl md:text-7xl font-bold">
                    <span className="text-gray-100">We feel your </span>
                    <span className="text-secondary">
                      <Typewriter
                        words={[
                          "pain",
                          "struggles",
                          "challenges",
                          "burdens",
                          "hardships",
                        ]}
                      />
                    </span>
                  </div>
                </SlideInFromBottom>
                <SlideInFromBottom>
                  <div className="text-2xl font-bold md:text-3xl text-gray-100 text-center mt-5">
                    Content Creation Can Be a Grind...
                  </div>
                </SlideInFromBottom>
              </div>
            </div>
          </FadeInSection>
        </div>
        <div className="md:max-w-6xl m-auto flex flex-col md:grid md:grid-cols-2 md:rounded-xl md:overflow-auto">
          <PainPoint inverse icon={CalendarTimesIcon} title="Time Constraints">
            Maintaining a website, blog, or social media takes a lot of time due
            to tasks like research, writing, and editing.
          </PainPoint>
          <PainPoint
            fromRight
            icon={CropIcon}
            title="Content Variety and Volume"
          >
            The digital landscape requires a lot of diverse content, which can
            be overwhelming to keep up with.
          </PainPoint>
          <PainPoint icon={BookmarkIcon} title="SEO Optimized?">
            Making content isn&apos;t enough; you need to make sure the people
            you want to see it can find it. This involves getting to grips with
            how search engines work, which can be tough.
          </PainPoint>
          <PainPoint
            inverse
            fromRight
            icon={HashIcon}
            title="Social Media (In)Compatibility"
          >
            Each social media platform has its unique audience, language, and
            format. Crafting content that fits each platform&apos;s specific
            requirements and resonates with its user base can be a challenging
            task.
          </PainPoint>
          <PainPoint inverse icon={LanguageIcon} title="Language Barriers">
            The web removed geographical boundaries. The challenge is to create
            content that connects with diverse language speakers while
            preserving its original meaning.
          </PainPoint>
          <PainPoint
            fromRight
            icon={MoneyOffIcon}
            title="Inadequate Pricing Models"
          >
            Many content creation tools demand monthly subscriptions,
            irrespective of your actual usage. This can deter smaller businesses
            or individuals who don&apos;t require the tool regularly.
          </PainPoint>
        </div>
        <div className="md:max-w-6xl m-auto mt-8">
          <FadeInSection>
            <div className="w-full md:gap-4 flex flex-col items-center justify-center md:p-12">
              <SlideInFromBottom>
                <div className="text-5xl text-gray-100 text-center font-bold p-12 md:p-0">
                  Experience the Power of AI in Content Creation
                </div>
              </SlideInFromBottom>
              <SlideInFromBottom>
                <div className="text-center text-xl md:mt-4 md:p-0 p-4">
                  From SEO optimized blog posts to engaging social media
                  content, Experior takes your ideas and transforms them into
                  captivating narratives.
                </div>
              </SlideInFromBottom>
              <div className="flex flex-col md:grid md:grid-cols-2 items-center md:space-y-0 md:gap-12 mt-8">
                <Solution icon={PencilIcon} title="Blog Post" inverse order={1}>
                  Experior leverages the power of AI to craft SEO-optimized blog
                  posts, transforming your ideas into compelling narratives that
                  engage and captivate readers.
                </Solution>
                <Solution icon={HashIcon} title="Social Media" order={2}>
                  AI-driven Experior transforms social media content. Engage
                  LinkedIn, Facebook, Instagram, TikTok with tailored, engaging
                  posts. Elevate your online presence easily.
                </Solution>
                <Solution icon={FillAudioIcon} title="Text to Audio" order={3}>
                  Experior converts text to audio, enriching accessibility and
                  content variety. From blogs to social media, create immersive
                  audio experiences.
                </Solution>
                <Solution
                  icon={SwitchIcon}
                  title="Paraphraser"
                  inverse
                  order={4}
                >
                  Experior&apos;s AI rephrases with precision, creativity, and
                  uniqueness. Enhance readability, engage your audience
                  effectively.
                </Solution>
                <Solution
                  icon={ChatIcon}
                  title="Text Transcription"
                  inverse
                  order={5}
                >
                  Experior&apos;s advanced transcription converts audio to
                  precise, timestamped text. Unlock content potential for wider
                  audience access.
                </Solution>
                <Solution icon={LanguageIcon} title="Multi-language" order={6}>
                  Multilingual powerhouse, 14 languages. Break barriers,
                  captivate global audiences. Universal content creation.
                </Solution>
              </div>
            </div>
          </FadeInSection>
        </div>
        <div className="md:max-w-6xl m-auto">
          <div className="md:p-12 flex justify-center">
            <button className="w-1/2 bg-secondary rounded-full md:rounded-2xl flex items-center md:justify-center gap-6 py-3 px-5 md:py-5">
              <RobotIcon className="text-4xl md:text-3xl" />
              <a
                href="https://go.experior.ai/login"
                className="text-xl lg:text-2xl font-bold font-avenir"
              >
                <Typewriter speed={70} words={["Join", "Try", "Experiment"]} />{" "}
                the private beta!
              </a>
            </button>
          </div>
        </div>
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
                <a
                  target="_blank"
                  href="https://linkedin.com/company/experior-ai"
                >
                  <LinkedinIcon className="text-gray-400 text-2xl" />
                </a>
                <FacebookIcon className="text-gray-400 text-2xl" />
                <a target="_blank" href="https://twitter.com/experior_ai">
                  <TwitterIcon className="text-gray-400 text-2xl" />
                </a>
                <a
                  target="_blank"
                  href="https://www.instagram.com/experior.ai/"
                >
                  <InstagramIcon className="text-gray-400 text-2xl" />
                </a>
              </div>
            </div>
          </div>
          <div className="flex justify-center md:justify-end py-4 font-bold text-sm">
            © 2023 Experior. All rights reserved
          </div>
        </footer>
      </div>
    </main>
  );
}
