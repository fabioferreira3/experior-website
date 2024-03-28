import { StringLiteral } from "typescript";

export interface BlogPostType {
  id: number;
  title: string;
  short_name: string;
  description: string;
  slug: string;
  heroImg: string;
  heroImgAlt: string;
  date: string;
}

export const blogPosts = [
  {
    id: 1,
    title: "The Evolution of AI Voice Generators: Mirroring Humanity",
    short_name: "ai_voice_generator",
    description:
      "Discover the evolution of AI voice generators - from robotic to human-like quality. Experience Experior's neural voice solution.",
    slug: "the-evolution-of-ai-voice-generators",
    heroImg: "ai-voice-generator.jpg",
    heroImgAlt: "Voice being generated with the use of AI",
    date: "Aug 22, 2023",
  },
  {
    id: 2,
    title: "AI Essay Writing: The Future of Flawless Composition",
    short_name: "ai_essay_writing",
    description:
      "Discover what is an essay and explore the potential of AI essay writing: merging human creativity with advanced technology for unparalleled compositions",
    slug: "ai-essay-writing-the-future-of-flawless-composition",
    heroImg: "essay.png",
    heroImgAlt: "Human hands writing an essay on a paper",
    date: "Aug 25, 2023",
  },
  {
    id: 3,
    title: "Using AI to Stand Out in Social Media Post Feeds",
    short_name: "using_ai_social_media_posts",
    description:
      "Discover what is an essay and explore the potential of AI essay writing: merging human creativity with advanced technology for unparalleled compositions",
    slug: "using-ai-to-stand-out-in-social-media-post-feeds",
    heroImg: "social-media-posts-generation.png",
    heroImgAlt: "Hands controlled by AI generation social media posts",
    date: "Mar 28, 2024",
  },
] as BlogPostType[];

export const getBlogPost = (shortName: string) => {
  return blogPosts.find((post) => post.short_name === shortName);
};
