
import AnalyzeBanner from "@/app/_components/analyze/AnalyzeBanner";
import Instuction from "@/app/_components/Instuction";
import SearchBar from "@/app/_components/Search/SearchBar";
import Filter from "@/app/_components/analyze/Filter";

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
