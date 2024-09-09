"use client"
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation"; // В App Router используем next/navigation
import ReviewModal from "./ReviewModal";
import ReviewCard from "./ReviewCard";
import Image from "next/image";
import leftArrow from "@/public/svg/arrow-left-gray.svg";
import rightArrow from "@/public/svg/arrow-right-gray.svg";
import Link from "next/link";

export default function ReviewsBody({ reviews, currentPage, totalPages, selectedReview }) {
  const router = useRouter();
  const [openModal, setOpenModal] = useState(!!selectedReview);

  // Открытие модального окна, если reviewId есть в URL при загрузке страницы
  useEffect(() => {
    if (selectedReview) {
      setOpenModal(true);
    }
  }, [selectedReview]);

  // Закрытие модального окна и очистка query-параметра
  const closeModal = () => {
    router.push(``, undefined, { shallow: true });
    setOpenModal(false);
  };

  // Открытие модального окна по клику на конкретный отзыв
  const openReviewModal = (reviewId) => {
    router.push(`?reviewId=${reviewId}`, { shallow: true });
    setOpenModal(true);
  };

  return (
    <div className="w-full max-w-[1440px] px-2 flex flex-col gap-6 mx-auto">
      <h1 className="text-3xl font-semibold">Отзывы наших партнеров</h1>

      {/* Сетка отзывов */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {reviews.map((review) => (
          <ReviewCard
            key={review.id}
            review={review}
            currentPage={currentPage}
            openReviewModal={openReviewModal} // Передаем функцию для открытия модального окна
          />
        ))}
      </div>

      {/* Пагинация */}
      <div className="h-6 flex justify-center gap-2 mt-8 items-center">
        <Link href={`${currentPage - 1}`}>
          <button disabled={currentPage === 1} className="h-4 w-4 mr-4">
            <Image
              src={leftArrow}
              width={100}
              height={100}
              alt="Left Arrow"
              className="w-full h-full"
            />
          </button>
        </Link>

        {[...Array(totalPages)].map((_, i) => (
          <Link key={i} href={`${i + 1}`}>
            <button
              className={`px-4 py-2 ${
                i + 1 === currentPage ? "text-white bg-red-400 rounded-xl" : ""
              }`}
            >
              {i + 1}
            </button>
          </Link>
        ))}

        <Link href={`${currentPage + 1}`}>
          <button disabled={currentPage === totalPages} className="h-4 w-4 ml-4">
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

      {/* Модальное окно для отображения полного отзыва */}
      {openModal && selectedReview && (
        <ReviewModal review={selectedReview} closeModal={closeModal} />
      )}
    </div>
  );
}
