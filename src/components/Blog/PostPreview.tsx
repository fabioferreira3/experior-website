import Image from "next/image";
import Link from "next/link";

export default function PostPreview({ title, image, link }: any) {
  return (
    <Link
      href={link}
      className="relative overflow-hidden rounded-lg h-64 w-full"
    >
      <Image
        alt=""
        fill={true}
        objectFit="cover"
        className="rounded-lg"
        src={image}
      />
      <div className="absolute w-full h-1/3 bg-gradient-to-t from-black to-transparent bottom-0" />
      <div className="absolute bottom-0 left-0 flex flex-col gap-2 p-4">
        <div className="font-bold text-2xl">{title}</div>
      </div>
    </Link>
  );
}
