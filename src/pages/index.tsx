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
import Typewriter from "@/components/Typewriter";
import SlideInFromBottom from "@/components/SlideInFromBottom";
import { PainPoint } from "@/components/PainPoint";
import { Solution } from "@/components/Solution";
import MainLayout from "@/components/MainLayout";
import getURL from "@/utils/url";
import Link from "next/link";
import Testimonials from "@/components/Testimonials";

const testimonials = [
    { pic:'/testimonials/roman.jpeg', quote: 'Experior saves a lot of time on creating content.', author: 'Roman' },
    { pic:'/testimonials/mathew.jpeg', quote: 'I see this as the go-to tool for all kinds of very useful content related AI tools.', author: 'Mathew' },
    { pic:'/testimonials/cherie.jpg', quote: 'It allows me to put my time elsewhere and make engaging posts to help grow my business following.', author: 'Cherie' },
    { pic:'/testimonials/nida.jpeg', quote: "I'll be using it more frequently to test with a new blog I'm creating.", author: 'Nida' },
    { pic:'/testimonials/zakiya.jpeg', quote: 'It offers a variety of helpful tools in one platform with a very clean UI that is easy to navigate. I would use it as well as recommend it to others.', author: 'Zakiya' },
    { pic:'/testimonials/amandalee.jpeg', quote: 'The two biggest things for me are the time saved, thus allowing me to create more content quicker, and also the fact that it feels like several apps in one.', author: 'Amanda' },
    { pic:'/testimonials/hreedi.jpeg', quote: 'I am very happy that there are multiple services provided all under one platform.', author: 'Hreedi' },
    { pic:'/testimonials/kayra.png', quote: 'The value provided by Experior is something that can be scaled between hobbyists and established businesses looking to ramp up their production with AI assistance.', author: 'Kayra' },
    { pic:'/testimonials/genevieve.jpeg', quote: 'It saves a lot of time thinking up ideas for interesting content.', author: 'Genevieve' },
    { pic:'/testimonials/karl.jpeg', quote: 'Experior makes my job of finding relavant assistance for work or leisure much more fun', author: 'Karl' },
    { pic:'/testimonials/christine.jpeg', quote: 'I absolutely love it!', author: 'Tereza' },
    { pic:'/testimonials/christine_t.jpeg', quote: 'The quality of blog content generated was impressive.”', author: 'Christine' }, 
];

const complaints = [
    { pic:'/testimonials/amandalee.jpeg', quote: 'I ran a website/blog for nearly three years. While I found it fun to come up with ideas to feature, I found it a real slog to write several paragraphs of compelling writing, and have it be cohesive, not repetitive, etc.', author: 'Amanda' },
    { pic:'/testimonials/ashita.jpeg', quote: "One challenge is maintaining consistency. A consistent tone, style and message are pivotal in building a brand's image. But in the face of deadlines and diverse projects, this can often be overlooked.", author: 'Ashita' },
    { pic:'/testimonials/michael.jpeg', quote: "Keeping up with ever-changing SEO trends and algorithms is a never-ending learning process.", author: 'Michael' },
    { pic:'/testimonials/jenny.jpeg', quote: "Dealing with revisions and feedback can be tough, especially when you're attached to your original copy.", author: 'Jenny' },
    { pic:'/testimonials/bernard.jpeg', quote: "Staying creative and fresh with ideas is a constant challenge, especially when working on similar types of content repeatedly.", author: 'Bernard' },
    { pic:'/testimonials/john.jpeg', quote: "The pressure to produce high-converting copy under tight deadlines can be stressful.", author: 'John' },
    { pic:'/testimonials/victor.jpeg', quote: "Juggling multiple projects and deadlines can be overwhelming at times, especially when each client has unique needs and expectations.", author: 'Victor' },
    { pic:'/testimonials/ana.jpeg', quote: "Adapting to different industries and understanding their unique jargon and audience can be a steep learning curve for each new project.", author: 'Ana' },
    { pic:'/testimonials/julia.jpeg', quote: "Finding the right balance between creativity and clarity in messaging can be tricky, especially when dealing with complex products or services.", author: 'Julia' },
];

