"use client"
import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import salePoster from "@/public/images/sale-poster.png";
import Image from 'next/image';
import LinkYakor from '@/app/_components/LinkYakor';

const OffersSlider = () => {
    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        centerMode: true,
        centerPadding: '5px',
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
            <div className={`p-4 rounded-lg h-full flex flex-col gap-4 justify-between`}>
                <div className='w-full relative h-full'>

                <Image 
                src={salePoster}
                height={500}
                width={500}
                alt='Poster'
                className='h-full w-full rounded-3xl'
                />
                <div className=''>
                  <LinkYakor />
                </div>
                </div>
                <div className='flex flex-col gap-1'>
                  <h2 className='text-2xl font-bold'>
                    Скидки 30% на все анализы в эту пятницу
                  </h2>
                  <p className='text-neutral-400 text-sm'>5 июля 2024г.</p>
                </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default OffersSlider;