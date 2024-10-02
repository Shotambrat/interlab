"use client";
import { useEffect, useState } from "react";
import Script from 'next/script';
import AddressItem from "@/app/[locale]/_components/addresses/AddressItem";
import arrowRightRed from "@/public/svg/arrow-right.svg";
import Image from "next/image";
import { gsap } from "gsap";

export default function Map() {
  const apiKey = process.env.NEXT_PUBLIC_YANDEX_MAP_API_KEY;
  const [clinics, setClinics] = useState([]); // Список ближайших поликлиник
  const [userLocation, setUserLocation] = useState(null);
  const [mapInstance, setMapInstance] = useState(null);
  const [userMarker, setUserMarker] = useState(null); // Маркер пользователя

  useEffect(() => {
    // Инициализация карты с центром на Ташкент
    initMap([41.311158, 69.279737]);
  }, []);

  const handleSearchClinics = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        const { latitude, longitude } = position.coords;
        setUserLocation([latitude, longitude]);
        updateMapToUserLocation([latitude, longitude]); // Обновляем карту на геолокацию пользователя
        searchNearbyClinics([latitude, longitude]); // Поиск ближайших поликлиник в радиусе 5 км
      });
    } else {
      alert("Геолокация не поддерживается вашим браузером.");
    }
  };

  const initMap = (location) => {
    if (window.ymaps) {
      window.ymaps.ready(() => {
        const map = new window.ymaps.Map("map", {
          center: location,
          zoom: 12,
        });
        setMapInstance(map);

        // Маркер на центре Ташкента (по умолчанию)
        const defaultMarker = new window.ymaps.Placemark(location, {
          hintContent: "Центр Ташкента",
          balloonContent: "Вы находитесь в центре Ташкента",
        });
        map.geoObjects.add(defaultMarker);
      });
    }
  };

  const updateMapToUserLocation = (location) => {
    if (mapInstance) {
      // Обновляем центр карты на местоположение пользователя
      mapInstance.setCenter(location, 14);

      if (userMarker) {
        // Если маркер пользователя уже существует, просто перемещаем его
        userMarker.geometry.setCoordinates(location);
      } else {
        // Создаем новый маркер пользователя с кастомной иконкой
        const marker = new window.ymaps.Placemark(location, {
          hintContent: 'Ваше местоположение',
          balloonContent: 'Вы здесь!',
        }, {
          iconLayout: 'default#image',
          iconImageHref: 'https://cdn-icons-png.flaticon.com/512/64/64113.png', // Иконка для пользователя
          iconImageSize: [30, 42],
          iconImageOffset: [-15, -42],
        });
        setUserMarker(marker);
        mapInstance.geoObjects.add(marker); // Добавляем маркер пользователя на карту
      }
    }
  };

  const searchNearbyClinics = (userCoords) => {
    const radius = 5000; // Радиус в метрах (5 км)
    
    // Ищем ближайшие объекты (поликлиники) на карте
    const searchControl = new window.ymaps.control.SearchControl({
      options: {
        provider: 'yandex#search',
        noPlacemark: true, // Не добавляем маркеры автоматически, мы это сделаем сами
        boundedBy: mapInstance.getBounds(), // Ограничиваем поиск областью карты
      }
    });

    searchControl.search('поликлиника').then(() => {
      const foundClinics = searchControl.getResultsArray().filter(result => {
        const distance = window.ymaps.coordSystem.geo.getDistance(userCoords, result.geometry.getCoordinates());
        return distance <= radius; // Оставляем только те, что находятся в радиусе 5 км
      });

      const clinicData = foundClinics.map(clinic => ({
        name: clinic.properties.get('name') || 'Не указано',
        address: clinic.properties.get('text') || 'Не указано',
        coords: clinic.geometry.getCoordinates(),
      }));

      setClinics(clinicData); // Обновляем список найденных поликлиник

      // Добавляем маркеры для найденных поликлиник с кастомной иконкой
      clinicData.forEach(clinic => {
        const clinicMarker = new window.ymaps.Placemark(clinic.coords, {
          hintContent: clinic.name,
          balloonContent: clinic.address,
        }, {
          iconLayout: 'default#image',
          iconImageHref: 'https://cdn-icons-png.flaticon.com/512/69/69524.png', // Иконка для поликлиник
          iconImageSize: [30, 42],
          iconImageOffset: [-15, -42],
        });
        mapInstance.geoObjects.add(clinicMarker);
      });
    });
  };

  return (
    <div className="w-full relative mt-24">
      <Script
        src={`https://api-maps.yandex.ru/2.1/?apikey=${apiKey}&lang=ru_RU`}
        strategy="beforeInteractive"
      />
      <div className="w-full max-w-[1440px] relative mx-auto flex flex-col gap-8">
        <h1 className="text-3xl font-semibold">Карта пунктов</h1>
        <div className="relative w-full flex gap-5">
          <div className="flex flex-col gap-4 overflow-y-scroll h-[725px] w-1/3 max-xl:hidden">
            {clinics.length === 0 ? (
              <p>Найдите ближайшие поликлиники, нажав кнопку поиска.</p>
            ) : (
              clinics.map((clinic, index) => (
                <AddressItem
                  key={index}
                  title={clinic.name}
                  address={clinic.address}
                  graphic={["Часы работы: Не указано"]}
                  tel="1156"
                  url="/"
                />
              ))
            )}
          </div>
          <div className="relative w-2/3 max-xl:w-full max-xl:h-[725px]">
            <button 
              onClick={handleSearchClinics}
              className="rounded-full px-4 py-3 bg-red-400 w-[320px] text-white shadow-md shadow-red-400 absolute top-4 left-4 z-10"
            >
              Поиск ближайшей поликлиники
            </button>
            <div className="w-full h-full absolute top-0 left-0 z-0 rounded-xl">
              <div id="map" className="w-full h-full rounded-xl"></div>
            </div>
          </div>
        </div>
        <div className="w-full flex justify-center">
          <div className="py-3 px-6 font-semibold border-red-400 text-red-400 border rounded-full flex gap-2">
            <p>Посмотреть все</p>
            <Image
              src={arrowRightRed}
              width={100}
              height={100}
              alt="Arrow right red"
              className="w-6 h-6"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
