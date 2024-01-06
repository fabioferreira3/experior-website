import MainLayout from "../MainLayout";
import PostView from "./PostView";

export default function BlogLayout({ post, relatedPosts, children }: any) {
  return (
    <MainLayout>
      <PostView
        date={post.date}
        title={post.title}
        metaDescription={post.description}
        author="Fabio Ferreira"
        heroImg={`/imgs/${post.heroImg}`}
        relatedPosts={relatedPosts}
      >
        {children}
      </PostView>
    </MainLayout>
  );
}
