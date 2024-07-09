import Close from "@/app/_components/Close";
import RightIcon from "@/app/_components/RightIcon";
import Profile from "@/app/_components/Profile";
import phone from "@/public/svg/phone.svg";
import Image from "next/image";
import Link from "next/link";
import backet from "@/public/svg/backet.svg";

const Menu = ({menu, closeMenu, navOptions}) => {

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
                alt="The Wild Oasis logo"
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
                alt="The Wild Oasis logo"
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
        <a href="/ckdl" className="py-4 border-b">
          <div className="flex justify-between mx-4">
            <p>ЦКДЛ</p>
            <RightIcon />
          </div>
        </a>
        <a href="/analyze" className="py-4 border-b">
          <div className="flex justify-between mx-4">
            <p>Анализы</p>
            <RightIcon />
          </div>
        </a>
        <a href="/services" className="py-4 border-b">
          <div className="flex justify-between mx-4">
            <p>Услуги</p>
            <RightIcon />
          </div>
        </a>
        <a href="/doctors" className="py-4 border-b">
          <div className="flex justify-between mx-4">
            <p>Врачи</p>
            <RightIcon />
          </div>
        </a>
        <a href="/addresses" className="py-4 border-b">
          <div className="flex justify-between mx-4">
            <p>Адреса</p>
            <RightIcon />
          </div>
        </a>
        <a href="/about" className="py-4">
          <div className="flex justify-between mx-4">
            <p>О нас</p>
            <RightIcon />
          </div>
        </a>
      </nav>
    </div>
  );
};

export default Menu;
