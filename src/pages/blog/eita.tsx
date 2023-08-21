import type { ReactElement } from "react";
import PostView from "@/components/Blog/PostView";

const Page = () => {
  return <div>hello world</div>;
};

Page.getLayout = function getLayout(page: ReactElement) {
  return <PostView>{page}</PostView>;
};

export default Page;
