import React from "react";
import doctorsBanner from '@/public/images/doctors-manner.png'
import Image from "next/image";
import { useTranslations } from "next-intl";

export default function ServiceBanner() {
  const t = useTranslations()
  return (
    <div className="relative bg-rose-50 pt-10 px-2">
      <div className="relative mx-auto w-full h-full xl:pb-[100px] pb-[40px] max-w-[1440px] flex max-mdx:flex-col justify-between items-center">
        <div className="flex flex-col gap-5 w-full xl:w-2/5">
          <h1 className="xl:text-5xl slg:text-4xl text-3xl font-bold text-center xl:text-left">
            {t('Doctors.title')}<span className="text-red-400">{t('Doctors.subtitle')}</span>
          </h1>
          <p className="text-neutral-600 leading-4 xl:leading-5 text-center xl:text-left">
          {t('Doctors.description')}
          </p>
        </div>
        <div className="hidden xl:block xl:absolute xl:w-1/2 right-0 bottom-0">
          <Image
            priority
            className="h-full w-full"
            src={doctorsBanner}
            width={1000}
            height={1000}
            alt="The Wild Oasis logo"
            quality={100}
          />
        </div>
        <div className="absolute bottom-4 right-4 hidden xl:block">
        <div className="flex gap-5 self-end mt-4 text-xs font-semibold text-center uppercase">
          <button className="flex justify-center">
            <div className="flex justify-center items-center px-3 bg-white rounded-full h-[90px] w-[90px] text-red-400 hover:text-red-600 hover:shadow-xl uppercase transition-all duration-300 shadow-lg">
              {t('get-result')}
            </div>
          </button>
          <button className="flex justify-center text-white">
            <div className="flex justify-center items-center px-5 bg-red-400 hover:bg-red-600 transition-all duration-300 rounded-full h-[90px] w-[90px] max-md:px-5">
              {t('online-application')}
            </div>
          </button>
        </div>
      </div>
      </div>
      <div className="w-full xl:absolute xl:hidden right-0 bottom-0 relative">
          <Image
            priority
            className="h-full w-full"
            src={doctorsBanner}
            width={1000}
            height={1000}
            alt="The Wild Oasis logo"
            quality={100}
          />
        </div>
        <div className="absolute bottom-4 right-4 xl:hidden">
        <div className="flex gap-5 self-end mt-4 text-xs font-semibold text-center uppercase">
          <button className="flex justify-center">
            <div className="flex justify-center items-center px-3 bg-white rounded-full h-[90px] w-[90px] text-red-400 hover:text-red-600 hover:shadow-xl transition-all duration-300 shadow-lg">
            {t('get-result')}
            </div>
          </button>
          <button className="flex justify-center text-white">
            <div className="flex justify-center items-center px-5 bg-red-400 hover:bg-red-600 transition-all duration-300 rounded-full h-[90px] w-[90px] max-md:px-5">
            {t('online-application')}
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}
