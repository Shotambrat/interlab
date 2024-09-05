"use client";
import React, { useState } from "react";
import Image from "next/image";
import ReviewModal from '../Modals/Reviews';
import Right from "@/public/svg/right-contact-red.svg";
import partner1 from "@/public/images/autsorsing/image1.png";
import left from "@/public/svg/arrows-slider/left_gray.svg";
import right from "@/public/svg/arrows-slider/right_gray.svg";

const reviews = [
    {
        review: "Азиза Шахзадэевна Ассаламу алейкум опа сиз менин оймга йордам бергиндиз энди ойм узларини яхши сезвотила сизга котоком РахматАзиза Шахзадэевна Ассаламу алейкум опа сиз менин оймга йордам бергиндиз энди ойм узларини яхши сезвотила сизга котоком РахматАзиза Шахзадэевна Ассаламу алейкум опа сиз менин оймга йордам бергиндиз энди ойм узларини яхши сезвотила сизга котоком РахматАзиза Шахзадэевна Ассаламу алейкум опа сиз менин оймга йордам бергиндиз энди ойм узларини яхши сезвотила сизга котоком РахматАзиза Шахзадэевна Ассаламу алейкум опа сиз менин оймга йордам бергиндиз энди ойм узларини яхши сезвотила сизга котоком РахматАзиза Шахзадэевна Ассаламу алейкум опа сиз менин оймга йордам бергиндиз энди ойм узларини яхши сезвотила сизга котоком РахматАзиза Шахзадэевна Ассаламу алейкум опа сиз менин оймга йордам бергиндиз энди ойм узларини яхши сезвотила сизга котоком РахматАзиза Шахзадэевна Ассаламу алейкум опа сиз менин оймга йордам бергиндиз энди ойм узларини яхши сезвотила сизга котоком РахматАзиза Шахзадэевна Ассаламу алейкум опа сиз менин оймга йордам бергиндиз энди ойм узларини яхши сезвотила сизга котоком РахматАзиза Шахзадэевна Ассаламу алейкум опа сиз менин оймга йордам бергиндиз энди ойм узларини яхши сезвотила сизга котоком РахматАзиза Шахзадэевна Ассаламу алейкум опа сиз менин оймга йордам бергиндиз энди ойм узларини яхши сезвотила сизга котоком РахматАзиза Шахзадэевна Ассаламу алейкум опа сиз менин оймга йордам бергиндиз энди ойм узларини яхши сезвотила сизга котоком РахматАзиза Шахзадэевна Ассаламу алейкум опа сиз менин оймга йордам бергиндиз энди ойм узларини яхши сезвотила сизга котоком РахматАзиза Шахзадэевна Ассаламу алейкум опа сиз менин оймга йордам бергиндиз энди ойм узларини яхши сезвотила сизга котоком Рахмат",
        partnerImageSrc: partner1,
    },
    {
        review: "Азиза Шахзадэевна Ассаламу алейкум опа сиз менин оймга йордам бергиндиз энди ойм узларини яхши сезвотила сизга котоком Рахмат...",
        partnerImageSrc: partner1,
    },
    {
        review: "Азиза Шахзадэевна врач понимающий, очень внимательно выслушала обо всех моих проблемах...",
        partnerImageSrc: partner1,
    },
    {
        review: "Спасибо вам Азизе Шахзадэевна за ваш точный диагноз и лечения...",
        partnerImageSrc: partner1,
    },
    {
        review: "Азиза Шахзадэевна Ассаламу алейкум опа сиз менин оймга йордам бергиндиз энди ойм узларини яхши сезвотила сизга котоком Рахмат...",
        partnerImageSrc: partner1,
    },
    {
        review: "Азиза Шахзадэевна врач понимающий, очень внимательно выслушала обо всех моих проблемах...",
        partnerImageSrc: partner1,
    },
    {
        review: "Спасибо вам Азизе Шахзадэевна за ваш точный диагноз и лечения...",
        partnerImageSrc: partner1,
    },
    {
        review: "Азиза Шахзадэевна Ассаламу алейкум опа сиз менин оймга йордам бергиндиз энди ойм узларини яхши сезвотила сизга котоком Рахмат...",
        partnerImageSrc: partner1,
    },
    {
        review: "Азиза Шахзадэевна врач понимающий, очень внимательно выслушала обо всех моих проблемах...",
        partnerImageSrc: partner1,
    },
    {
        review: "Спасибо вам Азизе Шахзадэевна за ваш точный диагноз и лечения...",
        partnerImageSrc: partner1,
    },
    {
        review: "Азиза Шахзадэевна Ассаламу алейкум опа сиз менин оймга йордам бергиндиз энди ойм узларини яхши сезвотила сизга котоком Рахмат...",
        partnerImageSrc: partner1,
    },
    {
        review: "Азиза Шахзадэевна врач понимающий, очень внимательно выслушала обо всех моих проблемах...",
        partnerImageSrc: partner1,
    },
    {
        review: "Спасибо вам Азизе Шахзадэевна за ваш точный диагноз и лечения...",
        partnerImageSrc: partner1,
    },
    {
        review: "Азиза Шахзадэевна Ассаламу алейкум опа сиз менин оймга йордам бергиндиз энди ойм узларини яхши сезвотила сизга котоком Рахмат...",
        partnerImageSrc: partner1,
    },
    {
        review: "Азиза Шахзадэевна врач понимающий, очень внимательно выслушала обо всех моих проблемах...",
        partnerImageSrc: partner1,
    },
    {
        review: "Спасибо вам Азизе Шахзадэевна за ваш точный диагноз и лечения...",
        partnerImageSrc: partner1,
    },
    {
        review: "Азиза Шахзадэевна Ассаламу алейкум опа сиз менин оймга йордам бергиндиз энди ойм узларини яхши сезвотила сизга котоком Рахмат...",
        partnerImageSrc: partner1,
    },
    {
        review: "Азиза Шахзадэевна врач понимающий, очень внимательно выслушала обо всех моих проблемах...",
        partnerImageSrc: partner1,
    },
    {
        review: "Спасибо вам Азизе Шахзадэевна за ваш точный диагноз и лечения...",
        partnerImageSrc: partner1,
    },
    {
        review: "Азиза Шахзадэевна Ассаламу алейкум опа сиз менин оймга йордам бергиндиз энди ойм узларини яхши сезвотила сизга котоком Рахмат...",
        partnerImageSrc: partner1,
    },
    {
        review: "Азиза Шахзадэевна врач понимающий, очень внимательно выслушала обо всех моих проблемах...",
        partnerImageSrc: partner1,
    },
    {
        review: "Спасибо вам Азизе Шахзадэевна за ваш точный диагноз и лечения...",
        partnerImageSrc: partner1,
    },
    {
        review: "Азиза Шахзадэевна Ассаламу алейкум опа сиз менин оймга йордам бергиндиз энди ойм узларини яхши сезвотила сизга котоком Рахмат...",
        partnerImageSrc: partner1,
    },
    {
        review: "Азиза Шахзадэевна врач понимающий, очень внимательно выслушала обо всех моих проблемах...",
        partnerImageSrc: partner1,
    },
    {
        review: "Спасибо вам Азизе Шахзадэевна за ваш точный диагноз и лечения...",
        partnerImageSrc: partner1,
    },
    {
        review: "Азиза Шахзадэевна Ассаламу алейкум опа сиз менин оймга йордам бергиндиз энди ойм узларини яхши сезвотила сизга котоком Рахмат...",
        partnerImageSrc: partner1,
    },
    {
        review: "Азиза Шахзадэевна врач понимающий, очень внимательно выслушала обо всех моих проблемах...",
        partnerImageSrc: partner1,
    },
    {
        review: "Спасибо вам Азизе Шахзадэевна за ваш точный диагноз и лечения...",
        partnerImageSrc: partner1,
    },
    {
        review: "Азиза Шахзадэевна Ассаламу алейкум опа сиз менин оймга йордам бергиндиз энди ойм узларини яхши сезвотила сизга котоком Рахмат...",
        partnerImageSrc: partner1,
    },
    {
        review: "Азиза Шахзадэевна врач понимающий, очень внимательно выслушала обо всех моих проблемах...",
        partnerImageSrc: partner1,
    },
    {
        review: "Спасибо вам Азизе Шахзадэевна за ваш точный диагноз и лечения...",
        partnerImageSrc: partner1,
    },
];

