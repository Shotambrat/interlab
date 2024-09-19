import { useTranslations } from "next-intl";
import dynamic from 'next/dynamic';

// Lazy load component
const WhyIntermedItem = dynamic(() => import("./WhyIntermedItem"));

// Fetch data from a separate JSON file

export default function WhyIntermed() {
  const t = useTranslations('Vacancies');
  const data = t.raw("data");
  
  return (
    <div className='w-full max-w-[1440px] mx-auto px-2 flex flex-col gap-8'>
        <h2 className="text-4xl font-semibold">{t('whyus')}</h2>
        <div className="w-full grid grid-cols-1 mdx:grid-cols-2 lg:grid-cols-4 gap-4">
          {data.map((item, index) => (
            <WhyIntermedItem
              key={index}
              title={item.title}
              description={item.description}
              photoSrc={require(`@/public/images/vacancies/why-${item.photoSrc}.png`)}
            />
          ))}
        </div>
    </div>
  );
}