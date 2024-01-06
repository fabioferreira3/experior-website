import Image from "next/image";

const Carousel = ({ images }: any) => {
  return (
    <div className="hidden md:block w-[200%] h-20 overflow-hidden relative">
      <div className="w-[200%] flex items-center h-20 justify-around absolute left-0 animate-carousel-slide gap-20">
        {images.map((i: any, idx: any) => {
          return (
            <div
              key={idx}
              className="flex justify-center items-start w-[20rem]"
            >
              <Image width={200} height={100} src={i} alt="logo" />
            </div>
          );
        })}
        {images.map((i: any, idx: any) => {
          return (
            <div
              key={idx}
              className="flex justify-center items-start w-[20rem]"
            >
              <Image width={200} height={100} src={i} alt="logo" />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Carousel;
