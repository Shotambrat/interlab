"use client"

import ServiceBanner from "@/app/[locale]/_components/services/ServiceBanner";
import ServiceList from "@/app/[locale]/_components/services/ServiceList";

export default function HomePage() {
  return (
    <div>
        <ServiceBanner />
        <ServiceList />
    </div>
  );
}
