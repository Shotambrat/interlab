
import AnalyzeBanner from "@/app/[locale]/_components/analyze/AnalyzeBanner";
import Instuction from "@/app/[locale]/_components/Instuction";

import Filter from "@/app/[locale]/_components/analyze/Filter";
import SearchComp from "../_components/SearchComp";

export default function HomePage({ params }) {
  return (
    <div>
      <AnalyzeBanner />
      <div className="w-full max-w-[1440px] mx-auto my-11 px-[10px]">
        <SearchComp placeholder={'Введите название анализа'} />
      </div>
      <Filter params={params} />
      <div className="w-full bg-white py-52 px-[10px]">
        <div className="w-full max-w-[1440px] mx-auto">
          <Instuction />
        </div>
      </div>
    </div>
  );
}
