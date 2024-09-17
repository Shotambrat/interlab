"use client"
import { useTranslations } from "next-intl";
import ContactWithUs from "@/app/[locale]/_components/Modals/ContactWithUs";
import OnlineReq from "@/app/[locale]/_components/Modals/OnlineReq";
import { useState } from "react";

export default function ServiceItemBanner({ service, locale }) {
  const [contactWithUs, setContactWithUs] = useState(false);
  const [onlineReq, setOnlineReq] = useState(false);
  
  const t = useTranslations()
  // Используем опциональную цепочку для безопасного доступа к данным
  const serviceName = service.name?.[locale] || service.name?.ru || "Название сервиса";
  const serviceDescription = service.description?.[locale] || service.description?.ru || "Описание отсутствует";

  return (
    <div className="w-full bg-slate-100 py-12">
      {contactWithUs ? <ContactWithUs setState={setContactWithUs} /> : <></>}
      {onlineReq ? <OnlineReq setState={setOnlineReq} /> : <></>}
      <div className="w-full max-w-[1440px] flex flex-col px-2 gap-5 mx-auto">
        <h1 className="text-4xl max-mdx:text-2xl font-bold">{serviceName}</h1>
        <p className="w-full max-w-[550px] leading-5 text-neutral-400">{serviceDescription}</p>
        <div className="flex gap-3 max-md:flex-wrap">
          <button onClick={() => setOnlineReq(true)} className="mdx:px-10 px-4 py-3 rounded-full bg-red-400 text-white font-semibold">
            {t('online-application')}
          </button>
          <button onClick={() => setContactWithUs(true)} className="mdx:px-10 px-6 py-3 rounded-full border border-red-400 text-red-400 font-semibold">
            {t('connect')}
          </button>
        </div>
      </div>
    </div>
  );
}
