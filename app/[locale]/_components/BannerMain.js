"use client";
import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { client } from "@/sanity/lib/client";
import imageUrlBuilder from "@sanity/image-url";
import { motion, AnimatePresence } from "framer-motion";

// Создание builder для URL изображений
const builder = imageUrlBuilder(client);

function urlFor(source) {
  return builder.image(source);
}

const Slider = ({ params }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [banners, setBanners] = useState([]);
  const { locale } = params;

  useEffect(() => {
    const fetchBanners = async () => {
      try {
        const banners = await client.fetch(`*[_type == 'banner' && active == true] {
          title,
          subtitle,
          description,
          photo
        }`);
        setBanners(banners);
      } catch (error) {
        console.error("Ошибка при загрузке баннеров:", error);
      }
    };
    fetchBanners();
  }, []);

  const slideRef = useRef(null);

  useEffect(() => {
    if (banners.length > 1) {
      const interval = setInterval(() => {
        nextSlide();
      }, 5000);
      return () => clearInterval(interval);
    }
  }, [currentSlide, banners]);

  const nextSlide = () => {
    if (banners.length > 1) {
      setCurrentSlide((prev) => (prev === banners.length - 1 ? 0 : prev + 1));
    }
  };

  const prevSlide = () => {
    if (banners.length > 1) {
      setCurrentSlide((prev) => (prev === 0 ? banners.length - 1 : prev - 1));
    }
  };

  useEffect(() => {
    const handleSwipe = (e) => {
      const touchEndX = e.changedTouches[0].clientX;
      const touchStartX = slideRef.current?.startX;
      if (touchEndX - touchStartX > 50) {
        prevSlide();
      } else if (touchStartX - touchEndX > 50) {
        nextSlide();
      }
    };

    const handleTouchStart = (e) => {
      if (slideRef.current) {
        slideRef.current.startX = e.touches[0].clientX;
      }
    };

    const slider = slideRef.current;

    if (slider) {
      slider.addEventListener("touchstart", handleTouchStart);
      slider.addEventListener("touchend", handleSwipe);
    }

    return () => {
      if (slider) {
        slider.removeEventListener("touchstart", handleTouchStart);
        slider.removeEventListener("touchend", handleSwipe);
      }
    };
  }, [banners]);

  if (!banners.length) {
    return <p>Нет доступных баннеров</p>;
  }

  // Анимация для слайдов
  const slideAnimation = {
    initial: { opacity: 0, x: 100 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -100 },
    transition: { duration: 0.5 },
  };

  return (
    <section className="max-md:max-w-full" ref={slideRef}>
      <div className="flex gap-5 flex-col mdx:flex-row max-md:gap-0">
        <div className="flex flex-col lg:w-6/12 max-md:ml-0 w-full">
          <div className="flex flex-col items-start mt-5 mdx:mt-32 max-md:max-w-full">
            {banners.length > 1 && (
              <div className="flex justify-between items-center gap-3 mb-4">
                {banners.map((_, index) => (
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
            )}

            {/* Если баннеров больше 1, используем анимацию, иначе статично показываем */}
            {banners.length > 1 ? (
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentSlide}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  transition="transition"
                  variants={slideAnimation}
                  className="flex flex-col self-stretch mt-5 max-md:max-w-full"
                >
                  <h1 className="lg:text-6xl md:text-4xl transition-all duration-300 mdx:text-2xl text-2xl font-bold text-black max-md:max-w-full leading-6 lg:leading-63">
                    {banners[currentSlide].title[locale]}
                  </h1>
                  <h1 className="lg:text-6xl md:text-4xl mdx:text-2xl text-2xl font-bold text-rose-400 max-md:max-w-full leading-6 lg:leading-63">
                    {banners[currentSlide].subtitle[locale]}
                  </h1>
                  <p className="mt-3 text-sm mdx:text-lg text-zinc-600 max-md:max-w-full">
                    {banners[currentSlide].description[locale]}
                  </p>
                </motion.div>
              </AnimatePresence>
            ) : (
              <div className="flex flex-col self-stretch mt-5 max-md:max-w-full">
                <h1 className="lg:text-6xl md:text-4xl transition-all duration-300 mdx:text-2xl text-2xl font-bold text-black max-md:max-w-full leading-6 lg:leading-63">
                  {banners[0].title[locale]}
                </h1>
                <h1 className="lg:text-6xl md:text-4xl mdx:text-2xl text-2xl font-bold text-rose-400 max-md:max-w-full leading-6 lg:leading-63">
                  {banners[0].subtitle[locale]}
                </h1>
                <p className="mt-3 text-sm mdx:text-lg text-zinc-600 max-md:max-w-full">
                  {banners[0].description[locale]}
                </p>
              </div>
            )}

            <a href={banners[currentSlide].navigateToUrl}>
              <button className="flex flex-col justify-center mt-5 max-w-full text-base font-bold text-center text-white whitespace-nowrap w-[236px]">
                <div className="justify-center items-center px-16 py-2 bg-red-400 hover:bg-red-600 transition-all duration-300 rounded-[100px]">
                  Подробнее
                </div>
              </button>
            </a>
          </div>
        </div>

        <div className="flex flex-col lg:w-6/12 max-md:ml-0 w-full">
          {/* Если баннеров больше 1, используем анимацию для изображений */}
          {banners.length > 1 ? (
            <AnimatePresence mode="wait">
              <motion.div
                key={currentSlide}
                initial="initial"
                animate="animate"
                exit="exit"
                transition="transition"
                variants={slideAnimation}
              >
                <Image
                  src={urlFor(banners[currentSlide].photo).url()}
                  className="grow w-full rounded-none aspect-[1.01] max-md:mt-10 max-md:max-w-full"
                  alt="Medical facility"
                  priority
                  width={1000}
                  height={1000}
                  quality={100}
                />
              </motion.div>
            </AnimatePresence>
          ) : (
            <Image
              src={urlFor(banners[0].photo).url()}
              className="grow w-full rounded-none aspect-[1.01] max-md:mt-10 max-md:max-w-full"
              alt="Medical facility"
              priority
              width={1000}
              height={1000}
              quality={100}
            />
          )}
        </div>
      </div>
    </section>
  );
};

export default Slider;
