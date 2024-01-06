import Image from "next/image";
import Link from "next/link";

import { BlogPostType } from "@/utils/blog-posts";

export default function Related({ posts }: { posts: BlogPostType[] }) {
  return (
    <>
      <div className="text-2xl font-bold border-b-4 border-secondary">
        Related articles
      </div>
      <div className="flex flex-col gap-8 mt-8">
        {posts.map((post) => {
          return (
            <Link
              title={post.title}
              href={`/blog/${post.slug}`}
              key={post.id}
              className="flex gap-4 items-center"
            >
              <div className="w-40 h-24 overflow-hidden relative">
                <Image
                  alt={post.title}
                  className="rounded-lg"
                  fill={true}
                  objectFit="cover"
                  src={`/imgs/${post.heroImg}`}
                />
              </div>
              <div className="w-2/3 flex flex-col">
                <div className="text-lg font-bold">{post.title}</div>
                <div className="font-thin">{post.date}</div>
              </div>
            </Link>
          );
        })}
      </div>
    </>
  );
}
