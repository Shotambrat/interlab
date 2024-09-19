import Image from "next/image";
import medicalReport from "@/public/images/instructions/medical-report.png";
import { useTranslations } from "next-intl";

export default function Banner() {
  const t = useTranslations('Instructions')
  return (
    <div className="bg-sky-100 w-full px-4 lg:px-0 mdl:py-10">
      <div className="max-w-[1440px] w-full mx-auto flex flex-col justify-between lg:h-[300px] mdl:flex-row overflow-hidden max-mdl:py-10">
        <div className="flex justify-center flex-col ">
          <h1 className="text-5xl font-bold">{t('title')}</h1>
          <p className="mt-3 text-neutral-600 font-medium leading-5 text-lg max-w-[700px]">
          {t('description')}
          </p>
        </div>
        <div className="mdl:h-full h-full max-h-1/2 mdl:max-h-full w-auto flex justify-center max-mdl:mt-10">
          <Image
            src={medicalReport}
            width={1000}
            height={1000}
            className="h-full w-auto max-mdl:w-[320px] "
            alt="Analyze Banner"
          />
        </div>
      </div>
    </div>
  );
}
