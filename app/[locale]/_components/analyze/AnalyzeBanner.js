import Image from "next/image";
import analyzeBanner from "@/public/images/analyze-banner.png";
import { useTranslations } from "next-intl";

function AnalyzeBanner() {
  const t = useTranslations();
  return (
    <div className="bg-sky-100 w-full px-4 lg:px-0 py-10 h-full lg:max-h-[400px]">
      <div className="max-w-[1440px] w-full mx-auto flex flex-col mdl:flex-row items-center h-full overflow-hidden">
        {/* Left side - title and description */}
        <div className="flex flex-col w-full mdl:max-w-[800px] text-left justify-center">
          <h1 className="text-4xl font-bold text-neutral-900 mb-4">{t('Analyze.title')}</h1>
          <p className="text-neutral-600 font-medium leading-6 text-lg">
            {t('Analyze.description')}
          </p>
        </div>
        
        {/* Right side - image */}
        <div className="mdl:w-3/4 w-full flex justify-end max-mdl:justify-center">
          <Image
            quality={100}
            src={analyzeBanner}
            width={1000}
            height={1000}
            className="w-full max-w-[300px] mdl:mr-12 object-contain"
            alt="Analyze Banner"
          />
        </div>
      </div>
    </div>
  );
}

export default AnalyzeBanner;
