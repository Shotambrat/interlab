import Banner from "../_components/vacancies/Banner";
import Other from "../_components/vacancies/Other";
import WhyIntermed from "../_components/vacancies/WhyIntermed";
import Link from "next/link";
import Blog from "../_components/Blog";


export default function page({params}) {
  return (
    <div className="w-full flex flex-col gap-48 bg-white pb-48">
        <Banner />
        <WhyIntermed />
        <Other />
        <div className="w-full max-w-[1440px] px-2 mx-auto flex flex-col gap-8">
        <h2 className="text-4xl font-semibold">Блоги</h2>
        <Blog />
        <div className="w-full flex justify-center">
          <Link href={`/${params.locale}/blogs`} className="flex gap-2 justify-center self-center px-10 py-3.5 mt-9 text-base font-bold text-center text-red-400 border border-red-400 border-solid rounded-[100px] max-md:px-5">
            <span className="my-auto">Все Новости</span>
          </Link>
        </div>
      </div>
    </div>
  )
}
