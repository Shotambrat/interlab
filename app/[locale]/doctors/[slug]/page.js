// app/[locale]/doctors/[slug]/page.js
import React from "react";
import DoctorItemHead from "@/app/[locale]/_components/doctors/DoctorItemHead";
import DoctorItemInfo from "@/app/[locale]/_components/doctors/DoctorItemInfo";
import { client } from "@/sanity/lib/client";

export default async function DoctorPage({ params }) {
  const { slug, locale } = params;

  // Fetching doctor data by slug
  const doctor = await client.fetch(`*[_type == "doctor" && slug.current == $slug][0]`, { slug });
  
  if (!doctor) {
    return <div>Доктор не найден</div>;
  }

  return (
    <div className="px-2 w-full bg-white">
      <div className="w-full max-w-[1400px] flex flex-col gap-32 mx-auto py-12 pb-32">
        <DoctorItemHead doctor={doctor} locale={locale} />
        <DoctorItemInfo doctor={doctor} locale={locale} />
      </div>
    </div>
  );
}
