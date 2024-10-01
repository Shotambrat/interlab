import Image from "next/image";
import legalImage from "@/public/images/legal-image.png";
import { useTranslations } from "next-intl";

export default function Banner() {
  const t = useTranslations("Legal");
  return (
    <div className="w-full bg-slate-100 relative items-center px-2">
      <div className="w-full max-w-[1440px] mx-auto flex max-lg:flex-col relative">
        <div className="flex flex-col gap-5 py-12 lg:py-20">
          <h1 className="text-red-400 text-3xl lg:text-4xl font-bold w-full max-w-[600px]">
            {t("title")}
            <span className="text-black">{t("subtitle")}</span>
          </h1>
          <p className="w-full max-w-[600px]">{t("description")}</p>
        </div>
        <Image
          src={legalImage}
          width={1000}
          height={1000}
          alt="Legal Image Banner"
          className="h-full w-auto absolute bottom-0 max-lg:relative lg:right-20"
        />
      </div>
    </div>
  );
}
