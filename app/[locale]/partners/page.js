import React from "react";
import Banner from "../_components/Partners/Banner";
import Profits from "../_components/Partners/Profits";
import PriceCut from "../_components/Partners/PriceCut";
import Calculator from "../_components/Partners/Calculator";
import Application from "../_components/Application";

export default function page() {
  return (
    <div className="w-full flex flex-col gap-48 bg-white">
      <Banner />
      <div className="w-full max-w-[1440px] mx-auto">
        <section className="max-md:mt-10 w-full">
          <div className="flex gap-5 flex-col lg:flex-row max-md:gap-0 ">
            <h2 className="text-2xl leading-6 font-bold lg:hidden block text-neutral-900 max-md:max-w-full">
              Interlab – современный медцентр в Ташкенте
            </h2>
            <div className="flex flex-col lg:w-6/12 max-md:ml-0 w-full">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/62066623c2a9b716467d4a21bdfcc3f05d9aaddc81efd8d3850593ff5e45864b?apiKey=e791e0f42eab4556ac944da69358f29b&"
                className="grow w-full aspect-[1.2] max-md:mt-10 mdl:h-[500px]  rounded-3xl object-cover max-md:max-w-full"
                alt="Modern medical center"
              />
            </div>
            <div className="flex flex-col justify-between ml-5 lg:w-6/12 max-md:ml-0 w-full">
              <div className="flex flex-col font-bold max-md:mt-10 max-md:max-w-full">
                <h2 className="text-4xl hidden lg:block text-neutral-900 max-md:max-w-full">
                  Interlab – современный медцентр в Ташкенте
                </h2>
                <p className="text-lg mt-5 text-zinc-600 font-medium max-md:max-w-full leading-5">
                  «INTERMED Leasing» – это современный медицинский центр
                  оснащенный высокоточным оборудованием экспертного класса для
                  комплексной диагностики и установления точного диагноза <br />
                  <br />
                  Новейшая цифровая рентгенографическая установка от ведущих
                  мировых производитей позволяет выполнять снимки высокого
                  качества при минимальной лучевой нагрузке. Совмещает в себе
                  графию, скопию и флюрографию <br />
                  <br />
                  «INTERMED Leasing» –это мировой стандарт диагностики и
                  лечения. Полный набор физиотерапевтического оборудования
                  последнего поколения. Ударно-волновая терапия, электрофорез,
                  инфракрасная лазеротерапия, миостимуляция
                </p>
              </div>
              <div className="flex gap-3 mt-8 text-base text-center max-md:flex-wrap max-md:max-w-full">
                <a
                  href="/about"
                  className="justify-center self-start  mdx:px-10 py-4 text-white bg-red-400 rounded-[100px] px-2"
                >
                  Подробнее о нас
                </a>
                <a
                  href="/about/licenses"
                  className="justify-center items-center px-10 py-4 text-red-400 whitespace-nowrap border border-red-400 border-solid rounded-[100px] max-md:px-5"
                >
                  Лицензии
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Profits />
      <PriceCut />
      <Calculator />
      <Application />
    </div>
  );
}