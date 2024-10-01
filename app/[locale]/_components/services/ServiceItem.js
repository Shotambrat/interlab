import Image from 'next/image';
import rightIcon from '@/public/svg/right-contact-red.svg';
import Link from 'next/link';
import { useTranslations } from 'next-intl';
import PortableText from '@sanity/block-content-to-react'; // Import PortableText to render block content

export default function ServiceItems({ title, description, url, locale }) {
  const t = useTranslations();

  // Function to truncate string descriptions if needed
  const truncateDescription = (text, limit) => {
    if (text?.length > limit) {
      return text.substring(0, limit) + '...';
    }
    return text;
  };

  return (
    <Link href={`/${locale}${url}`} className="w-full h-[160px] slg:h-[200px] rounded-3xl pl-6 py-6 bg-slate-100">
      <div className="flex flex-col h-full justify-between items-start">
        <div className="flex flex-col">
          <h2 className="font-bold text-2xl">{title}</h2>

          {/* <div className="text-neutral-400">
            {Array.isArray(description) ? (
              <PortableText blocks={description} />  // Render block content if it's an array
            ) : (
              <p>{truncateDescription(description, 100)}</p>  // Render simple text and truncate it
            )}
          </div> */}
        </div>
        
        <div className="flex gap-4 hover:gap-6 transition-all duration-150 w-auto">
          <p className="text-xl h-full flex items-center font-semibold text-rose-400">
            {t('Services.linkUp')}
          </p>
          <Image src={rightIcon} width={8} height={8} alt="Right Icon" />
        </div>
      </div>
    </Link>
  );
}
