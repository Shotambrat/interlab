import aboutBanner from "@/public/images/about-banner.png";
import Image from "next/image";

export default function AboutBanner() {
  return (
    <>
      <div className="w-full h-screen relative max-slg:gap-5 flex flex-col pt-10">
        <div className="absolute max-slg:relative slg:top-1/3 left-4 lg:left-[7%] flex flex-col items-start gap-4">
          <h1 className="text-5xl font-bold w-full max-w-[500px]">Аутсорсинг Лабораторных Услуг от <span className="text-rose-400">Intermed Innovation</span></h1>
          <p className="w-full max-w-[400px] leading-5">
            Высокое качество, экономическая выгода и оперативность обработки анализов
          </p>
          <button className="mt-4 py-3 px-4 rounded-full text-white bg-red-400 font-semibold">
            Рассчитать экономию
          </button>
        </div>
        <div className="absolute max-slg:relative h-[500px] slg:h-full w-full max-slg:px-4 slg:w-1/2 top-0 right-0">
          <Image
            src={aboutBanner}
            width={1500}
            height={1500}
            alt="About Banner"
            className="h-full w-full max-slg:rounded-3xl rounded-bl-3xl object-cover"
          />
        </div>
      </div>
    </>
  );
}
