import React from "react";
import servicebanner from '@/public/images/ServicesBanner.png'
import Image from "next/image";

export default function ServiceBanner() {
  return (
    <div className=" h-screen bg-rose-50 relative pt-10 xl:pb-[100px] pb-[120px] px-2">
      <div className="mx-auto w-full h-full max-w-[1440px] flex max-mdx:flex-col-reverse justify-between items-center">
        <div className="flex flex-col gap-5 w-full xl:w-2/5">
          <h1 className="xl:text-5xl slg:text-4xl text-3xl font-bold text-center xl:text-left">
            Услуги клиники <span className="text-red-400">Intermed</span>
          </h1>
          <p className="text-neutral-600 leading-4 xl:leading-5 text-center xl:text-left">
            Мы предлагаем широкий спектр медицинских услуг, включая консультации
            высококвалифицированных специалистов, современные диагностические
            процедуры и лабораторные исследования. Наши врачи заботятся о вашем
            здоровье и готовы помочь вам на каждом этапе лечения.
          </p>
        </div>
        <div className="w-full xl:w-2/5">
          <Image
            priority
            className="h-full w-full"
            src={servicebanner}
            width={1000}
            height={1000}
            alt="The Wild Oasis logo"
            quality={100}
          />
        </div>
      </div>
      <div className="absolute bottom-4 right-4">
        <div className="flex gap-5 self-end mt-4 text-xs font-semibold text-center uppercase">
          <button className="flex justify-center">
            <div className="flex justify-center items-center px-3 bg-white rounded-full h-[90px] w-[90px] text-red-400 hover:text-red-600 hover:shadow-xl transition-all duration-300 shadow-lg">
              ПОЛУЧИТЬ РЕЗУЛЬТАТ
            </div>
          </button>
          <button className="flex justify-center text-white">
            <div className="flex justify-center items-center px-5 bg-red-400 hover:bg-red-600 transition-all duration-300 rounded-full h-[90px] w-[90px] max-md:px-5">
              ОНЛАЙН ЗАПИСЬ
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}
