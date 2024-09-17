
export default function ButtonRedBg({title}) {
    return (
      <button className="px-8 py-3 text-red-400 font-semibold rounded-full border border-red-400 transition-all duration-200 hover:border-red-600 hover:text-red-600">
        {title}
      </button>
    );
  }
  