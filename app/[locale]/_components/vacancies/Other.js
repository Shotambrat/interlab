"use client"
import Link from "next/link";
import { useTranslations } from "next-intl";
import { useEffect, useState } from "react";
import { client } from '@/sanity/lib/client';

export default function Other({ locale }) {
  const t = useTranslations('Vacancies');
  const [vacancies, setVacancies] = useState([]);

  useEffect(() => {
    const fetchVacancies = async () => {
      try {
        const data = await client.fetch(`
          *[_type == "vacancy" && isActive == true]{
            title,
            subtitle,
            slug
          }
        `);
        setVacancies(data);
      } catch (error) {
        console.error("Ошибка при загрузке вакансий:", error);
      }
    };

    fetchVacancies();
  }, []);

  return (
    <div className="w-full max-w-[1440px] mx-auto px-2 flex flex-col gap-8">
      <h2 className="text-4xl font-semibold">{t('vacansies')}</h2>
      <div className="w-full grid grid-cols-1 mdx:grid-cols-2 lg:grid-cols-3 gap-4">
        {vacancies.map((vacancy, index) => {
          // Проверка на локаль: если 'ru' — используем русские заголовки, если 'uz' — узбекские
          const title = vacancy.title?.[locale] || '';
          const subtitle = vacancy.subtitle?.[locale] || '';
          const combinedTitle = `${title}${subtitle ? ` - ${subtitle}` : ''}`; // Объединяем title и subtitle, если они есть

          return (
            <Link
              href={`/${locale}/vacancies/${vacancy.slug.current}`}
              key={index}
              className="border border-neutral-300 rounded-3xl h-[200px] p-6 flex flex-col justify-between"
            >
              <h4 className="text-xl font-semibold">{combinedTitle}</h4>
              <div className="text-red-400 text-xl font-semibold">
                {t('more')}
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
