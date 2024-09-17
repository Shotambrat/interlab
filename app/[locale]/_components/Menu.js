import Close from "@/app/[locale]/_components/Close";
import RightIcon from "@/app/[locale]/_components/RightIcon";
import Profile from "@/app/[locale]/_components/Profile";
import phone from "@/public/svg/phone.svg";
import Image from "next/image";
import Link from "next/link";
import backet from "@/public/svg/backet.svg";

const Menu = ({ menu, closeMenu, navOptions }) => {
  return (
    <div
      className={`fixed z-10 top-0 right-0 w-3/4 bg-white h-full shadow-md transition-transform duration-300 ${
        menu ? "transform translate-x-0" : "transform translate-x-full"
      }`}
    >
      <div className="border-b py-4 flex">
        <div className="w-full flex justify-between mx-4">
          <Profile />
          <div className="flex justify-between items-center w-[120px]">
            <a className="block border p-[7px] rounded-full" href="tel:+998777777777">
              <Image
                priority
                src={phone}
                width={20}
                height={20}
                alt="Phone icon"
                quality={100}
              />
            </a>
            <Link
              href="/backet"
              className="items-center gap-4 z-10 flex rounded-full border p-[7px]"
            >
              <Image
                priority
                src={backet}
                width={20}
                height={20}
                alt="Basket icon"
                quality={100}
              />
            </Link>
            <div onClick={closeMenu}>
              <Close />
            </div>
          </div>
        </div>
      </div>
      
      <nav className="flex flex-col font-semibold">
        {navOptions.map((option) => (
          <Link key={option.id} href={option.url} onClick={closeMenu} passHref>
            <a className="py-4 border-b">
              <div className="flex justify-between mx-4">
                <p>{option.name}</p>
                <RightIcon />
              </div>
            </a>
          </Link>
        ))}
      </nav>
    </div>
  );
};

export default Menu;
