import aboutBanner from "@/public/images/interlab-logo.jpg";
import Image from "next/image";
import { useTranslations } from "next-intl";

export default function AboutBanner() {
  const t = useTranslations()
  return (
    <>
      <div className="w-full h-screen-70 mdx:h-screen-90 relative max-slg:gap-5 flex flex-col pt-10">
        <div className="absolute max-slg:relative slg:top-1/3 lg:left-[7%] flex flex-col px-4 2xl:left-[5%]">
          <h1 className="text-5xl max-mdx:text-3xl text-rose-400 font-bold w-full max-w-[560px]">{t('About.title')} <span className="text-black">{t('About.subtitle')}</span></h1>
          <p className="w-full max-w-[400px] leading-5">
          {t('About.description')}
          </p>
          <a href="tel:+998971504747" className="text-white bg-[#FB6A68] font-semibold self-start rounded-full px-8 py-3">
            Связаться с нами
          </a>
        </div>
        <div className="absolute max-slg:relative h-[500px] slg:h-full w-full max-slg:px-4 slg:w-1/2 top-0 right-0">
          <Image
            src={aboutBanner}
            width={1500}
            height={1500}
            alt="About Banner"
            className="h-full w-full max-slg:rounded-3xl rounded-bl-3xl object-cover"
          />
        </div>
      </div>
    </>
  );
}
