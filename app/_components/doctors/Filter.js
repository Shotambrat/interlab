"use client";

import DoctorCard from "@/app/_components/doctors/DoctorCard";
import aziz from "@/public/images/aziz.png";
import gulmira from "@/public/images/gulmira-doctor.png";
import Application from "@/app/_components/Application";
import Blog from "@/app/_components/Blog";

export default function Filter() {
  const data = [
    {
      name: "Туякова Гульмира Негматовна",
      speciality: ["Гинеколог", "эндокринолог", "педиатр"],
      slug: "tuyakova-gulmira-negmatovna",
      imageSrc: gulmira
    },
    {
        name: "Ниязов Азиз Набиевич",
        speciality: ["Врач УЗИ"],
        slug: "nabiyev-aziz",
        imageSrc: aziz
    },
    {
        name: "Эргашева Шахноза Шухратовна",
        speciality: ["УЗД-Врач"],
        slug: "ergashevna-shakhnoza",
        imageSrc: gulmira
    },
    {
        name: "Усманова Сабиха Салижановна",
        speciality: ["Педиатр-невропотолог"],
        slug: "usmanova-sabixa",
        imageSrc: gulmira
    },
    {
        name: "Ачилова Нигора Уктамовна",
        speciality: ["Гинеколог"],
        slug: "achilova-nigora",
        imageSrc: gulmira
    },
    {
        name: "Айдарова Равшаной Тургуновна",
        speciality: ["Эндокринолог"],
        slug: "aydorova-ravshanoy",
        imageSrc: gulmira
    },
    {
        name: "Раззаков Сарвар Абдумурадович",
        speciality: ["Детский пульмонолог аллерголог"],
        slug: "razzakov-sarvar",
        imageSrc: aziz
    },
  ];

  return (
    <div className="w-full h-auto bg-white max-mdl:px-4 py-24">
      <div className="w-full max-w-[1440px] mx-auto h-auto flex flex-wrap gap-10">
        {data.map((elem, index) => {
          return (
            <DoctorCard
              key={index}
              name={elem.name}
              specialty={elem.speciality}
              imageSrc={elem.imageSrc}
            />
          );
        })}
      </div>
      <div className="w-full max-w-[1440px] mx-auto">
        <section className="flex flex-col justify-center mt-52 mb-52 rounded-[50px] max-md:mt-10 max-md:max-w-full">
          <Application />
        </section>
        <h2 className=" text-4xl font-bold text-neutral-900 max-md:mt-10 max-md:max-w-full">
          Блоги
        </h2>
        <Blog />
        <div className="w-full flex justify-center ">
          <button className="flex gap-2 justify-center self-center px-10 py-3.5 mt-9 text-base font-bold text-center text-red-400 border border-red-400 border-solid rounded-[100px] max-md:px-5">
            <span className="my-auto">Все Блоги</span>
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/9d858dea97bb716ac0dba9d09749ab621dbd0b3df5fbd758926ae17f2daf60f0?apiKey=e791e0f42eab4556ac944da69358f29b&"
              className="shrink-0 aspect-square w-[23px]"
              alt="Arrow icon"
            />
          </button>
        </div>
      </div>
    </div>
  );
}
