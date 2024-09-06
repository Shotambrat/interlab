import Banner from "@/app/[locale]/_components/licenses/Banner";
import List from "@/app/[locale]/_components/licenses/List";


export default function page() {
  return (
    <div className="w-full bg-white flex flex-col gap-24">
        <Banner />
        <List />
    </div>
  );
}