const FeedbackPartners = () => {
    const [selectedReview, setSelectedReview] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const reviewsPerPage = 6;

    const openModal = (review) => {
        setSelectedReview(review);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setSelectedReview(null);
    };

    const useTruncatedText = (text, defaultLength, mdxLength) => {
        const [truncatedText, setTruncatedText] = useState(text);
        const [isTruncated, setIsTruncated] = useState(false);

        useState(() => {
            const isMdx = window.matchMedia('(min-width: 1440px)').matches;
            const maxLength = isMdx ? mdxLength : defaultLength;

            if (text.length > maxLength) {
                setTruncatedText(text.slice(0, maxLength) + '...');
                setIsTruncated(true);
            } else {
                setTruncatedText(text);
                setIsTruncated(false);
            }
        }, [text, defaultLength, mdxLength]);

        return { truncatedText, isTruncated };
    };

    const ReviewText = ({ review }) => {
        const { truncatedText, isTruncated } = useTruncatedText(review.review, 268, 550);
        return (
            <>
                <p className="text-black mt-[20px] text-[15px] md:text-[16.5px] mdx:text-[18px] mdx:mt-[30px] font-normal">
                    {truncatedText}
                </p>
                {isTruncated && (
                    <button
                        onClick={() => openModal(review)}
                        className="text-[#FB6A68] mt-3 gap-[6px] flex flex-row items-center text-[16px] mdx:text-[20px] font-bold"
                    >
                        Весь отзыв
                        <Image
                            src={Right}
                            height={20}
                            width={20}
                            alt={'right icon'}
                            className="w-[13px] h-[13px] mdx:w-[15px] mdx:h-[13px] "
                        />
                    </button>
                )}
            </>
        );
    };

    const renderPartnerImage = (review) => {
        return (
            <Image
                src={review.partnerImageSrc}
                height={100}
                width={200}
                alt={'Partner Image'}
                className="w-[140px] h-[35px] mdx:max-w-[160px] mdx:max-h-[55px] object-contain"
            />
        );
    };

    // Calculate the reviews for the current page
    const indexOfLastReview = currentPage * reviewsPerPage;
    const indexOfFirstReview = indexOfLastReview - reviewsPerPage;
    const currentReviews = reviews.slice(indexOfFirstReview, indexOfLastReview);

    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    const renderPagination = () => {
        const pageNumbers = [];
        const totalPages = Math.ceil(reviews.length / reviewsPerPage);

        for (let i = 1; i <= totalPages; i++) {
            pageNumbers.push(i);
        }

        const maxPageNumbersToShow = 6;

        let displayedPages = pageNumbers;
        if (totalPages > maxPageNumbersToShow) {
            if (currentPage <= 3) {
                displayedPages = [...pageNumbers.slice(0, 5), '...', totalPages];
            } else if (currentPage >= totalPages - 2) {
                displayedPages = [1, '...', ...pageNumbers.slice(totalPages - 5)];
            } else {
                displayedPages = [1, '...', currentPage - 1, currentPage, currentPage + 1, '...', totalPages];
            }
        }

        return (
            <ul className="flex items-center list-none mb-[80px] mdx:mb-[100px] lg:mb-[120px]">
                <li>
                    <button
                        onClick={() => paginate(currentPage - 1)}
                        className={`px-3 py-1 rounded ${currentPage === 1 ? 'cursor-not-allowed' : ''}`}
                        disabled={currentPage === 1}
                    >
                        <Image
                            src={left}
                            height={30}
                            width={30}
                            alt={'left'}
                            className="w-[23px] h-[23px] "
                        />
                    </button>
                </li>
                {displayedPages.map((number, index) =>
                    typeof number === 'number' ? (
                        <li key={index} className="mx-1">
                            <button
                                onClick={() => paginate(number)}
                                className={`px-3 py-1 rounded-[10px] text-[16px] mdx:text-[20px] ${number === currentPage ? 'bg-[#FB6A68] text-white' : 'bg-white text-black'}`}
                            >
                                {number}
                            </button>
                        </li>
                    ) : (
                        <li key={index} className="mx-1">
                            <span className="px-3 py-1">...</span>
                        </li>
                    )
                )}
                <li>
                    <button
                        onClick={() => paginate(currentPage + 1)}
                        className={`px-3 py-1 rounded ${currentPage === totalPages ? 'cursor-not-allowed' : ''}`}
                        disabled={currentPage === totalPages}
                    >
                        <Image
                            src={right}
                            height={30}
                            width={30}
                            alt={'left'}
                            className="w-[23px] h-[23px] "
                        />
                    </button>
                </li>
            </ul>
        );
    };

    return (
        <div className="mx-auto p-4 mt-[40px] mdx:mt-[50px] xl:mt-[60px] ">
            <h2 id="reviews" className="font-bold text-[25px] mdx:text-[35px] xl:text-[40px] mb-[25px] mdx:mb-[30px]">Отзывы наших партнеров</h2>
            <div className="grid grid-cols-1 mdx:grid-cols-2 gap-6">
                {currentReviews.map((review, index) => (
                    <div key={index} className="p-4 bg-white rounded-[20px] ReviewsSlider min-h-[390px] mdx:min-h-[450px] relative">
                        <div className="flex items-center mb-2 border-b pb-[25px]">
                            <div className="mr-2">
                                {renderPartnerImage(review)}
                            </div>
                        </div>
                        <ReviewText review={review} />
                    </div>
                ))}
            </div>
            <div className="flex justify-center mdx:justify-start mt-8">
                {renderPagination()}
            </div>
            <ReviewModal review={selectedReview} isOpen={isModalOpen} onClose={closeModal} />
        </div>
    );
};

export default FeedbackPartners;
