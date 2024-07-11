import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";

const Slider = ({ bannerData }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slideRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => clearInterval(interval);
  }, [currentSlide]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === bannerData.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? bannerData.length - 1 : prev - 1));
  };

  useEffect(() => {
    const handleSwipe = (e) => {
      const touchEndX = e.changedTouches[0].clientX;
      const touchStartX = slideRef.current.startX;
      if (touchEndX - touchStartX > 50) {
        prevSlide();
      } else if (touchStartX - touchEndX > 50) {
        nextSlide();
      }
    };

    const handleTouchStart = (e) => {
      slideRef.current.startX = e.touches[0].clientX;
    };

    const slider = slideRef.current;
    slider.addEventListener("touchstart", handleTouchStart);
    slider.addEventListener("touchend", handleSwipe);

    return () => {
      slider.removeEventListener("touchstart", handleTouchStart);
      slider.removeEventListener("touchend", handleSwipe);
    };
  }, []);

  return (
    <section className="max-md:max-w-full" ref={slideRef}>
      <div className="flex gap-5 flex-col mdx:flex-row max-md:gap-0">
        <div className="flex flex-col lg:w-6/12 max-md:ml-0 w-full">
          <div className="flex flex-col items-start mt-5 mdx:mt-32 max-md:max-w-full">
            <div className="flex justify-between items-center gap-3 mb-4">
              {bannerData.map((_, index) => (
                <div
                  key={index}
                  className={`overflow-hidden relative bg-rose-200 h-[3px] transition-all duration-200 ${index === currentSlide ? "w-[40px]" : "w-[20px]"}`}
                >
                  <div
                    className={`absolute -left-1/2 h-[3px] ${index === currentSlide ? "w-full" : "w-1/3"} bg-rose-400 ${
                      currentSlide === index ? "line-anima" : ""
                    }`}
                  />
                </div>
              ))}
            </div>
            <div className="flex flex-col self-stretch mt-5 max-md:max-w-full">
              <h1 className="lg:text-6xl md:text-4xl transition-all duration-300 mdx:text-2xl text-2xl font-bold text-black max-md:max-w-full leading-6 lg:leading-63">
                {bannerData[currentSlide].title}
              </h1>
              <h1 className="lg:text-6xl md:text-4xl mdx:text-2xl text-2xl font-bold text-rose-400 max-md:max-w-full leading-6 lg:leading-63">
                {bannerData[currentSlide].subtitle}
              </h1>
              <p className="mt-3 text-sm mdx:text-lg text-zinc-600 max-md:max-w-full">
                {bannerData[currentSlide].description}
              </p>
            </div>
            <a href={bannerData[currentSlide].navigateToUrl}>
              <button className="flex flex-col justify-center mt-5 max-w-full text-base font-bold text-center text-white whitespace-nowrap w-[236px]">
                <div className="justify-center items-center px-16 py-2 bg-red-400 hover:bg-red-600 transition-all duration-300 rounded-[100px]">
                  Подробнее
                </div>
              </button>
            </a>
          </div>
        </div>
        <div className="flex flex-col lg:w-6/12 max-md:ml-0 w-full">
          <Image
            src={bannerData[currentSlide].photoUrl}
            className="grow w-full rounded-none aspect-[1.01] max-md:mt-10 max-md:max-w-full"
            alt="Medical facility"
            priority
            width={1000}
            height={1000}
            quality={100}
          />
        </div>
      </div>
    </section>
  );
};

export default Slider;