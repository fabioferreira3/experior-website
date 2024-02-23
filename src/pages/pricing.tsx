"use client";
import { ReactElement } from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import { FaArrowRight } from "react-icons/fa";
import { FaCheck } from "react-icons/fa";

import MainLayout from "@/components/MainLayout";
import getURL from "@/utils/url";
import Link from "next/link";

const tiers = [
    {
        name: 'Starter',
        price: 14,
        off: 6,
        recommended: false,
        features: [
            '150 units',
            'Up to 2 users',
            'Access to all tools',
            '~70.000 words OR',
            '~115 AI images OR',
            '~25 hours of audio transcription OR',
            '~10.500 words of text to audio',
            'Email support'
        ]
    },
    {
        name: 'Pro',
        price: 45,
        off: 10,
        recommended: true,
        features: [
            "500 units",
            "Up to 10 users",
            "Access to all tools",
            "~240.000 words OR",
            "~390 AI images OR",
            "~85 hours of audio transcription OR",
            "~35.500 words of text to audio",
            "Email support"
        ]
    },
    {
        name: 'Enterprise',
        price: 89,
        off: 15,
        recommended: false,
        features: [
            "1000 units",
            "Up to 30 users",
            "Access to all tools",
            "~480.000 words OR",
            "~780 AI images OR",
            "~170 hours of audio transcription OR",
            "~71.000 words of text to audio",
            "24/7 support"
        ]
    }
];

const Page = () => {
  const { pathname } = useRouter();
  const title = "Pricing - Experior AI";
  const description =
    "Check out our latest articles about AI and the future of content creation";
  return (
    <>
      <Head>
        <title>Pricing - Experior AI</title>
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
        <h1 className="text-center text-5xl md:text-6xl font-bold px-2">AI tools <span className="text-secondary">simplified</span></h1>
        <h2 className="text-3xl text-center mt-3">Transform Your Content with Our Flexible Options</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 mt-8 gap-8">
          {tiers.map((tier) => {
            return (
                <div key={tier.name} className={`${tier.recommended == true ? 'bg-secondary rounded-xl' : ''} p-4`}>
                    <div className="relative p-4 border border-gray-200 bg-white rounded-xl overflow-hidden">
                    <div className="absolute top-0 right-0 text-white bg-secondary p-3 rounded-full -mr-10 -mt-10 w-32 h-32">
                        <div className="flex flex-col px-4 mt-10 font-bold">
                            <div className="text-2xl">{tier.off}%</div>
                            <div>OFF</div>
                        </div>
                    </div>
                    <div className="flex flex-col gap-2 p-2 text-main rounded-xl">
                        <div className="text-3xl font-bold text-secondary text-start">{tier.name}</div>
                        <div className="text-5xl font-bold">${tier.price}</div>
                        <div className="text-sm">billed monthly</div>
                        <div className="flex flex-col gap-2 text-sm">
                            {tier.features.map((feature) => {
                                return <div key={feature} className="flex items-center gap-2">
                                    <FaCheck className="text-secondary"/>
                                    <div>{feature}</div>
                                </div>;
                            })}
                        </div>
                        <Link href="https://go.experior.ai/register" className="text-white cursor-pointer flex items-center justify-between gap-4 bg-secondary rounded-full pl-3 pr-1 py-1 mt-4 text-lg">
                            <div className="font-bold">Get {tier.name}</div>
                            <div className="bg-white rounded-full p-2">
                                <FaArrowRight className="text-secondary"/>
                            </div>
                        </Link>
                    </div>
                </div></div>)
            })}
        </div>
      </div>
    </>
  );
};

Page.getLayout = function getLayout(page: ReactElement) {
  return <MainLayout>{page}</MainLayout>;
};

export default Page;
