import AnalyzeBanner from "@/app/_components/analyze/AnalyzeBanner";
import Instuction from "../_components/Instuction";
import SearchBar from "../_components/Search/SearchBar";

export default function HomePage() {
  return (
    <div>
      <AnalyzeBanner />
      <SearchBar />
      <div className="w-full bg-white py-52">
        <div className="w-full max-w-[1440px] mx-auto">
          <Instuction />
        </div>
      </div>
    </div>
  );
}
