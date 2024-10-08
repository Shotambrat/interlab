"use client";

import PopularAnalyzeItem from "@/app/[locale]/_components/PopularAnalyzeItem";
import { useEffect, useState } from "react";
import { client } from "@/sanity/lib/client";
import { useTranslations } from "next-intl";

export default function PopularAnalyze({ params }) {
  const { locale } = params;
  const [popularTests, setPopularTests] = useState(null);
  const t = useTranslations();

  useEffect(() => {
    const fetchPopularTests = async () => {
      try {
        const data = await client.fetch(
          `*[_type == 'test' && isPopular == true]{
            name,
            slug,
            price
          }`
        );
        setPopularTests(data);
      } catch (error) {
        console.error("Ошибка при загрузке популярных анализов:", error);
      }
    };
    fetchPopularTests();
  }, []);
console.log("PopularTest",popularTests)

  if (!popularTests) {
    return <p>Загрузка...</p>;
  }

  return (
    <div className="w-full max-w-[1440px] flex flex-col gap-5">
      <div className="flex flex-col gap-2 items-start">
        <h2 className="font-bold text-3xl">{t('Main.Popular-analyze.title')}</h2>
        <p className="text-neutral-400 w-full max-w-[400px]">
          {t('Main.Popular-analyze.description')}
        </p>
        <p className="bg-rose-100 text-rose-400 font-semibold rounded-full px-4 py-2">
          {t('Main.Popular-analyze.graphic')}
        </p>
      </div>
      <div className="w-full grid grid-cols-1 mdx:grid-cols-2 lg:grid-cols-3 gap-4">
        {popularTests.map((test) => (
          <PopularAnalyzeItem
          locale={params.locale}
            key={test.slug.current}
            title={test.name[locale]}
            price={test.price}
            slug={test.slug.current}
          />
        ))}
      </div>
      <div className="w-full flex justify-center">
        <a
          href={`/${params.locale}/analyze`}
          className="flex gap-2 justify-center self-center px-10 py-3.5 mt-9 text-base font-bold text-center text-red-400 border border-red-400 border-solid rounded-[100px] max-md:px-5"
        >
          <span className="my-auto">{t('Main.Popular-analyze.all')}</span>
        </a>
      </div>
    </div>
  );
}
