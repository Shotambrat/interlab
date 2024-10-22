import aboutBanner from "@/public/images/ckdl/about.png";
import Image from "next/image";
import { useTranslations } from "next-intl";

export default function AboutBanner() {
  const t = useTranslations("CKDL.about");

  return (
    <div className="w-full flex flex-col bg-[#F6FAFF]">
      <div className="lg:grid lg:grid-cols-2 lg:items-center">
        <div className="px-[16px] 2xl:ml-[15%] max-slg:pt-12">
          
          <h1 className="text-[27px] leading-tight md:text-[48px] lh lg:text-[45px] font-bold mt-2">
            {t("title")}
            <br />
            <span className="text-red-400 font-semibold">{t("subtitle")}</span>
          </h1>
          <p className="text-[#5B5B5B] text-[14px] md:text-[18px] lh lg:text-[20px] mt-[12px]">
            {t("description").split("\n").map((line, index) => (
              <span key={index}>
                {line}
                <br />
              </span>
            ))}
          </p>
        </div>
        <div>
          <Image
            src={'/images/ckdl/ckdl-banner.png'}
            width={1500}
            height={1500}
            quality={100}
            alt="About Banner"
            className="h-full w-full max-slg:rounded-3xl object-cover max-lg:rounded-[30px]"
          />
        </div>
      </div>
    </div>
  );
}
