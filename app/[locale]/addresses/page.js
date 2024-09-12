import Map from "@/app/[locale]/_components/addresses/Map"

import Filter from "@/app/[locale]/_components/addresses/Filter"

export default function page() {
  return (
    <div className='w-full bg-white flex flex-col pb-36'>
        <Map />
        <Filter />
    </div>
  )
}