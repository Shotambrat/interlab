import { client } from '@/sanity/lib/client';
import InterestClient from './InterestClient'; // клиентский компонент

export default async function Interest({ currentService, locale }) {
  // Получаем другие сервисы из той же категории, исключая текущий
  const relatedServices = await client.fetch(
    `*[_type == "service" && slug.current != $slug][0...3]{
      name,
      slug,
      description
    }`,
    { slug: currentService.slug?.current || '' }
  );

  return (
    <InterestClient relatedServices={relatedServices} locale={locale} />
  );
}
