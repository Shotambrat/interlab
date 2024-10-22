import React from "react";
import ServiceItems from "../services/ServiceItem";

export default function Services({ services, locale }) {
  if (!services || services.length === 0) {
    return <div></div>;
  }

  return (
    <div className="flex flex-col gap-8">
      <h3 className="text-4xl font-semibold">Услуги врача</h3>
      <div className="grid grid-cols-1 mdx:grid-cols-2 lg:grid-cols-3 gap-4">
        {services.map((service, i) => (
          <ServiceItems
            key={i}
            title={service.name[locale] || service.name.ru} // Локализация имени услуги
            category={service.category?.name[locale] || service.category?.name?.ru} // Категория услуги
            url={`/services/${service.slug.current}`} // Генерация URL для услуги
            locale={locale}
          />
        ))}
      </div>
    </div>
  );
}
