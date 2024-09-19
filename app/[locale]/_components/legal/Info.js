import { useTranslations } from "next-intl";


export default function Info() {
  const formatText = (text) => {
    return text.replace(/\n/g, "<br />")
  }
  const t = useTranslations('Legal.info');
  return (
    <div className="w-full max-w-[1440px] flex flex-col gap-10 mx-auto px-2">
      <div className="flex w-full max-mdl:flex-col max-mdl:gap-8">
        <div className="flex-1">
          <h2 className="text-4xl max-mdx:text-3xl font-bold w-full max-w-[60%]">
            {t('title1')}
          </h2>
        </div>
        <div className="flex-1 flex flex-col gap-4 leading-5">
          <p className="w-full slg:max-w-[70%]"
            dangerouslySetInnerHTML={{
              __html: formatText(t("description1")),
            }}
          />
           
        </div>
      </div>
      <hr />
      <div className="flex w-full max-mdl:flex-col max-mdl:gap-8">
        <div className="flex-1">
          <h2 className="text-4xl max-mdx:text-3xl font-bold w-full max-w-[60%]">
          {t('title2')}
          </h2>
        </div>
        <div className="flex-1 flex flex-col gap-4 leading-5">
          <p className="w-full slg:max-w-[70%]" 
              dangerouslySetInnerHTML={{
                __html: formatText(t('description2'))
              }}
          />
        </div>
      </div>
    </div>
  );
}
