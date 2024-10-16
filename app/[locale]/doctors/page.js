// app/[locale]/doctors.page.js
import DoctorsBanner from "@/app/[locale]/_components/doctors/DoctorsBanner";
import Filter from "@/app/[locale]/_components/doctors/Filter";
import { client } from "@/sanity/lib/client";

export default async function HomePage({ params }) {
  // Fetching doctor data from Sanity
  const doctors = await client.fetch(`*[_type == "doctor" ] {
    name,
    slug,
    photo,
    position
  }`);

  return (
    <div>
      <DoctorsBanner locale={params.locale} />
      <Filter doctors={doctors} locale={params.locale} />
    </div>
  );
}
