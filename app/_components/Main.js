"use client";
import { useState } from "react";
import banner from "@/public/images/banner-main-family.png";
import Image from "next/image";
import { Transition } from "@headlessui/react";
import Gulmira from "@/public/images/gulmira-doctor.png";
import lineForm from "@/public/svg/illustration.svg";
import Instruction from "@/app/_components/Instuction";

import hospital from "@/public/images/mainservices/hospital.png";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import SwiperCore, { Navigation, Pagination } from "swiper";

// Install Swiper modules
SwiperCore.use([Navigation, Pagination]);

const DoctorCard = ({ name, specialty, imageSrc }) => (
  <article className="flex flex-col grow pb-2 max-md:mt-5">
    <div className="flex h-full flex-col pb-5 bg-white shadow-lg md:shadow-2xl rounded-[30px]">
      <div className="flex overflow-hidden relative flex-col rounded-3xl items-end px-16 pt-20 pb-3 w-full aspect-[0.84] max-md:pl-5">
        <Image
          src={imageSrc}
          className="object-cover absolute inset-0 size-full"
          alt={`Portrait of ${name}`}
          priority
          width={300}
          height={300}
          quality={100}
        />
      </div>
      <div className="flex flex-col mx-5 mt-5 max-md:mx-2.5">
        <h3 className="text-2xl font-bold text-neutral-900">{name}</h3>
        <p className="mt-1 text-base text-zinc-500">{specialty}</p>
      </div>
    </div>
  </article>
);

const BlogCard = ({ title, excerpt, imageSrc }) => (
  <article className="flex flex-col xl:w-1/5 w-1/3 max-md:ml-0 max-md:w-full">
    <div className="flex flex-col grow pb-2 mt-10">
      <div className="flex overflow-hidden relative flex-col items-end px-16 pt-20 pb-3 w-full aspect-[0.99] max-md:pl-5">
        <img
          loading="lazy"
          src={imageSrc}
          className="object-cover absolute inset-0 size-full"
          alt={title}
        />
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/d06c8d085673ac906cf9dd8597fcb59f9eedcfa3881657c2506df406e930a725?apiKey=e791e0f42eab4556ac944da69358f29b&"
          className="mt-48 aspect-square w-[60px] max-md:mt-10"
          alt="Blog post icon"
        />
      </div>
      <div className="flex flex-col mt-2">
        <h3 className="text-xl mdx:text-3xl font-bold text-neutral-900 leading-6">
          {title}
        </h3>
        <p className="mt-1 text-md text-ellipsis leading-4 text-zinc-500">
          {excerpt}
        </p>
      </div>
    </div>
  </article>
);

const ServiceCard = ({
  title,
  description,
  imageSrc,
  bgColor,
  bgHoverColor,
}) => (
  <section
    className={`flex flex-col h-[300px] overflow-hidden grow rounded-[30px] max-w-full relative transition-all duration-300 ${bgColor} hover:${bgHoverColor} cursor-pointer`}
  >
    <div className="rounded-[30px] pl-4 w-[76%]">
      <div className="flex gap-2 max-md:flex-col ">
        <div className="flex flex-col w-[61%] max-md:ml-0 max-md:w-full">
          <div className="flex flex-col mt-4 max-md:max-w-full">
            <h3 className="text-2xl font-bold leading-8 uppercase text-neutral-900 max-md:max-w-full">
              {title}
            </h3>
            <p className="mt-2 leading-4 text-sm text-zinc-500 max-md:max-w-full">
              {description}
            </p>
          </div>
        </div>
        <div className="absolute bottom-0 right-0 ml-5 w-2/3  md:w-[39%] max-md:ml-0">
          <Image
            src={imageSrc}
            width={100}
            height={100}
            className="grow mt-11 w-full aspect-[1.27] max-md:mt-10"
            alt={title}
          />
        </div>
      </div>
    </div>
  </section>
);

