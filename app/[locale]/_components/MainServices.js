"use client"
import { useTranslations } from "next-intl";
import ServiceCard from "./ServiceCard";
import { useState, useEffect } from "react";
import { client } from "@/sanity/lib/client";
import imageUrlBuilder from "@sanity/image-url";



const builder = imageUrlBuilder(client);

function urlFor(source) {
  return builder.image(source);
}
export default function MainServices({params}) {
    const [serviceCategories, setServiceCategories] = useState([]);

    const locale = params.locale
    const t = useTranslations("");
    useEffect(() => {
        const fetchServices = async () => {
          try {
            const categoriesData = await client.fetch(`
              *[_type == "serviceCategory" && isPopular == true] | order(order asc) {
                _id,
                name,
                slug,
                description,
                icon,
                colourCode
              }
            `);
            setServiceCategories(categoriesData);
          } catch (error) {
            console.error("Ошибка при загрузке услуг:", error);
          }
        };
    
        fetchServices();
      }, []);

    console.log("services Категории", serviceCategories);
    const getRandomColor = () => {
      const colors = ["#FFC0CB", "#ADD8E6", "#90EE90", "#FFD700", "#FFA07A"];
      return colors[Math.floor(Math.random() * colors.length)];
    };
  return (
    <div className="max-w-[1440px] px-2 mx-auto w-full pb-24">
      <a href="/services" className="">
        <h2 className="lg:mt-52 mt-24 text-3xl mdx:text-4xl font-bold text-neutral-900 max-md:max-w-full">
          {t("Main.Services.title")}
        </h2>
      </a>

      <div className="flex flex-col items-center mdx:mt-10 w-full px-0">
        {serviceCategories.length === 0 ? (
          <p>Нет доступных категорий услуг</p>
        ) : (
          <>
            {/* Первая строка с 2 колонками, где 1 элемент шире другого */}
            <div className="grid grid-cols-1 mdx:grid-cols-2 lg:grid-cols-[60%,_40%] gap-5 w-full mt-5 lg:pr-4">
              {serviceCategories.slice(0, 2).map((service, index) => (
                <div key={service._id} className="w-full">
                  <ServiceCard
                    locale={params.locale}
                    title={service.name[locale]}
                    description={service.description[locale]}
                    imageSrc={urlFor(service.icon).url()}
                    bgColor={
                      service.colourCode ? service.colourCode : getRandomColor()
                    }
                    slug={service.slug.current}
                  />
                </div>
              ))}
            </div>

            {/* Вторая и последующие строки с 3 колонками */}
            <div className="grid grid-cols-1 mdx:grid-cols-2 lg:grid-cols-3 gap-5 w-full mt-5">
              {serviceCategories.slice(2).map((service) => (
                <div key={service._id} className="w-full">
                  <ServiceCard
                    locale={params.locale}
                    title={service.name[locale]}
                    description={service.description[locale]}
                    imageSrc={urlFor(service.icon).url()}
                    bgColor={
                      service.colourCode ? service.colourCode : getRandomColor()
                    }
                    slug={service.slug.current}
                  />
                </div>
              ))}
            </div>
          </>
        )}
        {/* <div className="w-full flex justify-center mdl:hidden mt-12">
              <button
                onClick={() => setServicesOpen((prev) => !prev)}
                className="text-rose-400 text-xl font-semibold flex gap-3 items-center"
              >
                {servicesOpen ? t("collapse") : t("Main.Services.all")}
                <Image
                  src={arrowDownRed}
                  height={100}
                  width={100}
                  alt="Down Icon Red"
                  className={`w-4 h-4 transition-transform duration-300 ${
                    servicesOpen ? "rotate-180" : "rotate-0"
                  }`}
                />
              </button>
            </div> */}
      </div>
    </div>
  );
}
