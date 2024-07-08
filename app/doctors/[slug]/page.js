import React from "react";
import gulmira from "@/public/images/gulmira-doctor.png";
import Image from "next/image";

export default function page() {
  const data = {
    imageSrc: gulmira,
    name: "Туякова Гульмира Негматовна",
    specialty: ["Гинеколог", "Эндрокринолог", "Педиатр"],
    graphic: ["8:00 - 15:00 (пн - пт)", "8:00 - 12:00 (сб)"],
    experience: "16 лет практики",
    lang: "Свободный русский и узбексикий",
    edu: [
      "Таш мед институт 1989-1995. Факультет - лечебное дело",
      "Таш мед институт 1989-1995. Факультет - лечебное дело",
      "Таш мед институт 1989-1995. Факультет - лечебное дело",
    ],
    achievments: [
      "Разработка нового метода лечения",
      "Разработка нового метода лечения",
      "Разработка нового метода лечения",
      "Разработка нового метода лечения",
    ],
  };

  return (
    <div className="px-2 w-full bg-white">
      <div className="w-full max-w-[1440px] flex flex-col gap-48">
        <div className="w-full flex flex-col items-center slg:flex-row slg:justify-start">
          <Image
            src={data.imageSrc}
            width={1000}
            height={1000}
            className="w-full h-full max-w-[320px]"
            alt="Ava"
          />
          <div className="flex flex-col justify-between">
            <div className="flex flex-col gap-5">
              <h1 className="font-bold text-xl">{data.name}</h1>
              <div className="flex gap-2 flex-wrap xl:flex-nowrap">
                {data.specialty.map((elem) => {
                    <div className="px-4 py-2 bg-rose-400 text-rose-600 rounded-full">
                        {elem}
                    </div>
                })}
              </div>
              <hr />
              <div>
                <p className="text-neutral-600">
                    График работы:
                </p>
                {
                    data.graphic
                }
              </div>
            </div>
            <div className="flex gap-5 max-w-full text-base font-bold text-center w-[466px] max-md:flex-wrap">
              <button className="justify-center items-center self-start px-10 py-2 text-white whitespace-nowrap bg-red-400 hover:bg-red-600 transition-all duration-300 rounded-[100px] max-md:px-5">
                Онлайн запись
              </button>
              <button className="justify-center px-6 py-2 text-red-400 border border-red-400 hover:border-red-600 hover:text-red-600 transition-all duration-300 border-solid rounded-[100px] max-md:px-5">
                Связаться
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
