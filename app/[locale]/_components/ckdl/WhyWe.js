"use client"
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

const data = [
  {
    id: 1,
    title: "Современное оборудование",
    description: `Современное оборудование — это ключ к точной диагностике и эффективному лечению. В нашей клинике используется передовое медицинское оборудование, которое позволяет проводить исследования быстро и безболезненно, а также гарантирует высокую точность результатов. Мы постоянно обновляем нашу технику, чтобы соответствовать мировым стандартам и предоставлять пациентам качественные услуги на уровне лучших клиник.`,
    image: "/images/about-banner.png",
    number: "01",
  },
  {
    id: 2,
    title: "Современное оборудование",
    description: `Современное оборудование — это ключ к точной диагностике и эффективному лечению. В нашей клинике используется передовое медицинское оборудование, которое позволяет проводить исследования быстро и безболезненно, а также гарантирует высокую точность результатов. Мы постоянно обновляем нашу технику, чтобы соответствовать мировым стандартам и предоставлять пациентам качественные услуги на уровне лучших клиник.`,
    image: "/images/about-banner.png",
    number: "02",
  },
  {
    id: 3,
    title: "Современное оборудование",
    description: `Современное оборудование — это ключ к точной диагностике и эффективному лечению. В нашей клинике используется передовое медицинское оборудование, которое позволяет проводить исследования быстро и безболезненно, а также гарантирует высокую точность результатов. Мы постоянно обновляем нашу технику, чтобы соответствовать мировым стандартам и предоставлять пациентам качественные услуги на уровне лучших клиник.`,
    image: "/images/about-banner.png",
    number: "03",
  },
  // Добавляйте больше элементов по необходимости
];

export default function WhyWe() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % data.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? data.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="w-full max-w-[1440px] mx-auto flex gap-8 max-lg:flex-col-reverse">
      <div className="flex-1">
        <AnimatePresence mode="wait">
          <motion.div
            key={data[currentIndex].id}
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 100 }}
            transition={{ duration: 0.5 }}
          >
            <Image
              src={data[currentIndex].image}
              width={1000}
              height={1000}
              quality={100}
              alt={`Banner ${data[currentIndex].title}`}
              className="w-full h-full object-cover rounded-3xl"
            />
          </motion.div>
        </AnimatePresence>
        <div className="flex gap-8 lg:hidden items-center justify-end mt-4">
          <button
            className="h-20 w-20 flex items-center justify-center rounded-full border border-[#E4E4E4]"
            onClick={handlePrev}
          >
            <Image
              src={"/svg/ckdl/left-arrow-blck.svg"}
              width={100}
              height={100}
              alt="LEFT ARROW"
              className="w-6"
            />
          </button>

          <div className="text-5xl font-bold text-[#FB6A68]">
            {data[currentIndex].number}
          </div>

          <button
            className="h-20 w-20 flex items-center justify-center rounded-full border border-[#E4E4E4]"
            onClick={handleNext}
          >
            <Image
              src={"/svg/ckdl/right-arrow-blck.svg"}
              width={100}
              height={100}
              alt="RIGHT ARROW"
              className="w-6"
            />
          </button>
        </div>
      </div>
      <div className="flex-1 lg:min-h-[500px] flex flex-col justify-between items-start">
        <div>
          <h2 className="text-4xl max-mdx:text-2xl font-semibold">
            {data[currentIndex].title.split(" ").map((word, index) => (
              <span key={index}>
                {word}
                <br />
              </span>
            ))}
          </h2>
          <p className="w-full max-w-[500px] text-xl max-mdx:text-base text-[#5B5B5B]">
            {data[currentIndex].description}
          </p>
        </div>
        <div className="flex gap-8 max-lg:hidden items-center">
          <button
            className="h-20 w-20 flex items-center justify-center rounded-full border border-[#E4E4E4]"
            onClick={handlePrev}
          >
            <Image
              src={"/svg/ckdl/left-arrow-blck.svg"}
              width={100}
              height={100}
              alt="LEFT ARROW"
              className="w-6"
            />
          </button>

          <div className="text-5xl font-bold text-[#FB6A68]">
            {data[currentIndex].number}
          </div>

          <button
            className="h-20 w-20 flex items-center justify-center rounded-full border border-[#E4E4E4]"
            onClick={handleNext}
          >
            <Image
              src={"/svg/ckdl/right-arrow-blck.svg"}
              width={100}
              height={100}
              alt="RIGHT ARROW"
              className="w-6"
            />
          </button>
        </div>
      </div>
    </div>
  );
}
