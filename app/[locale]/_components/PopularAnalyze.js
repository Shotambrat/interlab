"use client";

import PopularAnalyzeItem from "@/app/[locale]/_components/PopularAnalyzeItem";
import { useEffect, useState } from "react";
import { client } from "@/sanity/lib/client";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { Link } from "@/i18n/routing";

export default function PopularAnalyze({ params }) {
  const { locale } = params;
  const [popularTests, setPopularTests] = useState(null);
  const t = useTranslations();

  useEffect(() => {
    const fetchPopularTests = async () => {
      try {
        const data = await client.fetch(
          `*[_type == 'test' && isPopular == true] | order(_createdAt desc) [0...5]{
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
  console.log("PopularTest", popularTests);

  if (!popularTests) {
    return <p>Загрузка...</p>;
  }

  return (
    <div className="w-full max-w-[1440px] flex flex-col gap-5">
      <div className="flex flex-col items-start">
        <p className=" text-rose-400 flex gap-2 text-xl items-center font-semibold ">
          <Image
            src={"/svg/clock.svg"}
            width={100}
            height={100}
            alt="Clock Icon"
            className="w-5"
          />{" "}
          {t("Main.Popular-analyze.graphic")}
        </p>
        <h2 className="font-bold text-3xl">
          {t("Main.Popular-analyze.title")}
        </h2>
        <p className="text-neutral-400 w-full max-w-[400px]">
          {t("Main.Popular-analyze.description")}
        </p>
      </div>
      <div className="w-full grid grid-cols-1 mdx:grid-cols-2 lg:grid-cols-3 gap-4">
        <Link
          href={`/analyze`}
          className="w-full flex flex-col justify-between bg-[#FFEFEF] p-4 rounded-3xl"
        >
          <div>
            <h3 className="font-bold text-2xl text-[#FB6A68]">
              Комплексные чек-апы — <br /> это выгодно!
            </h3>
            <p className="text-[#DC7777] w-full max-w-[360px]">
              Сдавайте несколько анализов одновременно для комплексной проверки
              здоровья и экономии средств.
            </p>
          </div>

          <div className="w-full flex gap-2">
            <button className="text-lg text-white font-semibold rounded-full py-2 px-12 bg-[#FB6A68]">
              Перейти
            </button>
          </div>
        </Link>
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
          <span className="my-auto">{t("Main.Popular-analyze.all")}</span>
          <Image
          src={'/svg/arrow-right.svg'}
          width={100}
          height={100}
          alt="Right Red Arrow"
          className="w-6"
          />
        </a>
      </div>
    </div>
  );
}
