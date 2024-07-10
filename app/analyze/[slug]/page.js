import Instuction from "@/app/_components/Instuction";
import PopularAnalyze from "@/app/_components/PopularAnalyze";
import AnalyzeHead from "@/app/_components/analyze/AnalyzeHead";
import AnalyzeInfo from "@/app/_components/analyze/AnalyzeInfo";

export default function HomePage() {
  return (
    <div className="w-full flex flex-col gap-20 mdx:gap-24 lg:gap-36 bg-white pb-36">
      <AnalyzeHead />
      <AnalyzeInfo />
      <div className="w-full max-w-[1440px] mx-auto px-3">
        <PopularAnalyze />
      </div>
      <div className="w-full max-w-[1440px] mx-auto px-3">
        <Instuction />
      </div>
    </div>
  );
}
