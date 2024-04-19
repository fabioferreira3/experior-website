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
    title: "The Evolution of AI Voice Generators",
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
      "Learn how AI can be used to create engaging social media posts, helping you stand out amidst crowded feeds.",
    slug: "using-ai-to-stand-out-in-social-media-post-feeds",
    heroImg: "social-media-posts-generation.png",
    heroImgAlt: "Hands controlled by AI generation social media posts",
    date: "Mar 28, 2024",
  },
  {
    id: 4,
    title: "Why should your content strategy include AI-generated blogs?",
    short_name: "why_should_use_ai_generated_blogs",
    description:
      "Explore the pros and cons of integrating AI into your blogging. Learn how AI-generated blogs are produced and how to incorporate them into your writing process.",
    slug: "why-should-your-content-strategy-include-ai-generated-blogs",
    heroImg: "ai-gathering.png",
    heroImgAlt: "People and robots gather around a table to discuss AI-generated content strategies.People and robots gathering around a table to discuss AI generated content strategies",
    date: "Apr 04, 2024",
  },
  {
    id: 5,
    title: "How AI Can Inspire Visual Content Ideas for Your Blogs?",
    short_name: "how_ai_can_inspire",
    description:
      "Why should you consider using AI generated images on the visual content of your blog? Learn how AI can inspire visual content ideas for your blogs.",
    slug: "how-ai-can-inspire-visual-content-ideas-for-your-blogs",
    heroImg: "chocolate-dragon.png",
    heroImgAlt: "A chocolate dragon fighting a massive army of angry lollipops",
    date: "Apr 10, 2024",
  },
  {
    id: 6,
    title: "7 Tips to Structure Your Content Creation Process",
    short_name: "7_tips_for_structuring",
    description:
      "Explore tips to organize your content creation process and how to plan content workflow to ensure smooth progress from idea to publication",
    slug: "7-tips-for-structuring-your-content-creation-process",
    heroImg: "writer-stairs.jpeg",
    heroImgAlt: "A writer following steps on a huge staircase to reach the top of a golden mountain",
    date: "Apr 19, 2024",
  },
] as BlogPostType[];

export const listRecentPosts = (exception: string | null = null) => {
  return blogPosts.filter((post) => post.short_name !== exception)
  .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
};

export const getBlogPost = (shortName: string) => {
  return blogPosts.find((post) => post.short_name === shortName);
};
