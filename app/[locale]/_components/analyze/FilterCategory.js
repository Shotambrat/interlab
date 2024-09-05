"use client"

export default function FilterCategory({ title, catname, handleFilter, active }) {
  return (
    <button onClick={() => handleFilter(catname)} className={`rounded-lg py-3 px-4 w-full ${active === catname ? 'bg-red-400' : 'bg-white'} shadow-3xl `}>
      <h2 className={`text-left ${active === catname ? 'text-white font-semibold' : 'text-black'}`}>{title}</h2>
    </button>
  );
};