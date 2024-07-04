"use client"

import { useState } from 'react';

export default function SearchBar() {
    const [query, setQuery] = useState('');

  const handleInputChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    // Add search functionality here
    console.log(`Searching for: ${query}`);
  };


  return (
    <div className="bg-white w-full px-4 lg:px-0 border border-red-500">
      <div className="max-w-[1440px] w-full mx-auto flex flex-col mdl:flex-row overflow-hidden mdl:py-10 mdl:px-5 max-mdl:py-10 border border-green-500">
      <form onSubmit={handleSearch} className="relative rounded-lg w-full max-w-[1440px] shadow-xl">
        <input
          type="text"
          value={query}
          onChange={handleInputChange}
          className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
          placeholder="Введите название анализа"
        />
        <button
          type="submit"
          className="absolute top-0 right-0 mt-2 mr-2 bg-red-500 hover:bg-red-600 text-white p-2 rounded-full"
        >
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M21 21l-4.35-4.35M4 10a6 6 0 1112 0 6 6 0 01-12 0z"
            />
          </svg>
        </button>
      </form>
      </div>
    </div>
  );
}
