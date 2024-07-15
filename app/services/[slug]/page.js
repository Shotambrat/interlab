import Application from "@/app/_components/Application";
import Interest from "@/app/_components/services/Interest";
import ServiceItemBanner from "@/app/_components/services/ServiceItemBanner";
import ServiceItemInfo from "@/app/_components/services/ServiceItemInfo";

export default function Page({ params }) {
  return (
    <div className="w-full bg-white flex flex-col gap-24 pb-24">
      <ServiceItemBanner />
      <ServiceItemInfo />
      <Interest />
      <div className="w-full max-w-[1440px] mx-auto">
        <Application />
      </div>
    </div>
  );
}

// export async function generateStaticParams() {
//     const posts = await fetch('http://213.230.91.55:8100/service/slug').then((res) => res.json())

//     return posts.map((post) => ({
//       slug: post.slug,
//     }))
//   }
