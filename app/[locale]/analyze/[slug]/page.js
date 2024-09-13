import Instuction from "@/app/[locale]/_components/Instuction";
import PopularAnalyze from "@/app/[locale]/_components/PopularAnalyze";
import AnalyzeHead from "@/app/[locale]/_components/analyze/AnalyzeHead";
import AnalyzeInfo from "@/app/[locale]/_components/analyze/AnalyzeInfo";
import { client } from "@/sanity/lib/client";

export default async function AnalyzeDetailPage({ params }) {
  const { slug, locale } = params;

  const test = await client.fetch(
    `*[_type == "test" && slug.current == $slug][0]{
      name,
      shortDescription,
      description,
      price,
      category->{
        name,
        slug
      }
    }`,
    { slug }
  );

  if (!test) {
    return <div>Анализ не найден</div>;
  }

  return (
    <div className="w-full flex flex-col gap-20 mdx:gap-24 lg:gap-36 bg-white pb-36">
      <AnalyzeHead test={test} locale={locale} />
      <AnalyzeInfo test={test} locale={locale} />
      <div className="w-full max-w-[1440px] mx-auto px-3">
        <PopularAnalyze params={{ locale }} />
      </div>
      <div className="w-full max-w-[1440px] mx-auto px-3">
        <Instuction />
      </div>
    </div>
  );
}
