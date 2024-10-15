"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Slider from "react-slick";
import { useTranslations } from "next-intl";
import { useEffect, useState } from "react";
import { client } from "@/sanity/lib/client";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Link from "next/link";
import LicenseModal from "../Modals/LicenseModal";

const AboutLicense = ({ locale }) => {
  const t = useTranslations();
  const [licenses, setLicenses] = useState(null);
  const [modal, setModal] = useState(false);
  const [selectedLicense, setSelectedLicense] = useState(null);
  const [autoPlay, setAutoPlay] = useState(false);

  useEffect(() => {
    const fetchLicenses = async () => {
      try {
        const data = await client.fetch(`
          *[_type == 'license']{
            title,
            slug,
            description,
            photo{
              asset->{
                url
              }
            }
          }
        `);
        data.length <= 4 ? null : setAutoPlay(true)
        setLicenses(data);
      } catch (error) {
        console.error("Ошибка при загрузке лицензий:", error);
      }
    };
    fetchLicenses();
  }, []);

  const openModal = (license) => {
    setSelectedLicense(license);
    setModal(true);
  };

  const closeModal = () => {
    setModal(false);
    setSelectedLicense(null);
  };

  if (!licenses) return <p>Загрузка...</p>;

  const settings = {
    arrows: false,
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: autoPlay,
    autoplaySpeed: 2000,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 3 } },
      { breakpoint: 768, settings: { slidesToShow: 2 } },
      { breakpoint: 640, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <motion.div className="w-full max-w-[1440px] mx-auto">
      <motion.h2 className="text-left text-3xl font-bold my-4 mx-2">
        {t("About.licences")}
      </motion.h2>

      <Slider {...settings}>
        {licenses.map((license, index) => (
          <div key={index} className="slide-item" onClick={() => openModal(license)}>
            {/* Проверяем, есть ли URL изображения */}
            {license.photo?.asset?.url ? (
              <Image
                width={1000}
                height={1000}
                src={license.photo.asset.url} // Используем URL изображения
                alt={`License ${index + 1}`}
                className="w-full max-w-[100%] rounded-lg shadow-xl"
                onError={(e) => {
                  console.error("Error loading image:", e);
                  e.target.src = "/placeholder.jpg"; // Если ошибка загрузки изображения
                }}
              />
            ) : (
              <Image
                width={1000}
                height={1000}
                src="/placeholder.jpg" // Плейсхолдер если нет изображения
                alt="Placeholder image"
                className="w-full max-w-[100%] rounded-lg shadow-xl"
              />
            )}
          </div>
        ))}
      </Slider>

      {modal && selectedLicense && (
        <LicenseModal
          data={selectedLicense}
          close={closeModal}
        />
      )}

      <Link href={`/${locale}/about/licences`} className="w-full flex justify-center">
        <motion.button className="flex gap-2 justify-center px-16 py-3.5 mt-10 text-base font-bold text-center text-red-400 border border-red-400 rounded-[100px]">
          <span>{t("Main.Banner.more")}</span>
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/9d858dea97bb716ac0dba9d09749ab621dbd0b3df5fbd758926ae17f2daf60f0?apiKey=e791e0f42eab4556ac944da69358f29b&"
            className="shrink-0 aspect-square w-[23px]"
            alt="Arrow icon"
          />
        </motion.button>
      </Link>
    </motion.div>
  );
};

export default AboutLicense;
