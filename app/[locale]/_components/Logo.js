import Image from "next/image";
import Link from "next/link";
import logo from "@/public/images/header-logo-interlab.png";

function Logo() {
  return (
    <Link href="/" className="flex items-center gap-4">
      <div className="hidden mdx:flex">
        <Image
          priority
          src={logo}
          width={150}
          height={100}
          alt="The Wild Oasis logo"
          quality={100}
        />
      </div>
      <div className="flex mdx:hidden">
        <Image
          priority
          src={logo}
          width={100}
          height={70}
          alt="The Wild Oasis logo"
          quality={100}
        />
      </div>
      
    </Link>
  );
}

export default Logo;
