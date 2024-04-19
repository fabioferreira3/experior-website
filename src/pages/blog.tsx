"use client";
import { ReactElement } from "react";
import Head from "next/head";
import { useRouter } from "next/router";

import MainLayout from "@/components/MainLayout";
import getURL from "@/utils/url";
import PostPreview from "@/components/Blog/PostPreview";

const Page = () => {
  const { pathname } = useRouter();
  const title = "Blog - Experior";
  const description =
    "Check out our latest articles about AI and the future of content creation";
  return (
    <>
      <Head>
        <title>Blog - Experior</title>
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
        <h1 className="text-main text-4xl font-bold">Blog</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 mt-8 gap-8">
          <PostPreview
            title="7 Tips to Structure Your Content Creation Process"
            imgAlt="A writer following steps on a huge staircase to reach the top of a golden mountain"
            image="/imgs/writer-stairs.jpeg"
            link="/blog/7-tips-for-structuring-your-content-creation-process"
          />
          <PostPreview
            title="How AI Can Inspire Visual Content Ideas for Your Blogs"
            imgAlt="A chocolate dragon fighting an army of angry lollipops"
            image="/imgs/chocolate-dragon.jpeg"
            link="/blog/how-ai-can-inspire-visual-content-ideas-for-your-blogs"
          />
          <PostPreview
            title="Why should your content strategy include AI-generated blogs?"
            imgAlt="People and robots gather around a table to discuss AI-generated content strategies.People and robots gathering around a table to discuss AI generated content strategies"
            image="/imgs/ai-gathering.png"
            link="/blog/why-should-your-content-strategy-include-ai-generated-blogs"
          />
          <PostPreview
            title="Using AI to Stand Out in Social Media Post Feeds"
            imgAlt="Hands controlled by AI generation social media posts"
            image="/imgs/social-media-posts-generation.png"
            link="/blog/using-ai-to-stand-out-in-social-media-post-feeds"
          />
          <PostPreview
            title="The Evolution of AI Voice Generators"
            imgAlt="Voice being generated with the use of AI"
            image="/imgs/ai-voice-generator.jpg"
            link="/blog/the-evolution-of-ai-voice-generators"
          />
          <PostPreview
            title="AI Essay Writing: The Future of Flawless Composition"
            imgAlt="Human hands writing an essay on a paper"
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
