"use client";
import { useState, useEffect } from 'react';
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ReviewModal from '../Modals/Reviews';
import ArrowRight from "@/public/svg/arrow-right.svg";
import Right from "@/public/svg/right-contact-red.svg";
import partner1 from "@/public/images/autsorsing/image1.png";
import Link from "next/link";

const reviews = [
    {
        review: "Азиза Шахзадэевна Ассаламу алейкум опа сиз менин оймга йордам бергиндиз энди ойм узларини яхши сезвотила сизга котоком РахматАзиза Шахзадэевна Ассаламу алейкум опа сиз менин оймга йордам бергиндиз энди ойм узларини яхши сезвотила сизга котоком Рахмат...Азиза Шахзадэевна Ассаламу алейкум опа сиз менин оймга йордам бергиндиз энди ойм узларини яхши сезвотила сизга котоком Рахмат...Азиза Шахзадэевна Ассаламу алейкум опа сиз менин оймга йордам бергиндиз энди ойм узларини яхши сезвотила сизга котоком Рахмат...Азиза Шахзадэевна Ассаламу алейкум опа сиз менин оймга йордам бергиндиз энди ойм узларини яхши сезвотила сизга котоком Рахмат...Азиза Шахзадэевна Ассаламу алейкум опа сиз менин оймга йордам бергиндиз энди ойм узларини яхши сезвотила сизга котоком Рахмат...Азиза Шахзадэевна Ассаламу алейкум опа сиз менин оймга йордам бергиндиз энди ойм узларини яхши сезвотила сизга котоком Рахмат213213213Азиза Шахзадэевна Ассаламу алейкум опа сиз менин оймга йордам бергиндиз энди ойм узларини яхши сезвотила сизга котоком РахматАзиза Шахзадэевна Ассаламу алейкум опа сиз менин оймга йордам бергиндиз энди ойм узларини яхши сезвотила сизга котоком Рахмат...Азиза Шахзадэевна Ассаламу алейкум опа сиз менин оймга йордам бергиндиз энди ойм узларини яхши сезвотила сизга котоком Рахмат...Азиза Шахзадэевна Ассаламу алейкум опа сиз менин оймга йордам бергиндиз энди ойм узларини яхши сезвотила сизга котоком Рахмат...Азиза Шахзадэевна Ассаламу алейкум опа сиз менин оймга йордам бергиндиз энди ойм узларини яхши сезвотила сизга котоком Рахмат...Азиза Шахзадэевна Ассаламу алейкум опа сиз менин оймга йордам бергиндиз энди ойм узларини яхши сезвотила сизга котоком Рахмат...Азиза Шахзадэевна Ассаламу алейкум опа сиз менин оймга йордам бергиндиз энди ойм узларини яхши сезвотила сизга котоком Рахмат213213213",
        partnerImageSrc: partner1, // Ссылка на фото партнера
    },
    {
        review: "Азиза Шахзадэевна врач понимающий, очень внимательно выслушала обо всех моих проблемахАзиза Шахзадэевна Ассаламу алейкум опа сиз менин оймга йордам бергиндиз энди ойм узларини яхши сезвотила сизга котоком РахматАзиза Шахзадэевна Ассаламу алейкум опа сиз менин оймга йордам бергиндиз энди ойм узларини яхши сезвотила сизга котоком Рахмат...Азиза Шахзадэевна Ассаламу алейкум опа сиз менин оймга йордам бергиндиз энди ойм узларини яхши сезвотила сизга котоком Рахмат...Азиза Шахзадэевна Ассаламу алейкум опа сиз менин оймга йордам бергиндиз энди ойм узларини яхши сезвотила сизга котоком Рахмат...Азиза Шахзадэевна Ассаламу алейкум опа сиз менин оймга йордам бергиндиз энди ойм узларини яхши сезвотила сизга котоком Рахмат...Азиза Шахзадэевна Ассаламу алейкум опа сиз менин оймга йордам бергиндиз энди ойм узларини яхши сезвотила сизга котоком Рахмат...Азиза Шахзадэевна Ассаламу алейкум опа сиз менин оймга йордам бергиндиз энди ойм узларини яхши сезвотила сизга котоком Рахмат213213213",
        partnerImageSrc: partner1,
    },
    {
        review: "Спасибо вам Азизе Шахзадэевна за ваш точный диагноз и лечения...",
        partnerImageSrc: partner1,
    },
];

const ReviewSlider = () => {
    const [selectedReview, setSelectedReview] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = (review) => {
        setSelectedReview(review);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setSelectedReview(null);
    };

    const settings = {
        arrows: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        responsive: [
            {
                breakpoint: 1000,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };

    const useTruncatedText = (text, defaultLength, mdxLength) => {
        const [truncatedText, setTruncatedText] = useState(text);
        const [isTruncated, setIsTruncated] = useState(false);

        useEffect(() => {
            const handleResize = () => {
                const isMdx = window.matchMedia('(min-width: 1440px)').matches;
                const maxLength = isMdx ? mdxLength : defaultLength;

                if (text.length > maxLength) {
                    setTruncatedText(text.slice(0, maxLength) + '...');
                    setIsTruncated(true);
                } else {
                    setTruncatedText(text);
                    setIsTruncated(false);
                }
            };

            handleResize(); // Call it initially to set the correct length
            window.addEventListener('resize', handleResize);

            return () => {
                window.removeEventListener('resize', handleResize);
            };
        }, [text, defaultLength, mdxLength]);

        return { truncatedText, isTruncated };
    };

    const ReviewText = ({ review }) => {
        const { truncatedText, isTruncated } = useTruncatedText(review.review, 240, 400);
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

    return (
        <div className="container mx-auto p-4 mt-[100px] mdx:mt-[120px] xl:mt-[170px]">
            <h2 id="reviews" className="font-bold text-[25px] mdx:text-[35px] xl:text-[40px] mb-[25px] mdx:mb-[30px]">Отзывы наших партнеров</h2>
            <Slider {...settings}>
                {reviews.map((review, index) => (
                    <div key={index} className="p-2">
                        <div className="p-4 bg-white rounded-[20px] ReviewsSlider min-h-[390px] mdx:min-h-[450px] relative">
                            <div className="flex items-center mb-2 border-b pb-[25px]">
                                <div className="mr-2">
                                    {renderPartnerImage(review)}
                                </div>
                            </div>
                            <ReviewText review={review} />
                        </div>
                    </div>
                ))}
            </Slider>
            <ReviewModal review={selectedReview} isOpen={isModalOpen} onClose={closeModal} />
            <Link
              href="/feedback"
            >
            <div className='w-full flex justify-center'>
                <button className='border border-[#FB6A68] mt-[35px] py-[13px] px-[53.5px] rounded-[100px] flex gap-[7px] flex-row items-center font-bold text-[#FB6A68] text-[14px] md:text-[16px]'>
                    Все отзывы
                    <Image
                        src={ArrowRight}
                        height={20}
                        width={20}
                        alt={'right icon'}
                        className="w-[23px] h-[23px] "
                    />
                </button>
            </div>
            </Link>
        </div>
    );
};

export default ReviewSlider;
