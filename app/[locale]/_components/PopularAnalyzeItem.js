import Image from "next/image";
import Link from "next/link";
import backet from '@/public/svg/backet.svg';

export default function PopularAnalyzeItem({ title, price, slug }) {
  return (
    <Link href={`/analyze/${slug}`} className='w-full lg:max-w-[400px] max-w-[320px] flex flex-col justify-between p-4 gap-24 border border-neutral-500 rounded-3xl'>
      <h3 className='font-bold text-xl'>
        {title}
      </h3>
      <div className='w-full flex justify-between'>
        <p className='bg-rose-200 text-rose-400 font-bold py-1 rounded-full px-4'>
          {price} сум
        </p>
        <div>
          <Image
            src={backet}
            width={100}
            height={100}
            alt="Basket Icon"
            className="w-8 h-8"
          />
        </div>
      </div>
    </Link>
  );
}
