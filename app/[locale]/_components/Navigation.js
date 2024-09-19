"use client";
import Link from "next/link";

export default function Navigation({ locale, navOptions }) {
  return (
    <nav className="z-10 text-xl hidden lg:flex flex-grow justify-center transition-all duration-150">
      <ul className="flex gap-1 justify-between self-stretch my-auto text-lg text-neutral-900 max-md:flex-wrap w-full max-w-[630px] transition-all duration-150">
        {navOptions.map((option) => (
          <Link href={`/${locale}${option.url}`} className="flex items-center gap-1 z-10 transition-all duration-300 hover:text-red-400 rounded-xl p-1 w-full text-center max-w-full justify-center" key={option.id}>
            <li className="cursor-pointer">{option.name}</li>
          </Link>
        ))}
      </ul>
    </nav>
  );
}
