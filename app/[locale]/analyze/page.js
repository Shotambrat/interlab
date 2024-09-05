
import AnalyzeBanner from "@/app/[locale]/analyze/AnalyzeBanner";
import Instuction from "@/app/[locale]/Instuction";
import SearchBar from "@/app/[locale]/Search/SearchBar";
import Filter from "@/app/[locale]/analyze/Filter";

export default function HomePage() {
  return (
    <div>
      <AnalyzeBanner />
      <SearchBar />
      <Filter />
      <div className="w-full bg-white py-52">
        <div className="w-full max-w-[1440px] mx-auto">
          <Instuction />
        </div>
      </div>
    </div>
  );
}
