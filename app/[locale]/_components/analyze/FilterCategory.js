"use client";

export default function FilterCategory({ title, catname, handleFilter, active }) {
  return (
    <div onClick={() => handleFilter(catname)} className={`rounded-lg cursor-pointer text-left ${active === catname ? 'text-white font-semibold' : 'text-black'} py-4 px-4 w-full ${active === catname ? 'bg-red-400' : 'bg-white'} shadow-3xl `}>
      {title}
    </div>
  );
}
