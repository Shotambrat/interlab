import checkMark from "@/public/svg/check-mark.svg";
import Image from "next/image";
import { useTranslations } from "next-intl";

export default function Rec() {
  const t = useTranslations("Instructions");
  const data = t.raw("data");
  return (
    <div className="w-full max-w-[1440px] mx-auto grid grid-cols-1 mdl:grid-cols-2 gap-8 p-8 border border-neutral-300 rounded-3xl">
      <div>
        <h3 className="text-4xl w-full max-w-[400px] font-semibold">
          {t("overall")}
        </h3>
      </div>
      <div className="flex flex-col gap-4 w-full">
        {data.map((item, index) => {
          return (
            <div key={index} className="flex gap-4 items-start">
              <Image
                src={checkMark}
                width={100}
                height={100}
                quality={100}
                alt="CheckMark Icon"
                className="w-5 h-5"
              />
              <p className="text-lg">{item}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
