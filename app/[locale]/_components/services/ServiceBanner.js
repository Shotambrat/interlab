"use client"
import { useState } from "react";
import servicebanner from "@/public/images/ServicesBanner.png";
import Image from "next/image";
import { useTranslations } from "next-intl";
import ContactWithUs from "@/app/[locale]/_components/Modals/ContactWithUs";

export default function ServiceBanner({ locale }) {
  const [contactWithUs, setContactWithUs] = useState(false);
  const t = useTranslations();
  return (
    <div className="h-screen-70 mdx:h-screen-90 bg-serviceBg relative pt-10 xl:pb-[100px] pb-[120px] px-2">
      {contactWithUs ? <ContactWithUs setState={setContactWithUs} /> : <></>}
      <div className="mx-auto w-full h-full max-w-[1440px] flex max-mdx:flex-col-reverse justify-between items-center">
        <div className="flex flex-col w-full xl:w-2/5">
          <h1 className="xl:text-6xl slg:text-4xl text-3xl font-bold text-center xl:text-left">
            {t("Services.title")}{" "}
            <span className="text-red-400">{t("Services.subtitle")}</span>
          </h1>
          <p className="text-neutral-600 leading-6 slg:leading-4 text-lg xl:leading-6 text-center xl:text-left">
            {t("Services.description")}
          </p>
        </div>
        <div className="w-full xl:max-w-[450px] lg:mr-24 flex justify-center">
          <Image
            priority
            className="h-full max-slg:max-w-[400px] w-full"
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
          <a href={`/${locale}/results`}>
            <button className="flex justify-center">
              <div className="flex justify-center items-center uppercase px-3 bg-white rounded-full h-[90px] w-[90px] text-red-400 hover:text-red-600 hover:shadow-xl transition-all duration-300 shadow-lg">
                {t("get-result")}
              </div>
            </button>
          </a>
          <button onClick={() => setContactWithUs(true)} className="flex justify-center text-white">
            <div className="flex justify-center uppercase items-center px-5 bg-red-400 hover:bg-red-600 transition-all duration-300 rounded-full h-[90px] w-[90px] max-md:px-5">
              {t("connect")}
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}
