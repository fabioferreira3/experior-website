import Image from "next/image";
import Link from "next/link";

export default function PostPreview({ title, description, image, link }: any) {
  return (
    <Link href={link} className="relative overflow-hidden rounded-lg">
      <Image
        alt=""
        className="rounded-lg"
        width={1024}
        height={50}
        src={image}
      />
      <div className="absolute w-full h-1/3 bg-black bottom-0 opacity-50" />
      <div className="absolute bottom-0 left-0 flex flex-col gap-2 p-4">
        <div className="font-bold text-2xl">{title}</div>
        <div className="font-thin">{description}</div>
      </div>
    </Link>
  );
}
