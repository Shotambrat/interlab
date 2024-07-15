
import DoctorsBanner from '@/app/_components/doctors/DoctorsBanner';
import SearchBar from "@/app/_components/Search/SearchBar";
import Filter from '@/app/_components/doctors/Filter';

export default function HomePage() {
  return (
    <div>
        <DoctorsBanner />
        <SearchBar />
        <Filter />

    </div>
  );
}
