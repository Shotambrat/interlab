import { motion, AnimatePresence } from "framer-motion";
import Close from "@/app/[locale]/_components/Close";
import RightIcon from "@/app/[locale]/_components/RightIcon";
import phone from "@/public/svg/phone.svg";
import Image from "next/image";
import Link from "next/link";
import { useTranslations } from "next-intl";
import Search from "@/app/[locale]/_components/Search";

const Menu = ({ menu, closeMenu, navOptions, locale, setSearch }) => {
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

  return (
    <AnimatePresence>
      {menu && (
        <motion.div
          className="fixed h-full flex justify-end z-10 w-full bg-modalBg inset-0"
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
                  <button onClick={handleOpenSearch} className="flex items-center gap-4">
                    <Search />
                  </button>
                  <a className="block border p-[7px] rounded-full" href="tel:+998777777777">
                    <Image priority src={phone} width={20} height={20} alt="Phone icon" quality={100} />
                  </a>
                  <div onClick={closeMenu}>
                    <Close />
                  </div>
                </div>
              </div>
            </div>

            <nav className="flex flex-col font-semibold">
              {navOptions.map((option) => (
                <Link key={option.id} href={`/${locale}${option.url}`} onClick={closeMenu} passHref>
                  <div className="py-6 border-b">
                    <div className="flex justify-between mx-4">
                      {option.name}
                      <RightIcon />
                    </div>
                  </div>
                </Link>
              ))}
            </nav>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Menu;
