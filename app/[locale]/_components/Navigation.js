"use client";
import Link from "next/link";

export default function Navigation({ locale, navOptions }) {
  return (
    <nav className="z-10 text-xl hidden lg:flex flex-grow justify-center items-center h-full">
      <ul className="flex items-center text-lg pt-4 text-neutral-900 space-x-2 h-full">
        <li className="list-none h-full flex items-center">
          <Link href={navOptions[0].url}>
            <div className="px-4 py-2 transition-all duration-300 text-xl hover:text-red-400 rounded-xl">
              {navOptions[0].name}
            </div>
          </Link>
        </li>
        {navOptions.slice(1).map((option) => (
          <li key={option.id} className="list-none h-full flex items-center">
            <Link href={`/${locale}${option.url}`}>
              <div className="px-4 py-2 transition-all duration-300 text-xl hover:text-red-400 rounded-xl">
                {option.name}
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
