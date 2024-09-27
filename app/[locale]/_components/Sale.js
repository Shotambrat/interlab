"use client";
import React, { useState, useEffect } from "react";
import { client } from "@/sanity/lib/client";
import imageUrlBuilder from "@sanity/image-url";
import Image from "next/image";
import Link from "next/link";
import Marquee from "react-fast-marquee";
import LinkYakor from "@/app/[locale]/_components/LinkYakor";

const builder = imageUrlBuilder(client);

function urlFor(source) {
  return builder.image(source);
}

const OffersSlider = ({ locale }) => {
  const [promotions, setPromotions] = useState([]);

  useEffect(() => {
    const fetchPromotions = async () => {
      try {
        const promotions = await client.fetch(
          `*[_type == "promotion" && isActive == true]{
            icon,
            title,
            date,
            slug
          }`
        );
        setPromotions(promotions);
      } catch (error) {
        console.error("Ошибка при загрузке акций:", error);
      }
    };
    fetchPromotions();
  }, []);

  const getIcon = (promotion) => promotion.icon[locale] || promotion.icon["ru"];
  const getTitle = (promotion) => promotion.title[locale] || promotion.title["ru"];

  if (promotions.length === 0) {
    return <p>Нет доступных акций</p>;
  }

  if (promotions.length < 5) {
    return (
      <div className="w-full grid grid-cols-1 mdx:grid-cols-2 mdl:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5">
        {promotions.map((promotion, index) => (
          <Link
            href={`/${locale}/sales/${promotion.slug.current}`}
            key={index}
            className="inline-block"
          >
            <div className="w-[250px] p-1 rounded-lg h-full flex flex-col gap-2 justify-between">
              <div className="relative w-full h-[250px]">
                {promotion.icon && (
                  <Image
                    src={urlFor(getIcon(promotion)).url()}
                    height={500}
                    width={500}
                    alt="Icon"
                    className="h-full w-full object-cover rounded-3xl"
                  />
                )}
                {/* <div>
                  <LinkYakor />
                </div> */}
              </div>
              <div className="flex flex-col gap-1">
                <h2 className="text-xl font-bold line-clamp-2">
                  {getTitle(promotion)}
                </h2>
                <p className="text-neutral-400 text-sm">
                  {new Date(promotion.date).toLocaleDateString(
                    locale === "uz" ? "uz-UZ" : "ru-RU",
                    {
                      day: "numeric",
                      month: "long",
                      year: "numeric",
                    }
                  )}
                </p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    )
  }

  return (
    <div className="w-full">
      <Marquee
        gradient={false} // Remove gradient on the edges for a clean look
        speed={40} // Control scroll speed
        pauseOnHover={true} // Pause the scroll exactly where the user hovers
        loop={0} // Infinite loop
      >
        {promotions.map((promotion, index) => (
          <Link
            href={`/${locale}/sales/${promotion.slug.current}`}
            key={index}
            className="inline-block"
          >
            <div className="w-[250px] p-1 rounded-lg h-full flex flex-col gap-2 justify-between">
              <div className="relative w-full h-[250px]">
                {promotion.icon && (
                  <Image
                    src={urlFor(getIcon(promotion)).url()}
                    height={500}
                    width={500}
                    alt="Icon"
                    className="h-full w-full object-cover rounded-3xl"
                  />
                )}
                <div>
                  <LinkYakor />
                </div>
              </div>
              <div className="flex flex-col gap-1">
                <h2 className="text-xl font-bold line-clamp-2">
                  {getTitle(promotion)}
                </h2>
                <p className="text-neutral-400 text-sm">
                  {new Date(promotion.date).toLocaleDateString(
                    locale === "uz" ? "uz-UZ" : "ru-RU",
                    {
                      day: "numeric",
                      month: "long",
                      year: "numeric",
                    }
                  )}
                </p>
              </div>
            </div>
          </Link>
        ))}
      </Marquee>
    </div>
  );
};

export default OffersSlider;
