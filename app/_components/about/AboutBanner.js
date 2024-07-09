"use client";
import { useState } from "react";
import aboutBanner from "@/public/images/about-banner.png";
import Image from "next/image";
import OnlineReq from "@/app/_components/Modals/OnlineReq"
import ContactWithUs from "@/app/_components/Modals/ContactWithUs"

export default function AboutBanner() {
  const [contactWithUs, setContactWithUs] = useState(false);
  const [onlineReq, setOnlineReq] = useState(false);
  return (
    <>
      {contactWithUs ? <ContactWithUs setState={setContactWithUs} /> : <></>}
      {onlineReq ? <OnlineReq setState={setOnlineReq} /> : <></>}
      <div className="w-full h-screen relative max-slg:gap-5 flex flex-col pt-10">
        <div className="absolute max-slg:relative slg:top-1/3 left-4 lg:left-[7%] flex flex-col gap-4">
          <h1 className="text-5xl text-rose-400 font-bold">О нас</h1>
          <p className="w-full max-w-[400px] leading-5">
            Клиника Intermed – это сочетание традиций и инноваций в медицине. Мы
            предлагаем услуги, основанные на многолетнем опыте и новейших
            медицинских достижениях.
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
        <div className="absolute bottom-20 right-4">
          <div className="flex gap-5 self-end text-xs font-semibold text-center uppercase">
            <button
              onClick={() => setContactWithUs(true)}
              className="flex justify-center"
            >
              <div className="flex justify-center items-center px-3 bg-white rounded-full h-[90px] w-[90px] text-red-400 hover:text-red-600 hover:shadow-xl transition-all duration-300 shadow-lg">
                СВЯЗАТЬСЯ
              </div>
            </button>
            <button
              onClick={() => setOnlineReq(true)}
              className="flex justify-center text-white"
            >
              <div className="flex justify-center items-center px-5 bg-red-400 hover:bg-red-600 transition-all duration-300 rounded-full h-[90px] w-[90px] max-md:px-5">
                ОНЛАЙН ЗАПИСЬ
              </div>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
