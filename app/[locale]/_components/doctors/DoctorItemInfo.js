// DoctorItemInfo.js
import React from "react";
import DoctorInfoItem from "./DoctorInfoItem";
import { useTranslations } from "next-intl";

export default function DoctorItemInfo({ doctor, locale }) {
  const t = useTranslations("Doctors")
    const infoData = [
      {
        title: t('experience'),
        description: [doctor.experience[locale] || doctor.experience.ru],
      },
      {
        title: t('languages'),
        description: [doctor.languages[locale] || doctor.languages.ru],
      },
      {
        title: t('edu'),
        description: doctor.education[locale] || doctor.education.ru,
      },
      {
        title: t('achievements'),
        description: doctor.achievements[locale] || doctor.achievements.ru,
      },
    ];
  
    return (
      <div className="w-full flex flex-col gap-12">
        <h2 className="mdl:text-4xl text-2xl font-bold">{t('information')}</h2>
        <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-5">
          {infoData.map((item, index) => (
            <DoctorInfoItem key={index} title={item.title} description={item.description} />
          ))}
        </div>
      </div>
    );
  }
  