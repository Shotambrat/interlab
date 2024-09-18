import { useTranslations } from "next-intl";

const AboutService = () => {
  const t = useTranslations('About.services')
  return (
      <div className="w-full max-w-[1440px] mx-auto mt-24">
        <div className="container mx-auto py-8">
          <h2 className="text-3xl font-bold mb-6 ml-6">{t('title')}</h2>
          <div className="grid grid-cols-1 mdl:grid-cols-2 text-rose-400">
            <div className="p-6 border-b border-r border-gray-200">
              <h3 className="text-2xl uppercase font-semibold mb-4">
              {t('title1')}
              </h3>
              <p className="text-neutral-400">
                {t('description1')}
              </p>
            </div>
            <div className="p-6 border-l border-b border-gray-200 ">
              <h3 className="text-2xl font-semibold mb-4">
              {t('title2')}
              </h3>
              <p className="text-neutral-400">
              {t('description2')}
              </p>
            </div>
            <div className="p-6 border-t border-r border-gray-200">
              <h3 className="text-2xl font-semibold mb-4">
              {t('title3')}
              </h3>
              <p className="text-neutral-400">
              {t('description3')}
              </p>
            </div>
            <div className="p-6 border-t border-l border-gray-200">
              <h3 className="text-2xl font-semibold mb-4">{t('title4')}</h3>
              <p className="text-neutral-400">
              {t('description4')}
              </p>
            </div>
          </div>
        </div>
      </div>
  );
};

export default AboutService;
