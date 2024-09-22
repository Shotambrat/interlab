"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import close from "@/public/svg/search/close.svg";
import Image from "next/image";

export default function SearchBar({ setSearch }) {
  const [query, setQuery] = useState("");

  const handleInputChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    console.log(`Searching for: ${query}`);
  };

  const handleOutsideClick = () => {
    setSearch(false); // Закрываем SearchBar
  };

  const handleContentClick = (e) => {
    e.stopPropagation(); // Останавливаем событие клика для контентной области
  };

  return (
    <motion.div
      className="w-full lg:px-0 fixed h-screen inset-0 top-[90px] max-mdx:top-[70px] bg-modalBg z-50"
      onClick={handleOutsideClick}
      initial={{ opacity: 0 }}   // Анимация появления
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}      // Анимация исчезновения
      transition={{ duration: 0.3 }}
    >
      <motion.div
        className="bg-white h-[100px]"
        onClick={handleContentClick}
        initial={{ y: -100 }}  // Начальная позиция
        animate={{ y: 0 }}     // Плавный сдвиг вниз
        exit={{ y: -100 }}     // Сдвиг вверх при закрытии
        transition={{ type: "tween", duration: 0.3 }}
      >
        <div className="max-w-[1440px] mx-auto h-full flex items-center">
          <div className="relative rounded-lg w-full max-w-[1440px] flex justify-between items-center">
            <button onClick={() => setSearch(false)} className="pl-4">
              <Image
                src={close}
                height={100}
                width={100}
                alt="Close Icon"
                className="h-8 w-8 max-mdx:h-4 max-mdx:w-4"
              />
            </button>
            <input
              type="text"
              value={query}
              onChange={handleInputChange}
              className="w-full text-3xl max-mdx:text-xl px-4 py-2 rounded-lg focus:outline-none focus:none"
              placeholder="Введите название услуги, анализа и т.д."
            />
            <button
              onClick={handleSearch}
              className="rounded-lg bg-red-500 hover:bg-red-600 text-white p-3"
            >
              <svg
                width="21"
                height="21"
                viewBox="0 0 21 21"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9.45833 17.7917C14.0607 17.7917 17.7917 14.0607 17.7917 9.45833C17.7917 4.85596 14.0607 1.125 9.45833 1.125C4.85596 1.125 1.125 4.85596 1.125 9.45833C1.125 14.0607 4.85596 17.7917 9.45833 17.7917Z"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M19.8737 19.875L15.3945 15.3959"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
