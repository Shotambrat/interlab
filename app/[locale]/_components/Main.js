"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Gulmira from "@/public/images/gulmira-doctor.png";
import Instruction from "@/app/[locale]/_components/Instuction";
import axios from "axios";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import SwiperCore, { Navigation, Pagination } from "swiper";
import Application from "@/app/[locale]/_components/Application";
import Blog from "@/app/[locale]/_components/Blog";
import DoctorCard from "@/app/[locale]/_components/DoctorsCardMain";
import ContactWithUs from "@/app/[locale]/_components/Modals/ContactWithUs";
import OnlineReq from "@/app/[locale]/_components/Modals/OnlineReq";
import PopularAnalyze from "./PopularAnalyze";
import BannerMain from "@/app/[locale]/_components/BannerMain";
import arrowDownRed from "@/public/svg/arrow-down-red.svg";
import MainMap from "@/app/[locale]/_components/MainMap";
import ServiceCard from "@/app/[locale]/_components/ServiceCard";
import imageUrlBuilder from "@sanity/image-url";
import { client } from "@/sanity/lib/client";
import { useTranslations } from "next-intl";
import Sale from "@/app/[locale]/_components/Sale";

SwiperCore.use([Navigation, Pagination]);

const builder = imageUrlBuilder(client);

function urlFor(source) {
  return builder.image(source);
}

