import Image from "next/image";
import React from "react";

export default function WhyWe() {
  return (
    <div className="w-full max-w-[1440px] mx-auto flex flex-col gap-8">
      <h2 className="text-3xl  lg:text-3xl font-semibold">
        Нас выбирают тысячи
      </h2>
      <div className="w-full flex flex-col gap-4">
        <div className="w-full grid grid-cols-1 mdx:grid-cols-2 mdx:grid-rows-2 lg:grid-cols-3 lg:grid-rows-none gap-4">
          <div class="col-auto lg:col-auto mdx:col-span-1 mdx:row-span-1 rounded-3xl bg-[#FFEFEF] p-4 flex flex-col gap-1">
            <h3 className="text-2xl font-semibold text-[#FB6A68] w-full max-w-[320px]">
              Современное оборудование
            </h3>
            <p className="font-medium text-lg text-[#151515] w-full max-w-[320px]">
              Использование передовых технологий для точных результатов
            </p>
          </div>
          <div class="col-auto lg:col-auto mdx:col-span-1 mdx:row-span-1 rounded-3xl bg-[#FFEFEF] p-4 flex flex-col gap-1">
            <h3 className="text-2xl font-semibold text-[#FB6A68] w-full max-w-[320px]">
              Доступность
            </h3>
            <p className="font-medium text-lg text-[#151515] w-full max-w-[320px]">
              Наши пункты расположены в различных районах города для вашего
              удобства
            </p>
          </div>
          <div class="col-auto lg:col-auto mdx:col-span-2 mdx:row-span-1 rounded-3xl bg-[#FFEFEF] p-4 flex flex-col gap-1">
            <h3 className="text-2xl font-semibold text-[#FB6A68] w-full lg:max-w-[320px]">
              Быстрое получение результатов
            </h3>
            <p className="font-medium text-lg text-[#151515] w-full lg:max-w-[320px]">
              Сокращение времени ожидания благодаря оптимизированным процессам
            </p>
          </div>
        </div>
        <div className="w-full grid grid-cols-1 mdx:grid-cols-2 gap-4">
          <div class="rounded-3xl bg-[#FFEFEF] p-4 flex flex-col gap-1">
            <h3 className="text-2xl font-semibold text-[#FB6A68] w-full break-words">
              Высококвалифицированные специалисты
            </h3>
            <p className="font-medium text-lg text-[#151515] w-full max-w-[320px]">
              Наши сотрудники имеют богатый опыт и высокую квалификацию
            </p>
          </div>
          <div class="rounded-3xl bg-[#FB6A68] pt-16 pb-8 flex flex-col items-center justify-center relative overflow-hidden ">
            <h3 className="text-2xl font-semibold text-white text-center">
              INTERLAB
              <p className="font-medium text-lg">точность и забота</p>
            </h3>
            <Image
              src={"/svg/ckdl/line.svg"}
              width={200}
              height={50}
              alt="Svg line for card"
              className="absolute -left-[20px] -top-[20px]"
            />
            <Image
              src={"/svg/ckdl/bottom-line.svg"}
              width={200}
              height={50}
              alt="Svg line for card"
              className="absolute -right-[20px] -bottom-[20px]"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
