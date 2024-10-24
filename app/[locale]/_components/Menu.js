import { motion, AnimatePresence } from "framer-motion";
import Close from "@/app/[locale]/_components/Close";
import RightIcon from "@/app/[locale]/_components/RightIcon";
import phone from "@/public/svg/phone.svg";
import Image from "next/image";
import { useTranslations } from "next-intl";
import Search from "@/app/[locale]/_components/Search";
import ruFlag from "@/public/svg/flags/flag-for-russia-svgrepo-com.svg";
import uzFlag from "@/public/svg/flags/flag-for-uzbekistan-svgrepo-com.svg";
import { Link, usePathname } from "@/i18n/routing";
import resultsRed from "@/public/svg/results/results-red.svg";
import resultsHover from "@/public/svg/results/results-hover.svg";
import FocusLock from "react-focus-lock";
import { createPortal } from "react-dom";

const Menu = ({
  menu,
  closeMenu,
  navOptions,
  toggleDropdown,
  isOpen,
  availableLocales,
  locale,
  setSearch,
}) => {
  const t = useTranslations();

  const backgroundVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
    exit: { opacity: 0 },
  };

  const menuVariants = {
    hidden: { x: "100%" },
    visible: { x: 0 },
    exit: { x: "100%" },
  };

  const handleOpenSearch = () => {
    closeMenu(); // Закрываем меню
    setSearch(true); // Сразу открываем поиск
  };

  const pathname = usePathname();

  return createPortal(
    <AnimatePresence>
      {menu && (
        <FocusLock>
          <motion.div
            className="fixed h-full flex justify-end z-[9999] w-full bg-modalBg inset-0"
            variants={backgroundVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            transition={{ duration: 0.3 }}
            onClick={closeMenu}
          >
            <motion.div
              className="z-10 top-0 right-0 w-5/6 bg-white h-full shadow-md"
              variants={menuVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              transition={{ type: "tween", duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="border-b py-4 flex">
                <div className="w-full flex justify-between mx-4">
                  <div className="flex justify-end gap-2 items-center w-full">
                    {/* Language Switcher */}
                    <div className="flex gap-0 justify-center px-2 mdx:px-3 py-2 mdx:py-2 border border-solid border-neutral-200 rounded-[100px] text-neutral-900">
                      <div className="relative inline-block text-left">
                        <div>
                          <button
                            type="button"
                            className="inline-flex justify-center w-full rounded-md border-gray-300 bg-white text-sm font-medium text-gray-700"
                            onClick={toggleDropdown}
                          >
                            {locale.toUpperCase()}
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
                          <div className="origin-top-right absolute right-0 mt-2 w-24 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                            <div className="py-1 flex flex-col gap-2 ml-3 w-full">
                              {availableLocales.map((lng) => (
                                <Link
                                  key={lng}
                                  href={pathname}
                                  locale={lng}
                                  style={{
                                    marginLeft: 10,
                                    color: locale === lng ? "red" : "black",
                                  }}
                                  className="hover:font-bold transition-all duration-300 flex gap-2 items-center"
                                >
                                  {lng === "uz" ? (
                                    <Image
                                      src={uzFlag}
                                      height={100}
                                      width={100}
                                      quality={100}
                                      alt="Uz Flag"
                                      className="w-4 h-4"
                                    />
                                  ) : (
                                    <Image
                                      src={ruFlag}
                                      height={100}
                                      width={100}
                                      quality={100}
                                      alt="Ru Flag"
                                      className="w-4 h-4"
                                    />
                                  )}
                                  {lng.toUpperCase()}
                                </Link>
                              ))}
                            </div>
                          </div>
                        )}
                      </div>
                    </div>

                    <button
                      onClick={handleOpenSearch}
                      className="flex items-center gap-4 border p-[7px] rounded-full"
                    >
                      <Search />
                    </button>
                    {/* <a
                  onClick={async () => {
                    try {
                      let response = await fetch("https://interlab.mrjtrade.uz/api/count?button=call", {
                        method: "POST",
                      });
                      console.log("Response Of Count", response.json());
                    } catch (error) {
                      console.log("error to counter fetching", error);
                    }
                  }}
                    className="block border p-[7px] rounded-full"
                    href="tel:1156"
                  >
                    <Image
                      priority
                      src={phone}
                      width={20}
                      height={20}
                      alt="Phone icon"
                      quality={100}
                    />
                  </a> */}
                    <div onClick={closeMenu}>
                      <Close />
                    </div>
                  </div>
                </div>
              </div>

              <nav className="flex flex-col font-semibold">
                <a
                  href={navOptions[0].url}
                  onClick={closeMenu}
                  passHref
                >
                  <div className="py-6 border-b">
                    <div className="flex justify-between mx-4">
                      {navOptions[0].name}
                      <RightIcon />
                    </div>
                  </div>
                </a>
                {navOptions.slice(1).map((option) => (
                  <a
                    key={option.id}
                    href={`/${locale}${option.url}`}
                    onClick={closeMenu}
                    passHref
                  >
                    <div className="py-6 border-b">
                      <div className="flex justify-between mx-4">
                        {option.name}
                        <RightIcon />
                      </div>
                    </div>
                  </a>
                ))}
                <div className="py-4 w-full flex justify-center">
                  <a href={`/${locale}/results`}>
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
                </div>
              </nav>
            </motion.div>
          </motion.div>
        </FocusLock>
      )}
    </AnimatePresence>,
    document.body
  );
};

export default Menu;
