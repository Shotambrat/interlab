export default function ServiceNav({ title, active, category, handleFilter }) {
  return (
    <button
      onClick={() => handleFilter(category)}
      className={`z-10 w-auto text-lg transition-text text-neutral-600 font-medium ${active === category ? 'text-red-500 border-b-2 border-b-red-500' : ''}`}
    >
      <h3 className="my-2 whitespace-nowrap">{title}</h3>
    </button>
  );
}
