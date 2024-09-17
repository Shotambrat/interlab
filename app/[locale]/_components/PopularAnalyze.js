"use client";

import PopularAnalyzeItem from "@/app/[locale]/_components/PopularAnalyzeItem";
import { useEffect, useState } from "react";
import { client } from "@/sanity/lib/client";

export default function PopularAnalyze({ params }) {
  const { locale } = params;
  const [popularTests, setPopularTests] = useState(null);

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

  if (!popularTests) {
    return <p>Загрузка...</p>;
  }

  return (
    <div className="w-full max-w-[1440px] flex flex-col gap-5">
      <div className="flex flex-col gap-2 items-start">
        <h2 className="font-bold text-3xl">{/* Заголовок можно вынести в locale */}</h2>
        <p className="text-neutral-400 w-full max-w-[400px]">
          Получите результат анализа онлайн за один день! (распространяется на большинство анализов)
        </p>
        <p className="bg-rose-100 text-rose-400 font-semibold rounded-full px-4 py-2">
          Сдача анализов с 7:00 до 16:00
        </p>
      </div>
      <div className="w-full flex gap-4 flex-wrap">
        {popularTests.map((test) => (
          <PopularAnalyzeItem
            key={test.slug.current}
            title={test.name[locale]}
            price={test.price}
            slug={test.slug.current}
          />
        ))}
      </div>
      <div className="w-full flex justify-center">
        <a
          href="/analyze"
          className="flex gap-2 justify-center self-center px-10 py-3.5 mt-9 text-base font-bold text-center text-red-400 border border-red-400 border-solid rounded-[100px] max-md:px-5"
        >
          <span className="my-auto">Посмотреть все</span>
        </a>
      </div>
    </div>
  );
}
