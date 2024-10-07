import React from "react";

const InputPassword = () => {
    return (
      <div className="mb-4">
        <label htmlFor="password" className="block ml-4 mr-4">
          <span className="block font-semibold mb-1 text-slate-700 after:content-['*'] after:text-red-600 after:ml-0.5">
            Password
          </span>
          <input
            type="password"
            id="password"
            placeholder="Masukkan Password"
            className="px-3 py-2 border shadow rounded w-full block text-sm placeholder:text-slate-400 focus:outline-none focus:ring-1 focus:ring-sky-500 focus:border-sky-500 invalid:text-red-500 invalid:focus:ring-red-500 invalid:focus:border-red-500 peer"
          />
        </label>
      </div>
    );
};

export default InputPassword;