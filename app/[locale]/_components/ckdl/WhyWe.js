import Image from "next/image";
import { useTranslations } from "next-intl";

export default function WhyWe() {
  const t = useTranslations("CKDL.whyWe");

  return (
    <div className="w-full max-w-[1440px] mx-auto flex flex-col gap-8">
      <h2 className="text-3xl lg:text-3xl font-semibold">{t("heading")}</h2>
      <div className="w-full flex flex-col gap-4">
        <div className="w-full grid grid-cols-1 mdx:grid-cols-2 mdx:grid-rows-2 lg:grid-cols-3 lg:grid-rows-none gap-4">
          <div className="col-auto lg:col-auto mdx:col-span-1 mdx:row-span-1 rounded-3xl bg-[#FFEFEF] p-4 flex flex-col gap-1">
            <h3 className="text-2xl font-semibold text-[#FB6A68] w-full max-w-[320px]">
              {t("advantages.modernEquipment.title")}
            </h3>
            <p className="font-medium text-lg text-[#151515] w-full max-w-[320px]">
              {t("advantages.modernEquipment.description")}
            </p>
          </div>

          <div className="col-auto lg:col-auto mdx:col-span-1 mdx:row-span-1 rounded-3xl bg-[#FFEFEF] p-4 flex flex-col gap-1">
            <h3 className="text-2xl font-semibold text-[#FB6A68] w-full max-w-[320px]">
              {t("advantages.accessibility.title")}
            </h3>
            <p className="font-medium text-lg text-[#151515] w-full max-w-[320px]">
              {t("advantages.accessibility.description")}
            </p>
          </div>

          <div className="col-auto lg:col-auto mdx:col-span-2 mdx:row-span-1 rounded-3xl bg-[#FFEFEF] p-4 flex flex-col gap-1">
            <h3 className="text-2xl font-semibold text-[#FB6A68] w-full lg:max-w-[320px]">
              {t("advantages.fastResults.title")}
            </h3>
            <p className="font-medium text-lg text-[#151515] w-full lg:max-w-[320px]">
              {t("advantages.fastResults.description")}
            </p>
          </div>
        </div>

        <div className="w-full grid grid-cols-1 mdx:grid-cols-2 gap-4">
          <div className="rounded-3xl bg-[#FFEFEF] p-4 flex flex-col gap-1">
            <h3 className="text-2xl font-semibold text-[#FB6A68] w-full break-words">
              {t("advantages.qualifiedSpecialists.title")}
            </h3>
            <p className="font-medium text-lg text-[#151515] w-full max-w-[320px]">
              {t("advantages.qualifiedSpecialists.description")}
            </p>
          </div>

          <div className="rounded-3xl bg-[#FB6A68] pt-16 pb-8 flex flex-col items-center justify-center relative overflow-hidden">
            <h3 className="text-2xl font-semibold text-white text-center">
              {t("advantages.interlab.title")}
              <p className="font-medium text-lg">{t("advantages.interlab.description")}</p>
            </h3>
            <Image
              src={"/svg/ckdl/line.svg"}
              width={200}
              height={50}
              alt="Svg line for card"
              className="absolute -left-[20px] -top-[20px]"
            />
            <Image
              src={"/svg/ckdl/bottom-line.svg"}
              width={200}
              height={50}
              alt="Svg line for card"
              className="absolute -right-[20px] -bottom-[20px]"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
