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
import license from "@/sanity/schema/license";

const AboutLicense = ({ locale }) => {
  const t = useTranslations();
  const [licenses, setLicenses] = useState(null);

  useEffect(() => {
    const fetchLicenses = async () => {
      try {
        const data = await client.fetch(`*[_type == 'license']{
          title,
          slug,
          description,
          photo
        }`);
        setLicenses(data);
      } catch (error) {
        console.error("Ошибка при загрузке лицензий:", error);
      }
    };
    fetchLicenses();
  }, []);

  console.log("License:", licenses)

  if (!licenses) return <p>Загрузка...</p>;

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 3 } },
      { breakpoint: 768, settings: { slidesToShow: 2 } },
      { breakpoint: 640, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <motion.div className="w-full max-w-[1440px] mx-auto mt-24">
      <motion.h2 className="text-center text-3xl font-bold my-4">
        {t("About.licences")}
      </motion.h2>
      <Slider {...settings}>
        {licenses.map((license, index) => (
          <div key={index} className="slide-item">
            <Image
              width={1000}
              height={1000}
              src={license.photo?.asset?.url || "/placeholder.jpg"}
              alt={`License ${index + 1}`}
              className="w-full max-w-[100%] rounded-lg shadow-xl"
            />
            <p className="text-center">{license.title[locale]}</p>
          </div>
        ))}
      </Slider>
      <Link href={`/${locale}/about/licences`} className="w-full flex justify-center">
        <motion.button className="flex gap-2 justify-center px-10 py-3.5 mt-10 text-base font-bold text-center text-red-400 border border-red-400 rounded-[100px]">
          <span>{t("Main.Banner.more")}</span>
        </motion.button>
      </Link>
    </motion.div>
  );
};

export default AboutLicense;
