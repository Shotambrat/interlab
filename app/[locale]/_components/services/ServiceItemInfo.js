// app/[locale]/components/ServiceItemInfo.js

import PortableText from '@sanity/block-content-to-react';

export default function ServiceItemInfo({ service, locale }) {
  return (
    <div className="w-full max-w-[1440px] flex flex-col gap-4 text-neutral-400 mx-auto px-2">
      <h2 className="text-2xl font-bold text-black">Описание</h2>
      <PortableText blocks={service.details[locale]} />
    </div>
  );
}
