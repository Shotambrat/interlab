import React from "react";

const steps = [
  {
    number: 1,
    title: "Сдача биоматериала",
    description: "Вы сдаёте биоматериал в ближайшей семейной поликлинике.",
  },
  {
    number: 2,
    title: "Регистрация данных и маркировка",
    description:
      "Ваши данные записываются, а биоматериал маркируется для точного отслеживания.",
  },
  {
    number: 3,
    title: "Транспортировка",
    description:
      "Биоматериал помещается в термосумку и отправляется в лабораторию на авторефрижераторе.",
  },
  {
    number: 4,
    title: "Преаналитика",
    description:
      "Биоматериал проходит предварительную обработку для подготовки к анализу.",
  },
  {
    number: 5,
    title: "Лабораторный анализ",
    description:
      "В лаборатории проводится тщательный анализ биоматериала с использованием современного оборудования.",
  },
  {
    number: 6,
    title: "Проверка результатов",
    description:
      "Результаты анализов проверяются квалифицированными специалистами.",
  },
  {
    number: 7,
    title: "Передача результатов",
    description:
      "Результаты анализов передаются вам через удобный для вас канал.",
  },
  {
    number: 8,
    title: "Консультация",
    description:
      "При необходимости, вы можете получить консультацию специалистов.",
  },
];

export default function Steps() {
  return (
    <div className="flex flex-col lg:flex-row w-full max-w-[1440px] mx-auto">
      {/* Left side - title and description */}
      <div className="w-full lg:w-1/2 pr-8">
        <h2 className="text-3xl font-bold mb-4">Порядок проведения анализов</h2>
        <p className="text-lg mb-8">
          ЦКДЛ Intermed Innovation гарантирует высокое качество обслуживания и
          индивидуальный подход к каждому пациенту. Мы работаем для того, чтобы
          сделать диагностику и лечение максимально удобными и доступными для
          вас.
        </p>
      </div>

      {/* Right side - steps */}
      <div className="w-full lg:w-1/2 relative">
        {/* Vertical line */}
        <div className="absolute h-full border-l-2 border-[#FFEFEF] left-5 top-0"></div>

        <div className="flex flex-col gap-8">
          {steps.map((step) => (
            <div
              key={step.number}
              className="relative pl-16 flex flex-col gap-2"
            >
              {/* Step number inside a rounded square */}
              <div className="absolute left-0 top-0 w-10 h-10 text-xl bg-[#FFEFEF] text-[#FB6A68] flex items-center justify-center font-bold rounded-lg">
                {step.number}
              </div>
              <h3 className="text-2xl font-semibold text-[#FB6A68]">
                {step.title}
              </h3>
              <p className="text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
