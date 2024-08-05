"use client";
import Search from "@/app/_components/Search";
import arrowdown from "@/public/svg/arrow-down.svg";
import phone from "@/public/svg/phone.svg";
import Image from "next/image";
import Profile from "@/app/_components/Profile";
import Link from "next/link";
import backet from "@/public/svg/backet.svg";
import MenuIcon from "@/app/_components/MenuIcon";
import Menu from "@/app/_components/Menu";
import { useState } from "react";

export default function Tools({ navOptions }) {
  const [isOpen, setIsOpen] = useState(false);
  const [defaultLang, setDefaultLang] = useState("RU");
  const [menu, setMenu] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const selectLanguage = (Language) => {
    setDefaultLang(Language);
    setIsOpen(false);
  };

  const handleOpenMenu = () => {
    setMenu(true);
  };

  const handleCloseMenu = () => {
    setMenu(false);
  };

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
        <Link href="/backet" className="items-center gap-4 z-10 hidden md:flex">
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
        <div className="flex gap-0 justify-center px-2 mdx:px-3 py-2 mdx:py-2 border border-solid border-neutral-200 rounded-[100px] text-neutral-900">
          <div className="relative inline-block text-left">
            <div>
              <button
                type="button"
                className="inline-flex justify-center w-full rounded-md border-gray-300 bg-white text-sm font-medium text-gray-700"
                onClick={toggleDropdown}
              >
                {defaultLang}
                <svg
                  className="-mr-1 ml-2 h-5 w-5"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            </div>

            {isOpen && (
              <div
                className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
                role="menu"
                aria-orientation="vertical"
                aria-labelledby="menu-button"
                tabIndex="-1"
              >
                <div className="py-1" role="none">
                  <a
                    href="#"
                    className="text-gray-700 block px-4 py-2 text-sm"
                    role="menuitem"
                    tabIndex="-1"
                    id="menu-item-0"
                    onClick={() => selectLanguage("RU")}
                  >
                    RU
                  </a>
                  <a
                    href="#"
                    className="text-gray-700 block px-4 py-2 text-sm"
                    role="menuitem"
                    tabIndex="-1"
                    id="menu-item-2"
                    onClick={() => selectLanguage("UZ")}
                  >
                    UZ
                  </a>
                </div>
              </div>
            )}
          </div>
        </div>
        <Link href={'/auth'} className="hidden mdx:flex ">
          <Profile />
        </Link>
        <div onClick={handleOpenMenu} className="block lg:hidden">
          <MenuIcon />
        </div>
      </div>
      {menu ? (
        <Menu menu={menu} closeMenu={handleCloseMenu} navOptions={navOptions} />
      ) : (
        <></>
      )}
    </div>
  );
}
