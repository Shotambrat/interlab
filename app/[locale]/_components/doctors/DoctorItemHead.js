// DoctorItemHead component
"use client";
import { useState } from "react";
import Image from "next/image";
import ButtonModalRedBg from "@/app/[locale]/_components/buttons/ButtonModalRedBg";
import ButtonModalRedBorder from "@/app/[locale]/_components/buttons/ButtonModalRedBorder";
import imageUrlBuilder from "@sanity/image-url";
import { client } from "@/sanity/lib/client";
import ContactWithUs from "@/app/[locale]/_components/Modals/ContactWithUs";
import OnlineReq from "@/app/[locale]/_components/Modals/OnlineReq";
import { useTranslations } from "next-intl";

const builder = imageUrlBuilder(client);
function urlFor(source) {
  return builder.image(source);
}

export default function DoctorItemHead({ doctor, locale }) {
  const t = useTranslations()
  const [contactWithUs, setContactWithUs] = useState(false);
  const [onlineReq, setOnlineReq] = useState(false);
  return (
    <div className="w-full flex flex-col items-center mdl:flex-row slg:justify-start gap-8 h-auto mdl:h-[400px]">
      {contactWithUs ? <ContactWithUs setState={setContactWithUs} /> : <></>}
      {onlineReq ? <OnlineReq setState={setOnlineReq} /> : <></>}
      <Image
        src={urlFor(doctor.photo).url()}
        width={1000}
        height={1000}
        className="h-full w-auto max-mdl:w-full max-mdl:h-auto rounded-3xl"
        alt="Doctor photo"
      />
      <div className="flex flex-col justify-between max-mdl:w-full h-full pt-8 max-mdl:gap-5">
        <div className="flex flex-col gap-5">
          <h1 className="font-bold text-2xl mdl:text-4xl">
            {doctor.name[locale] || doctor.name.ru}
          </h1>
          <div className="flex gap-2 flex-wrap xl:flex-nowrap">
            {doctor.position[locale].map((elem, i) => (
              <div
                key={i}
                className="px-4 py-2 bg-red-50 text-red-400 rounded-full"
              >
                {elem}
              </div>
            ))}
          </div>
          <hr />
          <div className="flex flex-col">
            <p className="text-neutral-600">{t('Doctors.graphic')}:</p>
            <div>
              {doctor.workHours[locale].map((elem, i) => (
                <div key={i} className="font-medium text-lg">
                  {elem}
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="flex items-center gap-2 mdl:gap-5 max-w-full font-bold text-center w-[466px] max-md:flex-wrap">
          <button onClick={() => setOnlineReq(true)}>
          <ButtonModalRedBg  title={t("online-application")} />

          </button>
          <button onClick={() => setContactWithUs(true)}>
          <ButtonModalRedBorder title={t("connect")} />

          </button>
        </div>
      </div>
    </div>
  );
}
