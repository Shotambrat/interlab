import AboutLicense from "../_components/about/AboutLicense";
import Blog from "../_components/Blog";
import AboutBanner from "../_components/ckdl/About";
import Steps from "../_components/ckdl/Steps";
import WhyWe from "../_components/ckdl/WhyWe";
import { useTranslations } from "next-intl";
import Map from "../_components/MainMap";

export default function HomePage({params}) {
  const t = useTranslations()
  return (
    <div className="flex flex-col gap-24 slg:gap-24 bg-white px-2 pb-24 slg:pb-48">
      <AboutBanner />
      {/* <WhyWe /> */}
      <Map />
      <AboutLicense />
      <Steps />
      <div className="w-full max-w-[1440px] mx-auto flex flex-col gap-4">
        <h2 className="text-3xl font-bold text-neutral-900 max-md:mt-24 max-md:max-w-full mb-0">
          {t("Main.Blogs.title")}
        </h2>
        <Blog locale={params.locale} />
        <a
          href="/blogs"
          className="flex gap-2 justify-center self-center px-16 py-3.5 mt-9 text-base font-bold text-center text-red-400 border border-red-400 border-solid rounded-[100px] max-md:px-[52px]"
        >
          <span className="my-auto">{t("Main.Blogs.more")}</span>
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/9d858dea97bb716ac0dba9d09749ab621dbd0b3df5fbd758926ae17f2daf60f0?apiKey=e791e0f42eab4556ac944da69358f29b&"
            className="shrink-0 aspect-square w-[23px]"
            alt="Arrow icon"
          />
        </a>
      </div>
    </div>
  );
}
