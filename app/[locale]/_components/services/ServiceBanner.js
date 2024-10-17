import servicebanner from "@/public/images/ServicesBanner.png";
import Image from "next/image";
import { useTranslations } from "next-intl";


export default function ServiceBanner({ locale }) {
  const t = useTranslations();
  return (
    <div className="mdx:h-screen-90 bg-serviceBg relative pt-10 xl:pb-[100px] pb-10 px-2">
      <div className="mx-auto w-full h-full max-w-[1440px] flex max-mdx:flex-col-reverse max-mdx:gap-10 justify-between items-center">
        <div className="flex flex-col w-full xl:w-2/5">
          <h1 className="xl:text-6xl slg:text-4xl text-3xl font-bold text-center xl:text-left">
            {t("Services.title")}{" "}
            <span className="text-red-400">{t("Services.subtitle")}</span>
          </h1>
          <p className="text-neutral-600 max-mdx:hidden leading-6 slg:leading-4 text-lg xl:leading-6 text-center xl:text-left">
            {t("Services.description")}
          </p>
        </div>
        <div className="w-full xl:max-w-[450px] lg:mr-24 flex justify-center">
          <Image
            priority
            className="h-full max-slg:max-w-[400px] w-full"
            src={servicebanner}
            width={1000}
            height={1000}
            alt="The Wild Oasis logo"
            quality={100}
          />
        </div>
      </div>
    </div>
  );
}
