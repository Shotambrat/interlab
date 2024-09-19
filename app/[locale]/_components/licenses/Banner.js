import { useTranslations } from "next-intl";

export default function Banner() {
  const t = useTranslations()
  return (
    <div className="w-full bg-slate-100 px-2">
        <div className="w-full max-w-[1440px] py-14 flex flex-col gap-6 mx-auto">
            <h1 className="text-4xl max-mdx:text-3xl font-bold">{t('Licencies.title')} <span className="text-red-400">{t('Licencies.subtitle')}</span></h1>
            <p className="text-neutral-400">{t('Licencies.description')}</p>
        </div>
    </div>
  );
}
