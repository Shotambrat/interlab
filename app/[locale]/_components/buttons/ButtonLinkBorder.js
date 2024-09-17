import Image from "next/image";
import rightArrow from "@/public/svg/arrow-right.svg";

export default function ButtonLinkBorder({ title }) {
  return (
    <button className="px-8 py-3 text-red-400 font-semibold rounded-full border border-red-400 transition-all duration-200 hover:gap-5 flex gap-3 items-center justify-center hover:px-7">
      {title}
      <Image
        src={rightArrow}
        width={100}
        height={100}
        alt="Arrow Icon Right"
        className="w-6 h-6 border"
      />
    </button>
  );
}
