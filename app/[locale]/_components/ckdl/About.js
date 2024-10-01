import aboutBanner from "@/public/images/ckdl/about.png";
import Image from "next/image";

export default function AboutBanner() {
  return (
    <>
      <div className="w-full flex flex-col">
        <div className="lg:grid lg:grid-cols-2 lg:items-center">
          <div className="px-[16px] 2xl:ml-[15%] max-slg:pt-12">
            <span className="text-red-400 font-semibold">точность и забота рядом с вами</span>
            <h1 className="text-[27px] leading-tight md:text-[48px] lh lg:text-[55px] font-bold mt-2">
              Центральная Клинико
              <br /> Диагностическая
              <br /> Лаборатория от
              <br />
              <span className="text-[#FB6A68]">Intermed Innovation</span>
            </h1>
            <p className="text-[#5B5B5B] text-[14px] md:text-[18px] lh lg:text-[20px] mt-[12px]">
              Центральная Клинико-Диагностическая Лаборатория (ЦКДЛ) <br />{" "}
              Intermed Innovation предоставляет высококачественные
              <br /> лабораторные и диагностические услуги в Ташкенте
              <br />
              <br />
              Мы стремимся обеспечить доступ к точной и надежной
              <br /> медицинской диагностике для каждого жителя города,
              <br /> предлагая широкий спектр анализов и диагностических
              процедур
            </p>
          </div>
          <div>
            <Image
              src={aboutBanner}
              width={1500}
              height={1500}
              quality={100}
              alt="About Banner"
              className="h-full w-full max-slg:rounded-3xl rounded-bl-3xl object-cover max-lg:rounded-[30px]"
            />
          </div>
        </div>
      </div>
    </>
  );
}
