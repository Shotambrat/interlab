// app/services/[slug]/page.js

import { client } from '@/sanity/lib/client';
import ServiceItemBanner from '@/app/[locale]/_components/services/ServiceItemBanner';
import ServiceItemInfo from '@/app/[locale]/_components/services/ServiceItemInfo';
import Interest from '@/app/[locale]/_components/services/Interest';
import Application from '@/app/[locale]/_components/Application';

export default async function ServiceDetailPage({ params }) {
  const { slug, locale } = params;

  // Получаем данные сервиса по slug
  const service = await client.fetch(
    `*[_type == "service" && slug.current == $slug][0]{
      name,
      description,
      details,
      icon,
      category->{
        name,
        slug
      }
    }`,
    { slug }
  );

  if (!service) {
    // Обработка случая, если сервис не найден
    return <div>Сервис не найден</div>;
  }

  return (
    <div className="w-full bg-white flex flex-col gap-24 pb-24">
      <ServiceItemBanner service={service} locale={locale} />
      <ServiceItemInfo service={service} locale={locale} />
      <Interest currentService={service} locale={locale} />
      <div className="w-full max-w-[1440px] mx-auto">
        <Application />
      </div>
    </div>
  );
}
