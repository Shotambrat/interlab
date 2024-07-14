"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Gulmira from "@/public/images/gulmira-doctor.png";
import Instruction from "@/app/_components/Instuction";
import axios from "axios";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import SwiperCore, { Navigation, Pagination } from "swiper";
import Application from "@/app/_components/Application";
import Blog from "@/app/_components/Blog";
import DoctorCard from "@/app/_components/DoctorsCardMain";
import ContactWithUs from "@/app/_components/Modals/ContactWithUs";
import OnlineReq from "@/app/_components/Modals/OnlineReq";
import PopularAnalyze from "./PopularAnalyze";
import BannerMain from "@/app/_components/BannerMain";
import arrowDownRed from "@/public/svg/arrow-down-red.svg";
import MainMap from "@/app/_components/MainMap";
// import HouseCallSuccess from "@/app/_components/Modals/HouseCallSuccess";
// import HouseCall from "@/app/_components/Modals/HouseCall";
// Install Swiper modules
SwiperCore.use([Navigation, Pagination]);

const ServiceCard = ({ title, description, imageSrc, bgColor, slug }) => (
  <a
    href={`services/${slug}`}
    style={{
      backgroundColor: bgColor,
    }}
    className={`flex flex-col h-[300px] overflow-hidden grow rounded-[30px] max-w-full relative transition-all duration-300 cursor-pointer`}
  >
    <div className="rounded-[30px] pl-4 w-[76%]">
      <div className="flex gap-2 max-md:flex-col ">
        <div className="flex flex-col w-[60%] max-md:ml-0 max-md:w-[80%]">
          <div className="flex flex-col mt-4 max-md:max-w-full">
            <h3 className="text-2xl font-bold leading-8 uppercase text-neutral-900 max-md:max-w-full">
              {title}
            </h3>
            <p className="mt-2 leading-4 text-sm text-zinc-500 max-md:max-w-full">
              {description}
            </p>
          </div>
        </div>
        <div className="absolute bottom-0 right-0 ml-5 w-2/3 md:w-[40%] max-md:ml-0">
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
  </a>
);



