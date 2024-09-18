"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
import Sale from "@/app/[locale]/_components/Sale";
import ButtonLinkBorder from "@/app/[locale]/_components/buttons/ButtonLinkBorder";
import Link from "next/link";
import BlockContent from "@sanity/block-content-to-react"; // Добавлен для рендеринга блоков
import { client } from "@/sanity/lib/client";
import imageUrlBuilder from "@sanity/image-url";
import Application from "../../_components/Application";
import { useTranslations } from "next-intl";

const builder = imageUrlBuilder(client);

function urlFor(source) {
  return builder.image(source);
}

// Функция для вытягивания данных из Sanity
const fetchPromotionBySlug = async (slug, locale) => {
  const query = `
    *[_type == "promotion" && slug.current == $slug && isActive == true][0] {
      title,
      description,
      backgroundPhoto,
      date
    }
  `;
  const params = { slug };
  const promotion = await client.fetch(query, params);

  return {
    title: promotion.title[locale] || promotion.title["ru"],
    description: promotion.description[locale] || promotion.description["ru"],
    backgroundPhoto: promotion.backgroundPhoto,
    date: promotion.date,
  };
};

export default function Page({ params }) {
  const [promotion, setPromotion] = useState(null);
  const t = useTranslations('Main.Sales')

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchPromotionBySlug(params.slug, params.locale);
      setPromotion(data);
    };
    fetchData();
  }, [params.slug, params.locale]);

  if (!promotion) {
    return <div>Загрузка...</div>;
  }

  return (
    <div className="w-full bg-white flex flex-col gap-48 pb-32">
      <div>
        <div className="relative h-[300px] w-full z-0 flex items-center">
          <div className="relative z-10 w-full max-w-[1440px] mx-auto px-2">
            <h1 className="text-4xl font-semibold text-white w-full max-w-[500px]">
              {promotion.title}
            </h1>
          </div>
          <Image
            src={urlFor(promotion.backgroundPhoto).url()}
            width={1500}
            height={1500}
            alt="Banner Blog's"
            className="w-full h-full object-cover absolute inset-0 z-0 "
          />
        </div>
        <div className="w-full max-w-[1440px] px-2 mx-auto py-8">
          <h1 className="text-3xl max-mdx:text-2xl font-bold">
            {promotion.title}
          </h1>
          <BlockContent
            blocks={promotion.description}
            projectId={process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}
            dataset={process.env.NEXT_PUBLIC_SANITY_DATASET}
          />
        </div>
      </div>
      <div className="w-full max-w-[1440px] mx-auto px-2">
        <Application />
      </div>
      <div className="flex flex-col gap-10 w-full max-w-[1440px] mx-auto px-2">
          <h2 className="text-4xl max-mdx:text-3xl font-bold">
            {t('other')}
          </h2>
          <Sale locale={params.locale} />
          <div className="w-full flex justify-center">
            <Link href={`/${params.locale}/blogs`}>
              <ButtonLinkBorder title={t('all')} />
            </Link>
          </div>
        </div>
    </div>
  );
}
