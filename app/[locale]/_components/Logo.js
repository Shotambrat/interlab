import Image from "next/image";
import logo from "@/public/images/header-logo-interlab.png";

function Logo() {
  return (
    <a href="/" className="flex items-center gap-4 transition-all duration-150">
      <div className="hidden mdx:flex transition-all duration-150">
        <Image
          priority
          src={logo}
          width={220}
          height={150}
          alt="The Wild Oasis logo"
          quality={100}
        />
      </div>
      <div className="flex mdx:hidden transition-all duration-150">
        <Image
          priority
          src={logo}
          width={130}
          height={70}
          alt="The Wild Oasis logo"
          quality={100}
        />
      </div>
      
    </a>
  );
}

export default Logo;
