'use client'; // указываем, что это клиентский компонент
import { useTranslations } from 'next-intl';
import ServiceItems from './ServiceItem';

export default function InterestClient({ relatedServices, locale }) {
  const t = useTranslations();

  return (
    <div className="w-full px-2">
      <div className="w-full max-w-[1440px] mx-auto flex flex-col gap-5">
        <h2 className="text-4xl font-bold">{t('Services.also')}</h2>
        <div className="w-full grid max-mdx:grid-cols-1 max-lg:grid-cols-2 grid-cols-3 gap-3">
          {relatedServices.map((service, index) => (
            <ServiceItems
              key={index}
              title={service.name?.[locale] || service.name?.ru || "Название услуги"}
              description={service.description?.[locale] || service.description?.ru || "Описание отсутствует"}
              url={`/services/${service.slug.current}`}
              locale={locale}
            />
          ))}
        </div>
        <div className="flex w-full justify-center">
          <a href={`/${locale}/services`}>
            <button className="flex gap-2 justify-center self-center px-10 py-3.5 mt-9 text-base font-bold text-center text-red-400 border border-red-400 border-solid rounded-[100px] max-md:px-5">
              <span className="my-auto">{t('Main.Services.all')}</span>
              {/* <img
                loading="lazy"
                src="/path/to/arrow-icon.svg"
                className="shrink-0 aspect-square w-[23px]"
                alt="Arrow icon"
              /> */}
            </button>
          </a>
        </div>
      </div>
    </div>
  );
}
