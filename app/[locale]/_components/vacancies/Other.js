import Link from "next/link";
import { useTranslations } from "next-intl";

const data = [
  {
    title: "Админстратор",
    url: "vacancies/admin",
  },
  {
    title: "Медицинский регистратор",
    url: "vacancies/medreg",
  },
  {
    title: "Оператор Call-центра",
    url: "vacancies/call-operator",
  },
];

export default function Other() {
  const t = useTranslations('Vacancies')
  return (
    <div className="w-full max-w-[1440px] mx-auto px-2 flex flex-col gap-8">
      <h2 className="text-4xl font-semibold">{t('vacansies')}</h2>
      <div className="w-full grid grid-cols-1 mdx:grid-cols-2 lg:grid-cols-3 gap-4">
        {data.map((items, index) => {
          return (
            <Link
              href={items.url}
              key={index}
              className="border border-neutral-300 rounded-3xl h-[200px] p-6 flex flex-col justify-between"
            >
              <h4 className="text-xl font-semibold">{items.title}</h4>
              <div className="text-red-400 text-xl font-semibold">
                {t('more')}
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
