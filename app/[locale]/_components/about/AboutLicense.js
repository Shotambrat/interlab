"use client";
import Image from "next/image";
import licenseImage from "@/public/images/license.png";
import { motion } from "framer-motion";
import Slider from "react-slick";
import { useTranslations } from "next-intl";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Link from "next/link";

const AboutLicense = ({locale}) => {
  const t = useTranslations("");
  const licenses = [
    licenseImage, // Замените на фактические пути к изображениям
    licenseImage, // Замените на фактические пути к изображениям
    licenseImage, // Замените на фактические пути к изображениям
    licenseImage, // Замените на фактические пути к изображениям
    licenseImage, // Замените на фактические пути к изображениям
  ];

  const settings = {
    dots: false, // Убираем точки навигации
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    adaptiveHeight: true,
    cssEase: "ease-in-out", // Более плавная анимация
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <motion.div
      className="w-full max-w-[1440px] mx-auto mt-24" // Растягиваем на всю ширину
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <motion.h2 className="text-center text-3xl font-bold my-4" animate={{ scale: 1.1 }} transition={{ duration: 0.5 }}>
        {t('About.licences')}
      </motion.h2>

      <Slider {...settings} className="w-full slider-with-gap"> {/* Добавляем класс для отступов */}
        {licenses.map((license, index) => (
          <div key={index} className="slide-item"> {/* Оборачиваем слайд в класс для доп.стилей */}
            <Image
              width={1000}
              height={1000}
              src={license}
              alt={`License ${index + 1}`}
              className="w-full max-w-[100%] rounded-lg shadow-xl"
            />
          </div>
        ))}
      </Slider>

      <Link href={`/${locale}/about/licences`} className="w-full flex justify-center">
        <motion.button
          className="flex gap-2 justify-center self-center px-10 py-3.5 mt-10 text-base font-bold text-center text-red-400 border border-red-400 border-solid rounded-[100px] max-md:px-5"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          <span className="my-auto">{t("Main.Banner.more")}</span>
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/9d858dea97bb716ac0dba9d09749ab621dbd0b3df5fbd758926ae17f2daf60f0?apiKey=e791e0f42eab4556ac944da69358f29b&"
            className="shrink-0 aspect-square w-[23px]"
            alt="Arrow icon"
          />
        </motion.button>
      </Link>
    </motion.div>
  );
};

export default AboutLicense;
