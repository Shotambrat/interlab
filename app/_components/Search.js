import Image from "next/image";
import Link from "next/link";
import search from "@/public/svg/search.svg";

function Logo() {
  return (
    <Link href="/search" className="flex items-center gap-4">
      <Image
        className="w-[20px] h-[20px] mdx:w-[25px] mdx:h-[25px]"
        priority
        src={search}
        width={100}
        height={100}
        alt="The Wild Oasis logo"
        quality={100}
      />
    </Link>
  );
}

export default Logo;
