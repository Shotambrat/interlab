import Image from "next/image"
import analyzeBanner from "@/public/images/analyze-banner.png"

function AnalyzeBanner() {
  return (
    <div className="bg-sky-100 w-full px-4 lg:px-0 mdl:py-10">
        <div className="max-w-[1440px] w-full mx-auto flex flex-col mdl:flex-row overflow-hidden max-mdl:py-10">
            <div className="flex justify-center flex-col ">
                <h1 className="text-5xl font-bold">Анализы</h1>
                <p className="mt-3 text-neutral-600 font-medium leading-5 text-lg">На странице анализов вы можете ознакомиться с широким спектром наших лабораторных услуг, а также узнать актуальные цены. От стандартных анализов крови до специализированных генетических тестов – все наши исследования проводятся с использованием современного оборудования и под строгим контролем качества, гарантируя точность и надежность результатов.</p>
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