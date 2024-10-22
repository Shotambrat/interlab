import AboutLicense from "../_components/about/AboutLicense";
import Blog from "../_components/Blog";
import AboutBanner from "../_components/ckdl/About";
import Steps from "../_components/ckdl/Steps";
import WhyWe from "../_components/ckdl/WhyWe";
import { useTranslations } from "next-intl";
import Map from "../_components/MainMap";
import Application from "../_components/Application";
import Social from "../_components/ckdl/Social";

export default function HomePage({ params }) {
  const t = useTranslations();
  return (
    <div className="flex flex-col gap-24 slg:gap-24 bg-white px-2 pb-24 slg:pb-48">
      <AboutBanner />
      <WhyWe />
      <Map />
      <AboutLicense />
      <Steps />
      <div className="w-full max-w-[1440px] px-2 mx-auto flex flex-col gap-4">
        <Application />
        <Social />
      </div>
    </div>
  );
}
