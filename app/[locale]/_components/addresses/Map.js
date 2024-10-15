"use client";
import { useEffect, useRef, useState } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import "leaflet-routing-machine";
import "leaflet-routing-machine/dist/leaflet-routing-machine.css";
import Filter from "@/app/[locale]/_components/addresses/Filter"

const clinicsLocations = [
  {
    id: 1,
    name: "Семейная поликлиника № 14",
    address: "г. Ташкент Алмазарская СП-14",
    graphic: "не указан",
    tel: "1156",
    coords: [41.329423, 69.23438],
  },
  {
    id: 2,
    name: "Семейная поликлиника № 15",
    address: "г. Ташкент Алмазарская СП-15",
    graphic: "не указан",
    tel: "1156",
    coords: [41.330729, 69.197235],
  },
  {
    id: 3,
    name: "Семейная поликлиника № 16",
    address: "г. Ташкент Алмазарская СП-16",
    graphic: "Пн - сб 8:00 - 20:00",
    tel: "1156",
    coords: [41.362064, 69.182376],
  },
  {
    id: 4,
    name: "Семейная поликлиника № 17",
    address: "Алмазарский район, ул. Келес Йули, 226",
    graphic: "не указан",
    tel: "1156",
    coords: [41.343135, 69.22864],
  },
  {
    id: 5,
    name: "Семейная поликлиника № 18",
    address: "Алмазарский район, ул. Мирзы Галиба, 2Г",
    graphic: "Пн - сб 8:00 - 20:00",
    tel: "1156",
    coords: [41.348878, 69.19858],
  },
  {
    id: 6,
    name: "Поликлиника № 19",
    address: "ул. Заркайнар, 164",
    graphic: "не указан",
    tel: "1156",
    coords: [41.338697, 69.242543],
  },
  {
    id: 7,
    name: "Семейная поликлиника № 21 Алмазарского района",
    address: "Алмазарский район, ул. Келес Йули, 169",
    graphic: "Пн - сб 8:00 - 20:00",
    tel: "1156",
    coords: [41.379633, 69.220096],
  },
  {
    id: 8,
    name: "63 Семейная поликлиника",
    address: "Алмазарский район, массив Бешкурган, 2-й квартал, 10",
    graphic: "Пн - сб 7:00 - 19:00",
    tel: "1156",
    coords: [41.366219, 69.199214],
  },
  {
    id: 9,
    name: "Центральная Многопрофильная поликлиника при РМО Алмазарского района",
    address: "ул. Себзар, 19",
    graphic: "Пн - сб 8:00 - 20:00",
    tel: "1156",
    coords: [41.333912, 69.251601],
  },
  {
    id: 10,
    name: "Семейная поликлиника № 66",
    address: "Ташкент, Бектемирский район, Йик-Ата",
    graphic: "не указан",
    tel: "1156",
    coords: [41.227775, 69.367925],
  },
  {
    id: 11,
    name: "Семейная поликлиника № 69",
    address: "Ташкент, Бектемирский район, населённый пункт Кипчак",
    graphic: "не указан",
    tel: "1156",
    coords: [41.216924, 69.326129],
  },
  {
    id: 12,
    name: "Бектемирское РМО",
    address: "Бектемирский район, массив Сувсоз-2, 75",
    graphic: "Пн - сб 8:00 - 20:00",
    tel: "1156",
    coords: [41.227597, 69.337094],
  },
  {
    id: 13,
    name: "Семейная поликлиника № 1",
    address: "ул. Фидокор, 6",
    graphic: "не указан",
    tel: "1156",
    coords: [41.298634, 69.279841],
  },
  {
    id: 14,
    name: "Семейная поликлиника № 2 Мирабадского района",
    address: "Мирабадский район, массив Куйлюк, 3-й квартал, 29Акабинет 2",
    graphic: "Пн - сб 8:00 - 20:00",
    tel: "1156",
    coords: [41.251991, 69.312444],
  },
  {
    id: 15,
    name: "Семейная поликлиника № 3",
    address: "ул. Хамал, 31",
    graphic: "Пн - сб 8:00 - 15:00",
    tel: "1156",
    coords: [41.28201, 69.298201],
  },
  {
    id: 16,
    name: "РМО Мирабадского района",
    address: "Мирабадский район, 8",
    graphic: "не указан",
    tel: "1156",
    coords: [41.304309, 69.279629],
  },
  {
    id: 17,
    name: "Семейная поликлиника № 4",
    address: "ул. Каландар, 2",
    graphic: "Пн - сб 8:00 - 20:00",
    tel: "1156",
    coords: [41.331118, 69.325998],
  },
  {
    id: 18,
    name: "Семейная поликлиника № 5",
    address: "просп. Мустакиллик, 42",
    graphic: "8:00 - 19:00",
    tel: "1156",
    coords: [41.31601, 69.291613],
  },
  {
    id: 19,
    name: "Центральная многопрофильная поликлиника",
    address: "ул. Ахиллик, 10",
    graphic: "Пн - сб 8:00 - 20:00",
    tel: "1156",
    coords: [41.353953, 69.384939],
  },
  {
    id: 20,
    name: "Семейная поликлиника № 7",
    address: "ул. Эргаша Отаханова, 218",
    graphic: "Пн - сб 7:00 - 19:00",
    tel: "1156",
    coords: [41.348856, 69.337908],
  },
  {
    id: 21,
    name: "Семейная поликлиника № 8",
    address: "Мирзо-Улугбекский район, массив Карасу, 3-й квартал, 40",
    graphic: "Пн - сб 8:00 - 20:00",
    tel: "1156",
    coords: [41.331152, 69.366006],
  },
  {
    id: 22,
    name: "Семейная поликлиника № 9",
    address: "Геологическая ул., 26",
    graphic: "Пн - сб 8:00 - 20:00",
    tel: "1156",
    coords: [41.329285, 69.310412],
  },
  {
    id: 23,
    name: "РМО",
    address:
      "Мирзо-Улугбекский район, массив Городок Тракторостроителей, 2-й квартал, 36",
    graphic: "не указан ",
    tel: "1156",
    coords: [41.354147, 69.385808],
  },
  {
    id: 24,
    name: "Семейная поликлиника № 10",
    address: "ул. Шокирарык, 18",
    graphic: "Пн - сб 8:00 - 20:00",
    tel: "1156",
    coords: [41.216934, 69.219786],
  },
  {
    id: 25,
    name: "Семейная поликлиника № 11 Сергелийского района",
    address: "ул. Чаштепа, 147",
    graphic: "Круглосуточно",
    tel: "1156",
    coords: [41.241163, 69.198569],
  },
  {
    id: 26,
    name: "Поликлиника № 12",
    address: "ул. Янги Куйлюк, 5",
    graphic: "Пн - сб 7:30 - 20:00",
    tel: "1156",
    coords: [41.245685, 69.29948],
  },
  {
    id: 27,
    name: "Семейная поликлиника № 13",
    address: "Сергелийский район, массив Учувчилар Шахарчаси, 1",
    graphic: "не указан",
    tel: "1156",
    coords: [41.26957, 69.276808],
  },
  {
    id: 28,
    name: "Семейная поликлиника № 61",
    address: "Сергелийский район, массив Сергели-VIа, 24",
    graphic: "Пн - сб 8:00 - 20:00",
    tel: "1156",
    coords: [41.2305, 69.20761],
  },
  {
    id: 29,
    name: "Семейная поликлиника № 68",
    address:
      "Сергелийский район, населённый пункт Закиров, ул. Нурлихаёт, 129",
    graphic: "не указан",
    tel: "1156",
    coords: [41.238766, 69.273982],
  },
  {
    id: 30,
    name: "РМО Сергелийского района",
    address: "Янгихаётский район, массив Йулдош, 5-й квартал, 24",
    graphic: "не указан",
    tel: "1156",
    coords: [41.1976, 69.214411],
  },
  {
    id: 31,
    name: "Семейная поликлиника № 22 Учтепинского района",
    address: "ул. Бешкайрагач, 233",
    graphic: "не указан",
    tel: "1156",
    coords: [41.315911, 69.16521],
  },
  {
    id: 32,
    name: "Семейная поликлиника № 23",
    address: "5-й пр. Юсуфа Саккоки, 4А",
    graphic: "Пн - сб 8:00 - 20:00",
    tel: "1156",
    coords: [41.300602, 69.177783],
  },
  {
    id: 33,
    name: "Семейная поликлиника № 24",
    address: "Учтепинский район, массив Чиланзар, 12-й квартал, 57",
    graphic: "Пн - сб 7:00 - 19:00",
    tel: "1156",
    coords: [41.279077, 69.18512],
  },
  {
    id: 34,
    name: "Семейная поликлиника № 25",
    address: "Учтепинский район, массив Чиланзар, 14-й квартал, 4",
    graphic: "Пн - сб 7:00 - 19:00",
    tel: "1156",
    coords: [41.292184, 69.190904],
  },
  {
    id: 35,
    name: "Семейная поликлиника № 26 Учтепинского района",
    address: "ул. Мерганча, 14А",
    graphic: "Пн - сб 7:00 - 20:00",
    tel: "1156",
    coords: [41.31201, 69.189851],
  },
  {
    id: 36,
    name: "62 Семейная поликлиника",
    address: "Учтепинский район, массив Чиланзар, 31-й квартал, 50А",
    graphic: "Пн - сб 8:00 - 18:00",
    tel: "1156",
    coords: [41.26665, 69.150637],
  },
  {
    id: 37,
    name: "Семейная поликлиника № 33",
    address: "Чиланзарский район, Малая кольцевая дорога, 7",
    graphic: "Пн - сб 8:00 - 18:00",
    tel: "1156",
    coords: [41.270325, 69.211812],
  },
  {
    id: 38,
    name: "Поликпиника 34",
    address: "Чиланзарский район, массив Чиланзар, 2-й квартал, 2Б",
    graphic: "Пн - сб 8:00 - 20:00",
    tel: "1156",
    coords: [41.28014, 69.222764],
  },
  {
    id: 39,
    name: "Семейная поликлиника № 35",
    address: "Чиланзарский район, массив Чиланзар, квартал 20Д, 4А",
    graphic: "Пн - сб 7:30 - 18:00",
    tel: "1156",
    coords: [41.270601, 69.176124],
  },
  {
    id: 40,
    name: "Семейная поликлиника № 36",
    address: "ул. Мукими, 142",
    graphic: "Пн - сб 8:00 - 20:00",
    tel: "1156",
    coords: [41.293641, 69.222536],
  },
  {
    id: 41,
    name: "Семейная поликлиника № 36 филиал",
    address: "ул. Арпапая, 12А",
    graphic: "Пн - сб 7:45 - 13:10",
    tel: "1156",
    coords: [41.307106, 69.24905],
  },
  {
    id: 42,
    name: "Семейная поликлиника № 37 Чиланзарского района",
    address: "Чиланзарский район, 1-й пр. Катартал, 1",
    graphic: "Пн - сб 8:00 - 20:00",
    tel: "1156",
    coords: [41.294208, 69.211386],
  },
  {
    id: 43,
    name: "Семейная поликлиника № 39 Чиланзарского района",
    address: "Чиланзарский район, массив Наккашлык, 7А",
    graphic: "Пн - сб 8:00 - 20:00",
    tel: "1156",
    coords: [41.270514, 69.2065],
  },
  {
    id: 44,
    name: "Районная центральная многопрофильная поликлиника Чиланзарского района",
    address: "Чиланзарский район, просп. Бунёдкор, 7А",
    graphic: "Пн - сб 7:30 - 20:00",
    tel: "1156",
    coords: [41.286424, 69.215705],
  },
  {
    id: 45,
    name: "Семейная поликлиника № 40",
    address: "Шайхантахурский район, массив Ибн Сина-1, 13А",
    graphic: "Пн - сб 7:00 - 20:00",
    tel: "1156",
    coords: [41.335596, 69.168358],
  },
  {
    id: 46,
    name: "Семейная поликлиника № 41 Шайхантахурского района",
    address: "1-я ул. Ипакчи, 60",
    graphic: "Пн - сб 8:00 - 17:00",
    tel: "1156",
    coords: [41.329001, 69.190613],
  },
  {
    id: 47,
    name: "Семейная поликлиника № 42 Шайхантахурского района",
    address: "ул. Тахтапуль, 14A",
    graphic: "Пн - сб 8:00 - 17:00",
    tel: "1156",
    coords: [41.339151, 69.262096],
  },
  {
    id: 48,
    name: "Семейная поликлиника № 43",
    address: "ул. Чукуркуприк, 73",
    graphic: "Пн - сб 8:00 - 20:00",
    tel: "1156",
    coords: [41.306472, 69.198249],
  },
  {
    id: 49,
    name: "Семейная поликлиника № 44",
    address: "Шайхантахурский район, массив Богкуча, 13А",
    graphic: "Пн - сб 8:00 - 20:00",
    tel: "1156",
    coords: [41.326443, 69.217869],
  },
  {
    id: 50,
    name: "Семейная поликлиника № 45",
    address: "ул. Хувайдо, 45А",
    graphic: "Пн - сб 8:00 - 20:00",
    tel: "1156",
    coords: [41.339902, 69.199441],
  },
  {
    id: 51,
    name: "Семейная поликлиника № 46",
    address: "ул. Самарканд Дарвоза, 198",
    graphic: "не указан",
    tel: "1156",
    coords: [41.307851, 69.217951],
  },
  {
    id: 52,
    name: "Семейная поликлиника № 47",
    address:
      "Ташкент, Шайхантахурский район, махаллинский сход граждан Чакар",
    graphic: "Пн - сб 8:00 - 20:00",
    tel: "1156",
    coords: [41.318865, 69.24017],
  },
  {
    id: 53,
    name: "Семейная поликлиника № 48",
    address: "ул. Абая, 5А",
    graphic: "Пн - сб 8:00 - 20:00",
    tel: "1156",
    coords: [41.323341, 69.25408],
  },
  {
    id: 54,
    name: "Шайхантахурское РТМО",
    address: "ул. Кукча Дарвоза, 305",
    graphic: "Пн - сб 8:00 - 20:00",
    tel: "1156",
    coords: [41.321657, 69.215442],
  },
  {
    id: 55,
    name: "Семейная поликлиника № 49 Юнусабадского района",
    address: "ул. Чинабад, 88",
    graphic: "Пн - сб 8:00 - 20:00",
    tel: "1156",
    coords: [41.354153, 69.305698],
  },
  {
    id: 56,
    name: "Семейная поликлиника № 50",
    address: "Юнусабадский район, массив Минор, 120",
    graphic: "Пн - сб 8:00 - 20:00",
    tel: "1156",
    coords: [41.329799, 69.282066],
  },
  {
    id: 57,
    name: "Семейная поликлиника № 51",
    address: "Юнусабадский район, просп. Амира Темура, 117Б",
    graphic: "Пн - сб 7:00 - 20:00",
    tel: "1156",
    coords: [41.353244, 69.286085],
  },
  {
    id: 58,
    name: "Семейная поликлиника № 52",
    address: "Юнусабадский район, массив Юнусабад, 7-й квартал, 28А",
    graphic: "Пн - сб 7:00 - 18:00",
    tel: "1156",
    coords: [41.370556, 69.272427],
  },
  {
    id: 59,
    name: "Семейная поликлиника № 53",
    address: "Юнусабадский район, массив Кашгар, 24A",
    graphic: "Пн - сб 8:00 - 20:00",
    tel: "1156",
    coords: [41.320969, 69.276078],
  },
  {
    id: 60,
    name: "Семейная поликлиника № 54",
    address: "Юнусабадский район, 6-й пр. Янгишахар, 9",
    graphic: "Пн - сб 7:00 - 20:00",
    tel: "1156",
    coords: [41.360191, 69.29606],
  },
  {
    id: 61,
    name: "Семейная поликлиника № 55",
    address: "Юнусабадский район, массив Юнусабад, 17-й квартал, 22А",
    graphic: "Пн - сб 8:00 - 20:00",
    tel: "1156",
    coords: [41.367351, 69.311065],
  },
  {
    id: 62,
    name: "Семейная поликлиника № 56",
    address: "ул. Богишамол, 112Б",
    graphic: "Пн - сб 7:00 - 20:00",
    tel: "1156",
    coords: [41.339148, 69.295377],
  },
  {
    id: 63,
    name: "Поликлиника 64",
    address: "Ташкент, Юнусабадский район, махалля Хасанбой",
    graphic: "не указан",
    tel: "1156",
    coords: [41.384938, 69.259235],
  },
  {
    id: 64,
    name: "Центральная Многопрофильная поликлиника при РМО Юнусабадского района",
    address: "ул. Юнусата, 2",
    graphic: "Пн - сб 8:00 - 20:00",
    tel: "1156",
    coords: [41.370901, 69.311496],
  },
  {
    id: 65,
    name: "Семейная поликлиника № 57",
    address: "ул. Бабура, 16",
    graphic: "Пн - сб 8:00 - 20:00",
    tel: "1156",
    coords: [41.293545, 69.250346],
  },
  {
    id: 66,
    name: "Семейная поликлиника № 58 Яккасарайского района",
    address: "Яккасарайский район, ул. Абдуллы Каххара, 44",
    graphic: "Пн - сб 8:00 - 20:00",
    tel: "1156",
    coords: [41.277267, 69.262511],
  },
  {
    id: 67,
    name: "Семейная поликлиника № 59",
    address: "ул. Шота Руставели, 75А",
    graphic: "Пн - сб 7:30 - 20:00",
    tel: "1156",
    coords: [41.2709, 69.237954],
  },
  {
    id: 68,
    name: "Семейная поликлиника № 60 Яккасарайского района",
    address: "ул. Шота Руставели, 32",
    graphic: "Пн - сб 8:00 - 19:00",
    tel: "1156",
    coords: [41.2914, 69.25934],
  },
  {
    id: 69,
    name: "РМО Центральная многопрофильная поликлиника Яккасарайского района",
    address: "ул. Шота Руставели, 84",
    graphic: "Пн - сб 7:00 - 18:00",
    tel: "1156",
    coords: [41.276655, 69.242565],
  },
  {
    id: 70,
    name: "65-Oilaviy poliklinikasi",
    address: "Янгихаётский район, массив Янги Чаштепа, 65",
    graphic: "Пн - сб 7:00 - 20:00",
    tel: "1156",
    coords: [41.233614, 69.19297],
  },
  {
    id: 71,
    name: "Поликлиника № 66",
    address: "Ташкент, Янгихаётский район, махалля Мархамат",
    graphic: "Пн - сб 8:00 - 18:00",
    tel: "1156",
    coords: [41.213622, 69.201417],
  },
  {
    id: 72,
    name: "Поликлиника № 27",
    address: "ул. Джаркурган, 37",
    graphic: "не указан",
    tel: "1156",
    coords: [41.269812, 69.323514],
  },
  {
    id: 73,
    name: "Семейная поликлиника № 28 Яшнабадского района",
    address: "ул. Шохсанам, 2",
    graphic: "не указан",
    tel: "1156",
    coords: [41.268457, 69.36453],
  },
  {
    id: 74,
    name: "Поликлиника № 29",
    address: "Фергана Йули, 1",
    graphic: "Пн - сб 7:30 - 20:00",
    tel: "1156",
    coords: [41.241673, 69.330557],
  },
  {
    id: 75,
    name: "Семейная поликлиника № 30",
    address: "4-й пр. Бирлашган, 8",
    graphic: "Пн - сб 8:00 - 20:00",
    tel: "1156",
    coords: [41.292171, 69.35091],
  },
  {
    id: 76,
    name: "Семейная поликлиника № 31",
    address: "Яшнободский район, массив Тузель, 1-й квартал, 40А",
    graphic: "Не указан",
    tel: "1156",
    coords: [41.2968, 69.361865],
  },
  {
    id: 77,
    name: "Семейная поликлиника № 32",
    address: "ул. Ош, 26",
    graphic: "Пн - сб 8:00 - 20:00",
    tel: "1156",
    coords: [41.287888, 69.316706],
  },
  {
    id: 78,
    name: "67-Сон Оилавий поликлиника",
    address: "ул. Сокин, 196",
    graphic: "Пн - вт круглосуточно",
    tel: "1156",
    coords: [41.282402, 69.369948],
  },
  {
    id: 79,
    name: "РМО Яшнабадского района",
    address: "ул. Махтумкули, 2",
    graphic: "Пн - сб 8:00 - 17:00",
    tel: "1156",
    coords: [41.305546, 69.305131],
  },
  // {
  //   id: 80,
  //   name: "",
  //   address: "",
  //   graphic: "Пн - сб 7:00 - 20:00",
  //   tel: "1156",
  //   coords: []
  // },
];