const Page = () => {
  const { pathname } = useRouter();
  const title = "Experior AI";
  const description =
    "Your one-stop AI tool for SEO-optimized content creation and text transformation.";
  return (
    <>
      <Head>
        <title>Experior AI</title>
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
        <h1 className="text-6xl font-bold text-start md:text-center text-gray-100">
          Enhancing Your Digital
        </h1>
        <div className="text-5xl md:text-5xl font-bold h-12 my-6 md:mt-4 md:text-center text-secondary">
          <Typewriter
            words={["Presence", "Impact", "Reach", "Engagement", "Voice"]}
          />
        </div>
        <div className="text-5xl font-bold text-start md:text-center md:mt-4 text-gray-100">
          With AI
        </div>
        <div>
          <div className="text-center text-xl text-gray-100 my-12">
            Your one-stop AI tool for SEO-optimized content creation and text
            transformation.
          </div>
        </div>
        <div className="w-full text-gray-100 md:m-auto md:w-1/3 flex justify-center ">
          <Link
              href="https://go.experior.ai/register"
              className="w-full bg-secondary rounded-full md:rounded-2xl flex items-center justify-center gap-6 py-3 px-5 md:py-5 text-2xl font-bold font-avenir"
            ><RobotIcon className="text-4xl md:text-3xl" />
            
              Start here
            
          </Link>
        </div>
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
              <SlideInFromBottom>
              <div className="mt-12 border border-gray-800">
                { <Testimonials duration={6000} testimonials={complaints}/>}
                </div>
                </SlideInFromBottom>
            </div>
          </div>
        </FadeInSection>
      </div>
      <div className="md:max-w-6xl m-auto flex flex-col gap-2 md:gap-0 md:grid md:grid-cols-2 md:rounded-xl md:overflow-auto">
        <PainPoint inverse icon={CalendarTimesIcon} title="Time Constraints">
          Maintaining a website, blog, or social media takes a lot of time due
          to tasks like research, writing, and editing.
        </PainPoint>
        <PainPoint fromRight icon={CropIcon} title="Content Variety and Volume">
          The digital landscape requires a lot of diverse content, which can be
          overwhelming to keep up with.
        </PainPoint>
        <PainPoint icon={BookmarkIcon} title="SEO Optimized?">
          Making content isn&apos;t enough; you need to make sure the people you
          want to see it can find it. This involves getting to grips with how
          search engines work, which can be tough.
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
          content that connects with diverse language speakers while preserving
          its original meaning.
        </PainPoint>
        <PainPoint
          fromRight
          icon={MoneyOffIcon}
          title="Inadequate Pricing Models"
        >
          Many content creation tools demand monthly subscriptions, irrespective
          of your actual usage. This can deter smaller businesses or individuals
          who don&apos;t require the tool regularly.
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
              <div className="text-center text-gray-100 text-xl md:mt-4 md:p-0 p-4">
                From SEO optimized blog posts to engaging social media content,
                Experior takes your ideas and transforms them into captivating
                narratives.
              </div>
            </SlideInFromBottom>
            <div className="flex flex-col md:grid md:grid-cols-2 items-center md:space-y-0 md:gap-12 mt-8">
              <Solution icon={PencilIcon} title="Blog Post" order={1}>
                Experior leverages the power of AI to craft SEO-optimized blog
                posts, transforming your ideas into compelling narratives that
                engage and captivate readers.
              </Solution>
              <Solution icon={HashIcon} title="Social Media" order={2}>
                AI-driven Experior transforms social media content. Engage
                LinkedIn, Facebook and Instagram with tailored, engaging posts.
                Elevate your online presence easily.
              </Solution>
              <Solution icon={FillAudioIcon} title="Text to Audio" order={3}>
                Experior converts text to audio, enriching accessibility and
                content variety. From blogs to social media, create immersive
                audio experiences.
              </Solution>
              <Solution icon={SwitchIcon} title="Paraphraser" inverse order={4}>
                Experior&apos;s AI rephrases with precision, creativity, and
                uniqueness. Enhance readability, engage your audience
                effectively.
              </Solution>
              <Solution
                icon={ChatIcon}
                title="Audio Transcription"
                inverse
                order={5}
              >
                Experior&apos;s advanced transcription converts audio to
                precise, timestamped text. Unlock content potential for wider
                audience access.
              </Solution>
              <Solution icon={LanguageIcon} title="Multi-language" order={6}>
                Multilingual powerhouse, 14 languages. Break barriers, captivate
                global audiences. Universal content creation.
              </Solution>
            </div>
          </div>
        </FadeInSection>
      </div>
      <div className="md:max-w-6xl m-auto mt-8 p-12 md:p-0">
            <FadeInSection>
                <div className="text-5xl text-gray-100 text-center font-bold">Don&apos;t believe us?</div>
                <div className="mt-12 border border-gray-800">
                    { <Testimonials duration={5000} testimonials={testimonials}/>}
                </div>
            </FadeInSection>
    </div>
      <div className="md:max-w-6xl m-auto">
        <div className="md:p-12 flex text-gray-100 justify-center">
          <button className="w-1/2 bg-secondary rounded-full md:rounded-2xl flex items-center md:justify-center gap-6 py-3 px-5 md:py-5">
            <RobotIcon className="text-4xl md:text-3xl" />
            <Link
              href="https://go.experior.ai/register"
              className="text-xl lg:text-2xl font-bold font-avenir"
            >
              <Typewriter speed={70} words={["Start", "Try", "Experiment"]} />{" "}
              here
            </Link>
          </button>
        </div>
      </div>
    </>
  );
};

Page.getLayout = function getLayout(page: ReactElement) {
  return <MainLayout>{page}</MainLayout>;
};

export default Page;
