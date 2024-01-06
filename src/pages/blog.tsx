"use client";
import { ReactElement } from "react";
import Head from "next/head";
import { useRouter } from "next/router";
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
import { PainPoint } from "@/components/PainPoint";
import { Solution } from "@/components/Solution";
import MainLayout from "@/components/MainLayout";
import getURL from "@/utils/url";
import PostPreview from "@/components/Blog/PostPreview";

const Page = () => {
  const { pathname } = useRouter();
  const title = "Blog - Experior AI";
  const description =
    "Check out our latest articles about AI and the future of content creation";
  return (
    <>
      <Head>
        <title>Blog - Experior AI</title>
        <meta name="description" content={description} />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="keywords" content="AI, Content Generator, AI Assistant" />
        <meta property="og:title" content={title} key="title" />
        <meta property="og:description" content={description} />
        <meta property="og:type" content="article" />
        <meta property="og:site_name" content={title} />
        <meta property="og:image" content={getURL("/logo-color.png")} />
        <meta property="og:url" content={getURL(pathname)} />
        <meta property="twitter:card" content="summary" />
        <meta property="twitter:url" content={getURL(pathname)} />
        <meta property="twitter:title" content={title} />
        <meta property="twitter:description" content={description} />
        <meta property="twitter:image" content={getURL("/logo-color.png")} />
      </Head>
      <div className="md:max-w-6xl m-auto flex flex-col p-8">
        <h1 className="text-4xl font-bold">Blog</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 mt-8 gap-8">
          <PostPreview
            title="The Evolution of AI Voice Generators: Mirroring Humanity"
            image="/imgs/ai-voice-generator.jpg"
            link="/blog/the-evolution-of-ai-voice-generators"
          />
          <PostPreview
            title="AI Essay Writing: The Future of Flawless Composition"
            image="/imgs/essay.png"
            link="/blog/ai-essay-writing-the-future-of-flawless-composition"
          />
        </div>
      </div>
    </>
  );
};

Page.getLayout = function getLayout(page: ReactElement) {
  return <MainLayout>{page}</MainLayout>;
};

export default Page;
