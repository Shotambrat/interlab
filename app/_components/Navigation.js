"use client"
import Link from "next/link";


export default function Navigation({navOptions}) {

  return (
    <nav className="z-10 text-xl hidden lg:flex">
      <ul className="flex gap-5 justify-between self-stretch my-auto text-lg text-neutral-900 max-md:flex-wrap max-md:max-w-full">
        {navOptions.map((option) => (
          <Link href={option.url} className="flex items-center gap-4 z-10" key={option.id}>
            <li className="cursor-pointer">{option.name}</li>
          </Link>
        ))}
      </ul>
    </nav>
  );
}

