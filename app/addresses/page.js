import Map from "@/app/_components/addresses/Map"
import SearchBar from "@/app/_components/Search/SearchBar"
import Filter from "@/app/_components/addresses/Filter"

export default function page() {
  return (
    <div className='w-full bg-white flex flex-col pb-36'>
        <Map />
        <SearchBar />
        <Filter />
    </div>
  )
}