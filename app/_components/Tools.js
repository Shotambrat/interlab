import Search from "@/app/_components/Search";
import arrowdown from "@/public/svg/arrow-down.svg";
import phone from "@/public/svg/phone.svg";
import Image from "next/image";
import Profile from "@/app/_components/Profile";
import Link from "next/link";
import backet from "@/public/svg/backet.svg";
import MenuIcon from "@/app/_components/MenuIcon";
import Menu from '@/app/_components/Menu'
import {useState} from 'react';

export default function Tools( {navOptions} ) {
  const [menu, setMenu] = useState(false);

  const handleOpenMenu = () => {
    setMenu(true);
  }

  const handleCloseMenu = () => {
    setMenu(false);
  }

  return (
    <div className="flex gap-5 justify-between self-stretch my-auto">
      <div className="flex gap-4 my-auto">
        <Search />
        <a className="hidden md:block" href="tel:+998777777777">
          <Image
            priority
            src={phone}
            width={25}
            height={25}
            alt="The Wild Oasis logo"
            quality={100}
          />
        </a>
        <Link
          href="/backet"
          className="items-center gap-4 z-10 hidden md:flex"
        >
          <Image
            priority
            src={backet}
            width={25}
            height={25}
            alt="The Wild Oasis logo"
            quality={100}
          />
        </Link>
      </div>
      <div className="flex gap-2 text-base whitespace-nowrap my-1">
        <button className="flex gap-0 justify-center px-2 mdx:px-3 py-2 mdx:py-2 border border-solid border-neutral-200 rounded-[100px] text-neutral-900">
          <div className="my-auto">RU</div>
          <Image
            className="w-[25px] h-[25px]"
            priority
            src={arrowdown}
            width={100}
            height={100}
            alt="The Wild Oasis logo"
            quality={100}
          />
        </button>
        <div className="hidden mdx:flex">
        <Profile />
        </div>
        <div onClick={handleOpenMenu} className="block lg:hidden">
          <MenuIcon />
        </div>
      </div>
      {menu ? <Menu menu={menu} closeMenu={handleCloseMenu} navOptions={navOptions} /> : <></>}
    </div>
  );
}
