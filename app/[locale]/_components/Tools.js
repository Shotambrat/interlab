"use client";
import Search from "@/app/[locale]/_components/Search";
import phone from "@/public/svg/phone.svg";
import Image from "next/image";
// import Profile from "@/app/[locale]/_components/Profile";
// import backet from "@/public/svg/backet.svg";
import MenuIcon from "@/app/[locale]/_components/MenuIcon";
import Menu from "@/app/[locale]/_components/Menu";
import { useState, useEffect } from "react";
import { Link, usePathname } from "@/i18n/routing";
import ruFlag from "@/public/svg/flags/flag-for-russia-svgrepo-com.svg";
import uzFlag from "@/public/svg/flags/flag-for-uzbekistan-svgrepo-com.svg";
import SearchBar from "./Search/SearchBar";
import resultsRed from "@/public/svg/results/results-red.svg";
import resultsHover from "@/public/svg/results/results-hover.svg";
import { useTranslations } from "next-intl";
import { AnimatePresence } from "framer-motion";

export default function Tools({ navOptions, locale }) {
  const availableLocales = ["uz", "ru"];
  const [isOpen, setIsOpen] = useState(false);
  const [menu, setMenu] = useState(false);
  const [search, setSearch] = useState(false);
  const t = useTranslations();

  const pathname = usePathname();

  // Отключение скролла при открытом SearchBar или Menu
  useEffect(() => {
    if (menu || search) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [menu, search]);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOpenMenu = () => {
    setSearch(false); // Закрываем SearchBar при открытии меню
    setMenu(true);    // Открываем меню
  };

  const handleCloseMenu = () => {
    setMenu(false);   // Закрываем меню
  };

  return (
    <div className="flex gap-5 max-mdx:gap-2 justify-between self-stretch my-auto">
      {/* Анимация для появления SearchBar */}
      <AnimatePresence>
        {search && <SearchBar setSearch={setSearch} />}
      </AnimatePresence>

      <div className="flex items-center gap-4 max-mdx:gap-1 my-auto">

        <div className="max-mdx:hidden">
          <button onClick={() => setSearch(true)} className="flex items-center gap-4">
            <Search />
          </button>
        </div>
 
        <a onClick={ async() => {
            try {
              let response = await fetch("https://interlab.mrjtrade.uz/api/count?button=call", {
                method: "POST",
              });
              console.log("Response Of Count", response.json());
            } catch (error) {
              console.log("error to counter fetching", error);
            }
        }} className="block max-mdx:mr-2" href="https://t.me/interlabreception">
          <Image priority src={'/svg/telegram-svgrepo-com.svg'} width={30} height={30} alt="Phone icon" quality={100} />
        </a>

        {/* <Link className="block max-mdx:mr-2" href={`/backet`}>
          <Image priority src={backet} width={30} height={30} alt="Phone icon" quality={100} />
        </Link> */}

        <a onClick={ async() => {
            try {
              let response = await fetch("https://interlab.mrjtrade.uz/api/count?button=call", {
                method: "POST",
              });
              console.log("Response Of Count", response.json());
            } catch (error) {
              console.log("error to counter fetching", error);
            }
        }} className="block max-mdx:mr-2" href="tel:1156">
          <Image priority src={phone} width={25} height={25} alt="Phone icon" quality={100} />
        </a>
      </div>

      <div className="flex gap-2 text-base whitespace-nowrap my-1 items-center">
        <div className="flex max-mdx:hidden gap-0 justify-center px-2 mdx:px-3 py-2 mdx:py-2 border border-solid border-neutral-200 rounded-[100px] text-neutral-900">
          <div className="relative inline-block text-left">
            <div>
              <button
                type="button"
                className="inline-flex justify-center w-full rounded-md border-gray-300 bg-white text-sm font-medium text-gray-700"
                onClick={toggleDropdown}
              >
                {locale.toUpperCase()}
                <svg className="-mr-1 ml-2 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path
                    fillRule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            </div>

            {isOpen && (
              <div className="origin-top-right absolute right-0 mt-2 w-24 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                <div className="py-1 flex flex-col gap-2 ml-3 w-full">
                  {availableLocales.map((lng) => (
                    <Link
                      key={lng}
                      href={pathname}
                      locale={lng}
                      style={{ marginLeft: 10, color: locale === lng ? "red" : "black" }}
                      className="hover:font-bold transition-all duration-300 flex gap-2 items-center"
                    >
                      {lng === "uz" ? (
                        <Image src={uzFlag} height={100} width={100} quality={100} alt="Uz Flag" className="w-4 h-4" />
                      ) : (
                        <Image src={ruFlag} height={100} width={100} quality={100} alt="Ru Flag" className="w-4 h-4" />
                      )}
                      {lng.toUpperCase()}
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>


        <a className="max-mdx:hidden" href={`/${locale}/results`}>
          <button className="py-1 group  mdx:text-lg bg-[#FEE9E8] font-medium rounded-full hover:shadow-none hover:bg-white hover:text-black text-[#FB6A68] transition-all duration-300 flex items-center gap-2 border px-4 max-mdx:px-2">
            <div className="relative w-6 h-6 max-mdx:w-8 max-mdx:h-8">
              <Image
                src={resultsRed}
                layout="fill"
                objectFit="contain"
                quality={100}
                alt="Results Icon"
                className="transition-opacity duration-300 ease-in-out opacity-100 group-hover:opacity-0"
              />
              <Image
                src={resultsHover}
                layout="fill"
                objectFit="contain"
                quality={100}
                alt="Results Hover Icon"
                className="absolute top-0 left-0 transition-opacity duration-300 ease-in-out opacity-0 group-hover:opacity-100"
              />
            </div>
            {t("Header.results")}
          </button>
        </a>

        <div onClick={handleOpenMenu} className="block lg:hidden">
          <MenuIcon />
        </div>
      </div>
      
      <AnimatePresence>
        {menu && (
          <Menu
          toggleDropdown={toggleDropdown}
          isOpen={isOpen}
          availableLocales={availableLocales}
            menu={menu}
            closeMenu={handleCloseMenu}
            navOptions={navOptions}
            locale={locale}
            setSearch={setSearch}
          />
        )}
      </AnimatePresence>
    </div>
  );
}
