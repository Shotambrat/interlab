import Banner from "@/app/[locale]/_components/legal/Banner";
import Info from "@/app/[locale]/_components/legal/Info";
import Benefits from "@/app/[locale]/_components/legal/Benefits";
import Contacts from "@/app/[locale]/_components/legal/Contacts";
import Application from "@/app/[locale]/_components/Application";

export default function HomePage() {
  return (
    <div className="w-full bg-white flex flex-col gap-32 pb-32">
      <Banner />
      <Info />
      <Benefits />
      <Contacts />
      <div className="w-full max-w-[1440px] mx-auto px-2">
        <Application />
      </div>
    </div>
  );
}
