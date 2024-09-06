import React from 'react';
import Image from 'next/image';
import partnerLogo from "@/public/images/reviews/partner-logo.png";

export default function ReviewCard({ review }) {
  return (
    <div className='shadow-3xl rounded-2xl flex flex-col gap-4 p-4 h-[300px] lg:h-[350px]'>
      <div className='flex items-center'>
        <Image src={partnerLogo} alt="Partner Logo" width={50} height={50} />
      </div>
      <p className='text-sm text-gray-600'>{review.text.slice(0, 200)}...</p>
      <a href="#" className="text-red-500">Весь отзыв &gt;</a>
    </div>
  );
}
