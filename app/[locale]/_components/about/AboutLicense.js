"use client";
import Image from "next/image";
import licenseImage from "@/public/images/license.png";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay } from "swiper";
import "swiper/swiper-bundle.css";

SwiperCore.use([Autoplay]);

const AboutLicense = () => {
  const licenses = [
    licenseImage, // Replace with actual image paths
    licenseImage, // Replace with actual image paths
    licenseImage, // Replace with actual image paths
    licenseImage, // Replace with actual image paths
    licenseImage, // Replace with actual image paths
    licenseImage, // Replace with actual image paths
    licenseImage, // Replace with actual image paths
    licenseImage, // Replace with actual image paths
    licenseImage, // Replace with actual image paths
  ];

  return (
    <div className="w-full max-w-[1400px] mx-auto mt-24">
      <h2 className="text-center text-2xl font-bold my-4">Лицензии</h2>
      <Swiper
        spaceBetween={10}
        slidesPerView={1}
        breakpoints={{
          640: {
            slidesPerView: 1.5,
          },
          768: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 5,
          },
        }}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        className="w-full max-w-[1000px]"
      >
        {licenses.map((license, index) => (
          <SwiperSlide key={index}>
            <Image
              width={1000}
              height={1000}
              src={license}
              alt={`License ${index + 1}`}
              className="w-full max-w-[320px]"
            />
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="w-full flex justify-center">
      <button className="flex gap-2 justify-center self-center px-10 py-3.5 mt-10 text-base font-bold text-center text-red-400 border border-red-400 border-solid rounded-[100px] max-md:px-5">
        <span className="my-auto">Подробнее</span>
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/9d858dea97bb716ac0dba9d09749ab621dbd0b3df5fbd758926ae17f2daf60f0?apiKey=e791e0f42eab4556ac944da69358f29b&"
          className="shrink-0 aspect-square w-[23px]"
          alt="Arrow icon"
        />
      </button>

      </div>
    </div>
  );
};

export default AboutLicense;
