import type { ReactElement } from "react";
import PostView from "@/components/Blog/PostView";
import MainLayout from "@/components/MainLayout";

const Page = () => {
  return <div>eita peste</div>;
};

Page.getLayout = function getLayout(page: ReactElement) {
  return (
    <MainLayout>
      <PostView
        date="Aug 22, 2023"
        title="Title of the post here"
        metaDescription="Meta description of the post here"
        author="Fabio Ferreira"
        heroImg="https://thumbor.forbes.com/thumbor/fit-in/1290x/https://www.forbes.com/advisor/wp-content/uploads/2023/06/person-at-computer.jpeg.jpg"
      >
        {page}
      </PostView>
    </MainLayout>
  );
};

export default Page;
