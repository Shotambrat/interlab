import { useTranslations } from "next-intl";

export default function Banner({ locale }) {
  const t = useTranslations();

  return (
    <div className="w-full bg-slate-100 py-16 px-2">
      <div className="w-full max-w-[1440px] flex flex-col gap-8 mx-auto">
        <h1 className="font-bold text-4xl max-slg:text-3xl max-mdx:text-2xl">
          {t('Results.title')}
        </h1>
        <div className="text-sm flex gap-2 md:gap-5 font-semibold max-md:flex-wrap max-md:w-[70%]">
          <a
            href={`/${locale}/about/license`}
            className="px-4 py-3 text-white bg-red-400 rounded-full max-md:w-full max-md:flex max-md:justify-center"
          >
            {t('Results.sertificates')}
          </a>
          <button className="py-3 px-16 border border-red-400 text-red-400 rounded-full max-md:w-full max-md:flex max-md:justify-center">
            {t('connect')}
          </button>
        </div>
      </div>
    </div>
  );
}
