import Image from "next/image";

import FadeInSection from "./FadeInSection";
import Carousel from "./Carousel";

const images = [
  "/brands/algolia-logo.webp",
  "/brands/ineco-logo.webp",
  "/brands/iqvia-logo.webp",
  "/brands/nhs-logo.webp",
  "/brands/philips-logo.webp",
];

const TrustedBrands = () => {
  return (
    <div className="bg-gray-900 md:overflow-auto">
      <div className="text-center py-6 md:py-4 text-2xl font-bold text-gray-200 border-gray-800">
        Trusted By
      </div>
      <div className="flex items-center justify-center bg-gray-900 py-4">
        <div className="md:hidden flex flex-col">
          {images.map((i: any, idx: any) => {
            return (
              <FadeInSection key={idx}>
                <Image width={120} height={75} src={i} alt="logo" />
              </FadeInSection>
            );
          })}
        </div>
        <Carousel images={images} />
      </div>
    </div>
  );
};

export default TrustedBrands;
