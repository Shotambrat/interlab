"use client"
import React, { useState } from 'react';
import ServiceNav from './ServiceNav';
import ServiceItems from './ServiceItem';
import Application from '@/app/[locale]/_components/Application';
import Blog from '@/app/[locale]/_components/Blog';
import Image from 'next/image';
import arrowRightRed from "@/public/svg/arrow-right-red.svg";
import { useTranslations } from 'next-intl';

export default function ServiceList({ services, locale }) {
  const t = useTranslations()
  // Получаем уникальные категории
  const categories = Array.from(
    new Set(services.map((service) => service.category.slug.current))
  ).map((slug) => {
    return services.find((service) => service.category.slug.current === slug).category;
  });

  const [activeCategory, setActiveCategory] = useState(categories[0]?.slug.current);

  const handleFilter = (categorySlug) => {
    setActiveCategory(categorySlug);
  };

  // Фильтруем сервисы по выбранной категории
  const filteredServices = services.filter(
    (service) => service.category.slug.current === activeCategory
  );

  return (
    <div className="h-auto w-full px-4 bg-white">
      <div className="flex flex-col h-full w-full max-w-[1440px] mx-auto py-36 gap-5">
        <div className="w-full flex flex-col relative">
          <div className="w-full overflow-x-scroll flex gap-8 lg:gap-12 scrollbar-hide touch-auto">
            {categories.map((category, index) => (
              <ServiceNav
                key={index}
                title={category.name[locale]}
                active={activeCategory}
                category={category.slug.current}
                handleFilter={handleFilter}
              />
            ))}
          </div>
          <hr className="w-full border-t-2 absolute bottom-0 border-slate-300" />
        </div>
        <div className="w-full grid max-mdx:grid-cols-1 max-lg:grid-cols-2 grid-cols-3 gap-3">
          {filteredServices.map((service, index) => (
            <ServiceItems
              key={index}
              title={service.name[locale]}
              description={service.description[locale]}
              url={`/services/${service.slug.current}`}
            />
          ))}
        </div>
        <section className="flex flex-col justify-center mt-52 mb-52 rounded-[50px] max-md:mt-10 max-md:max-w-full">
          <Application />
        </section>
        <h2 className="text-4xl font-bold text-neutral-900 max-md:mt-10 max-md:max-w-full">
          {t('Licencies.blogs')}
        </h2>
        <Blog />
        <button className="flex gap-2 justify-center items-center self-center px-10 py-3.5 mt-9 text-base font-bold text-center text-red-400 border border-red-400 border-solid rounded-[100px] max-md:px-5">
          <span className="my-auto">{t('Blog.other')}</span>
          <Image
          src={arrowRightRed}
          width={100}
          height={100}
          alt='Arrow Right Red'
          quality={100}
          className='h-4 w-auto'
          />
        </button>
      </div>
    </div>
  );
}