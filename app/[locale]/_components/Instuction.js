"use client"

import UpRedIcon from "@/public/svg/arrow-right-up.svg";
import DownBlckIcon from "@/public/svg/arrow-right-down-blck.svg";
import Image from "next/image";
import { Transition } from "@headlessui/react";
import { useState } from "react";
import HouseCallSuccess from "@/app/[locale]/_components/Modals/HouseCallSuccess";
import HouseCall from "@/app/[locale]/_components/Modals/HouseCall";
import Link from "next/link";

const AccordionItem = ({ title, isOpen, onClick, children }) => {
  return (
    <div className="border-t border-b border-solid border-neutral-200">
      <summary
        onClick={onClick}
        className={`flex gap-5 justify-center items-center py-7 ${isOpen ? "text-red-400" : "text-black"} text-xl max-md:flex-wrap max-md:max-w-full cursor-pointer`}
      >
        <span className="flex-auto">{title}</span>
        {isOpen ? (
          <Image
            src={UpRedIcon}
            alt={`Up icon red`}
            priority
            width={30}
            height={30}
            quality={100}
            className="h-4 w-4"
          />
        ) : (
          <Image
            src={DownBlckIcon}
            alt={`Down icon black`}
            priority
            width={30}
            height={30}
            quality={100}
            className="h-4 w-4"
          />
        )}
      </summary>
      <Transition
        show={isOpen}
        enter="transition-all duration-500 ease-in-out"
        enterFrom="max-h-0 opacity-0"
        enterTo="max-h-screen opacity-100"
        leave="transition-all duration-500 ease-in-out"
        leaveFrom="max-h-screen opacity-100"
        leaveTo="max-h-0 opacity-0"
      >
        <div className="overflow-hidden">{children}</div>
      </Transition>
    </div>
  );
};

const AccordionContent = ({ children }) => {
  return <div className="py-5 px-4">{children}</div>;
};