function Main({ doctors }) {
  const [bannerData, setBannerData] = useState(null);
  const [services, setServices] = useState([]);
  const [contactWithUs, setContactWithUs] = useState(false);
  const [onlineReq, setOnlineReq] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  useEffect(() => {
    // Функция для получения данных из API
    const fetchData = async () => {
      try {
        const banner = await axios.get(
          "http://213.230.91.55:8100/banner/get-all",
          {
            headers: {
              "Accept-Language": "ru",
            },
          }
        );
        const dataOfBanner = banner.data;
        console.log("DataBanner", dataOfBanner);
        if (dataOfBanner.data[0].active) {
          setBannerData(dataOfBanner.data);
        }

        const services = await axios.get(
          "http://213.230.91.55:8100/service/get-all",
          {
            headers: {
              "Accept-Language": "ru",
            },
          }
        );
        const dataOfServices = services.data;
        console.log("Data", dataOfServices);

        setServices(dataOfServices.data.filter((service) => service.active));
      } catch (error) {
        console.error("Error fetching banner data:", error);
      }
    };

    fetchData();
  }, []);

  if (!bannerData) {
    return <div>Loading...</div>;
  }

  return (
    <>
      {contactWithUs ? <ContactWithUs setState={setContactWithUs} /> : <></>}
      {onlineReq ? <OnlineReq setState={setOnlineReq} /> : <></>}
      {/* <HouseCallSuccess /> */}
      {/* <HouseCall /> */}
      <div className="flex flex-col bg-white px-2 lg:px-16">
        <main className="flex flex-col self-center w-full max-w-[1414px] max-md:max-w-full">
          <BannerMain bannerData={bannerData} />
          <div className="flex gap-5 self-end mt-4 text-xs font-semibold text-center uppercase">
            <button
              onClick={() => setContactWithUs(true)}
              className="flex justify-center"
            >
              <div className="flex justify-center items-center px-3 bg-white rounded-full h-[90px] w-[90px] text-red-400 hover:text-red-600 hover:shadow-xl transition-all duration-300 shadow-lg">
                СВЯЗАТЬСЯ
              </div>
            </button>
            <button
              onClick={() => setOnlineReq(true)}
              className="flex justify-center text-white"
            >
              <div className="flex justify-center items-center px-5 bg-red-400 hover:bg-red-600 transition-all duration-300 rounded-full h-[90px] w-[90px] max-md:px-5">
                ОНЛАЙН ЗАПИСЬ
              </div>
            </button>
          </div>
        </main>

        <div className="flex flex-col self-center mdx:px-5 mt-60 w-full max-w-[1440px] max-md:mt-10 max-md:max-w-full">
          <div className="max-md:max-w-full">
            <div className="flex slg:gap-20 flex-col slg:flex-row gap-0">
              <div className="flex flex-col w-full slg:w-2/5 max-md:ml-0 max-md:w-full">
                <div className="flex flex-col max-md:mt-5 max-md:max-w-full">
                  <div className="flex flex-col max-md:max-w-full">
                    <h2 className="text-2xl mdx:text-4xl font-bold text-neutral-900 max-md:max-w-full">
                      Точная диагностика — качественное лечение
                    </h2>
                    <p className="mt-5 text-sm mdx:text-xl w-4/5 text-zinc-500 max-md:max-w-full leading-5">
                      Interlab – современный медцентр <br />
                      Главная задача медцентра – выявить точное недомогание у
                      пациента и порекомендовать курс эффективного лечения для
                      восстановления баланса
                    </p>
                  </div>
                  <div className="hidden slg:flex gap-5 mt-11 max-w-full text-base font-bold text-center w-[466px] max-md:flex-wrap max-md:mt-10">
                    <a
                      href="tel:+9989898898"
                      className="justify-center items-center self-start px-10 py-2 text-white whitespace-nowrap bg-red-400 hover:bg-red-600 transition-all duration-300 rounded-[100px] max-md:px-5"
                    >
                      Позвонить
                    </a>
                    <a
                      href="/results"
                      className="justify-center px-6 py-2 text-red-400 border border-red-400 hover:border-red-600 hover:text-red-600 transition-all duration-300 border-solid rounded-[100px] max-md:px-5"
                    >
                      Получить результаты
                    </a>
                  </div>
                </div>
              </div>
              <div className="flex slg:ml-5 w-full slg:w-6/12 max-md:ml-0 max-md:w-full">
                <div className="flex flex-col justify-between grow max-md:mt-5 max-md:max-w-full">
                  <div className="flex flex-col pt-1.5 max-md:max-w-full mb-2 md:mb-0">
                    <div className="md:text-2xl text-lg text-neutral-900 font-medium max-md:max-w-full">
                      1) 1156
                    </div>
                    <div className="md:text-2xl text-lg text-neutral-900 font-medium max-md:max-w-full">
                      2) 998 (78) 148 22 88
                    </div>
                    <div className="md:text-xl text-sm text-zinc-500 max-md:max-w-full">
                      телефон для связи
                    </div>
                  </div>
                  <hr />
                  <div className="flex flex-col pt-1.5 pb-2 mt-2 border-neutral-200 max-md:max-w-full">
                    <div className="md:text-2xl text-lg text-neutral-900 font-medium max-md:max-w-full">
                      Юнусабадский район, ул. Чинобод 10A
                    </div>
                    <div className="md:text-xl text-sm text-red-400 max-md:max-w-full">
                      открыть в яндекс картах
                    </div>
                  </div>
                  <hr />
                  <div className="flex flex-col max-md:max-w-full">
                    <div className="md:text-2xl text-lg text-neutral-900 font-medium max-md:max-w-full">
                      7:00 - 23:00 пн - сб
                    </div>
                    <div className="md:text-2xl text-lg text-neutral-900 font-medium max-md:max-w-full">
                      7:00 - 17:00 вс
                    </div>
                    <div className="mt-2 md:text-xl text-sm text-zinc-500 max-md:max-w-full">
                      график работы
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex slg:hidden gap-2 mt-11 max-w-full text-sm font-bold text-center w-[466px] max-md:flex-wrap max-md:mt-10">
                <a
                  href="tel:+9989898898"
                  className="justify-center items-center self-start px-10 py-2 text-white whitespace-nowrap bg-red-400  rounded-[100px] max-md:px-5"
                >
                  Позвонить
                </a>
                <button className="justify-center px-2 py-2 text-red-400 border border-red-400 border-solid rounded-[100px]">
                  Получить результаты
                </button>
              </div>
            </div>
          </div>
          <a href="/services">
        <h2 className="lg:mt-52 mt-10 text-2xl mdx:text-4xl font-bold text-neutral-900 max-md:max-w-full">
          Медицинские услуги
        </h2>
      </a>
      <div className="flex flex-col items-center mdx:mt-10 w-full px-0">
        <div className="py-auto w-full mt-5">
          <div className="flex gap-5 flex-col mdl:flex-row w-full ">
            {services.slice(0, 2).map((service, index) => (
              <div
                key={service.id}
                className={index === 0 ? "slg:w-3/5 w-full" : "slg:w-2/5 w-full"}
              >
                <ServiceCard
                  title={service.name}
                  description={service.description}
                  imageSrc={service.iconUrl}
                  bgColor={service.colourCode}
                  slug={service.slug}
                />
              </div>
            ))}
          </div>
        </div>
        <div className="container flex flex-col items-center mt-8 w-full">
          <div
            className={`mdl:grid flex gap-5 flex-col mdl:grid-cols-2 xl:grid-cols-3 w-full  ${
              servicesOpen ? "max-h-full" : "max-h-[300px] overflow-hidden"
            }`}
          >
            {services.slice(2).map((service, index) => (
              <div key={index} className="w-full">
                <ServiceCard
                  key={service.id}
                  title={service.name}
                  description={service.description}
                  imageSrc={service.iconUrl}
                  bgColor={service.colourCode}
                  slug={service.slug}
                />
              </div>
            ))}
          </div>
        </div>
        <div className="w-full flex justify-center mdl:hidden mt-12">
          <button
            onClick={() => setServicesOpen((prev) => !prev)}
            className="text-rose-400 text-xl font-semibold flex gap-3 items-center"
          >
            <p>{servicesOpen ? "Свернуть" : "Все услуги"}</p>
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
        </div>
      </div>

      <MainMap />

          <h2 className="mt-52 text-4xl font-bold text-neutral-900 max-md:mt-10 max-md:max-w-full">
            Акции
          </h2>
          <Blog />
          <a
            href="/blogs"
            className="flex gap-2 justify-center self-center px-10 py-3.5 mt-9 text-base font-bold text-center text-red-400 border border-red-400 border-solid rounded-[100px] max-md:px-5"
          >
            <span className="my-auto">Все акции</span>
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/9d858dea97bb716ac0dba9d09749ab621dbd0b3df5fbd758926ae17f2daf60f0?apiKey=e791e0f42eab4556ac944da69358f29b&"
              className="shrink-0 aspect-square w-[23px]"
              alt="Arrow icon"
            />
          </a>
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
              {
                console.log(doctors)
                // doctors && doctors.length > 0 ? (
                //   doctors.map((doctor, index) => (
                //     <DoctorCard
                //       key={index}
                //       name={doctor.fullName}
                //       specialty={doctor.specialty}
                //       imageSrc={doctor.photoUrl}
                //     />
                //   ))
                // ) : (
                //   <div>No doctors found</div>
                // )
              }
              <DoctorCard
                name="Усманова Сабиха Салижановна"
                specialty="Педиатр-невропатолог"
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
          <a
            href="/doctors"
            className="flex gap-2 justify-center self-center px-10 py-3.5 mt-10 text-base font-bold text-center text-red-400 border border-red-400 border-solid rounded-[100px] max-md:px-5"
          >
            <span className="my-auto">Все врачи</span>
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/9d858dea97bb716ac0dba9d09749ab621dbd0b3df5fbd758926ae17f2daf60f0?apiKey=e791e0f42eab4556ac944da69358f29b&"
              className="shrink-0 aspect-square w-[23px]"
              alt="Arrow icon"
            />
          </a>
          <PopularAnalyze />
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
          <h2 className="mt-52 text-4xl font-bold text-neutral-900 max-md:mt-10 max-md:max-w-full">
            Блог
          </h2>
          <Blog />
          <a href="/blogs" className="flex gap-2 justify-center self-center px-10 py-3.5 mt-9 text-base font-bold text-center text-red-400 border border-red-400 border-solid rounded-[100px] max-md:px-5">
            <span className="my-auto">Все новости</span>
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/9d858dea97bb716ac0dba9d09749ab621dbd0b3df5fbd758926ae17f2daf60f0?apiKey=e791e0f42eab4556ac944da69358f29b&"
              className="shrink-0 aspect-square w-[23px]"
              alt="Arrow icon"
            />
          </a>
          <section className="flex flex-col justify-center mt-52 mb-52 rounded-[50px] max-md:mt-10 max-md:max-w-full">
            <Application />
          </section>
        </div>
      </div>
    </>
  );
}

export async function getServerSideProps() {
  let doctors = [];
  try {
    const response = await fetch("http://localhost:3000/api/doctors");
    if (response.ok) {
      doctors = await response.json();
    } else {
      console.error("Error fetching doctors:", response.statusText);
    }
  } catch (error) {
    console.error("Error fetching doctors:", error);
  }
  return {
    props: {
      doctors,
    },
  };
}

export default Main;
