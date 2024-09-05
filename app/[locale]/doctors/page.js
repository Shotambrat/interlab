
import DoctorsBanner from '@/app/[locale]/_components/doctors/DoctorsBanner';
import SearchBar from "@/app/[locale]/_components/Search/SearchBar";
import Filter from '@/app/[locale]/_components/doctors/Filter';

export default function HomePage() {
  return (
    <div>
        <DoctorsBanner />
        <SearchBar />
        <Filter />

    </div>
  );
}
