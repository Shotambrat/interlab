"use client";

import { useState } from "react";

export default function SearchBar() {
  const [query, setQuery] = useState("");

  const handleInputChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    // Add search functionality here
    console.log(`Searching for: ${query}`);
  };

  return (
    <div className="bg-white w-full px-4 lg:px-0">
      <div className="max-w-[1440px] w-full mx-auto flex flex-col mdl:flex-row overflow-hidden mdl:py-10 mdl:px-5 max-mdl:py-10">
        <div className="relative rounded-lg w-full max-w-[1440px] shadow-xl">
          <input
            type="text"
            value={query}
            onChange={handleInputChange}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-red-300 focus:border-red-500"
            placeholder="Введите название анализа"
          />
          <button
            onClick={handleSearch}
            className="absolute top-0 right-0 rounded-lg bg-red-500 hover:bg-red-600 text-white p-1.5 mt-1 mr-1"
          >
            <svg
              width="21"
              height="21"
              viewBox="0 0 21 21"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9.45833 17.7917C14.0607 17.7917 17.7917 14.0607 17.7917 9.45833C17.7917 4.85596 14.0607 1.125 9.45833 1.125C4.85596 1.125 1.125 4.85596 1.125 9.45833C1.125 14.0607 4.85596 17.7917 9.45833 17.7917Z"
                stroke="white"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M19.8737 19.875L15.3945 15.3959"
                stroke="white"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