export default function Map() {
  const [clinics, setClinics] = useState([]);
  const [userLocation, setUserLocation] = useState(null);
  const [isSearchButtonVisible, setIsSearchButtonVisible] = useState(true); // Новое состояние для управления кнопкой
  const mapInstanceRef = useRef(null);
  const userMarkerRef = useRef(null);
  const activeRouteRef = useRef(null);
  const [activeClinic, setActiveClinic] = useState(null);

  useEffect(() => {
    if (!mapInstanceRef.current) {
      initMap([41.311158, 69.279737], "/images/maps/geolocation.png");
    }
  }, []);

  const initMap = (location, locIcon) => {
    const mapElement = document.getElementById("map");

    if (!mapElement._leaflet_id) {
      const map = L.map("map").setView(location, 13);
      mapInstanceRef.current = map;

      L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution:
          '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
      }).addTo(map);

      const userIcon = L.icon({
        iconUrl: locIcon,
        iconSize: [50, 50],
        iconAnchor: [25, 30],
      });

      const marker = L.marker(location, { icon: userIcon }).addTo(map);
      userMarkerRef.current = marker;
    }
  };

  const handleSearchClinics = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        const { latitude, longitude } = position.coords;
        setUserLocation([latitude, longitude]);
        updateMapToUserLocation([latitude, longitude]);
        searchNearbyClinics([latitude, longitude]);
        setIsSearchButtonVisible(false); // Скрыть кнопку после поиска
      });
    } else {
      alert("Геолокация не поддерживается вашим браузером.");
    }
  };

  const updateMapToUserLocation = (location) => {
    if (mapInstanceRef.current) {
      mapInstanceRef.current.flyTo(location, 14);
      if (userMarkerRef.current) {
        userMarkerRef.current.setLatLng(location);
      }
    }
  };

  const getDistanceFromLatLonInKm = (lat1, lon1, lat2, lon2) => {
    const R = 6371;
    const dLat = deg2rad(lat2 - lat1);
    const dLon = deg2rad(lon2 - lon1);
    const a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(deg2rad(lat1)) *
        Math.cos(deg2rad(lat2)) *
        Math.sin(dLon / 2) *
        Math.sin(dLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    const d = R * c;
    return d;
  };

  const deg2rad = (deg) => {
    return deg * (Math.PI / 180);
  };

  const searchNearbyClinics = (userCoords) => {
    const radius = 3;

    const nearbyClinics = clinicsLocations.filter((clinic) => {
      const distance = getDistanceFromLatLonInKm(
        userCoords[0],
        userCoords[1],
        clinic.coords[0],
        clinic.coords[1]
      );
      return distance <= radius;
    });

    setClinics(nearbyClinics);

    nearbyClinics.forEach((clinic) => {
      const clinicIcon = L.divIcon({
        className: "custom-clinic-icon",
        html: `<svg width="44" height="57" viewBox="0 0 44 57" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M22.1226 56.0115C23.2785 56.0115 43.9327 34.1321 43.9327 22.1897C43.9327 10.2473 34.1679 0.56604 22.1226 0.56604C10.0772 0.56604 0.3125 10.2473 0.3125 22.1897C0.3125 34.1321 20.9667 56.0115 22.1226 56.0115ZM22.1226 33.0052C28.2296 33.0052 33.1804 28.0967 33.1804 22.0418C33.1804 15.987 28.2296 11.0786 22.1226 11.0786C16.0156 11.0786 11.0649 15.987 11.0649 22.0418C11.0649 28.0967 16.0156 33.0052 22.1226 33.0052Z" fill="#FB6A68"/>
        </svg>`,
        iconSize: [44, 57],
        iconAnchor: [22, 57],
      });

      const clinicMarker = L.marker(clinic.coords, { icon: clinicIcon })
        .addTo(mapInstanceRef.current)
        .bindPopup(
          `<b>${clinic.name}</b><br>${clinic.address}<br>${clinic.graphic}`
        );

      clinicMarker.on("click", () => {
        buildRoute(userCoords, clinic.coords, clinic.id);
      });
    });
  };

  const buildRoute = (start, end, clinicId) => {
    if (activeRouteRef.current) {
      mapInstanceRef.current.removeControl(activeRouteRef.current);
    }

    const newRouteControl = L.Routing.control({
      waypoints: [L.latLng(start), L.latLng(end)],
      routeWhileDragging: true,
      createMarker: function (i, wp) {
        return L.marker(wp.latLng, {
          icon:
            i === 0
              ? userMarkerRef.current.options.icon
              : userMarkerRef.current.options.icon,
        });
      },
      lineOptions: {
        styles: [{ color: "red", opacity: 0.7, weight: 4 }],
      },
    }).addTo(mapInstanceRef.current);

    activeRouteRef.current = newRouteControl;
    setActiveClinic(clinicId);
  };

  const sortedClinics = activeClinic
    ? [
        clinics.find((clinic) => clinic.id === activeClinic),
        ...[...clinics]
          .reverse()
          .filter((clinic) => clinic.id !== activeClinic),
      ]
    : [...clinics].reverse();

  return (
    <div className="w-full relative">
      <div className="absolute h-[500px] z-10 max-xl:w-full max-xl:h-[450px]">
        {isSearchButtonVisible && (
          <button
            onClick={handleSearchClinics}
            className="rounded-full px-4 py-3 bg-red-400 w-[320px] text-white shadow-md shadow-red-400 absolute top-4 left-4 z-10"
          >
            Поиск ближайшей поликлиники
          </button>
        )}
      </div>
      <div id="map" className="w-full z-0 h-[500px]"></div>
      <Filter sortedClinics={sortedClinics} activeClinic={activeClinic} clinicsLocations={clinicsLocations} />
    </div>
  );
}
