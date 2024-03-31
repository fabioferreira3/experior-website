import Image from "next/image";
import Head from "next/head";
import { AiOutlineCalendar as CalendarIcon } from "react-icons/ai";
import {
  FaLinkedinIn as LinkedinIcon,
  FaFacebookF as FacebookIcon,
  FaTwitter as TwitterIcon,
  FaInstagram as InstagramIcon,
} from "react-icons/fa6";
import { useRouter } from "next/router";
import getURL from "../../utils/url";
import "../../assets/blog.css";

import Related from "./Related";
import Link from "next/link";

export default function PostView({
  title,
  metaDescription,
  date,
  heroImg,
  heroImgAlt,
  author,
  children,
  relatedPosts,
}: any) {
  const { pathname } = useRouter();

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content={metaDescription} />
        <meta property="og:title" content={title} key="title" />
        <meta property="og:description" content={metaDescription} />
        <meta property="og:type" content="article" />
        <meta property="og:site_name" content="Experior" />
        <meta property="og:image" content={getURL(heroImg)} />
        <meta property="og:url" content={getURL(pathname)} />
        <meta property="twitter:card" content="summary" />
        <meta property="twitter:url" content={getURL(pathname)} />
        <meta property="twitter:title" content={title} />
        <meta property="twitter:description" content={metaDescription} />
        <meta property="twitter:image" content={getURL(heroImg)} />
        <meta name="author" content={author}></meta>
      </Head>
      <div className="post-view text-justify md:text-left px-2 md:px-12 grid grid-cols-1 md:grid-cols-3 bg-[#191b51]">
        <div className="p-4 md:p-8 col-span-2">
          <div>
            <Image
              className="rounded-lg w-full h-64"
              style={{ objectFit: "cover" }}
              alt={heroImgAlt}
              src={heroImg}
              width={600}
              height={600}
            />
          </div>
          <div>
            <h1 className="text-4xl text-start font-bold mt-8 text-gray-100">
              {title}
            </h1>
            <div className="flex text-gray-100 justify-between md:justify-start md:items-center md:gap-8 py-6">
              <div className="flex items-center gap-4">
                <Image
                  alt=""
                  className="rounded-full"
                  width={60}
                  height={60}
                  src="https://1.gravatar.com/avatar/1c88fef126d379a6713b32ab26ec1e303494cf51ef4e485ab6bea62bfbb6f1fe?size=256"
                />
                By {author}
              </div>
              <div className="flex items-center gap-2">
                <CalendarIcon className="text-3xl" />
                {date}
              </div>
            </div>
          </div>
          <div className="mb-8">{children}</div>
          <div className="px-4 md:px-20 flex justify-center items-center text-xl font-bold">
            <div className="flex justify-center items-center gap-3 py-20 border-t-2 border-zinc-500 w-full">
              <div>Share article:</div>
              <Link
                title="Share on Linkedin"
                href={`https://www.linkedin.com/sharing/share-offsite/?url=${getURL(
                  pathname
                )}`}
                className="p-3 rounded-full bg-[#1A6AC4]"
                target="_blank"
              >
                <LinkedinIcon />
              </Link>
              <Link
                title="Share on Facebook"
                href={`https://www.facebook.com/sharer/sharer.php?u=${getURL(
                  pathname
                )}`}
                target="_blank"
                className="p-3 rounded-full bg-[#1977F2]"
              >
                <FacebookIcon />
              </Link>
              <Link
                title="Share on Twitter"
                href={`https://twitter.com/intent/tweet?text=${title}&url=${getURL(
                  pathname
                )}`}
                className="p-3 rounded-full bg-[#1AA1F1]"
                target="_blank"
              >
                <TwitterIcon />
              </Link>
            </div>
          </div>
          <div className="flex flex-col gap-4 items-center bg-[#12154f] rounded-lg p-8">
            <Image
              alt="Fabio Ferreira"
              className="rounded-full"
              width={90}
              height={90}
              src="https://1.gravatar.com/avatar/1c88fef126d379a6713b32ab26ec1e303494cf51ef4e485ab6bea62bfbb6f1fe?size=256"
            />
            <div className="font-bold text-xl">{author}</div>
            <div className="text-center">
              <p>
                Software architect for more than 20
                years and founder of Experior.
              </p>
              <p>Constantly building.</p>
            </div>
            <div className="flex items-center gap-3">
              <Link
                title="Linkedin"
                href="https://www.linkedin.com/in/fabioferr/"
                target="_blank"
              >
                <LinkedinIcon className="text-xl" />
              </Link>
              <Link
                title="Instagram"
                href="https://www.instagram.com/_fabioferreira_cj"
                target="_blank"
              >
                <InstagramIcon className="text-xl" />
              </Link>
            </div>
          </div>
        </div>
        <div className="p-8">
          <aside>
            <Related posts={relatedPosts} />
          </aside>
        </div>
      </div>
    </>
  );
}
