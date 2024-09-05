import Map from "@/app/[locale]/_components/addresses/Map"
import SearchBar from "@/app/[locale]/_components/Search/SearchBar"
import Filter from "@/app/[locale]/_components/addresses/Filter"

export default function page() {
  return (
    <div className='w-full bg-white flex flex-col pb-36'>
        <Map />
        <SearchBar />
        <Filter />
    </div>
  )
}