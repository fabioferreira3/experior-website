import React, { useState, useEffect } from 'react';
import Image from "next/image";

const Testimonials = ({testimonials, duration}: any) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [fade, setFade] = useState(true);
  const [testimonialsPerSlide, setTestimonialsPerSlide] = useState(3);

  useEffect(() => {
    const updateTestimonialsPerSlide = () => {
      if (window.innerWidth < 640) { // Tailwind's default breakpoint for 'sm'
        setTestimonialsPerSlide(1);
      } else {
        setTestimonialsPerSlide(3);
      }
    };

    updateTestimonialsPerSlide();

    window.addEventListener('resize', updateTestimonialsPerSlide);

    return () => window.removeEventListener('resize', updateTestimonialsPerSlide);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setFade(false);
      setTimeout(() => {
        setCurrentIndex((prevIndex) =>
          prevIndex + testimonialsPerSlide >= testimonials.length ? 0 : prevIndex + testimonialsPerSlide
        );
        setFade(true);
      }, 500);
    }, duration - 500);

    return () => clearTimeout(timer);
  }, [currentIndex, testimonialsPerSlide, duration]);

  return (
    <div className="relative md:px-12">
      <div className="relative w-full flex gap-4 justify-center p-4">
        {testimonials.slice(currentIndex, currentIndex + testimonialsPerSlide).map((testimonial: any, index: any) => (
          <div
            key={index}
            className={`flex-1 border border-gray-100 rounded-2xl md:flex-none w-full md:w-1/3 p-4 transition-opacity duration-500 ${fade ? 'opacity-100' : 'opacity-0'}`}
          >
            <div className="flex flex-col text-center h-full justify-center gap-4">
              <p className="text-lg italic text-gray-100">{`"${testimonial.quote}"`}</p>
              <p className="flex items-center justify-center gap-4 text-sm mt-2 text-gray-100">
                <Image style={{objectFit: "cover"}} className="rounded-full h-12 w-12" width={50} height={50} src={testimonial.pic} alt="logo" />
                {testimonial.author}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
