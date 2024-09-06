import React from "react";
import ReviewCard from "./ReviewCard";
import Image from "next/image";
import leftArrow from "@/public/svg/arrow-left-gray.svg";
import rightArrow from "@/public/svg/arrow-right-gray.svg";
import Link from "next/link";

export default function ReviewsBody({ reviews, currentPage, totalPages }) {
  return (
    <div className="w-full max-w-[1440px] px-2 flex flex-col gap-6 mx-auto">
      <h1 className="text-3xl font-semibold">Отзывы наших партнеров</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {reviews.map((review) => (
          <ReviewCard key={review.id} review={review} />
        ))}
      </div>

      <div className="h-6 flex justify-center gap-4 mt-8">
        {/* Кнопка для перехода на предыдущую страницу */}
        <Link href={`${currentPage - 1}`}>
          <button disabled={currentPage === 1} className="h-full w-6">
            <Image
              src={leftArrow}
              width={100}
              height={100}
              alt="Left Arrow"
              className="w-full h-full"
            />
          </button>
        </Link>

        {/* Пагинация */}
        {[...Array(totalPages)].map((_, i) => (
          <Link key={i} href={`${i + 1}`}>
            <button
              className={`px-4 py-2 ${
                i + 1 === currentPage ? "font-bold" : ""
              }`}
            >
              {i + 1}
            </button>
          </Link>
        ))}

        {/* Кнопка для перехода на следующую страницу */}
        <Link href={`${currentPage + 1}`}>
          <button disabled={currentPage === totalPages} className="h-full w-6">
            <Image
              src={rightArrow}
              width={100}
              height={100}
              alt="Right Arrow"
              className="w-full h-full"
            />
          </button>
        </Link>
      </div>
    </div>
  );
}
