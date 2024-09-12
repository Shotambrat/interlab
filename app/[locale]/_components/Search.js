import Image from "next/image";
import search from "@/public/svg/search.svg";

function Logo({setSearch}) {
  return (
    <button onClick={( )=> setSearch(true)} className="flex items-center gap-4">
      <Image
        className="w-[20px] h-[20px] mdx:w-[25px] mdx:h-[25px]"
        priority
        src={search}
        width={100}
        height={100}
        alt="The Wild Oasis logo"
        quality={100}
      />
    </button>
  );
}

export default Logo;
