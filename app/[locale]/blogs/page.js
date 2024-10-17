import Sale from "@/app/[locale]/_components/Sale";
import BlogPagination from "@/app/[locale]/_components/blogs/BlogPagination";
import { useTranslations } from "next-intl";

export default function Page({params}) {
  const t = useTranslations()

  return (
    <div>
      <div className="w-full bg-white ">
        <div className="max-w-[1440px] w-full mx-auto py-24 px-2 flex flex-col gap-52">
          {/* <div>

          <h2 className="text-4xl max-md:text-2xl font-bold mb-4 xl:w-[50%]">
            {t('Blog.prom-title')}{" "}
            <span className="text-red-500">{t('Blog.sub-prom-title')}</span>
          </h2>
          <Sale locale={params.locale} />
          </div> */}
          <div>
          <h2  className="text-4xl max-md:text-2xl font-bold mdl:mb-8">
          {t('Blog.title')}
          </h2>
          <BlogPagination locale={params.locale} />
          </div>
        </div>
      </div>
    </div>
  );
}
