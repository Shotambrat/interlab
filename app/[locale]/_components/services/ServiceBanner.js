import servicebanner from "@/public/images/ServicesBanner.png";
import Image from "next/image";
import { useTranslations } from "next-intl";

export default function ServiceBanner({ locale }) {
  const t = useTranslations();
  return (
    <div className="w-full flex flex-col bg-[#FFEFEF] bg-opacity-40">
      <div className="lg:grid lg:grid-cols-2 lg:items-center">
        <div className="px-[16px] 2xl:ml-[15%] max-slg:pt-12">
          <h1 className="text-[27px] leading-tight md:text-[48px] lh lg:text-[45px] font-bold mt-2">
            {t("Services.title")}
            <br />
            <span className="text-red-400 font-semibold">{t("Services.subtitle")}</span>
          </h1>
          <p className="text-[#5B5B5B] text-[14px] md:text-[18px] lh lg:text-[20px] mt-[12px]">
            {t("Services.description")}
          </p>
        </div>
        <div>
          <Image
            src={"/images/service-banner.png"}
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
