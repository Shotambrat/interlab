import Image from 'next/image';
import rightIcon from '@/public/svg/right-contact-red.svg';
import Link from 'next/link';
import { useTranslations } from 'next-intl';

export default function ServiceItems({ title, category, url, locale }) {
  const t = useTranslations();

  return (
    <Link href={`/${locale}/${url}`} className="w-full h-[200px] slg:h-[200px] rounded-3xl pl-6 py-6 bg-slate-100">
      <div className="flex flex-col h-full justify-between items-start">
        <div className="flex flex-col">
          <h2 className="font-bold text-xl slg:text-2xl break-words">{title}</h2>
          {/* Display the category name */}
          <p className="text-neutral-400">{category}</p>
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
