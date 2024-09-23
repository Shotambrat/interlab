import Image from "next/image"
import analyzeBanner from "@/public/images/analyze-banner.png"
import { useTranslations } from "next-intl"

function AnalyzeBanner() {
    const t = useTranslations()
  return (
    <div className="bg-sky-100 w-full px-4 lg:px-0 mdl:py-10">
        <div className="max-w-[1440px] w-full mx-auto flex flex-col mdl:flex-row overflow-hidden max-mdl:pt-10">
            <div className="flex justify-center flex-col ">
                <h1 className="text-5xl font-bold">{t('Analyze.title')}</h1>
                <p className="mb-0 text-neutral-600 font-medium leading-5 text-lg">{t('Analyze.description')}</p>
            </div>
            <div className="mdl:h-full h-1/2 max-h-1/2 mdl:max-h-full w-auto flex justify-center max-mdl:mt-10">
                <Image
                    src={analyzeBanner}
                    width={1000}
                    height={1000}
                    className="h-full max-mdl:w-[320px] "
                    alt="Analyze Banner"
                />
            </div>
        </div>
    </div>
  )
}

export default AnalyzeBanner