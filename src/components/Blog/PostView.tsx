import Image from "next/image";
import Head from "next/head";
import { AiOutlineCalendar as CalendarIcon } from "react-icons/ai";
import {
  FaLinkedinIn as LinkedinIcon,
  FaFacebookF as FacebookIcon,
  FaTwitter as TwitterIcon,
  FaInstagram as InstagramIcon,
} from "react-icons/fa6";

import Related from "./Related";

export default function PostView({
  title,
  metaDescription,
  date,
  heroImg,
  author,
  children,
}: any) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={metaDescription} />
        <meta property="og:title" content={title} key="title" />
        <meta property="og:description" content={metaDescription} />
        <meta property="og:image" content={heroImg} />
        <meta name="author" content={author}></meta>
      </Head>
      <div className="px-12 grid grid-cols-3 bg-[#191b51]">
        <div className="p-8 col-span-2">
          <div>
            <Image
              className="rounded-lg"
              alt=""
              width={1024}
              height={200}
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
          <div className="px-8 flex justify-center items-center text-xl font-bold">
            <div className="flex justify-center items-center gap-3 py-24 border-t border-zinc-500 w-full">
              <div>Share article:</div>
              <div className="p-3 rounded-full bg-[#1A6AC4]">
                <LinkedinIcon />
              </div>
              <div className="p-3 rounded-full bg-[#1977F2]">
                <FacebookIcon />
              </div>
              <div className="p-3 rounded-full bg-[#1AA1F1]">
                <TwitterIcon />
              </div>
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
            <div>dsfds</div>
            <div className="flex items-center gap-3">
              <LinkedinIcon className="text-xl" />
              <InstagramIcon className="text-xl" />
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
