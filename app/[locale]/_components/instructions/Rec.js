import checkMark from "@/public/svg/check-mark.svg";
import Image from "next/image";

export default function Rec() {
  return (
    <div className="w-full max-w-[1440px] mx-auto grid grid-cols-1 mdl:grid-cols-2 gap-8 p-8 border border-neutral-300 rounded-3xl">
      <div>
        <h3 className="text-4xl w-full max-w-[200px] font-semibold">
          Общие реккомендации
        </h3>
      </div>
      <div className="flex flex-col gap-4 w-full">
        <div className="flex gap-4 items-start">
          <Image
            src={checkMark}
            width={100}
            height={100}
            quality={100}
            alt="CheckMark Icon"
            className="w-5 h-5"
          />
          <p className="text-lg">
            Не употребляйте пищу за 8-12 часов до сдачи анализа (если требуется
            натощак)
          </p>
        </div>
        <div className="flex gap-4 items-start">
          <Image
            src={checkMark}
            width={100}
            height={100}
            quality={100}
            alt="CheckMark Icon"
            className="w-5 h-5"
          />
          <p className="text-lg">
          Воздерживайтесь от физической активности перед сдачей анализов (по необходимости).
          </p>
        </div>
        <div className="flex gap-4 items-start">
          <Image
            src={checkMark}
            width={100}
            height={100}
            quality={100}
            alt="CheckMark Icon"
            className="w-5 h-5"
          />
          <p className="text-lg">
            За 1-2 часа до сдачи крови воздержаться от курения, не употреблять сок, чай, кофе
          </p>
        </div>
        <div className="flex gap-4 items-start">
          <Image
            src={checkMark}
            width={100}
            height={100}
            quality={100}
            alt="CheckMark Icon"
            className="w-5 h-5"
          />
          <p className="text-lg">
          Исключить физическое напряжение (бег, быстрый подъем по лестнице)
          </p>
        </div>
      </div>
    </div>
  );
}
