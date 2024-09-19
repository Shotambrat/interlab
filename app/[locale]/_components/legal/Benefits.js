import { useTranslations } from "next-intl";

export default function Benefits() {
  const t = useTranslations('Legal.benefits')
  const data = t.raw('data')
  return (
    <div className="w-full max-w-[1440px] mx-auto px-2 flex flex-col gap-5">
      <h2 className="text-4xl mdx:text-3xl font-bold">{t('title')}</h2>
      <div className="w-full grid grid-cols-1 mdx:grid-cols-2 lg:grid-cols-4 gap-4">
        {data.map((item, index) => {
          return (
            <div key={index} className="rounded-3xl px-6 py-6 flex flex-col gap-5 bg-slate-50">
              <p className="text-6xl text-neutral-300">0{index + 1}</p>
              <p className="w-full xl:max-w-[60%]">{item}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
