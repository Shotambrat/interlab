// app/[locale]/_components/Reviews/ReviewCard.js
import React from "react";
import Image from "next/image";
import partnerLogo from "@/public/images/reviews/partner-logo.png";

export default function ReviewCard({ review, openReviewModal }) {
  return (
    <div className="shadow-3xl rounded-2xl flex flex-col gap-4 p-4 h-[300px] lg:h-[300px]">
      <div className="flex items-center h-1/5 w-full">
        <Image
          src={partnerLogo}
          alt="Partner Logo"
          width={1000}
          height={1000}
          quality={100}
          loading="lazy"
          className="h-full w-auto"
        />
      </div>
      <hr />
      <div className="w-full flex flex-col gap-2 justify-between items-start h-full">
        <p className="text-sm text-gray-600 line-clamp-6">{review.text}</p>
        <button
          onClick={() => openReviewModal(review.id)}
          className="text-red-500 text-md font-semibold"
        >
          Весь отзыв &gt;
        </button>
      </div>
    </div>
  );
}
