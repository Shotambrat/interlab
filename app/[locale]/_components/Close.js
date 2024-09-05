import Image from "next/image";
import search from "@/public/svg/close.svg";

function Logo() {
  return (
    <button className="flex items-center gap-4 z-10 border-2 rounded-full p-3 bg-red-400">
      <Image
        priority
        src={search}
        width={10}
        height={10}
        alt="The Wild Oasis logo"
        quality={100}
      />
    </button>
  );
}

export default Logo;