export default function Instuction({locale}) {
  const [houseCall, setHouseCall] = useState(false);
  const [openSection, setOpenSection] = useState("general");

  const toggleSection = (section) => {
    setOpenSection(openSection === section ? "" : section);
  };

  return (
    <section className="flex gap-5 justify-between slg:flex-nowrap flex-wrap max-md:max-w-full">
      {houseCall ? <HouseCall setState={setHouseCall} /> : <></>}
      <div className="flex flex-col self-start max-md:max-w-full">
        <div className="flex flex-col max-md:max-w-full">
          <h2 className="text-3xl mdx:text-4xl font-bold text-neutral-900 max-md:max-w-full leading-7 max-w-[467px]">
            Инструкции по сдаче анализов
          </h2>
          <p className=" text-sm mdx:text-lg text-zinc-500 max-md:max-w-full leading-4">
            В клинике Interlab вы можете заказать вызов на дом для сдачи
            анализов, без необходимости посещения клиники
          </p>
          <p className=" text-sm mdx:text-lg text-[#FB6A68] max-md:max-w-full leading-4">
            *Клиника Intermed не несет ответственности за корректность результатов анализов при несоблюдении данных правил
          </p>
        </div>
        <button onClick={() => setHouseCall(true)} className="justify-center self-start px-16 py-3 mdl:py-4 mt-[20px] slg:mt-[40px] text-base font-bold text-center text-white bg-red-400 rounded-[100px]">
          Вызов на дом
        </button>
      </div>
      <div className="flex flex-col w-full">
        <AccordionItem
          title="Общие рекомендации"
          isOpen={openSection === "general"}
          onClick={() => toggleSection("general")}
        >
          <div className="flex flex-col text-xl text-neutral-900 max-md:max-w-full">
            <AccordionContent>
              <div className="flex flex-col text-xl text-neutral-900 max-md:max-w-full">
                <div className="flex gap-3 max-md:flex-wrap">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/b8a4a519adc50f3f6d8d43f3e1ee55e4119302abd9f9f6a2470d04580a67cf98?apiKey=e791e0f42eab4556ac944da69358f29b&"
                    className="shrink-0 self-start w-5 aspect-square"
                    alt="Bullet point"
                  />
                  <p className="max-md:max-w-full">
                    Не употребляйте пищу за 8-12 часов до сдачи анализа (если
                    требуется натощак)
                  </p>
                </div>
                <div className="flex gap-3 mt-6 max-md:flex-wrap">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/b8a4a519adc50f3f6d8d43f3e1ee55e4119302abd9f9f6a2470d04580a67cf98?apiKey=e791e0f42eab4556ac944da69358f29b&"
                    className="shrink-0 self-start w-5 aspect-square"
                    alt="Bullet point"
                  />
                  <p className="max-md:max-w-full">
                    Воздерживайтесь от физической активности перед сдачей
                    анализов (по необходимости).
                  </p>
                </div>
                <div className="flex gap-3 mt-6 max-md:flex-wrap">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/b8a4a519adc50f3f6d8d43f3e1ee55e4119302abd9f9f6a2470d04580a67cf98?apiKey=e791e0f42eab4556ac944da69358f29b&"
                    className="shrink-0 self-start w-5 aspect-square"
                    alt="Bullet point"
                  />
                  <p className="max-md:max-w-full">
                    За 1-2 часа до сдачи крови воздержаться от курения, не
                    употреблять сок, чай, кофе
                  </p>
                </div>
                <div className="flex gap-3 mt-6 max-md:flex-wrap">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/b8a4a519adc50f3f6d8d43f3e1ee55e4119302abd9f9f6a2470d04580a67cf98?apiKey=e791e0f42eab4556ac944da69358f29b&"
                    className="shrink-0 self-start w-5 aspect-square"
                    alt="Bullet point"
                  />
                  <p className="max-md:max-w-full">
                    Исключить физическое напряжение (бег, быстрый подъем по
                    лестнице)
                  </p>
                </div>
              </div>
            </AccordionContent>
          </div>
        </AccordionItem>
        <AccordionItem
          title="Анализы крови"
          isOpen={openSection === "blood"}
          onClick={() => toggleSection("blood")}
        >
          <AccordionContent>
            {/* Add your content for blood analysis here */}
            <div className="flex flex-col text-xl text-neutral-900 max-md:max-w-full">
              <div className="flex gap-3 max-md:flex-wrap">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/b8a4a519adc50f3f6d8d43f3e1ee55e4119302abd9f9f6a2470d04580a67cf98?apiKey=e791e0f42eab4556ac944da69358f29b&"
                  className="shrink-0 self-start w-5 aspect-square"
                  alt="Bullet point"
                />
                <p className="max-md:max-w-full">
                  Не употребляйте пищу за 8-12 часов до сдачи анализа (если
                  требуется натощак)
                </p>
              </div>
              <div className="flex gap-3 mt-6 max-md:flex-wrap">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/b8a4a519adc50f3f6d8d43f3e1ee55e4119302abd9f9f6a2470d04580a67cf98?apiKey=e791e0f42eab4556ac944da69358f29b&"
                  className="shrink-0 self-start w-5 aspect-square"
                  alt="Bullet point"
                />
                <p className="max-md:max-w-full">
                  Воздерживайтесь от физической активности перед сдачей анализов
                  (по необходимости).
                </p>
              </div>
              <div className="flex gap-3 mt-6 max-md:flex-wrap">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/b8a4a519adc50f3f6d8d43f3e1ee55e4119302abd9f9f6a2470d04580a67cf98?apiKey=e791e0f42eab4556ac944da69358f29b&"
                  className="shrink-0 self-start w-5 aspect-square"
                  alt="Bullet point"
                />
                <p className="max-md:max-w-full">
                  За 1-2 часа до сдачи крови воздержаться от курения, не
                  употреблять сок, чай, кофе
                </p>
              </div>
              <div className="flex gap-3 mt-6 max-md:flex-wrap">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/b8a4a519adc50f3f6d8d43f3e1ee55e4119302abd9f9f6a2470d04580a67cf98?apiKey=e791e0f42eab4556ac944da69358f29b&"
                  className="shrink-0 self-start w-5 aspect-square"
                  alt="Bullet point"
                />
                <p className="max-md:max-w-full">
                  Исключить физическое напряжение (бег, быстрый подъем по
                  лестнице)
                </p>
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem
          title="Анализы мочи"
          isOpen={openSection === "urine"}
          onClick={() => toggleSection("urine")}
        >
          <AccordionContent>
            {/* Add your content for urine analysis here */}
            <div className="flex flex-col text-xl text-neutral-900 max-md:max-w-full">
              <div className="flex gap-3 max-md:flex-wrap">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/b8a4a519adc50f3f6d8d43f3e1ee55e4119302abd9f9f6a2470d04580a67cf98?apiKey=e791e0f42eab4556ac944da69358f29b&"
                  className="shrink-0 self-start w-5 aspect-square"
                  alt="Bullet point"
                />
                <p className="max-md:max-w-full">
                  Не употребляйте пищу за 8-12 часов до сдачи анализа (если
                  требуется натощак)
                </p>
              </div>
              <div className="flex gap-3 mt-6 max-md:flex-wrap">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/b8a4a519adc50f3f6d8d43f3e1ee55e4119302abd9f9f6a2470d04580a67cf98?apiKey=e791e0f42eab4556ac944da69358f29b&"
                  className="shrink-0 self-start w-5 aspect-square"
                  alt="Bullet point"
                />
                <p className="max-md:max-w-full">
                  Воздерживайтесь от физической активности перед сдачей анализов
                  (по необходимости).
                </p>
              </div>
              <div className="flex gap-3 mt-6 max-md:flex-wrap">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/b8a4a519adc50f3f6d8d43f3e1ee55e4119302abd9f9f6a2470d04580a67cf98?apiKey=e791e0f42eab4556ac944da69358f29b&"
                  className="shrink-0 self-start w-5 aspect-square"
                  alt="Bullet point"
                />
                <p className="max-md:max-w-full">
                  За 1-2 часа до сдачи крови воздержаться от курения, не
                  употреблять сок, чай, кофе
                </p>
              </div>
              <div className="flex gap-3 mt-6 max-md:flex-wrap">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/b8a4a519adc50f3f6d8d43f3e1ee55e4119302abd9f9f6a2470d04580a67cf98?apiKey=e791e0f42eab4556ac944da69358f29b&"
                  className="shrink-0 self-start w-5 aspect-square"
                  alt="Bullet point"
                />
                <p className="max-md:max-w-full">
                  Исключить физическое напряжение (бег, быстрый подъем по
                  лестнице)
                </p>
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem
          title="Анализы фекалий"
          isOpen={openSection === "feces"}
          onClick={() => toggleSection("feces")}
        >
          <AccordionContent>
            {/* Add your content for feces analysis here */}
            <div className="flex flex-col text-xl text-neutral-900 max-md:max-w-full">
              <div className="flex gap-3 max-md:flex-wrap">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/b8a4a519adc50f3f6d8d43f3e1ee55e4119302abd9f9f6a2470d04580a67cf98?apiKey=e791e0f42eab4556ac944da69358f29b&"
                  className="shrink-0 self-start w-5 aspect-square"
                  alt="Bullet point"
                />
                <p className="max-md:max-w-full">
                  Не употребляйте пищу за 8-12 часов до сдачи анализа (если
                  требуется натощак)
                </p>
              </div>
              <div className="flex gap-3 mt-6 max-md:flex-wrap">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/b8a4a519adc50f3f6d8d43f3e1ee55e4119302abd9f9f6a2470d04580a67cf98?apiKey=e791e0f42eab4556ac944da69358f29b&"
                  className="shrink-0 self-start w-5 aspect-square"
                  alt="Bullet point"
                />
                <p className="max-md:max-w-full">
                  Воздерживайтесь от физической активности перед сдачей анализов
                  (по необходимости).
                </p>
              </div>
              <div className="flex gap-3 mt-6 max-md:flex-wrap">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/b8a4a519adc50f3f6d8d43f3e1ee55e4119302abd9f9f6a2470d04580a67cf98?apiKey=e791e0f42eab4556ac944da69358f29b&"
                  className="shrink-0 self-start w-5 aspect-square"
                  alt="Bullet point"
                />
                <p className="max-md:max-w-full">
                  За 1-2 часа до сдачи крови воздержаться от курения, не
                  употреблять сок, чай, кофе
                </p>
              </div>
              <div className="flex gap-3 mt-6 max-md:flex-wrap">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/b8a4a519adc50f3f6d8d43f3e1ee55e4119302abd9f9f6a2470d04580a67cf98?apiKey=e791e0f42eab4556ac944da69358f29b&"
                  className="shrink-0 self-start w-5 aspect-square"
                  alt="Bullet point"
                />
                <p className="max-md:max-w-full">
                  Исключить физическое напряжение (бег, быстрый подъем по
                  лестнице)
                </p>
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem
          title="Биохимические анализы"
          isOpen={openSection === "biochemical"}
          onClick={() => toggleSection("biochemical")}
        >
          <AccordionContent>
            {/* Add your content for biochemical analysis here */}
            <div className="flex flex-col text-xl text-neutral-900 max-md:max-w-full">
              <div className="flex gap-3 max-md:flex-wrap">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/b8a4a519adc50f3f6d8d43f3e1ee55e4119302abd9f9f6a2470d04580a67cf98?apiKey=e791e0f42eab4556ac944da69358f29b&"
                  className="shrink-0 self-start w-5 aspect-square"
                  alt="Bullet point"
                />
                <p className="max-md:max-w-full">
                  Не употребляйте пищу за 8-12 часов до сдачи анализа (если
                  требуется натощак)
                </p>
              </div>
              <div className="flex gap-3 mt-6 max-md:flex-wrap">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/b8a4a519adc50f3f6d8d43f3e1ee55e4119302abd9f9f6a2470d04580a67cf98?apiKey=e791e0f42eab4556ac944da69358f29b&"
                  className="shrink-0 self-start w-5 aspect-square"
                  alt="Bullet point"
                />
                <p className="max-md:max-w-full">
                  Воздерживайтесь от физической активности перед сдачей анализов
                  (по необходимости).
                </p>
              </div>
              <div className="flex gap-3 mt-6 max-md:flex-wrap">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/b8a4a519adc50f3f6d8d43f3e1ee55e4119302abd9f9f6a2470d04580a67cf98?apiKey=e791e0f42eab4556ac944da69358f29b&"
                  className="shrink-0 self-start w-5 aspect-square"
                  alt="Bullet point"
                />
                <p className="max-md:max-w-full">
                  За 1-2 часа до сдачи крови воздержаться от курения, не
                  употреблять сок, чай, кофе
                </p>
              </div>
              <div className="flex gap-3 mt-6 max-md:flex-wrap">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/b8a4a519adc50f3f6d8d43f3e1ee55e4119302abd9f9f6a2470d04580a67cf98?apiKey=e791e0f42eab4556ac944da69358f29b&"
                  className="shrink-0 self-start w-5 aspect-square"
                  alt="Bullet point"
                />
                <p className="max-md:max-w-full">
                  Исключить физическое напряжение (бег, быстрый подъем по
                  лестнице)
                </p>
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>
        {/* <Link href={`/${locale}/instructions`} className="flex flex-col justify-center py-px text-2xl text-red-400 border-т border-б border-solid border-neutral-200 max-md:max-w-full">
          <div className="flex gap-3.5 py-7 pr-20 max-md:flex-wrap max-md:pr-5">
            <span>Посмотреть все</span>
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/df01962f1b2f9e82d103d70313443681fbb58f620a1804fe139f6fa84420e8e6?apiKey=e791e0f42eab4556ac944da69358f29b&"
              className="shrink-0 aspect-square w-[30px]"
              alt="View all icon"
            />
          </div>
        </Link> */}
      </div>
    </section>
  );
}
