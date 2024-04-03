import MainLayout from "../MainLayout";
import PostView from "./PostView";

export default function BlogLayout({ post, relatedPosts, children }: any) {
  return (
    <MainLayout>
        <div className="bg-[#191b51]">
            <div className="flex items-center justify-between md:max-w-6xl m-auto">
                <PostView
                date={post.date}
                title={post.title}
                metaDescription={post.description}
                author="Fabio Ferreira"
                heroImg={`/imgs/${post.heroImg}`}
                heroImgAlt={post.heroImgAlt}
                relatedPosts={relatedPosts}
            >
                {children}
            </PostView>
            </div>
        </div>
    </MainLayout>
  );
}
