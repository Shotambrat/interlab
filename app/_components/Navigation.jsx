"use client"
import Link from "next/link";

export default function Navigation() {
  return (
    <nav className="z-10 text-xl hidden lg:flex">
      <ul className="flex gap-5 justify-between self-stretch my-auto text-lg text-neutral-900 max-md:flex-wrap max-md:max-w-full">
        <Link href="/ckdl" className="flex items-center gap-4 z-10">
          <li className="cursor-pointer">ЦКДЛ</li>
        </Link>
        <Link href="/analyzes" className="flex items-center gap-4 z-10">
          <li className="cursor-pointer">Анализы</li>
        </Link>
        <Link href="/services" className="flex items-center gap-4 z-10">
          <li className="cursor-pointer">Услуги</li>
        </Link>
        <Link href="/doctors" className="flex items-center gap-4 z-10">
          <li className="cursor-pointer">Врачи</li>
        </Link>
        <Link href="/addresses" className="flex items-center gap-4 z-10">
          <li className="cursor-pointer">Адреса</li>
        </Link>
        <Link href="/about" className="flex items-center gap-4 z-10">
          <li className="cursor-pointer">О нас</li>
        </Link>
      </ul>
    </nav>
  );
}

