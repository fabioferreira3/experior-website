"use client";
import { FaRobot as RobotIcon, FaCrop as CropIcon } from "react-icons/fa6";
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
import Feature from "@/components/Feature";
import { Header } from "@/components/Header";
import { PainPoint } from "@/components/PainPoint";

export default function Home() {
  return (
    <main className="bg-main min-h-screen flex flex-col">
      <Header />
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
            <div className="text-xl lg:text-2xl font-bold font-avenir">
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

      <FadeInSection>
        <div className="w-full flex items-center justify-center p-12">
          <div className="flex flex-col items-center">
            <SlideInFromBottom>
              <h2 className="text-gray-100 text-center text-5xl md:text-7xl font-bold">
                We feel your <span className="text-secondary">pain</span>
              </h2>
            </SlideInFromBottom>
            <SlideInFromBottom>
              <div className="text-2xl font-bold md:text-3xl text-gray-100 text-center mt-5">
                Content Creation Can Be a Grind
              </div>
            </SlideInFromBottom>
          </div>
        </div>
      </FadeInSection>
      <div className="flex flex-col md:grid md:grid-cols-2">
        <PainPoint inverse icon={CalendarTimesIcon} title="Time Constraints">
          Maintaining a website, blog, or social media takes a lot of time due
          to tasks like research, writing, and editing. This can prevent you
          from focusing on other important things in your business or life.
        </PainPoint>
        <PainPoint fromRight icon={CropIcon} title="Content Variety and Volume">
          The digital landscape requires a lot of diverse content, which can be
          overwhelming to keep up with. Constantly producing fresh and relevant
          content for multiple platforms can leave you feeling stretched thin.
        </PainPoint>
        <PainPoint icon={BookmarkIcon} title="SEO Optimized?">
          Creating content is not enough; ensuring your target audience can find
          it is crucial. SEO optimization involves understanding ever-changing
          search engine algorithms and applying this knowledge to your content
          creation, which can be challenging.
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
          The internet removes geographical boundaries, making your audience
          global. However, the challenge is to create content that connects with
          diverse language speakers while preserving its original meaning during
          translation.
        </PainPoint>
        <PainPoint
          fromRight
          icon={MoneyOffIcon}
          title="Inadequate Pricing Models"
        >
          Numerous content creation tools demand monthly subscriptions,
          irrespective of your actual usage. This can deter smaller businesses
          or individuals who don&apos;t require the tool regularly.
        </PainPoint>
      </div>

      <div className="mt-8">
        <FadeInSection>
          <div className="w-full gap-4 flex flex-col items-center justify-center p-12">
            <SlideInFromBottom>
              <div className="text-5xl text-gray-100 text-center font-bold">
                Experience the Power of AI in Content Creation
              </div>
            </SlideInFromBottom>
            <SlideInFromBottom>
              <div className="text-center text-xl mt-4">
                From SEO optimized blog posts to engaging social media content,
                Experior takes your ideas and transforms them into captivating
                narratives.
              </div>
            </SlideInFromBottom>
            <div className="flex flex-col md:grid md:grid-cols-3 items-center space-y-12 md:space-y-0 md:gap-12 mt-8">
              <FadeInSection duration="2000ms">
                <Feature icon={PencilIcon} title="Blog Post">
                  Experior leverages the power of AI to craft SEO-optimized blog
                  posts, transforming your ideas into compelling narratives that
                  engage and captivate readers.
                </Feature>
              </FadeInSection>
              <FadeInSection duration="2000ms">
                <Feature icon={HashIcon} title="Social Media">
                  AI-driven Experior transforms social media content. Engage
                  LinkedIn, Facebook, Instagram, TikTok with tailored, engaging
                  posts. Elevate your online presence easily.
                </Feature>
              </FadeInSection>
              <FadeInSection duration="2000ms">
                <Feature icon={FillAudioIcon} title="Text to Audio">
                  Experior converts text to audio, enriching accessibility and
                  content variety. From blogs to social media, create immersive
                  audio experiences.
                </Feature>
              </FadeInSection>
              <FadeInSection duration="2000ms">
                <Feature icon={SwitchIcon} title="Paraphraser">
                  Experior&apos;s AI rephrases with precision, creativity, and
                  uniqueness. Enhance readability, engage your audience
                  effectively.
                </Feature>
              </FadeInSection>
              <FadeInSection duration="2000ms">
                <Feature icon={ChatIcon} title="Text Transcription">
                  Experior&apos;s advanced transcription converts audio to
                  precise, timestamped text. Unlock content potential for wider
                  audience access.
                </Feature>
              </FadeInSection>
              <FadeInSection duration="2000ms">
                <Feature icon={LanguageIcon} title="Multi-language">
                  Multilingual powerhouse, 14 languages. Break barriers,
                  captivate global audiences. Universal content creation.
                </Feature>
              </FadeInSection>
            </div>
          </div>
        </FadeInSection>
      </div>
    </main>
  );
}
