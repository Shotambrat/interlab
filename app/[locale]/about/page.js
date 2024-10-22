import AboutService from "@/app/[locale]/_components/about/AboutService";
import AboutInfo from "@/app/[locale]/_components/about/AboutInfo";
import AboutBanner from "@/app/[locale]/_components/about/AboutBanner";
import AboutAchiev from "@/app/[locale]/_components/about/AboutAchiev";
import AboutLicense from "@/app/[locale]/_components/about/AboutLicense";
import Blog from "@/app/[locale]/_components/Blog";
import { useTranslations } from "next-intl";
import MainServices from "../_components/MainServices";
import About from "../_components/About";
import WhyWe from "../_components/ckdl/WhyWe";

export default function AboutPage({ params }) {
  const t = useTranslations();
  return (
    <main className="w-full h-auto bg-white pb-24">
      <AboutBanner />
      {/* <AboutInfo /> */}
      {/* <AboutService /> */}
      {/* <div className="px-2">
        <AboutAchiev />

      </div> */}
      <MainServices params={params} />
      <div className="mb-24 px-2">
        <About />
      </div>
      <div className="mb-24 px-2">
        <WhyWe />
      </div>
      <AboutLicense locale={params.locale} />
      <div className="w-full max-w-[1440px] px-2 mx-auto">
        <h2 className="mt-52 text-4xl font-bold text-neutral-900 max-md:mt-10 max-md:max-w-full">
          {t("Blog.title")}
        </h2>
        <Blog locale={params.locale} />
        <div className="w-full flex justify-center">
          <button className="flex gap-2 justify-center self-center px-16 py-3.5 mt-8 text-base font-bold text-center text-red-400 border border-red-400 border-solid rounded-[100px]">
            <span className="my-auto">{t("Blog.other")}</span>
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/9d858dea97bb716ac0dba9d09749ab621dbd0b3df5fbd758926ae17f2daf60f0?apiKey=e791e0f42eab4556ac944da69358f29b&"
              className="shrink-0 aspect-square w-[23px]"
              alt="Arrow icon"
            />
          </button>
        </div>
      </div>
    </main>
  );
}
