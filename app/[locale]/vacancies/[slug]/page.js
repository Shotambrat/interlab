"use client"
import React, { useEffect, useState } from "react";
import ServiceBanner from "../../_components/vacancies/slug/Banner";
import Info from "../../_components/vacancies/slug/Info";
import Contacts from "../../_components/legal/Contacts";
import Application from "../../_components/Application";
import Other from "../../_components/vacancies/Other";
import Blog from "../../_components/Blog";
import Link from "next/link";
import { client } from '@/sanity/lib/client';

export default function VacancyPage({ params }) {
  const [vacancyData, setVacancyData] = useState(null);

  useEffect(() => {
    const fetchVacancy = async () => {
      const data = await client.fetch(`
        *[_type == "vacancy" && slug.current == $slug][0]{
          title,
          subtitle,
          description,
          requirements,
          responsibilities,
          conditions
        }
      `, { slug: params.slug });

      setVacancyData(data);
    };

    fetchVacancy();
  }, [params.slug]);

  if (!vacancyData) {
    return <div>Загрузка...</div>;
  }

  return (
    <div className="w-full flex flex-col gap-48 bg-white pb-48">
      <ServiceBanner
        title={vacancyData.title}
        subtitle={vacancyData.subtitle}
        description={vacancyData.description}
        locale={params.locale}
      />
      <Info
        requirements={vacancyData.requirements}
        responsibilities={vacancyData.responsibilities}
        conditions={vacancyData.conditions}
        locale={params.locale}
      />
      <Contacts />
      <div className="w-full max-w-[1440px] px-2 mx-auto">
        <Application />
      </div>
      <Other locale={params.locale} />
      <div className="w-full max-w-[1440px] px-2 mx-auto flex flex-col gap-8">
        <h2 className="text-4xl font-semibold">Блоги</h2>
        <Blog locale={params.locale} />
        <div className="w-full flex justify-center">
          <Link
            href={`/${params.locale}/blogs`}
            className="flex gap-2 justify-center self-center px-10 py-3.5 mt-9 text-base font-bold text-center text-red-400 border border-red-400 border-solid rounded-[100px] max-md:px-5"
          >
            <span className="my-auto">Все Новости</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
