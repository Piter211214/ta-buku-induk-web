import React, { useRef, useEffect } from "react";
import { CiSearch } from "react-icons/ci";

const SearchBar = () => {
  const inputRef = useRef(null);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.ctrlKey && event.key === "k") {
        event.preventDefault();
        inputRef.current.focus();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <div className="relative w-[450px] h-[45px] gap-[15px] mt-5">
      <CiSearch className="absolute top-1/2 left-7 transform -translate-y-1/2 text-gray-400 w-[25px] h-[25px]" />
      <input
        ref={inputRef}
        placeholder="Cari disini"
        className="w-full h-full pl-14 pr-[20px] rounded-[12px] p-[10px] border border-[#939393] placeholder:font-PTSans font-bold size-4 leading-[20.7px] ml-1 hover:border-2 hover:border-[#5775BA]"
        type="search"
      />
    </div>
  );
};

export default SearchBar;
