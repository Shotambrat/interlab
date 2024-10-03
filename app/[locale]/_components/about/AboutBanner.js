"use client";
import { useState } from "react";
import aboutBanner from "@/public/images/interlab-logo.jpg";
import Image from "next/image";
import OnlineReq from "@/app/[locale]/_components/Modals/OnlineReq"
import ContactWithUs from "@/app/[locale]/_components/Modals/ContactWithUs"
import { useTranslations } from "next-intl";

export default function AboutBanner() {
  const t = useTranslations()
  const [contactWithUs, setContactWithUs] = useState(false);
  const [onlineReq, setOnlineReq] = useState(false);
  return (
    <>
      {contactWithUs ? <ContactWithUs setState={setContactWithUs} /> : <></>}
      {onlineReq ? <OnlineReq setState={setOnlineReq} /> : <></>}
      <div className="w-full h-screen-70 mdx:h-screen-90 relative max-slg:gap-5 flex flex-col pt-10">
        <div className="absolute max-slg:relative slg:top-1/3 lg:left-[7%] flex flex-col px-4 2xl:left-[12%]">
          <h1 className="text-5xl text-rose-400 font-bold">{t('About.title')}</h1>
          <p className="w-full max-w-[400px] leading-5">
          {t('About.description')}
          </p>
        </div>
        <div className="absolute max-slg:relative h-[500px] slg:h-full w-full max-slg:px-4 slg:w-1/2 top-0 right-0">
          <Image
            src={aboutBanner}
            width={1500}
            height={1500}
            alt="About Banner"
            className="h-full w-full max-slg:rounded-3xl rounded-bl-3xl object-cover"
          />
        </div>
        <div className="absolute bottom-4 slg:bottom-14 right-4 slg:right-24">
          <div className="flex gap-5 self-end text-xs font-semibold text-center uppercase">
            <button
              onClick={() => setContactWithUs(true)}
              className="flex justify-center"
            >
              <div className="flex justify-center uppercase items-center px-3 bg-white rounded-full h-[90px] w-[90px] text-red-400 hover:text-red-600 hover:shadow-xl transition-all duration-300 shadow-lg">
              {t('connect')}
              </div>
            </button>
            <button
              onClick={() => setOnlineReq(true)}
              className="flex justify-center text-white"
            >
              <div className="flex justify-center uppercase items-center px-5 bg-red-400 hover:bg-red-600 transition-all duration-300 rounded-full h-[90px] w-[90px] max-md:px-5">
              {t('online-application')}
              </div>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
