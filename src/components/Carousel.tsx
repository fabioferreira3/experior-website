"use client";

import Image from "next/image";

const Carousel = ({ title, images }: any) => {
  return (
    <div className="bg-gray-900 border-t border-b border-gray-800 pb-4">
      <div className="text-center pt-4 text-lg font-bold text-gray-200 mb-2">
        {title}
      </div>
      <div className="flex items-center justify-center bg-gray-900">
        <div className="w-full md:w-[200%] h-20 overflow-hidden relative">
          <div className="w-full md:w-[200%] flex items-center h-20 justify-around absolute left-0 animate gap-20 animate">
            {images.map((i: any, idx: any) => {
              return (
                <div
                  key={idx}
                  className="flex justify-center items-start w-full md:w-[20rem]"
                >
                  <Image width={200} height={100} src={i} alt="logo" />
                </div>
              );
            })}
            {images.map((i: any, idx: any) => {
              return (
                <div
                  key={idx}
                  className="flex justify-center items-start w-full md:w-[20rem]"
                >
                  <Image width={200} height={100} src={i} alt="logo" />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
