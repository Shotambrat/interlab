import Banner from "@/app/_components/results/Banner";
import Request from "@/app/_components/results/Request";
import Instructions from "@/app/_components/results/Instructions";
import Blog from "@/app/_components/Blog";
import arrowRight from "@/public/svg/arrow-right.svg";
import Image from "next/image";

export default function HomePage() {
  return (
    <div className="">
        <Banner />
        <Request />
        <Instructions />
        <div className="w-full bg-white">
            <div className="w-full max-w-[1440px] mx-auto py-12 flex flex-col gap-5">
                <h2 className="text-4xl font-semibold">
                    Блог
                </h2>
                <Blog />
                <a href="/blogs" className="w-full flex justify-center">
                    <button className="flex gap-5 px-8 py-2 rounded-full font-semibold text-sm items-center border text-red-400 border-red-400">
                        <p>
                            Все новости
                        </p>
                    <Image
                     src={arrowRight}
                     width={100}
                     height={100}
                     alt="Arrow right Red"
                     className="h-6 w-6"
                    />
                    </button>
                </a>
            </div>
        </div>
    </div>
  );
}
