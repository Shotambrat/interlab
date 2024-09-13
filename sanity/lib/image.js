// Пример использования в компоненте

import imageUrlBuilder from '@sanity/image-url';
import { client } from '@/sanity/lib/client';

const builder = imageUrlBuilder(client);

function urlFor(source) {
  return builder.image(source);
}

// В вашем компоненте
<img src={urlFor(service.icon).url()} alt={service.name[locale]} />
