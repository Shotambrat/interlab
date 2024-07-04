// app/_components/Header.js
"use client";
import Navigation from "@/app/_components/Navigation";
import Logo from "@/app/_components/Logo";
import Tools from "@/app/_components/Tools";

function Header() {
  return (
    <header className="flex justify-center items-center px-2 lg:px-16 py-3 bg-white max-md:px-5 z-10 relative">
      <div className="flex gap-1 justify-between items-center w-full max-w-[1440px]">
        <Logo />
        <Navigation />
        <Tools />
      </div>
    </header>
  );
}

export default Header;