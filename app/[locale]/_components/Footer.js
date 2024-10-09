"use client"
import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";
import resultLogo from "@/public/svg/result-logo.svg";
import LiveClock from "./LiveClock";
import WeatherDisplay from "./WeatherDisplay";

const fetchToCount = async (counter) => {
  try {
    let response = await fetch(counter, {
      method: "POST",
    });
    console.log("Response Of Count", response.json());
  } catch (error) {
    console.log("error to counter fetching", error);
  }
};

const SocialIcon = ({ src, linkUrl, counter }) => (
  <button onClick={() => fetchToCount(counter)}>
    <a target="_blank" href={linkUrl} rel="noopener noreferrer">
      <img
        loading="lazy"
        src={src}
        className="shrink-0 aspect-square w-[45px] hover:opacity-80 transition-opacity"
        alt="Social media icon"
      />
    </a>
  </button>
);

const FooterLink = ({ text }) => (
  <div className="mt-5 hover:text-gray-700 transition-colors">{text}</div>
);

const FooterSection = ({ title, links, locale }) => (
  <div className="flex flex-col slg:w-6/12  max-md:ml-0 max-md:w-full">
    <nav className="flex flex-col grow text-xl text-neutral-900 max-slg:mt-10">
      {links.map((link, index) => (
        <Link
          href={`/${locale}/${link.url}`}
          className="hover:underline transition-all duration-150"
          key={index}
        >
          <FooterLink text={link.title} />
        </Link>
      ))}
    </nav>
  </div>
);

function Footer({ locale }) {
  const t = useTranslations();
  return (
    <footer className="flex flex-col justify-center bg-slate-50">
      <div className="flex flex-col w-full max-md:max-w-full">
        <aside className="flex justify-center items-center px-2 py-10 bg-slate-50 ">
          <div className="flex justify-between max-lg:flex-col gap-5 w-full max-w-[1440px] max-slg:flex-wrap">
            <div className="max-lg:flex max-lg:justify-between max-lg:gap-4">
              <div className="flex flex-col">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/604506ca9fb5f43eea55e3238ed5f23c1f55c1340299778968841854431be548?apiKey=e791e0f42eab4556ac944da69358f29b&"
                  className="self-center w-[223px] aspect-[3.7]"
                  alt="Company logo"
                />
                <div className="flex gap-3 mt-8">
                  <SocialIcon
                    counter={"https://interlab.mrjtrade.uz/api/count?button=facebook"}
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/9c71bc10c400533dd9fbac412ae42426654bb0fef5b1493037ca61e6bc831a43?apiKey=e791e0f42eab4556ac944da69358f29b&"
                    linkUrl={"https://www.facebook.com/intermeduz/"}
                  />
                  <SocialIcon
                    counter={"https://interlab.mrjtrade.uz/api/count?button=instagram"}
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/b8103f6fceeb51d89439e1b44b26a2540f94da390091b4ea7611417d4e44da97?apiKey=e791e0f42eab4556ac944da69358f29b&"
                    linkUrl={"https://www.instagram.com/intermed.centre/"}
                  />
                  <SocialIcon
                    counter={"https://interlab.mrjtrade.uz/api/count?button=call"}
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/9936081e82166164b2f73874d6ae5898bda1496a1b28684a3a9060ca27906cc3?apiKey=e791e0f42eab4556ac944da69358f29b&"
                    linkUrl={"https://t.me/intermed_innovation_uz"}
                  />
                </div>
              </div>
              <div className="flex lg:hidden flex-col items-center gap-2">
                <LiveClock />
                <WeatherDisplay />
              </div>
            </div>

            <div className="flex w-full lg:w-1/2 gap-5 max-mdx:flex-col">
              <FooterSection
                locale={locale}
                links={[
                  { title: t("Footer.about"), url: "about" },
                  { title: t("Footer.partners"), url: "partners" },
                  { title: t("Footer.sertificates"), url: "about/licences" },
                  // { title: t("Footer.equipments"), url: "" },
                  { title: t("Footer.pricelist"), url: "analyze" },
                ]}
              />
              <FooterSection
                locale={locale}
                links={[
                  { title: t("Footer.for-legal"), url: "legal" },
                  { title: t("Footer.preparation"), url: "instructions" },
                  // { title: t("Footer.feedback"), url: "" },
                  { title: t("Footer.vacancy"), url: "vacancies" },
                ]}
              />
            </div>
            <div className="flex max-lg:hidden flex-col items-center gap-2">
              <LiveClock />
              <WeatherDisplay />
            </div>
          </div>
        </aside>
        <section className="flex flex-col items-center px-2 pb-2.5 text-base text-red-400">
          <div className="flex flex-col w-full max-w-[1440px]">
            <div className="shrink-0 h-px bg-neutral-200" />
            <div className="flex gap-5 mt-2.5 max-mdx:flex-wrap">
              <p className="flex-auto my-auto">© 2024 {t("Footer.rights")}</p>
              <a
                target="_blank"
                href="https://result-me.uz/api/redirect?from=aW50ZXJsYWI="
              >
                <Image
                  src={resultLogo}
                  width={500}
                  height={500}
                  alt="Result logo"
                  className="h-full max-h-10 w-auto"
                />
              </a>
            </div>
          </div>
        </section>
      </div>
    </footer>
  );
}

export default Footer;
