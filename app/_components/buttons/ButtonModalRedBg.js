
export default function ButtonRedBg({title}) {
  return (
    <button className="px-12 py-3 text-white font-semibold rounded-full bg-red-400 transition-all duration-200 hover:bg-red-600">
      <p>{title}</p>
    </button>
  );
}
