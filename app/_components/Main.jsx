import * as React from "react";
import banner from "@/public/images/banner-main-family.png";
import Image from "next/image";
import Gulmira from "@/public/images/gulmira-doctor.png";

const DoctorCard = ({ name, specialty, imageSrc }) => (
  <article className="flex flex-col grow pb-2 max-md:mt-5">
    <div className="flex h-full flex-col pb-5 bg-white shadow-2xl rounded-[30px]">
      <div className="flex overflow-hidden relative flex-col rounded-3xl items-end px-16 pt-20 pb-3 w-full aspect-[0.84] max-md:pl-5">
        <Image
          src={imageSrc}
          className="object-cover absolute inset-0 size-full"
          alt={`Portrait of ${name}`}
          priority
          width={300}
          height={300}
          quality={100}
        />
      </div>
      <div className="flex flex-col mx-5 mt-5 max-md:mx-2.5">
        <h3 className="text-2xl font-bold text-neutral-900">{name}</h3>
        <p className="mt-1 text-base text-zinc-500">{specialty}</p>
      </div>
    </div>
  </article>
);

const BlogCard = ({ title, excerpt, imageSrc }) => (
  <article className="flex flex-col w-3/12 max-md:ml-0 max-md:w-full">
    <div className="flex flex-col grow pb-2 max-md:mt-5">
      <div className="flex overflow-hidden relative flex-col items-end px-16 pt-20 pb-3 w-full aspect-[0.99] max-md:pl-5">
        <img
          loading="lazy"
          src={imageSrc}
          className="object-cover absolute inset-0 size-full"
          alt={title}
        />
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/d06c8d085673ac906cf9dd8597fcb59f9eedcfa3881657c2506df406e930a725?apiKey=e791e0f42eab4556ac944da69358f29b&"
          className="mt-48 aspect-square w-[60px] max-md:mt-10"
          alt="Blog post icon"
        />
      </div>
      <div className="flex flex-col mt-6">
        <h3 className="text-3xl font-bold text-neutral-900">{title}</h3>
        <p className="mt-2 text-lg whitespace-nowrap text-ellipsis text-zinc-500">
          {excerpt}
        </p>
      </div>
    </div>
  </article>
);

const ServiceCard = ({ title, description, imageSrc, bgColor }) => (
  <section
    className={`flex flex-col h-[300px] overflow-hidden grow rounded-[30px] max-md:max-w-full relative ${bgColor}`}
  >
    <div className="rounded-[30px] pl-4 w-[76%]">
      <div className="flex gap-2 max-md:flex-col ">
        <div className="flex flex-col w-[61%] max-md:ml-0 max-md:w-full">
          <div className="flex flex-col mt-4 max-md:max-w-full">
            <h3 className="text-2xl font-bold leading-8 uppercase text-neutral-900 max-md:max-w-full">
              {title}
            </h3>
            <p className="mt-2 leading-4 text-sm text-zinc-500 max-md:max-w-full">
              {description}
            </p>
          </div>
        </div>
        <div className="absolute bottom-0 right-0 ml-5 w-2/3  mdx:w-[39%] max-md:ml-0">
          <img
            loading="lazy"
            src={imageSrc}
            className="grow mt-11 w-full aspect-[1.27] max-md:mt-10"
            alt={title}
          />
        </div>
      </div>
    </div>
  </section>
);

