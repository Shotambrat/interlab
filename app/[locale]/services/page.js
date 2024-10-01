import { client } from "@/sanity/lib/client";
import ServiceBanner from "@/app/[locale]/_components/services/ServiceBanner";
import ServiceList from "@/app/[locale]/_components/services/ServiceList";

export default async function ServicePage({ params }) {
  const { locale } = params;

  // Fetch the services from Sanity with category info
  const services = await client.fetch(
    `*[_type == "service"]{
      name,
      slug,
      category->{
        name
      }
    }`
  );

  return (
    <div>
      <ServiceBanner locale={locale} />
      <ServiceList services={services} locale={locale} />
    </div>
  );
}
