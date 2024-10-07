import React, { useState } from "react";

const DropDown = () => {
  const [selectedYear, setSelectedYear] = useState("Angkatan");
  const years = ["2021-2022", "2022-2023", "2023-2024"];

  return (
    <div className="inline-flex ml-4 border shadow rounded mb-4">
      <div className="w-[200px] relative inline-flex rounded-md bg-white shadow-md">
        <div className="w-full rounded-l-md px-4 py-2 border text-slate-600 font-sans border-gray-50">
          {selectedYear}
        </div>
        <div className="relative">
          <button
            type="button"
            className="border-l border-gray-50 inline-flex h-full items-center justify-center rounded-r-md px-2 text-gray-500 hover:bg-gray-50 hover:text-gray-700"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </button>
          <div className="absolute right-0 mt-2 w-full rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
            <div
              className="py-1"
              role="menu"
              aria-orientation="vertical"
              aria-labelledby="options-menu"
            >
              {years.map((year) => (
                <button
                  key={year}
                  onClick={() => setSelectedYear(year)}
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 w-full text-left"
                  role="menuitem"
                >
                  {year}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DropDown;
