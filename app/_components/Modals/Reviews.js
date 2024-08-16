"use client";
import React from "react";
import Image from "next/image";
import close from "@/public/svg/closeicon-gray.svg";

const ReviewModal = ({ review, isOpen, onClose }) => {
    if (!isOpen) return null;

    const renderImageOrInitial = (review) => {
        if (review.partnerImageSrc) {
            return (
                <Image
                    src={review.partnerImageSrc}
                    height={100}
                    width={200}
                    alt={review.name}
                    className="w-full max-w-[160px] h-auto object-contain"
                />
            );
        } else {
            const initial = review.name?.charAt(0).toUpperCase() || "A";
            return (
                <div className="w-[50px] h-[50px] mdx:w-[69px] mdx:h-[69px] rounded-full bg-gray-300 flex items-center justify-center">
                    <span className="text-[20px] mdx:text-[24px] font-semibold text-white">{initial}</span>
                </div>
            );
        }
    };

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
            <div className="relative bg-white p-7 rounded-3xl max-w-[90%] slg:max-w-[954px] mx-auto overflow-hidden ">
                <div className="absolute top-5 right-5 z-10">
                    <button onClick={onClose}>
                        <Image
                            src={close}
                            height={24}
                            width={24}
                            alt="close"
                            className="w-[18px] h-[18px] mdx:w-[23px] mdx:h-[23px]"
                        />
                    </button>
                </div>
                <div className="overflow-y-auto max-h-[80vh] custom-scrollbar">
                    <div className="flex items-center mb-4 border-b pb-[15px]">
                        {renderImageOrInitial(review)}
                    </div>
                    <p className="text-[15px] mdx:text-[18px] mb-4">{review.review}</p>
                </div>
            </div>
        </div>
    );
};

export default ReviewModal;
