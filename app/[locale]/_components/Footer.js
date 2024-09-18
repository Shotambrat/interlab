import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";
import resultLogo from "@/public/svg/result-logo.svg";

const SocialIcon = ({ src, linkUrl }) => (
  <Link href={linkUrl}>
    <img
      loading="lazy"
      src={src}
      className="shrink-0 aspect-square w-[45px]"
      alt="Social media icon"
    />
  </Link>
);

const FooterLink = ({ text }) => <div className="mt-5">{text}</div>;

const FooterSection = ({ title, links, locale }) => (
  <div className="flex flex-col slg:w-6/12 max-md:ml-0 max-md:w-full">
    <nav className="flex flex-col grow text-xl text-neutral-900  max-slg:mt-10">
      <Link href={`/${locale}/${title.url}`}>
        <h3>{title.title}</h3>
      </Link>
      {links.map((link, index) => (
        <Link href={link.url} key={index}>
          <FooterLink text={link.title} />
        </Link>
      ))}
    </nav>
  </div>
);

function Footer({ locale }) {
  const t = useTranslations();
  return (
    <div className="flex flex-col justify-center">
      <div className="flex flex-col w-full bg-slate-50 max-md:max-w-full">
        <header className="flex justify-center items-center px-16 py-10 w-full bg-slate-50 max-md:px-5 max-md:max-w-full">
          <div className="flex justify-between gap-5 w-full max-w-[1434px] max-slg:flex-wrap max-md:max-w-full">
            <div className="flex flex-col self-start">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/604506ca9fb5f43eea55e3238ed5f23c1f55c1340299778968841854431be548?apiKey=e791e0f42eab4556ac944da69358f29b&"
                className="self-center aspect-[3.7] w-[223px]"
                alt="Company logo"
              />
              <div className="flex gap-3 pr-16 mt-8 max-md:pr-5">
                <SocialIcon
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/9c71bc10c400533dd9fbac412ae42426654bb0fef5b1493037ca61e6bc831a43?apiKey=e791e0f42eab4556ac944da69358f29b&"
                  linkUrl={"https://www.facebook.com/intermeduz/"}
                />
                <SocialIcon
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/b8103f6fceeb51d89439e1b44b26a2540f94da390091b4ea7611417d4e44da97?apiKey=e791e0f42eab4556ac944da69358f29b&"
                  linkUrl={"https://www.instagram.com/intermed.centre/"}
                />
                <SocialIcon
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/9936081e82166164b2f73874d6ae5898bda1496a1b28684a3a9060ca27906cc3?apiKey=e791e0f42eab4556ac944da69358f29b&"
                  linkUrl={"https://t.me/intermed_innovation_uz"}
                />
              </div>
            </div>
            <div className="flex-auto max-w-full lg:flex lg:justify-end">
              <div className="flex lg:w-2/3 gap-5 max-mdl:flex-col max-md:gap-0">
                <FooterSection
                  locale={locale}
                  title={{ title: t("Footer.about"), url: "about" }}
                  links={[
                    { title: t("Footer.partners"), url: "partners" },
                    { title: t("Footer.sertificates"), url: "about/licences" },
                    { title: t("Footer.equipments"), url: "" },
                    { title: t("Footer.pricelist"), url: "/analyze" },
                  ]}
                />
                <FooterSection
                  locale={locale}
                  title={{ title: t("Footer.for-legal"), url: "legal" }}
                  links={[
                    { title: t("Footer.preparation"), url: "instructions" },
                    { title: t("Footer.feedback"), url: "" },
                    { title: t("Footer.vacancy"), url: "vacancies" },
                  ]}
                />
              </div>
            </div>
          </div>
        </header>
        <footer className="flex flex-col items-center px-16 pb-2.5 w-full text-base text-red-400 bg-slate-50 max-md:px-5 max-md:max-w-full">
          <div className="flex flex-col w-full max-w-[1440px] max-md:max-w-full">
            <div className="shrink-0 h-px bg-neutral-200 max-md:max-w-full" />
            <div className="flex gap-5 mt-2.5 max-md:flex-wrap max-md:max-w-full">
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
        </footer>
      </div>
    </div>
  );
}

export default Footer;
