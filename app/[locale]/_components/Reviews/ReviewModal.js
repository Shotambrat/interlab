// app/[locale]/_components/Reviews/ReviewModal.js
"use client"
import { useEffect } from "react";
import Image from "next/image";
import partnerLogo from "@/public/images/reviews/partner-logo.png"

export default function ReviewModal({ review, closeModal }) {

    useEffect(() => {
        // Добавляем стиль, чтобы убрать скролл на body
        document.body.style.overflow = "hidden";
    
        // Восстанавливаем скролл при размонтировании компонента (закрытии модалки)
        return () => {
          document.body.style.overflow = "";
        };
      }, []);

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-[9999]">
      <div className="bg-white p-8 rounded-2xl shadow-lg max-w-[700px] mx-2 w-full relative flex flex-col gap-4 max-h-[600px] overflow-y-scroll no-scrollbar items-start">
        <button onClick={closeModal} className="absolute top-4 text-4xl right-4 text-gray-500">
          &times;
        </button>
        <Image
          src={partnerLogo}
          width={1000}
          height={1000}
          alt="Review Logo"
          className="h-full max-h-[100px] object-contain w-auto"
        />
        <hr className="w-full" />
        <p>{review.text}</p>
      </div>
    </div>
  );
}
