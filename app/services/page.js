"use client"

import ServiceBanner from "@/app/_components/services/ServiceBanner";
import ServiceList from "@/app/_components/services/ServiceList";

export default function HomePage() {
  return (
    <div>
        <ServiceBanner />
        <ServiceList />
    </div>
  );
}
