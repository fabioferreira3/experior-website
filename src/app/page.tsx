"use client";
import { FaRobot as RobotIcon } from "react-icons/fa6";
import {
  FaHashtag as HashIcon,
  FaCalendarTimes as CalendarTimesIcon,
  FaPencilAlt as PencilIcon,
} from "react-icons/fa";
import { AiFillAudio as FillAudioIcon } from "react-icons/ai";
import { BsChatRightTextFill as ChatIcon } from "react-icons/bs";
import { TbSwitch2 as SwitchIcon } from "react-icons/tb";

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
      <div className="flex flex-col md:grid md:grid-cols-3">
        <PainPoint inverse icon={CalendarTimesIcon} title="Time Constraints">
          Managing a content-rich website, blog, or social media account can be
          incredibly time-consuming. Researching, writing, editing, and
          optimizing posts, not to mention creating audio content, takes up
          hours that could be spent on other crucial areas of your business or
          personal life.
        </PainPoint>
        <PainPoint
          shouldSlide={false}
          icon={CalendarTimesIcon}
          title="Content Variety and Volume"
        >
          Managing a content-rich website, blog, or social media account can be
          incredibly time-consuming. Researching, writing, editing, and
          optimizing posts, not to mention creating audio content, takes up
          hours that could be spent on other crucial areas of your business or
          personal life.
        </PainPoint>
        <PainPoint
          inverse
          fromRight
          icon={CalendarTimesIcon}
          title="SEO Optimized?"
        >
          Managing a content-rich website, blog, or social media account can be
          incredibly time-consuming. Researching, writing, editing, and
          optimizing posts, not to mention creating audio content, takes up
          hours that could be spent on other crucial areas of your business or
          personal life.
        </PainPoint>
        <PainPoint icon={CalendarTimesIcon} title="Social Media Compatibility">
          Managing a content-rich website, blog, or social media account can be
          incredibly time-consuming. Researching, writing, editing, and
          optimizing posts, not to mention creating audio content, takes up
          hours that could be spent on other crucial areas of your business or
          personal life.
        </PainPoint>
        <PainPoint
          inverse
          shouldSlide={false}
          icon={CalendarTimesIcon}
          title="Language Barriers"
        >
          Managing a content-rich website, blog, or social media account can be
          incredibly time-consuming. Researching, writing, editing, and
          optimizing posts, not to mention creating audio content, takes up
          hours that could be spent on other crucial areas of your business or
          personal life.
        </PainPoint>
        <PainPoint fromRight icon={CalendarTimesIcon} title="Pricing Model">
          Managing a content-rich website, blog, or social media account can be
          incredibly time-consuming. Researching, writing, editing, and
          optimizing posts, not to mention creating audio content, takes up
          hours that could be spent on other crucial areas of your business or
          personal life.
        </PainPoint>
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
    </main>
  );
}
