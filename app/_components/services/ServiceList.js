import React, { useState } from "react";
import ServiceNav from "@/app/_components/services/ServiceNav";
import ServiceItems from "@/app/_components/services/ServiceItem";
import Application from "@/app/_components/Application";
import Blog from "@/app/_components/Blog";

export default function ServiceList() {
  const data = [
    {
      title: "Мед. анализы",
      category: "med-analyze",
      data: [
        {
          title: "ИХЛА",
          description: "Медецинские анализы",
          url: "/ihla",
        },
        {
          title: "ПЦР",
          description: "Медецинские анализы",
          url: "/psr",
        },
        {
          title: "Гематология",
          description: "Медецинские анализы",
          url: "/gematologiya",
        },
        {
          title: "Биохимия",
          description: "Медецинские анализы",
          url: "/biohimiya",
        },
      ],
    },
    {
      title: "Консультация врачей",
      category: "consultatsiya-vrachey",
      data: [
        {
          title: "Услуги гинеколога",
          description: "Консультация врачей",
          url: "/uslugi-genekologa",
        },
        {
          title: "Услуги нервопотолога",
          description: "Консультация врачей",
          url: "/uslugi-nevropotolaga",
        },
        {
          title: "Услуги эндокринолога",
          description: "Консультация врачей",
          url: "/uslugi-endokrinologa",
        },
        {
          title: "Услуги кардиолога",
          description: "Консультация врачей",
          url: "/uslugi-kardiologa",
        },
      ],
    },
    {
      title: "Рентгенография",
      category: "rentgenografiya",
      data: [
        {
          title: "Цифровая рентгенография",
          description: "Рентгенография",
          url: "/uslugi-genekologa",
        },
      ],
    },
    {
      title: "УЗИ",
      category: "uzi",
      data: [
        {
          title: "Ультразвуковое исследование",
          description: "УЗИ",
          url: "/uzi",
        },
      ],
    },
    {
      title: "ЭКГ",
      category: "ekg",
      data: [
        {
          title: "Электрокардиография",
          description: "ЭКГ",
          url: "/ekg",
        },
      ],
    },
    {
      title: "Гинекология",
      category: "ginekologiya",
      data: [
        {
          title: "Кольпоскопия",
          description: "Гинекология",
          url: "/ginekologiya",
        },
      ],
    },
    {
      title: "ЭЭГ",
      category: "eeg",
      data: [
        {
          title: "Электроэнцофолграфия",
          description: "ЭЭГ",
          url: "/eeg",
        },
      ],
    },
    {
      title: "Холтеровское мониторирование",
      category: "holterovskoe",
      data: [
        {
          title: "Диагностика",
          description: "Холтеровское мониторирование",
          url: "/holterovskoe",
        },
      ],
    },
  ];

  const [active, setActive] = useState(data[0].category);
  const [filtered, setFiltered] = useState(data[0].data);

  const handleFilter = (catname) => {
    setActive(catname);
    let filteredArr = data
      .filter((item) => item.category === catname)
      .map((item) => item.data)
      .flat();
    setFiltered(filteredArr);
  };

  return (
    <div className="h-auto w-full px-4 bg-white">
      <div className="flex flex-col h-full w-full max-w-[1440px] mx-auto py-36 gap-5">
        <div className="w-full flex flex-col relative">
          <div className="w-full overflow-x-scroll flex gap-8 lg:gap-12 scrollbar-hide touch-auto">
            {data.map((item, index) => {
              return (
                <ServiceNav
                  key={index}
                  title={item.title}
                  active={active}
                  category={item.category}
                  handleFilter={handleFilter}
                />
              );
            })}
          </div>
          <hr className="w-full border-t-2 absolute bottom-0 border-slate-300" />
        </div>
        <div className="w-full grid max-mdx:grid-cols-1 max-lg:grid-cols-2 grid-cols-3 gap-3">
          {filtered.map((item, index) => {
            return (
              <ServiceItems
                key={index}
                title={item.title}
                description={item.description}
                url={item.url}
              />
            );
          })}
        </div>
        <section className="flex flex-col justify-center mt-52 mb-52 rounded-[50px] max-md:mt-10 max-md:max-w-full">
          <Application />
        </section>
        <h2 className=" text-4xl font-bold text-neutral-900 max-md:mt-10 max-md:max-w-full">
            Блоги
          </h2>
        <Blog />
        <button className="flex gap-2 justify-center self-center px-10 py-3.5 mt-9 text-base font-bold text-center text-red-400 border border-red-400 border-solid rounded-[100px] max-md:px-5">
            <span className="my-auto">Все Блоги</span>
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/9d858dea97bb716ac0dba9d09749ab621dbd0b3df5fbd758926ae17f2daf60f0?apiKey=e791e0f42eab4556ac944da69358f29b&"
              className="shrink-0 aspect-square w-[23px]"
              alt="Arrow icon"
            />
          </button>
      </div>
    </div>
  );
}