function Main({ params }) {
  const [serviceCategories, setServiceCategories] = useState([]);
  const [contactWithUs, setContactWithUs] = useState(false);
  const [onlineReq, setOnlineReq] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [doctors, setDoctors] = useState([]);
  const t = useTranslations();

  const { locale } = params;

  const formatText = (text) => {
    if (!text) return "";
    return text.replace(/\n/g, "<br />");
  };

  useEffect(() => {
    const fetchDoctors = async () => {
      try {
        const doctorsData = await client.fetch(
          `*[_type == "doctor" && isActive == true][0...4]{
            name,
            slug,
            position,
            photo {
              asset->{
                _id,
                url
              }
            }
          }`
        );
        setDoctors(doctorsData);
      } catch (error) {
        console.error("Ошибка при загрузке данных о докторах:", error);
      }
    };

    fetchDoctors();
  }, []);

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
    <>
      {contactWithUs ? <ContactWithUs setState={setContactWithUs} /> : <></>}
      {onlineReq ? <OnlineReq setState={setOnlineReq} /> : <></>}
      
      {/* <HouseCallSuccess /> */}
      {/* <HouseCall /> */}
      <div className="flex flex-col bg-white gap-12 lg:gap-24 px-2 lg:px-16 overflow-x-hidden">
        <main className="flex flex-col justify-between relative self-center w-full max-w-[1414px] max-md:max-w-full  h-screen-70 slg:h-screen-90">
          <BannerMain params={params} />
          <div className="flex gap-5 absolute bottom-4 self-end text-xs font-semibold text-center uppercase">
            <button
              onClick={() => setContactWithUs(true)}
              className="flex justify-center"
            >
              <div className="flex justify-center items-center px-3 uppercase bg-white rounded-full h-[90px] w-[90px] text-red-400 hover:text-red-600 hover:shadow-xl transition-all duration-300 shadow-lg">
                {t("connect")}
              </div>
            </button>
            <button
              onClick={() => setOnlineReq(true)}
              className="flex justify-center text-white"
            >
              <div className="flex justify-center items-center uppercase px-5 bg-red-400 hover:bg-red-600 transition-all duration-300 rounded-full h-[90px] w-[90px] max-md:px-5">
                {t("online-application")}
              </div>
            </button>
          </div>
        </main>

        <div className="flex flex-col self-center mdx:px-5 mt-24 w-full max-w-[1440px] max-md:max-w-full">
          <div className="max-md:max-w-full">
            <div className="flex slg:gap-20 flex-col slg:flex-row gap-0">
              <div className="flex flex-col w-full slg:w-2/5 max-md:ml-0 max-md:w-full">
                <div className="flex flex-col max-md:mt-5 max-md:max-w-full">
                  <div className="flex flex-col max-md:max-w-full">
                    <h2 className="text-3xl mdx:text-4xl font-bold text-neutral-900 max-md:max-w-full">
                      {t("Main.ContactUs.title")}
                    </h2>
                    <p
                      className="mt-5 slg:mt-0 slg:mb-0 text-sm mdx:text-xl w-4/5 text-zinc-500 max-md:max-w-full leading-5"
                      dangerouslySetInnerHTML={{
                        __html: formatText(t("Main.ContactUs.description")),
                      }}
                    />
                  </div>
                  <div className="hidden slg:flex gap-5 mt-11 max-w-full text-base font-bold text-center w-[466px] max-md:flex-wrap max-md:mt-10">
                    <a
                      href="tel:+998781482288"
                      className="justify-center items-center self-start px-16 py-3 text-white whitespace-nowrap bg-red-400 hover:bg-red-600 transition-all duration-300 rounded-[100px] max-md:px-5"
                    >
                      {t("call")}
                    </a>
                    <a
                      href={`/${params.locale}/results`}
                      className="justify-center items-center px-6 py-3 text-red-400 border border-red-400 hover:border-red-600 hover:text-red-600 transition-all duration-300 border-solid rounded-[100px] max-md:px-5"
                    >
                      {t("get-result")}
                    </a>
                  </div>
                </div>
              </div>
              <div className="flex slg:ml-5 w-full slg:w-6/12 max-md:ml-0 max-md:w-full">
                <div className="flex flex-col justify-between grow max-md:mt-5 max-md:max-w-full">
                  <div className="flex flex-col pt-1.5 max-md:max-w-full mb-2">
                    <div className="md:text-2xl text-lg text-neutral-900 font-medium max-md:max-w-full">
                      1) <a href="tel:1156">1156</a>
                    </div>
                    <div className="md:text-2xl text-lg text-neutral-900 font-medium max-md:max-w-full">
                      2) <a href="tel:+998781482288">998 (78) 148 22 88</a>
                    </div>
                    <div className="md:text-xl text-sm text-zinc-500 max-md:max-w-full">
                      {t("Main.ContactUs.phone-for-call")}
                    </div>
                  </div>
                  <hr />
                  <div className="flex flex-col pt-1.5 pb-3 mt-2 border-neutral-200 max-md:max-w-full">
                    <div className="md:text-2xl text-lg text-neutral-900 font-medium max-md:max-w-full">
                      {t("Main.ContactUs.addresses")}
                    </div>
                    <div className="md:text-xl text-sm text-red-400 max-md:max-w-full">
                      {t("Main.ContactUs.open-in-ya")}
                    </div>
                  </div>
                  <hr />
                  <div className="flex flex-col max-md:max-w-full pt-4">
                    <div className="md:text-2xl text-lg text-neutral-900 font-medium max-md:max-w-full">
                      7:00 - 23:00 {t("Main.ContactUs.mon-fri")}
                    </div>
                    <div className="md:text-2xl text-lg text-neutral-900 font-medium max-md:max-w-full">
                      7:00 - 17:00 {t("Main.ContactUs.sun")}
                    </div>
                    <div
                      className="mt-2 md:text-xl text-sm text-zinc-500 max-md:max-w-full"
                      dangerouslySetInnerHTML={{
                        __html: formatText(t("Main.ContactUs.graphic")),
                      }}
                    />
                  </div>
                </div>
              </div>
              <div className="flex slg:hidden gap-2 mt-11 max-w-full text-sm font-bold text-center w-[466px] max-md:flex-wrap max-md:mt-10">
                <a
                  href="tel:+998781482288"
                  className="justify-center items-center self-start px-10 py-3 text-white whitespace-nowrap bg-red-400 rounded-[100px] "
                >
                  {t("call")}
                </a>
                <a
                  href={`/${params.locale}/results`}
                  className="justify-center px-2 py-3 text-red-400 border border-red-400 border-solid rounded-[100px]"
                >
                  {t("get-result")}
                </a>
              </div>
            </div>
          </div>

          <a href="/services">
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
                          service.colourCode
                            ? service.colourCode
                            : getRandomColor()
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
                          service.colourCode
                            ? service.colourCode
                            : getRandomColor()
                        }
                        slug={service.slug.current}
                      />
                    </div>
                  ))}
                </div>
              </>
            )}
            <div className="w-full flex justify-center mdl:hidden mt-12">
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
                  className={`w-4 h-4 transition-transform duration-300 ${servicesOpen ? "rotate-180" : "rotate-0"
                    }`}
                />
              </button>
            </div>
          </div>

          {/* <MainMap /> */}

          <h2 className="mt-24 text-3xl font-bold text-neutral-900 max-md:max-w-full">
            {t("Main.Sales.title")}
          </h2>
          <Sale locale={params.locale} />
          <a
            href={`/${params.locale}/blogs`}
            className="flex gap-2 justify-center self-center px-16 py-3.5 mt-9 text-base font-bold text-center text-red-400 border border-red-400 border-solid rounded-[100px] "
          >
            <span className="my-auto">{t("Main.Sales.all")}</span>
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/9d858dea97bb716ac0dba9d09749ab621dbd0b3df5fbd758926ae17f2daf60f0?apiKey=e791e0f42eab4556ac944da69358f29b&"
              className="shrink-0 aspect-square w-[23px]"
              alt="Arrow icon"
            />
          </a>
          <div className="flex flex-col mt-24 mdx:mt-52 max-w-full w-[588px]">
            <h2 className="text-3xl mdx:text-4xl font-bold text-neutral-900 max-md:max-w-full mb-0">
              {t("Main.Doctors.title")}
            </h2>
            <p className="mt-3 text-sm mdx:text-lg text-neutral-400 w-full leading-4">
              {t("Main.Doctors.description")}
            </p>
          </div>
          <div className="mt-4 max-md:max-w-full">
            <div className="hidden mdx:grid gap-5 grid-cols-4 max-lg:grid-cols-3 max-slg:grid-cols-2">
              {doctors.map((doctor, index) => (
                <DoctorCard
                  locale={params.locale}
                  key={index}
                  name={doctor.name[locale] || doctor.name.ru}
                  specialty={doctor.position[locale] || doctor.position.ru}
                  imageSrc={urlFor(doctor.photo).url()}
                  slug={doctor.slug.current}
                />
              ))}
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
                {doctors.map((doctor, index) => (
                  <SwiperSlide key={index}>
                    <DoctorCard
                      locale={params.locale}
                      name={doctor.name[locale] || doctor.name.ru}
                      specialty={doctor.position[locale] || doctor.position.ru}
                      imageSrc={urlFor(doctor.photo).url()}
                      slug={doctor.slug.current}
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
          <a
            href={`/${params.locale}/doctors`}
            className="flex gap-2 justify-center self-center px-16 py-3.5 mt-10 text-base font-bold text-center text-red-400 border border-red-400 border-solid rounded-[100px]"
          >
            <span className="my-auto">{t("Main.Doctors.all")}</span>
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/9d858dea97bb716ac0dba9d09749ab621dbd0b3df5fbd758926ae17f2daf60f0?apiKey=e791e0f42eab4556ac944da69358f29b&"
              className="shrink-0 aspect-square w-[23px]"
              alt="Arrow icon"
            />
          </a>
          <div className="mt-24">
            <PopularAnalyze params={params} />

          </div>
          <div className="mt-52 max-md:mt-24">
            <Instruction locale={locale} />
          </div>
          <section className="mt-52 max-md:mt-24 w-full">
            <div className="flex gap-5 flex-col lg:flex-row max-md:gap-0 ">
              <h2 className="text-3xl font-bold lg:hidden block text-neutral-900 max-md:max-w-full">
                {t("Main.About.title")}
              </h2>
              <div className="flex flex-col lg:w-6/12 max-md:ml-0 w-full">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/62066623c2a9b716467d4a21bdfcc3f05d9aaddc81efd8d3850593ff5e45864b?apiKey=e791e0f42eab4556ac944da69358f29b&"
                  className="grow w-full aspect-[1.2] max-md:mt-7 mdl:h-[500px]  rounded-3xl object-cover max-md:max-w-full"
                  alt="Modern medical center"
                />
              </div>
              <div className="flex flex-col justify-between ml-5 lg:w-6/12 max-md:ml-0 w-full">
                <div className="flex flex-col font-bold max-md:mt-[25px] max-md:max-w-full slg:max-w-[568px]">
                  <h2 className="text-4xl hidden lg:block text-neutral-900 max-md:max-w-full font-bold mb-0">
                    {t("Main.About.title")}
                  </h2>
                  <p className="text-lg mt-5 text-zinc-600 font-medium max-md:max-w-full leading-5 slg:max-w-[508px]">
                    {t("Main.About.description")
                      .split("\n")
                      .map((line, index) => (
                        <React.Fragment key={index}>
                          {line}
                          <br />
                        </React.Fragment>
                      ))}
                  </p>
                </div>
                <div className="flex gap-3 mt-8 text-base text-center max-md:flex-wrap max-md:max-w-full">
                  <a
                    href={`/${params.locale}/about`}
                    className="justify-center self-start mdx:px-10 py-4 text-white bg-red-400 rounded-[100px] px-6 font-bold"
                  >
                    {t("Main.About.more")}
                  </a>
                  <a
                    href={`/${params.locale}/about/licenses`}
                    className="justify-center items-center px-16 py-4 text-red-400 whitespace-nowrap border border-red-400 border-solid rounded-[100px] max-md:px-10 font-bold"
                  >
                    {t("Main.About.license")}
                  </a>
                </div>
              </div>
            </div>
          </section>
          <h2 className="mt-52 text-3xl font-bold text-neutral-900 max-md:mt-24 max-md:max-w-full mb-0">
            {t("Main.Blogs.title")}
          </h2>
          <Blog locale={params.locale} />
          <a
            href="/blogs"
            className="flex gap-2 justify-center self-center px-16 py-3.5 mt-9 text-base font-bold text-center text-red-400 border border-red-400 border-solid rounded-[100px] max-md:px-[52px]"
          >
            <span className="my-auto">{t("Main.Blogs.more")}</span>
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/9d858dea97bb716ac0dba9d09749ab621dbd0b3df5fbd758926ae17f2daf60f0?apiKey=e791e0f42eab4556ac944da69358f29b&"
              className="shrink-0 aspect-square w-[23px]"
              alt="Arrow icon"
            />
          </a>
          <section className="flex flex-col justify-center mt-52 mb-52 rounded-[50px] max-md:mt-24 max-md:max-w-full">
            <Application />
          </section>
        </div>
      </div>
    </>
  );
}

export default Main;
