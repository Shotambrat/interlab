"use client";
import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from 'next/image';
import LinkYakor from '@/app/[locale]/_components/LinkYakor';
import { client } from '@/sanity/lib/client';
import imageUrlBuilder from '@sanity/image-url';
import Link from 'next/link';

const builder = imageUrlBuilder(client);

function urlFor(source) {
  return builder.image(source);
}

const OffersSlider = ({ locale }) => {
  const [promotions, setPromotions] = useState([]);

  useEffect(() => {
    const fetchPromotions = async () => {
      try {
        const promotions = await client.fetch(`*[_type == "promotion" && isActive == true]{
          icon,
          title,
          date,
          slug
        }`);
        setPromotions(promotions);
      } catch (error) {
        console.error("Ошибка при загрузке акций:", error);
      }
    };
    fetchPromotions();
  }, []);

  if (promotions.length === 0) {
    return <p>Нет доступных акций</p>;
  }

  const getIcon = (promotion) => {
    // Возвращаем иконку для выбранного языка, по умолчанию русскую
    return promotion.icon[locale] || promotion.icon['ru'];
  };

  const getTitle = (promotion) => {
    // Если заголовок для данного языка не найден, возвращаем заголовок на русском по умолчанию
    return promotion.title[locale] || promotion.title['ru'];
  };

  if (promotions.length === 1) {
    const promotion = promotions[0];
    return (
      <Link href={`/${locale}/sales/${promotion.slug.current}`} className="w-full px-2 h-full">
        <div className="p-4 rounded-lg h-full flex flex-col gap-4 justify-between max-w-[300px]">
          <div className='w-full relative h-full'>
            {promotion.icon && (
              <Image 
                src={urlFor(getIcon(promotion)).url()}
                height={500}
                width={500}
                alt='Icon'
                className='h-full w-full rounded-3xl'
              />
            )}
            <div className=''>
              <LinkYakor />
            </div>
          </div>
          <div className='flex flex-col gap-1'>
            <h2 className='text-2xl font-bold line-clamp-2'>
              {getTitle(promotion)}
            </h2>
            <p className='text-neutral-400 text-sm'>
              {new Date(promotion.date).toLocaleDateString(locale === 'uz' ? 'uz-UZ' : 'ru-RU', {
                day: 'numeric',
                month: 'long',
                year: 'numeric'
              })}
            </p>
          </div>
        </div>
      </Link>
    );
  }

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
      <Slider {...settings} className="grid grid-rows-1">
        {promotions.map((promotion, index) => (
          <Link href={`/${locale}/sales/${promotion.slug.current}`} key={index} className="px-2 h-full">
            <div className="p-4 rounded-lg h-full flex flex-col gap-4 justify-between">
              <div className='w-full relative h-full'>
                {promotion.icon && (
                  <Image 
                    src={urlFor(getIcon(promotion)).url()}
                    height={500}
                    width={500}
                    alt='Icon'
                    className='h-[230px] object-cover w-full rounded-3xl'
                  />
                )}
                <div className=''>
                  <LinkYakor />
                </div>
              </div>
              <div className='flex flex-col gap-1'>
                <h2 className='text-2xl font-bold line-clamp-2'>
                  {getTitle(promotion)}
                </h2>
                <p className='text-neutral-400 text-sm'>
                  {new Date(promotion.date).toLocaleDateString(locale === 'uz' ? 'uz-UZ' : 'ru-RU', {
                    day: 'numeric',
                    month: 'long',
                    year: 'numeric'
                  })}
                </p>
              </div>
            </div>
          </Link>
        ))}
      </Slider>
    </div>
  );
};

export default OffersSlider;
