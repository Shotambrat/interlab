// app/[locale]/components/Interest.js

import ServiceItems from './ServiceItem';
import { client } from '@/sanity/lib/client';

export default async function Interest({ currentService, locale }) {
  // Получаем другие сервисы из той же категории, исключая текущий
  const relatedServices = await client.fetch(
    `*[_type == "service" && category._ref == $categoryId && slug.current != $slug][0...3]{
      name,
      slug,
      description
    }`,
    { categoryId: currentService.category._ref, slug: currentService.slug.current }
  );

  return (
    <div className="w-full px-2">
      <div className="w-full max-w-[1440px] mx-auto flex flex-col gap-5">
        <h2 className="text-4xl font-bold">Также вас может заинтересовать</h2>
        <div className="w-full grid max-mdx:grid-cols-1 max-lg:grid-cols-2 grid-cols-3 gap-3">
          {relatedServices.map((service, index) => (
            <ServiceItems
              key={index}
              title={service.name[locale]}
              description={service.description[locale]}
              url={`/services/${service.slug.current}`}
            />
          ))}
        </div>
        <div className="flex w-full justify-center">
          <a href="/services">
            <button className="flex gap-2 justify-center self-center px-10 py-3.5 mt-9 text-base font-bold text-center text-red-400 border border-red-400 border-solid rounded-[100px] max-md:px-5">
              <span className="my-auto">Все услуги</span>
              <img
                loading="lazy"
                src="/path/to/arrow-icon.svg"
                className="shrink-0 aspect-square w-[23px]"
                alt="Arrow icon"
              />
            </button>
          </a>
        </div>
      </div>
    </div>
  );
}
