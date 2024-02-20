import React, { useState, useEffect } from 'react';
import Image from "next/image";

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [fade, setFade] = useState(true);
  const testimonialsPerSlide = 4;

  useEffect(() => {
    const timer = setTimeout(() => {
      setFade(false);
      setTimeout(() => {
        setCurrentIndex((prevIndex) =>
          prevIndex + testimonialsPerSlide >= testimonials.length ? 0 : prevIndex + testimonialsPerSlide
        );
        setFade(true);
      }, 500);
    }, 4500);

    return () => clearTimeout(timer);
  }, [currentIndex]);

  const testimonials = [
    { pic:'/testimonials/roman.jpeg', quote: 'Experior saves a lot of time on creating content.', author: 'Roman' },
    { pic:'/testimonials/mathew.jpeg', quote: 'I see this as the go-to tool for all kinds of very useful content related AI tools.', author: 'Mathew' },
    { pic:'/testimonials/cherie.jpg', quote: 'It allows me to put my time elsewhere and make engaging posts to help grow my business following.', author: 'Cherie' },
    { pic:'/testimonials/nida.jpeg', quote: "I'll be using it more frequently to test with a new blog I'm creating.", author: 'Nida' },
    { pic:'/testimonials/zakiya.jpeg', quote: 'It offers a variety of helpful tools in one platform with a very clean UI that is easy to navigate. I would use it as well as recommend it to others.', author: 'Zakiya' },
    { pic:'/testimonials/amandalee.jpeg', quote: 'The two biggest things for me are the time saved, thus allowing me to create more content quicker, and also the fact that it feels like several apps in one.', author: 'Amanda' },
    { pic:'/testimonials/hreedi.jpeg', quote: 'I am very happy that there are multiple services provided all under one platform.', author: 'Hreedi' },
    { pic:'/testimonials/kayra.png', quote: 'The value provided by Experior is something that can be scaled between hobbyists and established businesses looking to ramp up their production with AI assistance.', author: 'Kayra' },
    { pic:'/testimonials/genevieve.jpeg', quote: 'It saves a lot of time thinking up ideas for interesting content.', author: 'Genevieve' },
    { pic:'/testimonials/karl.jpeg', quote: 'Experior makes my job of finding relavant assistance for work or leisure much more fun', author: 'Karl' },
    { pic:'/testimonials/christine.jpeg', quote: 'I absolutely love it!', author: 'Tereza' },
    { pic:'/testimonials/christine_t.jpeg', quote: 'The quality of blog content generated was impressive.”', author: 'Christine' }, 
];

  return (
    <div className="relative px-12">
      <div className="relative w-full flex gap-4 justify-center">
        {testimonials.slice(currentIndex, currentIndex + testimonialsPerSlide).map((testimonial, index) => (
          <div
            key={index}
            className={`flex-1 border border-gray-100 rounded-2xl md:flex-none md:w-1/4 p-4 transition-opacity duration-500 ${fade ? 'opacity-100' : 'opacity-0'}`}
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
