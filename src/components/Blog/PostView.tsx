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

import Related from "./Related";

export default function PostView({
  title,
  metaDescription,
  date,
  heroImg,
  author,
  children,
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
        <meta property="og:site_name" content="Experior AI" />
        <meta property="og:image" content={heroImg} />
        <meta property="og:url" content={getURL(pathname)} />
        <meta property="twitter:card" content="summary" />
        <meta property="twitter:url" content={getURL(pathname)} />
        <meta property="twitter:title" content={title} />
        <meta property="twitter:description" content={metaDescription} />
        <meta property="twitter:image" content={heroImg} />
        <meta name="author" content={author}></meta>
      </Head>
      <div className="px-12 grid grid-cols-3 bg-[#191b51]">
        <div className="p-8 col-span-2">
          <div>
            <Image
              className="rounded-lg"
              alt=""
              width={1024}
              height={1}
              src={heroImg}
            />
          </div>
          <div>
            <div className="flex items-center gap-8 py-8">
              <div className="flex items-center gap-4">
                <Image
                  alt=""
                  className="rounded-full"
                  width={50}
                  height={50}
                  src="https://media.licdn.com/dms/image/D4D03AQGq8FKWQjQm3g/profile-displayphoto-shrink_400_400/0/1673667166925?e=1698278400&v=beta&t=wAsp7Sd_wEYl5CC4XviQHuOnUlWcJnnRzzSSIvaI35s"
                />
                By {author}
              </div>
              <div className="flex items-center gap-2">
                <CalendarIcon className="text-3xl" />
                {date}
              </div>
            </div>
            <h1 className="text-4xl font-bold">{title}</h1>
          </div>
          <div className="py-8">{children}</div>
          <div className="px-20 flex justify-center items-center text-xl font-bold">
            <div className="flex justify-center items-center gap-3 py-20 border-t-2 border-zinc-500 w-full">
              <div>Share article:</div>
              <a
                href={`https://www.linkedin.com/sharing/share-offsite/?url=${getURL(
                  pathname
                )}`}
                className="p-3 rounded-full bg-[#1A6AC4]"
                target="_blank"
              >
                <LinkedinIcon />
              </a>
              <a
                href={`https://www.facebook.com/sharer/sharer.php?u=${getURL(
                  pathname
                )}`}
                target="_blank"
                className="p-3 rounded-full bg-[#1977F2]"
              >
                <FacebookIcon />
              </a>
              <a
                href={`https://twitter.com/intent/tweet?text=${title}&url=${getURL(
                  pathname
                )}`}
                className="p-3 rounded-full bg-[#1AA1F1]"
                target="_blank"
              >
                <TwitterIcon />
              </a>
            </div>
          </div>
          <div className="flex flex-col gap-4 items-center bg-[#12154f] rounded-lg p-8">
            <Image
              alt=""
              className="rounded-full"
              width={90}
              height={90}
              src="https://media.licdn.com/dms/image/D4D03AQGq8FKWQjQm3g/profile-displayphoto-shrink_400_400/0/1673667166925?e=1698278400&v=beta&t=wAsp7Sd_wEYl5CC4XviQHuOnUlWcJnnRzzSSIvaI35s"
            />
            <div className="font-bold text-xl">{author}</div>
            <div className="text-center">
              <p>
                Founder of Experior AI and a software architect for more than 20
                years.
              </p>
              <p>Constantly building.</p>
            </div>
            <div className="flex items-center gap-3">
              <a href="https://www.linkedin.com/in/fabioferr/" target="_blank">
                <LinkedinIcon className="text-xl" />
              </a>
              <a
                href="https://www.instagram.com/_fabioferreira_cj"
                target="_blank"
              >
                <InstagramIcon className="text-xl" />
              </a>
            </div>
          </div>
        </div>
        <div className="p-8">
          <Related />
        </div>
      </div>
    </>
  );
}
