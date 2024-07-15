import Image from "next/image";
import gulmira from "@/public/images/gulmira-doctor.png";
import ButtonModalRedBg from "@/app/_components/buttons/ButtonModalRedBg";
import ButtonModalRedBorder from "@/app/_components/buttons/ButtonModalRedBorder";

export default function DoctorItemHead() {
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
    <div className="w-full flex flex-col items-center mdl:flex-row slg:justify-start gap-8 h-auto mdl:h-[400px]">
      <Image
        src={data.imageSrc}
        width={1000}
        height={1000}
        className="h-full w-auto max-mdl:w-full max-mdl:h-auto rounded-3xl"
        alt="Ava"
      />
      <div className="flex flex-col justify-between max-mdl:w-full h-full pt-8 max-mdl:gap-5">
        <div className="flex flex-col gap-5">
          <h1 className="font-bold text-2xl mdl:text-4xl">{data.name}</h1>
          <div className="flex gap-2 flex-wrap xl:flex-nowrap">
            {data.specialty.map((elem) => {
              return (
                <div className="px-4 py-2 bg-red-50 text-red-400 rounded-full">
                  {elem}
                </div>
              );
            })}
          </div>
          <hr />
          <div className="flex flex-col gap-3">
            <p className="text-neutral-600">График работы:</p>
            <div>
              {data.graphic.map((elem) => {
                return <div className="font-medium text-lg">{elem}</div>;
              })}
            </div>
          </div>
        </div>
        <div className="flex gap-2 mdl:gap-5 max-w-full text-base font-bold text-center w-[466px] max-md:flex-wrap">
          <ButtonModalRedBg title={"Онлайн запись"} />
          <ButtonModalRedBorder title={"Связаться"} />
        </div>
      </div>
    </div>
  );
}
