"use client";
import { useEffect } from "react";
import Script from "next/script";
import AddressItem from "@/app/[locale]/_components/addresses/AddressItem";
import arrowRightRed from "@/public/svg/arrow-right.svg";
import Image from "next/image";

export default function Map() {
  const apiKey = process.env.NEXT_PUBLIC_YANDEX_MAP_API_KEY;

  useEffect(() => {
    // Инициализация карты после загрузки скрипта
    const initMap = async () => {
      if (typeof window !== "undefined" && window.ymaps3) {
        await window.ymaps3.ready;

        const { YMap, YMapDefaultSchemeLayer, YMapDefaultMarker } = window.ymaps3;

        const map = new YMap(document.getElementById("map"), {
          location: {
            center: [37.588144, 55.733842],
            zoom: 10,
          },
        });

        map.addChild(new YMapDefaultSchemeLayer());

        // Пример добавления маркера
        map.addChild(
          new YMapDefaultMarker({
            coordinates: [37.588144, 55.733842],
            title: "Hello World!",
            subtitle: "Kind and bright",
            color: "blue",
          })
        );
      }
    };

    initMap();
  }, []);


  const data = [
    {
      title: "Intermed Медецинский центр",
      address: "Юнусабадский районб ул Чинабад 10А",
      graphic: ["7:00 - 23:00 (пн-сб)", "7:00 - 17:00 (вс)"],
      tel: "1156",
      url: "/",
    },
    {
      title: "Intermed Медецинский центр",
      address: "Юнусабадский районб ул Чинабад 10А",
      graphic: ["7:00 - 23:00 (пн-сб)", "7:00 - 17:00 (вс)"],
      tel: "1156",
      url: "/",
    },
    {
      title: "Intermed Медецинский центр",
      address: "Юнусабадский районб ул Чинабад 10А",
      graphic: ["7:00 - 23:00 (пн-сб)", "7:00 - 17:00 (вс)"],
      tel: "1156",
      url: "/",
    },
    {
      title: "Intermed Медецинский центр",
      address: "Юнусабадский районб ул Чинабад 10А",
      graphic: ["7:00 - 23:00 (пн-сб)", "7:00 - 17:00 (вс)"],
      tel: "1156",
      url: "/",
    },
    {
      title: "Intermed Медецинский центр",
      address: "Юнусабадский районб ул Чинабад 10А",
      graphic: ["7:00 - 23:00 (пн-сб)", "7:00 - 17:00 (вс)"],
      tel: "1156",
      url: "/",
    },
    {
      title: "Intermed Медецинский центр",
      address: "Юнусабадский районб ул Чинабад 10А",
      graphic: ["7:00 - 23:00 (пн-сб)", "7:00 - 17:00 (вс)"],
      tel: "1156",
      url: "/",
    },
    {
      title: "Intermed Медецинский центр",
      address: "Юнусабадский районб ул Чинабад 10А",
      graphic: ["7:00 - 23:00 (пн-сб)", "7:00 - 17:00 (вс)"],
      tel: "1156",
      url: "/",
    },
    {
      title: "Intermed Медецинский центр",
      address: "Юнусабадский районб ул Чинабад 10А",
      graphic: ["7:00 - 23:00 (пн-сб)", "7:00 - 17:00 (вс)"],
      tel: "1156",
      url: "/",
    },
    {
      title: "Intermed Медецинский центр",
      address: "Юнусабадский районб ул Чинабад 10А",
      graphic: ["7:00 - 23:00 (пн-сб)", "7:00 - 17:00 (вс)"],
      tel: "1156",
      url: "/",
    },
    {
      title: "Intermed Медецинский центр",
      address: "Юнусабадский районб ул Чинабад 10А",
      graphic: ["7:00 - 23:00 (пн-сб)", "7:00 - 17:00 (вс)"],
      tel: "1156",
      url: "/",
    },
    {
      title: "Intermed Медецинский центр",
      address: "Юнусабадский районб ул Чинабад 10А",
      graphic: ["7:00 - 23:00 (пн-сб)", "7:00 - 17:00 (вс)"],
      tel: "1156",
      url: "/",
    },
  ];

  return (
    <div className="w-full relative mt-24">
       <Script src={`https://api-maps.yandex.ru/v3/?apikey=${apiKey}&lang=ru_RU`}/>
      <div className="w-full max-w-[1440px] relative mx-auto flex flex-col gap-8">
        <h1 className="text-3xl font-semibold">Карта пунктов</h1>
        <div className="relative w-full flex gap-5">
          <div className="flex flex-col gap-4 overflow-y-scroll h-[725px] w-1/3 max-xl:hidden">
            {data.map((item, index) => {
              return (
                <AddressItem
                  key={index}
                  title={item.title}
                  address={item.address}
                  graphic={item.graphic}
                  tel={item.tel}
                  url={item.url}
                />
              );
            })}
          </div>
          <div className="relative w-2/3 max-xl:w-full max-xl:h-[725px]">
            <button className="rounded-full px-4 py-3 bg-red-400 w-[320px] text-white shadow-md shadow-red-400 absolute top-4 left-4 z-10">
              Поиск ближайшей поликлиники
            </button>
            <div className="w-full h-full absolute top-0 left-0 z-0 rounded-xl" id="map" style={{ height: '100%', borderRadius: '30px' }}></div>
          </div>
        </div>
        <div className="w-full flex justify-center">
          <div className="py-3 px-6 font-semibold border-red-400 text-red-400 border rounded-full flex gap-2">

          <p>
            Посмотреть все
          </p>

          <Image
          src={arrowRightRed}
          width={100}
          height={100}
          alt="Aroow right red"
          className="w-6 h-6"
          />
          </div>
        </div>
      </div>
    </div>
  );
}
