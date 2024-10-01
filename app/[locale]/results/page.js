import Banner from "@/app/[locale]/_components/results/Banner";
import Request from "@/app/[locale]/_components/results/Request";
import Instructions from "@/app/[locale]/_components/results/Instructions";
import Blog from "@/app/[locale]/_components/Blog";
import arrowRight from "@/public/svg/arrow-right.svg";
import Image from "next/image";
import { useTranslations } from "next-intl";

export default function HomePage({ params }) {
  const t = useTranslations('Main.Blogs');

  return (
    <div className="">
      <Banner locale={params.locale} />
      <Request locale={params.locale} />
      <Instructions locale={params.locale} />
      <div className="w-full bg-white">
        <div className="w-full max-w-[1440px] mx-auto py-12 flex flex-col gap-5">
          <h2 className="text-4xl font-semibold mb-0">{t('title')}</h2>
          <Blog locale={params.locale} />
          <a href={`/${params.locale}/blogs`} className="w-full flex justify-center">
            <button className="flex gap-3 px-10 py-[10px] rounded-full font-semibold text-sm items-center border text-red-400 border-red-400">
              {t('more')}
              <Image
                src={arrowRight}
                width={100}
                height={100}
                alt="Arrow right Red"
                className="h-6 w-6"
              />
            </button>
          </a>
        </div>
      </div>
    </div>
  );
}
