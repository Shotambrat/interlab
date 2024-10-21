"use client";
// import Image from "next/image";
import Link from "next/link";
// import backet from "@/public/svg/backet.svg";
import HouseCall from "./Modals/HouseCall";
import { useState } from "react";

export default function PopularAnalyzeItem({ locale, title, price, slug }) {
  const [houseCall, setHouseCall] = useState(false);
  // Format price with spaces every 3 digits
  const formattedPrice = new Intl.NumberFormat("ru-RU").format(price);

  return (
    <>
      {houseCall ? <HouseCall setState={setHouseCall} /> : <></>}
      <Link
        href={`/${locale}/analyze/${slug}`}
        className="w-full flex flex-col justify-between p-4 gap-24 border border-[#E4E4E4] rounded-3xl"
      >
        <h3 className="font-bold text-xl">{title}</h3>
        <div className="w-full flex gap-2">
          <button
            onClick={(e) => {
              e.preventDefault();
              setHouseCall(true);
            }}
            className="text-lg text-white font-semibold rounded-full py-2 px-4 bg-[#FB6A68]"
          >
            Сдать из дома
          </button>
          <button className="bg-[#FEE9E8] text-[#FB6A68] font-semibold rounded-full py-2 px-4 text-lg">
            Подробнее
          </button>
        </div>
      </Link>
    </>
  );
}

{
  /* <div className="w-full flex justify-between">
        {price != null ? (
          <p className="bg-rose-100 text-rose-400 font-bold py-1 rounded-full px-4">
            {formattedPrice} сум
          </p>
        ) : <div></div>}
        <div>
          <Image
            src={backet}
            width={100}
            height={100}
            alt="Basket Icon"
            className="w-8 h-8"
          />
        </div>
      </div> */
}
