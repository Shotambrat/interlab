"use client";
import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { client } from "@/sanity/lib/client";
import imageUrlBuilder from "@sanity/image-url";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslations } from "next-intl";
import { PortableText } from "@portabletext/react";

// Создание builder для URL изображений
const builder = imageUrlBuilder(client);

function urlFor(source) {
  return builder.image(source);
}

const components = {
  marks: {
    redText: ({ children }) => (
      <span style={{ color: "#FB6A68" }}>{children}</span>
    ),
  },
};

const Slider = ({ params }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [banners, setBanners] = useState([]);
  const { locale } = params;
  const t = useTranslations();

  useEffect(() => {
    const fetchBanners = async () => {
      try {
        const banners =
          await client.fetch(` *[_type == 'banner' && active == true] | order(_updatedAt desc) {
            titleSubtitle,
            description,
            photo,
            backgroundPhoto,
            navigateToUrl,
            buttonText
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
      }, 8000);
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
    return <p className="h-[674px] w-full"></p>;
  }

  // Анимация для слайдов
  const slideAnimation = {
    initial: { opacity: 0, x: 100 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -100 },
    transition: { duration: 0.5 },
  };

  // Функция для замены переносов строк на <br />
  const formatText = (text) => {
    if (!text) return "";
    return text.replace(/\n/g, "<br />");
  };

  return (
    <section
      style={{
        backgroundImage: `url(${urlFor(banners[currentSlide].backgroundPhoto).url()})`,
      }}
      className="max-md:max-w-full"
      ref={slideRef}
    >
      <div className="flex gap-5 flex-col justify-between mdl:flex-row max-md:gap-0 items-center">
        <div className="flex flex-col lg:w-full lg:max-w-[750px] max-md:ml-0 w-full px-2 mdx:px-12">
          <div className="flex flex-col items-start mt-5 max-md:max-w-full">
            {banners.length > 1 && (
              <div className="flex justify-between items-center gap-3 mb-4">
                {banners.map((_, index) => (
                  <div
                    key={index}
                    className={`overflow-hidden relative bg-rose-200 h-[3px] transition-all duration-200 ${
                      index === currentSlide ? "w-[40px]" : "w-[20px]"
                    }`}
                  >
                    <div
                      className={`absolute -left-1/2 h-[3px] ${
                        index === currentSlide ? "w-full" : "w-1/3"
                      } bg-rose-400 ${currentSlide === index ? "line-anima" : ""}`}
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
                  className="flex flex-col items-center self-stretch mt-2 mdl:mt-5 max-md:max-w-full"
                >
                  <h2 className="xl:text-6xl lg:text-5xl md:text-4xl text-3xl font-bold max-md:max-w-full lg:leading-12">
                    <PortableText
                      value={banners[currentSlide].titleSubtitle?.[locale]}
                      components={components}
                    />
                  </h2>
                  <p
                    className="text-sm relative w-full max-w-[full] -top-8 mdx:-top-16 mdx:text-lg text-zinc-600 max-md:max-w-full"
                    dangerouslySetInnerHTML={{
                      __html: formatText(
                        banners[currentSlide].description?.[locale]
                      ),
                    }}
                  />
                </motion.div>
              </AnimatePresence>
            ) : (
              <div className="flex flex-col justify-center self-stretch max-md:max-w-full">
                <h2 className="xl:text-6xl lg:text-5xl md:text-4xl text-3xl font-bold max-md:max-w-full">
                  <PortableText
                    value={banners[currentSlide].titleSubtitle?.[locale]}
                    components={components}
                  />
                </h2>
                <p
                  className="text-sm mdx:text-lg relative w-full max-w-[400px] -top-8 mdx:-top-16 text-zinc-600 max-md:max-w-full"
                  dangerouslySetInnerHTML={{
                    __html: formatText(
                      banners[currentSlide].description?.[locale]
                    ),
                  }}
                />
              </div>
            )}

            <a href={banners[currentSlide].navigateToUrl[locale]}>
              <button className="flex flex-col justify-center relative -top-8 mdx:-top-16 mt-3 max-w-full text-base font-bold text-center text-white whitespace-nowrap w-[236px]">
                <div className="justify-center items-center px-16 py-3 bg-red-400 hover:bg-red-600 transition-all duration-300 rounded-[100px]">
                  {
                    banners[currentSlide]?.buttonText[locale]
                  }
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
                  className="grow w-full max-mdl:max-w-[500px] object-cover rounded-none aspect-[1.01] max-md:mt-10 max-md:max-w-full"
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
