// app/[locale]/_components/doctors/Filter.js
"use client";
import DoctorCard from "@/app/[locale]/_components/doctors/DoctorCard";
import Application from "@/app/[locale]/_components/Application";
import Blog from "@/app/[locale]/_components/Blog";
import imageUrlBuilder from "@sanity/image-url";
import { client } from "@/sanity/lib/client";
import SearchComp from "../SearchComp";
import { useTranslations } from "next-intl";

const builder = imageUrlBuilder(client);
function urlFor(source) {
  return builder.image(source);
}

export default function Filter({ doctors, locale }) {
  const t = useTranslations();

  return (
    <div className="w-full h-auto bg-white max-mdl:px-4 py-24">
      <div className="w-full max-w-[1440px] mx-auto h-auto flex flex-col gap-10">
        <div className="w-full max-w-[1440px] mx-auto my-12">
          <SearchComp />
        </div>
        <div className="w-full max-w-[1440px] mx-auto grid grid-cols-1 mdx:grid-cols-2 lg:grid-cols-4 gap-5">
          {doctors.map((doctor, index) => (
            <div key={index} className=" flex justify-center">
              <DoctorCard
                locale={locale}
                name={doctor.name[locale] || doctor.name.ru}
                specialty={
                  doctor.position[locale].join(", ") ||
                  doctor.position.ru.join(", ")
                }
                imageSrc={urlFor(doctor.photo).url()}
                slug={doctor.slug.current}
              />
            </div>
          ))}
        </div>
      </div>
      <div className="w-full max-w-[1440px] mx-auto">
        <section className="flex flex-col justify-center mt-52 mb-52 rounded-[50px] max-md:mt-10 max-md:max-w-full">
          <Application />
        </section>
        <h2 className=" text-4xl font-bold text-neutral-900 max-md:mt-10 max-md:max-w-full">
          {t("Blog.title")}
        </h2>
        <Blog />
        <div className="w-full flex justify-center ">
          <button className="flex gap-2 justify-center self-center px-10 py-3.5 mt-9 text-base font-bold text-center text-red-400 border border-red-400 border-solid rounded-[100px] max-md:px-5">
            <span className="my-auto">{t("Blog.other")}</span>
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/9d858dea97bb716ac0dba9d09749ab621dbd0b3df5fbd758926ae17f2daf60f0?apiKey=e791e0f42eab4556ac944da69358f29b&"
              className="shrink-0 aspect-square w-[23px]"
              alt="Arrow icon"
            />
          </button>
        </div>
      </div>
    </div>
  );
}
