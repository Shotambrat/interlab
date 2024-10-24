"use client";
import React, { useState } from "react";
import ServiceItems from "./ServiceItem";
import Application from "@/app/[locale]/_components/Application";
import Blog from "@/app/[locale]/_components/Blog";
import Image from "next/image";
import arrowRightRed from "@/public/svg/arrow-right-red.svg";
import { Select } from "antd";
import { useTranslations } from "next-intl";
import { DownOutlined } from "@ant-design/icons";

export default function ServiceList({ services, categories, locale }) {
  const t = useTranslations();

  const [servicesOpen, setServicesOpen] = useState(false);

  const [selectedCategory, setSelectedCategory] = useState(null); // Default to "All services"

  const mobileCategory = [
    { value: null, label: "Все услуги" }, // Опция "Все услуги"
    ...categories.map((category) => ({
      value: category._id,
      label: category.name[locale] || category.name.ru,
    })),
  ];

  // Filter services based on selected category
  const filteredServices = selectedCategory || selectedCategory == "null"
    ? services.filter((service) => service.category._id === selectedCategory)
    : services;

  return (
    <div className="h-auto w-full px-4 bg-white">
      <div className="flex flex-col h-full w-full max-w-[1440px] mx-auto py-36 gap-5">
        {/* Tabs for categories (Desktop) */}
        <div className="flex gap-4 mb-6 flex-wrap max-mdx:hidden">
          <button
            className={`px-4 py-3 rounded-full  ${!selectedCategory ? "bg-[#FB6A68] text-white" : "border border-[#E4E4E4]"}`}
            onClick={() => setSelectedCategory(null)}
          >
            Все услуги
          </button>

          {categories.map((category) => (
            <button
              key={category._id}
              className={`px-4 py-3 rounded-full ${selectedCategory === category._id ? "bg-[#FB6A68] text-white" : "border border-[#E4E4E4]"}`}
              onClick={() => setSelectedCategory(category._id)}
            >
              {category.name[locale] || category.name.ru}
            </button>
          ))}
        </div>

        {/* Select for categories (Mobile) */}
        <div className="mdx:hidden">
          <Select
            defaultValue={null}
            className="custom-select"
            options={mobileCategory}
            onChange={(value) => {
              console.log(value);
              setSelectedCategory(value)}}
            suffixIcon={<DownOutlined style={{ color: "white" }} />} // Белая стрелка
            style={{
              backgroundColor: "#FB6A68", // Красный фон
              color: "white", // Белый текст
              borderRadius: "50px", // Закругленные края
              height: "48px", // Высота кнопки
              fontSize: "18px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
            status="error"
            dropdownStyle={{
              backgroundColor: "#fff", // Белый фон для выпадающего списка
              borderRadius: "10px", // Закругление краев выпадающего списка
            }}
            popupClassName="custom-select-dropdown" // Класс для стилизации выпадающего списка
          />
        </div>

        {/* Display filtered services */}
        <div className="w-full grid max-mdx:hidden max-mdx:grid-cols-1 max-lg:grid-cols-2 grid-cols-3 gap-3">
          {filteredServices.map((service, index) => (
            <ServiceItems
              key={index}
              title={service.name[locale] || service.name.ru}
              category={
                service.category.name[locale] || service.category.name.ru
              }
              url={`/services/${service.slug.current}`}
              locale={locale}
            />
          ))}
        </div>
        <div className="w-full mdx:hidden grid max-mdx:grid-cols-1 max-lg:grid-cols-2 grid-cols-3 gap-3">
          {servicesOpen &&
            filteredServices.map((service, index) => (
              <ServiceItems
                key={index}
                title={service.name[locale] || service.name.ru}
                category={
                  service.category.name[locale] || service.category.name.ru
                }
                url={`/services/${service.slug.current}`}
                locale={locale}
              />
            ))}
          {!servicesOpen &&
            filteredServices
              .slice(0, 3)
              .map((service, index) => (
                <ServiceItems
                  key={index}
                  title={service.name[locale] || service.name.ru}
                  category={
                    service.category.name[locale] || service.category.name.ru
                  }
                  url={`/services/${service.slug.current}`}
                  locale={locale}
                />
              ))}
        </div>
        {filteredServices.length >= 4 && (
          <div className="w-full flex justify-center mdx:hidden">
            <button
              onClick={() => setServicesOpen((prev) => !prev)}
              className="text-rose-400 text-xl font-semibold flex gap-3 items-center"
            >
              {servicesOpen ? t("collapse") : t("Main.Services.all")}
              <Image
                src={"/svg/arrow-down-red.svg"}
                height={100}
                width={100}
                alt="Down Icon Red"
                className={`w-4 h-4 transition-transform duration-300 ${
                  servicesOpen ? "rotate-180" : "rotate-0"
                }`}
              />
            </button>
          </div>
        )}

        {/* Application section */}
        <section className="flex flex-col justify-center mt-52 mb-52 rounded-[50px] max-md:mt-10 max-md:max-w-full">
          <Application />
        </section>

        {/* Blog section */}
        <h2 className="text-4xl font-bold text-neutral-900 max-md:mt-10 max-md:max-w-full">
          {t("Licencies.blogs")}
        </h2>
        <Blog locale={locale} />
        <button className="flex gap-2 justify-center items-center self-center px-10 py-3.5 mt-9 text-base font-bold text-center text-red-400 border border-red-400 border-solid rounded-[100px] max-md:px-5">
          <span className="my-auto">{t("Blog.other")}</span>
          <Image
            src={arrowRightRed}
            width={100}
            height={100}
            alt="Arrow Right Red"
            quality={100}
            className="h-4 w-auto"
          />
        </button>
      </div>
    </div>
  );
}