function Main() {
  return (
    <>
      <div className="flex flex-col bg-white px-2 lg:px-16">
        <main className="flex flex-col self-center w-full max-w-[1414px] max-md:max-w-full">
          <section className="max-md:max-w-full">
            <div className="flex gap-5 flex-col mdx:flex-row max-md:gap-0">
              <div className="flex flex-col lg:w-6/12 max-md:ml-0 w-full">
                <div className="flex flex-col items-start mt-5 mdx:mt-32 max-md:max-w-full">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/a46246547624be1066f45fd27ad506dcd1f470352806fdb1b4ec3914c5c32930?apiKey=e791e0f42eab4556ac944da69358f29b&"
                    className="aspect-[33.33] w-[86px]"
                    alt="Decorative element"
                  />
                  <div className="flex flex-col self-stretch mt-5 max-md:max-w-full">
                    <h1 className="lg:text-6xl md:text-4xl mdx:text-2xl text-2xl font-bold text-black max-md:max-w-full leading-6 lg:leading-63">
                      Открылись пункты: <br />
                      <span className="text-red-400">Intermed в Ташкенте</span>
                    </h1>
                    <p className="mt-3 text-sm mdx:text-lg text-zinc-600 max-md:max-w-full">
                      Забор крови в семейных поликлинках: <br />
                      Юнусабадский и Алмазарский район
                    </p>
                  </div>
                  <button className="flex flex-col justify-center mt-5 max-w-full text-base font-bold text-center text-white whitespace-nowrap w-[236px]">
                    <div className="justify-center items-center px-16 py-2 bg-red-400 rounded-[100px]">
                      Подробнее
                    </div>
                  </button>
                </div>
              </div>
              <div className="flex flex-col lg:w-6/12 max-md:ml-0 w-full">
                <Image
                  src={banner}
                  className="grow w-full rounded-none aspect-[1.01] max-md:mt-10 max-md:max-w-full"
                  alt="Medical facility"
                  priority
                  width={1000}
                  height={1000}
                  quality={100}
                />
              </div>
            </div>
          </section>
          <div className="flex gap-5 self-end mt-4 text-xs font-semibold text-center uppercase">
            <button className="flex justify-center">
              <div className="flex justify-center items-center px-3 bg-white rounded-full h-[90px] w-[90px] text-red-400 shadow-lg">
                ПОЛУЧИТЬ РЕЗУЛЬТАТ
              </div>
            </button>
            <button className="flex justify-center text-white">
              <div className="flex justify-center items-center px-5 bg-red-400 rounded-full h-[90px] w-[90px] max-md:px-5">
                ОНЛАЙН ЗАПИСЬ
              </div>
            </button>
          </div>
        </main>
        <div className="flex flex-col self-center mdx:px-5 mt-60 w-full max-w-[1440px] max-md:mt-10 max-md:max-w-full">
          <div className="max-md:max-w-full">
            <div className="flex gap-5 flex-col slg:flex-row max-md:gap-0">
              <div className="flex flex-col w-full slg:w-6/12 max-md:ml-0 max-md:w-full">
                <div className="flex flex-col max-md:mt-5 max-md:max-w-full">
                  <div className="flex flex-col max-md:max-w-full">
                    <h2 className="text-2xl mdx:text-4xl font-bold text-neutral-900 max-md:max-w-full">
                      Точная диагностика — качественное лечение
                    </h2>
                    <p className="mt-5 text-sm mdx:text-xl text-zinc-500 max-md:max-w-full leading-5">
                      Interlab – современный медцентр <br />
                      Главная задача медцентра – выявить точное недомогание у
                      пациента и порекомендовать курс эффективного лечения для
                      восстановления баланса
                    </p>
                  </div>
                  <div className="hidden slg:flex gap-5 mt-11 max-w-full text-base font-bold text-center w-[466px] max-md:flex-wrap max-md:mt-10">
                    <button className="justify-center items-center self-start px-10 py-2 text-white whitespace-nowrap bg-red-400 rounded-[100px] max-md:px-5">
                      Связаться
                    </button>
                    <button className="justify-center px-6 py-2 text-red-400 border border-red-400 border-solid rounded-[100px] max-md:px-5">
                      Получить результаты
                    </button>
                  </div>
                </div>
              </div>
              <div className="flex slg:ml-5 w-full slg:w-6/12 max-md:ml-0 max-md:w-full">
                <div className="flex flex-col justify-between grow max-md:mt-5 max-md:max-w-full">
                  <div className="flex flex-col pt-1.5 max-md:max-w-full mb-2 md:mb-0">
                    <div className="md:text-2xl text-lg text-neutral-900 font-semibold max-md:max-w-full">
                      1156
                    </div>
                    <div className="md:text-xl text-sm text-zinc-500 max-md:max-w-full">
                      телефон для связи
                    </div>
                  </div>
                  <hr />
                  <div className="flex flex-col pt-1.5 pb-2 mt-2 border-neutral-200 max-md:max-w-full">
                    <div className="md:text-2xl text-lg text-neutral-900 font-semibold max-md:max-w-full">
                      г. Ташкент, ул. Ахмад Яссави, д. 1
                    </div>
                    <div className="md:text-xl text-sm text-red-400 max-md:max-w-full">
                      открыть в яндекс картах
                    </div>
                  </div>
                  <hr />
                  <div className="flex flex-col max-md:max-w-full">
                    <div className="md:text-2xl text-lg text-neutral-900 font-semibold max-md:max-w-full">
                      Круглосуточно
                    </div>
                    <div className="mt-2 md:text-xl text-sm text-zinc-500 max-md:max-w-full">
                      график работы
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex slg:hidden gap-2 mt-11 max-w-full text-sm font-bold text-center w-[466px] max-md:flex-wrap max-md:mt-10">
                <button className="justify-center items-center self-start px-10 py-2 text-white whitespace-nowrap bg-red-400 rounded-[100px] max-md:px-5">
                  Связаться
                </button>
                <button className="justify-center px-2 py-2 text-red-400 border border-red-400 border-solid rounded-[100px]">
                  Получить результаты
                </button>
              </div>
            </div>
          </div>
          <h2 className="mt-52 text-2xl mdx:text-4xl font-bold text-neutral-900 max-md:mt-10 max-md:max-w-full">
            Медицинские услуги
          </h2>
          <div className="flex flex-col mdx:mt-10 max-md:max-w-full">
            <div className="max-w-full mt-5">
              <div className="flex gap-5 max-md:flex-col">
                <ServiceCard
                  title="ЦКДЛ"
                  description="Сдавайте более 1000 медицинских анализов в ближайшей семейной поликлинике по доступным ценам"
                  imageSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/be7f546b71b9c2404f7f732228e10c307b32bf1f600f680ef1415f6c18ae5b9b?apiKey=e791e0f42eab4556ac944da69358f29b&"
                  bgColor="bg-sky-100"
                />
                <ServiceCard
                  title="Медицинские анализы"
                  description="Большой ассортимент лабораторных анализов, с гарантией качества"
                  imageSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/b5804816dc0c9c7567f6a4411ba16f1699a849341d691f0c69c7cbe4ff3d3d19?apiKey=e791e0f42eab4556ac944da69358f29b&"
                  bgColor="bg-sky-200"
                />
              </div>
            </div>
            <div className="container mx-auto mt-8">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                <ServiceCard
                  title="Консультации специалистов"
                  description="Высококвалифицированные специалисты могут определить симптомы и выписать подробный план лечения"
                  imageSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/5fd5c957f190467c4fed5043c5af4414f04b2e65e10644e2956e12d9a243d287?apiKey=e791e0f42eab4556ac944da69358f29b&"
                  bgColor="bg-indigo-100"
                />
                <ServiceCard
                  title="Цифровой рентген"
                  description="Рекомендуется при диагностировании заболеваний легких, костей и суставов, зубов и десен"
                  imageSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/55d285d75cff00564ecf69d3711ca7ab07ef859d467452624503403b9453c56a?apiKey=e791e0f42eab4556ac944da69358f29b&"
                  bgColor="bg-rose-100"
                />
                <ServiceCard
                  title="Ультразвуковое исследование (УЗИ)"
                  description="Метод исследования: органов ЖКТ; забрюшинной полости; органов мочевыводящей системы; сосудов; щитовидной железы; суставов и т.д."
                  imageSrc=""
                  bgColor="bg-amber-100"
                />
                <ServiceCard
                  title="холтеровское мониторирование"
                  description="Метод помогает выявить все виды стенокардий и аритмий, повысить эффективность лечения сердечно-сосудистых заболеваний"
                  imageSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/bee47228d1b961e3f9bee052615d19d672715698dc75e8a86878404590e92334?apiKey=e791e0f42eab4556ac944da69358f29b&"
                  bgColor="bg-green-200"
                />
                <ServiceCard
                  title="Кольпоскопия"
                  description="Качественное исследование кольпоскопии в области генекологии при профилактических осмотрах женщин"
                  imageSrc=""
                  bgColor="bg-lime-100"
                />
                <ServiceCard
                  title="ЭЛЕКТРОЭНЦЕФА&shy;Л&shy;О&shy;Г&shy;Р&shy;АФИЯ (ЭЭГ)"
                  description="Позволяет определить: формы эпилепсии; нервный тик, психогенный приступ, паническая атака, ночной страх, «лунатизм» и т.д."
                  imageSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/6d73703796b34cea27df13f44077b8836bb8112adf787726b05a8c9a199896c3?apiKey=e791e0f42eab4556ac944da69358f29b&"
                  bgColor="bg-red-100"
                />
              </div>
            </div>
          </div>
          <div className="flex flex-col mt-20 mdx:mt-52 max-w-full w-[588px]">
            <h2 className="text-2xl mdx:text-4xl font-bold text-neutral-900 max-md:max-w-full">
              Наши врачи
            </h2>
            <p className="mt-3 text-sm mdx:text-lg text-neutral-400 w-full leading-4">
              Все врачи клиники Interlab имеют высшее образование, а также
              регулярно проходят курсы по повышению квалификации
            </p>
          </div>
          <div className="mt-10 max-md:max-w-full">
            <div className="flex gap-5 max-md:flex-col max-md:gap-0">
              <DoctorCard
                name="Туякова Гульмира Негмановна"
                specialty="Гинеколог"
                imageSrc={Gulmira}
              />
              <DoctorCard
                name="Усманова Сабиха Салижановна"
                specialty="Педиатр-невпропатолог"
                imageSrc={Gulmira}
              />
              <DoctorCard
                name="Эргашева Шахноза Шухратовна"
                specialty="УЗД - врач"
                imageSrc={Gulmira}
              />
              <DoctorCard
                name="Хаджиева Зилола Улугбековна"
                specialty="Гастроэнтеролог-Эндоскопист"
                imageSrc={Gulmira}
              />
            </div>
          </div>
          <button className="flex gap-2 justify-center self-center px-10 py-3.5 mt-10 text-base font-bold text-center text-red-400 border border-red-400 border-solid rounded-[100px] max-md:px-5">
            <span className="my-auto">Все врачи</span>
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/9d858dea97bb716ac0dba9d09749ab621dbd0b3df5fbd758926ae17f2daf60f0?apiKey=e791e0f42eab4556ac944da69358f29b&"
              className="shrink-0 aspect-square w-[23px]"
              alt="Arrow icon"
            />
          </button>
          <section className="flex gap-5 justify-between mt-52 max-md:flex-wrap max-md:mt-10 max-md:max-w-full">
            <div className="flex flex-col self-start max-md:max-w-full">
              <div className="flex flex-col max-md:max-w-full">
                <h2 className="text-2xl mdx:text-4xl font-bold text-neutral-900 max-md:max-w-full leading-7">
                  Инструкции по сдаче анализов
                </h2>
                <p className="mt-4 text-sm mdx:text-lg text-zinc-500 max-md:max-w-full leading-4">
                  В клинике Interlab вы можете заказать вызов на дом для сдачи
                  анализов, без необходимости посещения клиники
                </p>
              </div>
              <button className="justify-center self-start px-10 py-4 mt-10 text-base font-bold text-center text-white bg-red-400 rounded-[100px] max-md:px-5">
                Вызов на дом
              </button>
            </div>
            <div className="flex flex-col max-md:max-w-full">
              <details className="flex flex-col pb-8 border-t border-b border-solid border-neutral-200 max-md:max-w-full">
                <summary className="flex gap-5 justify-center py-7 text-2xl text-red-400 max-md:flex-wrap max-md:max-w-full cursor-pointer">
                  <span className="flex-auto">Общие рекомендации</span>
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/b7f517b0ba3c151dd9a6e3091379bfc92c4335a3f103a3c3f68aba316a2bf6b5?apiKey=e791e0f42eab4556ac944da69358f29b&"
                    className="shrink-0 aspect-square w-[30px]"
                    alt="Expand icon"
                  />
                </summary>
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
              </details>
              <details className="flex flex-col justify-center py-px text-2xl border-t border-b border-solid border-neutral-200 text-neutral-900 max-md:max-w-full">
                <summary className="flex gap-5 justify-center py-7 max-md:flex-wrap max-md:max-w-full cursor-pointer">
                  <span className="flex-auto">Анализы крови</span>
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/6fb256c065920b250be99d3f4393ea91b90f545cda83ac692b1326275218eac3?apiKey=e791e0f42eab4556ac944da69358f29b&"
                    className="shrink-0 aspect-square w-[30px]"
                    alt="Expand icon"
                  />
                </summary>
              </details>
              <details className="flex flex-col justify-center py-px text-2xl border-t border-b border-solid border-neutral-200 text-neutral-900 max-md:max-w-full">
                <summary className="flex gap-5 justify-center py-7 max-md:flex-wrap max-md:max-w-full cursor-pointer">
                  <span className="flex-auto my-auto">Анализы мочи</span>
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/6fb256c065920b250be99d3f4393ea91b90f545cda83ac692b1326275218eac3?apiKey=e791e0f42eab4556ac944da69358f29b&"
                    className="shrink-0 aspect-square w-[30px]"
                    alt="Expand icon"
                  />
                </summary>
              </details>
              <details className="flex flex-col justify-center py-px text-2xl border-t border-b border-solid border-neutral-200 text-neutral-900 max-md:max-w-full">
                <summary className="flex gap-5 justify-center py-7 max-md:flex-wrap max-md:max-w-full cursor-pointer">
                  <span className="flex-auto">Анализы фекалий</span>
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/6fb256c065920b250be99d3f4393ea91b90f545cda83ac692b1326275218eac3?apiKey=e791e0f42eab4556ac944da69358f29b&"
                    className="shrink-0 aspect-square w-[30px]"
                    alt="Expand icon"
                  />
                </summary>
              </details>
              <details className="flex flex-col justify-center py-px text-2xl border-t border-б border-solid border-neutral-200 text-neutral-900 max-md:max-w-full">
                <summary className="flex gap-5 justify-center py-7 max-md:flex-wrap max-md:max-w-full cursor-pointer">
                  <span className="flex-auto my-auto">
                    Биохимические анализы
                  </span>
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/6fb256c065920b250be99d3f4393ea91b90f545cda83ac692b1326275218eac3?apiKey=e791e0f42eab4556ac944da69358f29b&"
                    className="shrink-0 aspect-square w-[30px]"
                    alt="Expand icon"
                  />
                </summary>
              </details>
              <button className="flex flex-col justify-center py-px text-2xl text-red-400 border-t border-b border-solid border-neutral-200 max-md:max-w-full">
                <div className="flex gap-3.5 py-7 pr-20 max-md:flex-wrap max-md:pr-5">
                  <span>Посмотреть все</span>
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/df01962f1b2f9e82d103d70313443681fbb58f620a1804fe139f6fa84420e8e6?apiKey=e791e0f42eab4556ac944da69358f29b&"
                    className="shrink-0 aspect-square w-[30px]"
                    alt="View all icon"
                  />
                </div>
              </button>
            </div>
          </section>
          <section className="mt-52 max-md:mt-10 max-md:max-w-full">
            <div className="flex gap-5 max-md:flex-col max-md:gap-0">
              <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/62066623c2a9b716467d4a21bdfcc3f05d9aaddc81efd8d3850593ff5e45864b?apiKey=e791e0f42eab4556ac944da69358f29b&"
                  className="grow w-full aspect-[1.2] max-md:mt-10 max-md:max-w-full"
                  alt="Modern medical center"
                />
              </div>
              <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
                <div className="flex flex-col font-bold max-md:mt-10 max-md:max-w-full">
                  <h2 className="text-4xl text-neutral-900 max-md:max-w-full">
                    Interlab – современный медцентр в Ташкенте
                  </h2>
                  <p className="mt-8 text-xl text-zinc-600 max-md:max-w-full">
                    «INTERMED Leasing» – это современный медицинский центр
                    оснащенный высокоточным оборудованием экспертного класса для
                    комплексной диагностики и установления точного диагноза{" "}
                    <br />
                    <br />
                    Новейшая цифровая рентгенографическая установка от ведущих
                    мировых производитей позволяет выполнять снимки высокого
                    качества при минимальной лучевой нагрузке. Совмещает в себе
                    графию, скопию и флюрографию <br />
                    <br />
                    «INTERMED Leasing» –это мировой стандарт диагностики и
                    лечения. Полный набор физиотерапевтического оборудования
                    последнего поколения. Ударно-волновая терапия, электрофорез,
                    инфракрасная лазеротерапия, миостимуляция
                  </p>
                  <div className="flex gap-3 mt-8 text-base text-center max-md:flex-wrap max-md:max-w-full">
                    <button className="justify-center self-start px-10 py-4 text-white bg-red-400 rounded-[100px] max-md:px-5">
                      Подробнее о нас
                    </button>
                    <button className="justify-center items-center px-10 py-4 text-red-400 whitespace-nowrap border border-red-400 border-solid rounded-[100px] max-md:px-5">
                      Лицензии
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <h2 className="mt-52 text-4xl font-bold text-neutral-900 max-md:mt-10 max-md:max-w-full">
            Блог
          </h2>
          <div className="mt-12 max-md:mt-10 max-md:max-w-full">
            <div className="flex gap-5 max-md:flex-col max-md:gap-0">
              <BlogCard
                title="Работа возобновлена"
                excerpt="Мы работаем в штатном режиме"
                imageSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/66ac89f566eb9ae01ed144c927ca88299c96df6f492199b11044dc1aa1ebfd9f?apiKey=e791e0f42eab4556ac944da69358f29b&"
              />
              <BlogCard
                title="Важность сдачи анализа на холестерин"
                excerpt="Анализ на холестерин являетя одним из самых важных"
                imageSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/c93d818bbe0885dbe1f9be274a5ae09b6a061e893019ea57aaa6e46b87491b7a?apiKey=e791e0f42eab4556ac944da69358f29b&"
              />
              <BlogCard
                title="Анализ на вирус герпеса"
                excerpt="Анализ на герпес – это медицинское исследование, которое позволяет выявить наличие различных форм вируса в организме человека."
                imageSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/26074a35bbe3634556451fcee77e7f52d2af29b8b6b71202a7589067bc6ba9b6?apiKey=e791e0f42eab4556ac944da69358f29b&"
              />
              <BlogCard
                title="Анализ на тиреотропный гормон"
                excerpt="В большинстве случаев анализ на ТТГ в Ташкенте назначают для определения гипотиреоза или тиреотоксикоза"
                imageSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/113dda07e062c46dab241bf28df8177d39f2d1d9ccf71890d9d236451f9fea45?apiKey=e791e0f42eab4556ac944da69358f29b&"
              />
            </div>
          </div>
          <button className="flex gap-2 justify-center self-center px-10 py-3.5 mt-9 text-base font-bold text-center text-red-400 border border-red-400 border-solid rounded-[100px] max-md:px-5">
            <span className="my-auto">Все новости</span>
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/9d858dea97bb716ac0dba9d09749ab621dbd0b3df5fbd758926ae17f2daf60f0?apiKey=e791e0f42eab4556ac944da69358f29b&"
              className="shrink-0 aspect-square w-[23px]"
              alt="Arrow icon"
            />
          </button>
          <section className="flex flex-col justify-center mt-52 rounded-[50px] max-md:mt-10 max-md:max-w-full">
            <div className="pt-16 bg-rose-50 rounded-[50px] max-md:max-w-full">
              <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                <div className="flex flex-col w-[68%] max-md:ml-0 max-md:w-full">
                  <div className="flex flex-col grow text-4xl font-bold text-red-400 max-md:mt-10 max-md:max-w-full">
                    <h2 className="justify-center self-end max-w-full w-[814px] max-md:max-w-full">
                      Оставьте заявку и мы перезвоним вам в ближайшее время
                    </h2>
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/9095d9b47aef5f4f5d8a56af0baa46874de9bc75161cd4b93b657c1a2a54e832?apiKey=e791e0f42eab4556ac944da69358f29b&"
                      className="mt-28 max-w-full border-red-400 border-solid aspect-[3.57] border-[21px] stroke-[21px] stroke-red-400 w-[527px] max-md:mt-10"
                      alt="Decorative element"
                    />
                  </div>
                </div>
                <div className="flex flex-col ml-5 w-[32%] max-md:ml-0 max-md:w-full">
                  <form className="flex flex-col text-base max-md:mt-10 max-md:max-w-full">
                    <div className="flex flex-col text-red-400 max-md:max-w-full">
                      <label htmlFor="fullName" className="sr-only">
                        ФИО
                      </label>
                      <input
                        id="fullName"
                        type="text"
                        className="justify-center items-start px-4 py-6 bg-white rounded-xl max-md:pr-5 max-md:max-w-full"
                        placeholder="ФИО *"
                        required
                      />
                      <label htmlFor="phoneNumber" className="sr-only">
                        Номер телефона
                      </label>
                      <input
                        id="phoneNumber"
                        type="tel"
                        className="justify-center items-start px-4 py-5 mt-4 bg-white rounded-xl max-md:pr-5 max-md:max-w-full"
                        placeholder="Номер телефона *"
                        required
                      />
                      <div className="flex gap-5 justify-center py-4 pr-20 pl-5 mt-4 bg-white rounded-xl text-zinc-500 max-md:flex-wrap max-md:pr-5 max-md:max-w-full">
                        <label htmlFor="service" className="flex-auto my-auto">
                          Интересующая услуга
                        </label>
                        <select
                          id="service"
                          className="appearance-none bg-transparent border-none"
                        >
                          <option value="">Выберите услугу</option>
                        </select>
                      </div>
                      <label htmlFor="comment" className="sr-only">
                        Ваш комментарий
                      </label>
                      <textarea
                        id="comment"
                        className="justify-center items-start px-4 py-5 mt-4 bg-white rounded-xl text-neutral-400 max-md:pr-5 max-md:max-w-full"
                        placeholder="Ваш комментарий"
                      ></textarea>
                    </div>
                    <button
                      type="submit"
                      className="justify-center px-10 py-4 mt-6 font-bold text-center text-white bg-red-400 rounded-[100px] max-md:px-5 max-md:max-w-full"
                    >
                      Оставить заявку
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}

export default Main;
