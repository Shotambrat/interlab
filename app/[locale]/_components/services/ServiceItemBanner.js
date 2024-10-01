"use client";
import { useTranslations } from "next-intl";
import ContactWithUs from "@/app/[locale]/_components/Modals/ContactWithUs";
import OnlineReq from "@/app/[locale]/_components/Modals/OnlineReq";
import { useState } from "react";
import PortableText from '@sanity/block-content-to-react'; // Import PortableText for rendering block content

export default function ServiceItemBanner({ service, locale }) {
  const [contactWithUs, setContactWithUs] = useState(false);
  const [onlineReq, setOnlineReq] = useState(false);
  
  const t = useTranslations();
  
  // Use optional chaining to access service details safely
  const serviceName = service.name?.[locale] || service.name?.ru || "Название сервиса";
  const serviceDescription = service.description?.[locale] || service.description?.ru || "Описание отсутствует";

  // Function to determine if content is block content
  const isBlockContent = (content) => {
    return Array.isArray(content) && content.some((block) => block._type === 'block');
  };

  return (
    <div className="w-full bg-slate-100 py-12">
      {contactWithUs ? <ContactWithUs setState={setContactWithUs} /> : null}
      {onlineReq ? <OnlineReq setState={setOnlineReq} /> : null}
      
      <div className="w-full max-w-[1440px] flex flex-col px-2 gap-5 mx-auto">
        <h1 className="text-4xl max-mdx:text-2xl font-bold">{serviceName}</h1>
        
        {/* Conditionally render description based on its type */}
        <div className="w-full max-w-[550px] leading-5 text-neutral-400">
          {isBlockContent(serviceDescription) ? (
            <PortableText blocks={serviceDescription} />
          ) : (
            <p>{serviceDescription}</p>
          )}
        </div>

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
