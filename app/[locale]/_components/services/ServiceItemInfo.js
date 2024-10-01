import PortableText from '@sanity/block-content-to-react';
import { useTranslations } from 'next-intl';

export default function ServiceItemInfo({ service, locale }) {
  const t = useTranslations();
  
  // Safely accessing the block content for the appropriate locale
  const serviceDetails = service.details?.[locale] || service.details?.ru || [];

  return (
    <div className="w-full max-w-[1440px] flex flex-col gap-4 text-neutral-400 mx-auto px-2">
      <h2 className="text-2xl font-bold text-black">{t('Services.desc')}</h2>

      {/* Render PortableText only if serviceDetails exist */}
      {serviceDetails && serviceDetails.length > 0 ? (
        <PortableText blocks={serviceDetails} />
      ) : (
        <p>{t('Services.noDetails')}</p>
      )}
    </div>
  );
}
