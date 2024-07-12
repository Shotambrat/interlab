"use client"
import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import salePoster from "@/public/images/sale-poster.png";
import Image from 'next/image';

const OffersSlider = () => {
    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        centerMode: true,
        centerPadding: '30px',
        arrows: false, 
        responsive: [
          {
            breakpoint: 1200,
            settings: {
              slidesToShow: 4,
              slidesToScroll: 1,
              infinite: true,
            }
          },
          {
            breakpoint: 992,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1,
              infinite: true,
            }
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              infinite: true,
            }
          },
          {
            breakpoint: 576,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              infinite: true,
            }
          }
        ]
      };

  return (
    <div className="w-full">
      <Slider {...settings}>
        {new Array(5).fill().map((_, index) => (
          <div key={index} className="px-2 h-full">
            <div className={`p-4 bg-green-400 rounded-lg shadow-md h-full flex flex-col justify-between`}>
                <Image 
                src={salePoster}
                height={500}
                width={500}
                alt='Poster'
                className='h-full w-full'
                />
              <div className="flex justify-end mt-4">
                <button className="bg-white text-red-500 p-2 rounded-full shadow-md">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default OffersSlider;