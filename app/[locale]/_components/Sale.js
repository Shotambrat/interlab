"use client"
import React, { useState, useEffect, useRef } from "react";
import { client } from "@/sanity/lib/client";
import imageUrlBuilder from "@sanity/image-url";
import Image from "next/image";
import Link from "next/link";
import Marquee from "react-marquee-slider";
import LinkYakor from "@/app/[locale]/_components/LinkYakor";

const builder = imageUrlBuilder(client);

function urlFor(source) {
  return builder.image(source);
}

const OffersSlider = ({ locale }) => {
  const [promotions, setPromotions] = useState([]);
  const [isHovered, setIsHovered] = useState(false);
  const scrollContainerRef = useRef(null);

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

  // Function to check if manual scroll is being done
  const handleManualScroll = () => {
    // Stop auto-scroll when manual scrolling is detected
    setIsHovered(true);
  };

  return (
    <div
      className="w-full overflow-x-scroll"  // Enable horizontal scroll for manual drag
      ref={scrollContainerRef}
      onMouseEnter={() => setIsHovered(true)}  // Pause auto-scroll on hover
      onMouseLeave={() => setIsHovered(false)} // Resume auto-scroll when not hovered
      onScroll={handleManualScroll}  // Detect manual scrolling
    >
      {!isHovered && (
        <Marquee
          velocity={15}   // Control the speed of auto-scrolling
          scatterRandomly={false}  // Keep scrolling in order
          direction="ltr"  // Scroll from left to right
          pauseOnHover={true} // Pause auto-scrolling on hover
          resetAfterTries={200} // Reset the scroll after 200 tries (in case of issues)
          delay={0}  // No delay between loops
        >
          {promotions.map((promotion, index) => (
            <Link
              href={`/${locale}/sales/${promotion.slug.current}`}
              key={index}
              className="inline-block mx-3"
            >
              <div className="w-[250px] p-3 rounded-lg h-full flex flex-col gap-2 justify-between">
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
      )}

      {/* Render promotion items in normal mode to allow manual scroll */}
      {isHovered && (
        <div className="flex gap-3">
          {promotions.map((promotion, index) => (
            <Link
              href={`/${locale}/sales/${promotion.slug.current}`}
              key={index}
              className="inline-block mx-3"
            >
              <div className="w-[250px] p-3 rounded-lg h-full flex flex-col gap-2 justify-between">
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
        </div>
      )}
    </div>
  );
};

export default OffersSlider;