function Main() {
  return (
    <>
      <div className="flex flex-col bg-white px-2 lg:px-16">
        <main className="flex flex-col self-center w-full max-w-[1414px] max-md:max-w-full">
          <section className="max-md:max-w-full">
            <div className="flex gap-5 flex-col mdx:flex-row max-md:gap-0">
              <div className="flex flex-col lg:w-6/12 max-md:ml-0 w-full">
                <div className="flex flex-col items-start mt-5 mdx:mt-32 max-md:max-w-full">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/a46246547624be1066f45fd27ad506dcd1f470352806fdb1b4ec3914c5c32930?apiKey=e791e0f42eab4556ac944da69358f29b&"
                    className="aspect-[33.33] w-[86px]"
                    alt="Decorative element"
                  />
                  <div className="flex flex-col self-stretch mt-5 max-md:max-w-full">
                    <h1 className="lg:text-6xl md:text-4xl mdx:text-2xl text-2xl font-bold text-black max-md:max-w-full leading-6 lg:leading-63">
                      Открылись пункты: <br />
                      <span className="text-red-400">Intermed в Ташкенте</span>
                    </h1>
                    <p className="mt-3 text-sm mdx:text-lg text-zinc-600 max-md:max-w-full">
                      Забор крови в семейных поликлинках: <br />
                      Юнусабадский и Алмазарский район
                    </p>
                  </div>
                  <a href="/addresses">
                    <button className="flex flex-col justify-center mt-5 max-w-full text-base font-bold text-center text-white whitespace-nowrap w-[236px]">
                      <div className="justify-center items-center px-16 py-2 bg-red-400 hover:bg-red-600 transition-all duration-300 rounded-[100px]">
                        Подробнее
                      </div>
                    </button>
                  </a>
                </div>
              </div>
              <div className="flex flex-col lg:w-6/12 max-md:ml-0 w-full">
                <Image
                  src={banner}
                  className="grow w-full rounded-none aspect-[1.01] max-md:mt-10 max-md:max-w-full"
                  alt="Medical facility"
                  priority
                  width={1000}
                  height={1000}
                  quality={100}
                />
              </div>
            </div>
          </section>
          <div className="flex gap-5 self-end mt-4 text-xs font-semibold text-center uppercase">
            <button className="flex justify-center">
              <div className="flex justify-center items-center px-3 bg-white rounded-full h-[90px] w-[90px] text-red-400 hover:text-red-600 hover:shadow-xl transition-all duration-300 shadow-lg">
                ПОЛУЧИТЬ РЕЗУЛЬТАТ
              </div>
            </button>
            <button className="flex justify-center text-white">
              <div className="flex justify-center items-center px-5 bg-red-400 hover:bg-red-600 transition-all duration-300 rounded-full h-[90px] w-[90px] max-md:px-5">
                ОНЛАЙН ЗАПИСЬ
              </div>
            </button>
          </div>
        </main>
        <div className="flex flex-col self-center mdx:px-5 mt-60 w-full max-w-[1440px] max-md:mt-10 max-md:max-w-full">
          <div className="max-md:max-w-full">
            <div className="flex gap-5 flex-col slg:flex-row max-md:gap-0">
              <div className="flex flex-col w-full slg:w-6/12 max-md:ml-0 max-md:w-full">
                <div className="flex flex-col max-md:mt-5 max-md:max-w-full">
                  <div className="flex flex-col max-md:max-w-full">
                    <h2 className="text-2xl mdx:text-4xl font-bold text-neutral-900 max-md:max-w-full">
                      Точная диагностика — качественное лечение
                    </h2>
                    <p className="mt-5 text-sm mdx:text-xl text-zinc-500 max-md:max-w-full leading-5">
                      Interlab – современный медцентр <br />
                      Главная задача медцентра – выявить точное недомогание у
                      пациента и порекомендовать курс эффективного лечения для
                      восстановления баланса
                    </p>
                  </div>
                  <div className="hidden slg:flex gap-5 mt-11 max-w-full text-base font-bold text-center w-[466px] max-md:flex-wrap max-md:mt-10">
                    <button className="justify-center items-center self-start px-10 py-2 text-white whitespace-nowrap bg-red-400 hover:bg-red-600 transition-all duration-300 rounded-[100px] max-md:px-5">
                      Связаться
                    </button>
                    <button className="justify-center px-6 py-2 text-red-400 border border-red-400 hover:border-red-600 hover:text-red-600 transition-all duration-300 border-solid rounded-[100px] max-md:px-5">
                      Получить результаты
                    </button>
                  </div>
                </div>
              </div>
              <div className="flex slg:ml-5 w-full slg:w-6/12 max-md:ml-0 max-md:w-full">
                <div className="flex flex-col justify-between grow max-md:mt-5 max-md:max-w-full">
                  <div className="flex flex-col pt-1.5 max-md:max-w-full mb-2 md:mb-0">
                    <div className="md:text-2xl text-lg text-neutral-900 font-semibold max-md:max-w-full">
                      1156
                    </div>
                    <div className="md:text-xl text-sm text-zinc-500 max-md:max-w-full">
                      телефон для связи
                    </div>
                  </div>
                  <hr />
                  <div className="flex flex-col pt-1.5 pb-2 mt-2 border-neutral-200 max-md:max-w-full">
                    <div className="md:text-2xl text-lg text-neutral-900 font-semibold max-md:max-w-full">
                      г. Ташкент, ул. Ахмад Яссави, д. 1
                    </div>
                    <div className="md:text-xl text-sm text-red-400 max-md:max-w-full">
                      открыть в яндекс картах
                    </div>
                  </div>
                  <hr />
                  <div className="flex flex-col max-md:max-w-full">
                    <div className="md:text-2xl text-lg text-neutral-900 font-semibold max-md:max-w-full">
                      Круглосуточно
                    </div>
                    <div className="mt-2 md:text-xl text-sm text-zinc-500 max-md:max-w-full">
                      график работы
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex slg:hidden gap-2 mt-11 max-w-full text-sm font-bold text-center w-[466px] max-md:flex-wrap max-md:mt-10">
                <button className="justify-center items-center self-start px-10 py-2 text-white whitespace-nowrap bg-red-400  rounded-[100px] max-md:px-5">
                  Связаться
                </button>
                <button className="justify-center px-2 py-2 text-red-400 border border-red-400 border-solid rounded-[100px]">
                  Получить результаты
                </button>
              </div>
            </div>
          </div>
          <h2 className="lg:mt-52 mt-10 text-2xl mdx:text-4xl font-bold text-neutral-900 max-md:max-w-full">
            Медицинские услуги
          </h2>
          <div className="flex flex-col items-center mdx:mt-10 w-full px-0">
            <div className="py-auto w-full mt-5">
              <div className="flex gap-5 flex-col mdl:flex-row w-full ">
                <div className="slg:w-3/5 w-full">
                  <ServiceCard
                    title="ЦКДЛ"
                    description="Сдавайте более 1000 медицинских анализов в ближайшей семейной поликлинике по доступным ценам"
                    imageSrc={hospital}
                    bgColor="bg-sky-100"
                    bgHoverColor="bg-sky-200"
                  />
                </div>
                <div className="slg:w-2/5 w-full">
                  <ServiceCard
                    title="Медицинские анализы"
                    description="Большой ассортимент лабораторных анализов, с гарантией качества"
                    imageSrc={hospital}
                    bgColor="bg-sky-200"
                    bgHoverColor="bg-sky-300"
                  />
                </div>
              </div>
            </div>
            <div className="container flex flex-col items-center mt-8 w-full">
              <div className="grid grid-cols-1 mdl:grid-cols-2 xl:grid-cols-3 gap-5 w-full">
                <ServiceCard
                  title="Консультации специалистов"
                  description="Высококвалифицированные специалисты могут определить симптомы и выписать подробный план лечения"
                  imageSrc={hospital}
                  bgColor="bg-indigo-100"
                  bgHoverColor="bg-indigo-200"
                />
                <ServiceCard
                  title="Цифровой рентген"
                  description="Рекомендуется при диагностировании заболеваний легких, костей и суставов, зубов и десен"
                  imageSrc={hospital}
                  bgColor="bg-rose-100"
                  bgHoverColor="bg-rose-200"
                />
                <ServiceCard
                  title="Ультразвуковое исследование (УЗИ)"
                  description="Метод исследования: органов ЖКТ; забрюшинной полости; органов мочевыводящей системы; сосудов; щитовидной железы; суставов и т.д."
                  imageSrc={hospital}
                  bgColor="bg-amber-100"
                  bgHoverColor="bg-amber-200"
                />
                <ServiceCard
                  title="холтеровское мониторирование"
                  description="Метод помогает выявить все виды стенокардий и аритмий, повысить эффективность лечения сердечно-сосудистых заболеваний"
                  imageSrc={hospital}
                  bgColor="bg-green-100"
                  bgHoverColor="bg-green-200"
                />
                <ServiceCard
                  title="Кольпоскопия"
                  description="Качественное исследование кольпоскопии в области генекологии при профилактических осмотрах женщин"
                  imageSrc={hospital}
                  bgColor="bg-lime-200"
                  bgHoverColor="bg-lime-300"
                />
                <ServiceCard
                  title="ЭЛЕКТРОЭНЦЕФА&shy;Л&shy;О&shy;Г&shy;Р&shy;АФИЯ (ЭЭГ)"
                  description="Позволяет определить: формы эпилепсии; нервный тик, психогенный приступ, паническая атака, ночной страх, «лунатизм» и т.д."
                  imageSrc={hospital}
                  bgColor="bg-red-100"
                  bgHoverColor="bg-red-200"
                />
              </div>
            </div>
          </div>
          <div className="flex flex-col mt-20 mdx:mt-52 max-w-full w-[588px]">
            <h2 className="text-2xl mdx:text-4xl font-bold text-neutral-900 max-md:max-w-full">
              Наши врачи
            </h2>
            <p className="mt-3 text-sm mdx:text-lg text-neutral-400 w-full leading-4">
              Все врачи клиники Interlab имеют высшее образование, а также
              регулярно проходят курсы по повышению квалификации
            </p>
          </div>
          <div className="mt-10 max-md:max-w-full">
            <div className="hidden mdx:flex gap-5 flex-wrap xl:flex-nowrap">
              <DoctorCard
                name="Туякова Гульмира Негмановна"
                specialty="Гинеколог"
                imageSrc={Gulmira}
              />
              <DoctorCard
                name="Усманова Сабиха Салижановна"
                specialty="Педиатр-невропатолог"
                imageSrc={Gulmira}
              />
              <DoctorCard
                name="Эргашева Шахноза Шухратовна"
                specialty="УЗД - врач"
                imageSrc={Gulmira}
              />
              <DoctorCard
                name="Хаджиева Зилола Улугбековна"
                specialty="Гастроэнтеролог-Эндоскопист"
                imageSrc={Gulmira}
              />
            </div>
            <div className="mdx:hidden">
              <Swiper
                slidesPerView={1.2}
                centeredSlides={true}
                spaceBetween={20}
                pagination={{
                  clickable: true,
                }}
              >
                <SwiperSlide>
                  <DoctorCard
                    name="Туякова Гульмира Негмановна"
                    specialty="Гинеколог"
                    imageSrc={Gulmira}
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <DoctorCard
                    name="Усманова Сабиха Салижановна"
                    specialty="Педиатр-невропатолог"
                    imageSrc={Gulmira}
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <DoctorCard
                    name="Эргашева Шахноза Шухратовна"
                    specialty="УЗД - врач"
                    imageSrc={Gulmira}
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <DoctorCard
                    name="Хаджиева Зилола Улугбековна"
                    specialty="Гастроэнтеролог-Эндоскопист"
                    imageSrc={Gulmira}
                  />
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
          <button className="flex gap-2 justify-center self-center px-10 py-3.5 mt-10 text-base font-bold text-center text-red-400 border border-red-400 border-solid rounded-[100px] max-md:px-5">
            <span className="my-auto">Все врачи</span>
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/9d858dea97bb716ac0dba9d09749ab621dbd0b3df5fbd758926ae17f2daf60f0?apiKey=e791e0f42eab4556ac944da69358f29b&"
              className="shrink-0 aspect-square w-[23px]"
              alt="Arrow icon"
            />
          </button>
          <div className="mt-52 max-md:mt-10">
            <Instruction />
          </div>
          <section className="mt-52 max-md:mt-10 w-full">
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
                    комплексной диагностики и установления точного диагноза{" "}
                    <br />
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
                  <button className="justify-center self-start  mdx:px-10 py-4 text-white bg-red-400 rounded-[100px] px-2">
                    Подробнее о нас
                  </button>
                  <button className="justify-center items-center px-10 py-4 text-red-400 whitespace-nowrap border border-red-400 border-solid rounded-[100px] max-md:px-5">
                    Лицензии
                  </button>
                </div>
              </div>
            </div>
          </section>
          <h2 className="mt-52 text-4xl font-bold text-neutral-900 max-md:mt-10 max-md:max-w-full">
            Блог
          </h2>
          <div className="mt-2 mdx:mt-12 w-full">
            <div className="flex justify-center gap-5 flex-col md:flex-row max-md:gap-0 md:flex-wrap">
              <BlogCard
                title="Работа возобновлена"
                excerpt="Мы работаем в штатном режиме"
                imageSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/66ac89f566eb9ae01ed144c927ca88299c96df6f492199b11044dc1aa1ebfd9f?apiKey=e791e0f42eab4556ac944da69358f29b&"
              />
              <BlogCard
                title="Важность сдачи анализа на холестерин"
                excerpt="Анализ на холестерин являетя одним из самых важных"
                imageSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/c93d818bbe0885dbe1f9be274a5ae09b6a061e893019ea57aaa6e46b87491b7a?apiKey=e791e0f42eab4556ac944da69358f29b&"
              />
              <BlogCard
                title="Анализ на вирус герпеса"
                excerpt="Анализ на герпес – это медицинское исследование, которое позволяет выявить наличие различных форм вируса в организме человека."
                imageSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/26074a35bbe3634556451fcee77e7f52d2af29b8b6b71202a7589067bc6ba9b6?apiKey=e791e0f42eab4556ac944da69358f29b&"
              />
              <BlogCard
                title="Анализ на тиреотропный гормон"
                excerpt="В большинстве случаев анализ на ТТГ в Ташкенте назначают для определения гипотиреоза или тиреотоксикоза"
                imageSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/113dda07e062c46dab241bf28df8177d39f2d1d9ccf71890d9d236451f9fea45?apiKey=e791e0f42eab4556ac944da69358f29b&"
              />
            </div>
          </div>
          <button className="flex gap-2 justify-center self-center px-10 py-3.5 mt-9 text-base font-bold text-center text-red-400 border border-red-400 border-solid rounded-[100px] max-md:px-5">
            <span className="my-auto">Все новости</span>
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/9d858dea97bb716ac0dba9d09749ab621dbd0b3df5fbd758926ae17f2daf60f0?apiKey=e791e0f42eab4556ac944da69358f29b&"
              className="shrink-0 aspect-square w-[23px]"
              alt="Arrow icon"
            />
          </button>
          <section className="flex flex-col justify-center mt-52 mb-52 rounded-[50px] max-md:mt-10 max-md:max-w-full">
            <div className="relative overflow-hidden py-5 lg:py-10 px-4 lg:px-10 bg-rose-50 rounded-[30px] mdx:rounded-[50px] max-md:max-w-full">
              <div className="relative z-10 flex lg:justify-around gap-5 max-slg:flex-col max-md:gap-0">
                <div className="flex flex-col w-[50%] lg:w-[50%] xl:w-[30%] max-md:ml-0 max-slg:w-full">
                  <div className="flex flex-col grow text-2xl mdx:text-4xl font-bold text-red-400 max-slg:max-w-full">
                    <h2 className="justify-center self-end max-w-full w-[814px] max-md:max-w-full">
                      Оставьте заявку и мы перезвоним вам в ближайшее время
                    </h2>
                  </div>
                </div>
                <div className="flex flex-col w-[32%] max-md:ml-0 max-slg:w-full">
                  <form className="flex flex-col text-base max-md:mt-10 max-md:max-w-full">
                    <div className="flex flex-col text-red-400 max-md:max-w-full">
                      <label htmlFor="fullName" className="sr-only">
                        ФИО
                      </label>
                      <input
                        id="fullName"
                        type="text"
                        className="justify-center items-start px-4 py-4 bg-white rounded-xl max-md:pr-5 max-md:max-w-full"
                        placeholder="ФИО *"
                        required
                      />
                      <label htmlFor="phoneNumber" className="sr-only">
                        Номер телефона
                      </label>
                      <input
                        id="phoneNumber"
                        type="tel"
                        className="justify-center items-start px-4 py-4 mt-4 bg-white rounded-xl max-md:pr-5 max-md:max-w-full"
                        placeholder="Номер телефона *"
                        required
                      />
                      <div className="flex gap-5 justify-center py-4 pr-20 pl-5 mt-4 bg-white rounded-xl text-zinc-500 max-md:flex-wrap max-md:pr-5 max-md:max-w-full">
                        <select
                          id="service"
                          className="appearance-none bg-transparent border-none"
                        >
                          <option value="">Интересующая услуга</option>
                        </select>
                      </div>
                      <label htmlFor="comment" className="sr-only">
                        Ваш комментарий
                      </label>
                      <textarea
                        id="comment"
                        className="justify-center items-start px-4 py-4 mt-4 bg-white rounded-xl text-neutral-400 max-md:pr-5 max-md:max-w-full"
                        placeholder="Ваш комментарий"
                      ></textarea>
                    </div>
                    <button
                      type="submit"
                      className="justify-center px-10 py-4 mt-6 font-bold text-center text-white bg-red-400 rounded-[100px] max-md:px-5 mdx:w-[300px] lg:w-[250px] max-w-full"
                    >
                      Оставить заявку
                    </button>
                  </form>
                </div>
              </div>
              <Image
                src={lineForm}
                className="absolute w-full left-0 bottom-36 size-1/4 lg:size-auto lg:-bottom-8 object-cover "
                alt="Line of Form"
                priority
                width={100}
                height={100}
                quality={100}
                style={{ zIndex: 1 }}
              />
            </div>
          </section>
        </div>
      </div>
    </>
  );
}

export default Main;
