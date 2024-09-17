// app/[locale]/components/ServiceItems.js

import Image from 'next/image';
import rightIcon from '@/public/svg/right-contact-red.svg';
import Link from 'next/link';

export default function ServiceItems({ title, description, url, locale }) {
  return (
    <Link href={`/${locale}${url}`} className="w-full h-[160px] slg:h-[200px] rounded-3xl pl-6 py-6 bg-slate-100">
      <div className="flex flex-col h-full justify-between items-start">
        <div className="flex flex-col">
          <h2 className="font-bold text-2xl">{title}</h2>
          <p className="text-neutral-400">{description}</p>
        </div>
        <div
          className="flex gap-4 hover:gap-6 transition-all duration-150 w-auto"
        >
          <p className="text-xl h-full flex items-center font-semibold text-rose-400">Перейти</p>
          <Image src={rightIcon} width={8} height={8} alt="Right Icon" />
        </div>
      </div>
    </Link>
  );
}
